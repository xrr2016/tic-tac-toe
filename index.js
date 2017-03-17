const React = window.React
const ReactDOM = window.ReactDOM

// class Hello extends React.Component {
//   render () {
//     return (
//       <h1>Hello World!</h1>
//     )
//   }
// }

class Square extends React.Component {
  render () {
    return (<button className='square'>{}</button>)
  }
}

class Board extends React.Component {
  renderSquare () {
    return (<Square />)
  }
  render () {
    const status = '下一步: X'
    return (
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
        </div>
      </div>)
  }
}

class Game extends React.Component {
  render () {
    return (
      <div className='game'>
        <div className='game-board'>
          <Board />
        </div>
        <div className='game-info'>
          {/* <div>{staus}<div/> */}
          {/* <div>{staus}<div/> */}
        </div>
      </div>
    )
  }
}

class Errors extends React.Component {
  render () {
    return (
      <div className='game-errors'>{}</div>
    )
  }
}

class App extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    return (
      <div>
        <Errors />
        <Game />
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
