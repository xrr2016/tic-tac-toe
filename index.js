const React = window.React
const ReactDOM = window.ReactDOM

// class Hello extends React.Component {
//   render () {
//     return (
//       <h1>Hello World!</h1>
//     )
//   }
// }
// 生成随机id值
// function randomID () {
//   let str = ''
//   for (; str.length < 10; str += Math.random().toString(36).substr(2)) {}
//   return str.substr(0, 10)
// }
// 计算赢者
function calculateWinner (squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
// 方格组件
function Square (props) {
  return (
    <button className='square' onClick={() => props.onClick()}>
      {props.value}
    </button>
  )
}
// 棋盘组件
class Board extends React.Component {
  constructor () {
    super()
    this.state = {
      squares: Array(9).fill(''),
      xIsNext: true
    }
  }
  handleClick (i) {
    const squares = this.state.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    })
  }
  render () {
    const winner = calculateWinner(this.state.squares)
    let status
    if (winner) {
      status = `Winner is ${winner}`
    } else {
      status = `下一步是: ${this.state.xIsNext ? 'X' : 'O'}`
    }
    return (
      <div>
        <Status status={status} />
        <div className='game-board'>
          {this.state.squares.map((val, index) => {
            return <Square key={index} value={val} onClick={this.handleClick.bind(this, index)} />
          })}
        </div>
      </div>
    )
  }
}
// 信息提示组件
function Status (props) {
  return (<div className='game-status'>{props.status}</div>)
}

ReactDOM.render(
  <Board />,
  document.getElementById('root')
)
