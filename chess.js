function InitializeGame() {
	
	var rows = new Array(),
	Cell = function(team_color, name, text) {
		
		this.css_class = [ team_color, name ];
		this.text = text;
	}, 
	RowCells = function(row_no) {
		
		var cells = new Array();
		
		if(row_no == 3 || row_no == 4 || row_no == 5 || row_no == 6) {
			
			return EmptyCells();
		} else if(row_no == 2 || row_no == 7) {
			
			return PawnCells(row_no);
		} else {
			
			return MainCells(row_no);
		}
	},
	MainCells = function(row_no) {
		//if row_no == 1, white  else black
		if(row_no == 1) {
			color = 'white';
			return ['', new Cell(color, 'rook', '&#9814;'), new Cell(color, 'knight', '&#9816;'), new Cell(color, 'bishop', '&#9815;'), 
					new Cell(color, 'king', '&#9812;'), new Cell(color, 'queen', '&#9813;'), 
					new Cell(color, 'bishop', '&#9815;'), new Cell(color, 'knight', '&#9816;'), new Cell(color, 'rook', '&#9814;') ];
		} else {
			color = 'black';
			return ['', new Cell(color, 'rook', '&#9820;'), new Cell(color, 'knight', '&#9822;'), new Cell(color, 'bishop', '&#9821;'), 
					new Cell(color, 'queen', '&#9819;'), new Cell(color, 'king', '&#9818;'), 
					new Cell(color, 'bishop', '&#9821;'), new Cell(color, 'knight', '&#9822;'), new Cell(color, 'rook', '&#9820;') ];
		}
		
	}
	EmptyCells = function() {
		return ['', new Cell('', '', ''), new Cell('', '', ''), new Cell('', '', ''), new Cell('', '', ''), 
				new Cell('', '', ''), new Cell('', '', ''), new Cell('', '', ''), new Cell('', '', '') ];
	},
	PawnCells = function(row_no) {
		
		//if row_no == 2, white Pawn else black pawn
		if(row_no == 2) {
			color = 'white';
			text = '&#9817;';
		} else {
			color = 'black';
			text = '&#9823;';
		}

		name = 'pawn';
		return ['', new Cell(color, name, text),new Cell(color, name, text),new Cell(color, name, text),new Cell(color, name, text),
				new Cell(color, name, text),new Cell(color, name, text),new Cell(color, name, text),new Cell(color, name, text)];
	}
	InitializeBoard = function() {
		
		//white chess piece row
		rows[1] = new Array();
		rows[1] = RowCells(1);
		
		//white pawn row
		rows[2] = new Array();
		rows[2] = RowCells(2);
		
		//empty rows
		rows[3] = new Array();
		rows[3] = RowCells(3);
		rows[4] = new Array();
		rows[4] = RowCells(4);
		rows[5] = new Array();
		rows[5] = RowCells(5);
		rows[6] = new Array();
		rows[6] = RowCells(6);

		//black pawn row
		rows[7] = new Array();
		rows[7] = RowCells(7);
		
		//white chess piece row
		rows[8] = new Array();
		rows[8] = RowCells(8);
		
	},
	DrawBoard = function() {
		
		InitializeBoard();
		var table = document.createElement('table');
		table.cellSpacing = 0;
		table.className = 'table';

		for(i = 1; i< 9; i++) {
			
			var row = document.createElement('tr');
			for(j = 1; j< 9; j++) {
			
				var column = document.createElement('td');
				column.innerHTML = rows[i][j].text;
				if((i + j) % 2 == 0) {
					column.className = 'cell';
				} else {
					column.className = 'cell alternate-bg';
				}
				SetRowColumnNumber(column, i, j);
				row.appendChild(column);
			}
			table.appendChild(row);
		}
		document.body.appendChild(table);
	},
	SetRowColumnNumber = function (td, row, column) {
		td.onclick = function() {
			alert('clicked on row ' + row + ' column ' + column );
		}
	};
	DrawBoard();	
}

function StartGame() {
	var game = new InitializeGame();
}
