const React = window.React
const ReactDOM = window.ReactDOM

// class Hello extends React.Component {
//   render () {
//     return (
//       <h1>Hello World!</h1>
//     )
//   }
// }

function randomID () {
  let str = ''
  for (; str.length < 10; str += Math.random().toString(36).substr(2)) {}
  return str.substr(0, 10)
}

class Square extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: null
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    e.preventDefault()
    this.setState({value: 'X'})
  }
  render () {
    return (<button className='square' onClick={this.handleClick} >{this.state.value}</button>)
  }
}

class Board extends React.Component {
  render () {
    // const status = '下一步: X'
    const squares = []
    for (let i = 0; i < 9; i++) {
      squares.push(<Square key={randomID()} />)
    }
    return (<div className='game-board'>{[...squares]}</div>)
  }
}

class Game extends React.Component {
  render () {
    return (
      <div className='game'>
        <Board />
        <div className='game-info'>
          {/* <div>{staus}<div/> */}
          {/* <div>{staus}<div/> */}
        </div>
      </div>
    )
  }
}

class Errors extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      msg: 'Something Wrong!'
    }
  }
  render () {
    return (
      <div className='game-errors'>{this.state.msg}</div>
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
        <Game />
        <Errors />
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
