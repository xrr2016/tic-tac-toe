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
function Board (props) {
  function renderSquare (i) {
    const squares = props.squares
    return <Square value={squares[i]} onClick={() => props.onClick(i)} />
  }
  return (
    <div className='game-board'>
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>
  )
}
// 信息提示组件
function Status (props) {
  return (<div>{props.status}</div>)
}
// 游戏
class Game extends React.Component {
  constructor () {
    super()
    this.state = {
      history: [{squares: Array(9).fill('')}],
      xIsNext: true
    }
  }
  handleClick (i) {
    const history = this.state.history
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext
    })
  }
  render () {
    const history = this.state.history
    const current = history[history.length - 1]
    const winner = calculateWinner(current.squares)
    let status
    if (winner) {
      status = `赢的是 ${winner}`
    } else {
      status = `下一步是: ${this.state.xIsNext ? 'X' : 'O'}`
    }
    return (
      <div className='game'>
        <div className='game-board'>
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className='game-info'>
          <Status status={status} />
          <ol>{''}</ol>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)
