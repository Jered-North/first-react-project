import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Square(props) {
  return (
    <button className={props.myClass} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(100).fill(null),
			isChanged: true,
			isWhite: true,
		};
	}

	handleClick(i) {
		const squares = this.state.squares.slice();
		if (squares[i]) {
			return;
		}
		squares[i] = i;
		this.state.id = i;
		this.setState({
			squares: squares,
		});
	}

	changeBoardColor() {
		this.setState({
			isWhite: !this.state.isWhite,
			isChanged: !this.state.isChanged,
		})
	}

	resetBoard() {
		this.setState ({
			squares: Array(100).fill(null),
		})
	}

  	// renderSquare(i) {
  	//   return <Square value={i} />;
  	// }
	
  	renderRow(start) {
    let rowArr = [];

    for (let i = start; i < start + 10; i++) {
      rowArr.push(
      	<Square 
      		myClass={this.state.isWhite ? "square" : "blueSquare"}
      		value={this.state.squares[i]}
      		onClick={() => this.handleClick(i)} 
      	/>)
      
      
    }
    return rowArr;
  }

  render() {
    return (
      <div>
    	<button className="change-button" 
    			onClick={() => this.changeBoardColor()}>
    	{this.state.isChanged ? "Change" : "Revert"} Board Color
    	</button>
    	<button className="reset-button" 
    			onClick={() => this.resetBoard()}>
    	Reset Board
    	</button>
        <div className="board-row">
          {this.renderRow(0)}
        </div>
        <div className="board-row">
          {this.renderRow(10)}
        </div>
        <div className="board-row">
          {this.renderRow(20)}
        </div>
        <div className="board-row">
          {this.renderRow(30)}
        </div>
        <div className="board-row">
          {this.renderRow(40)}
        </div>
        <div className="board-row">
          {this.renderRow(50)}
        </div>
        <div className="board-row">
          {this.renderRow(60)}
        </div>
        <div className="board-row">
          {this.renderRow(70)}
        </div>
        <div className="board-row">
          {this.renderRow(80)}
        </div>
        <div className="board-row">
          {this.renderRow(90)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
