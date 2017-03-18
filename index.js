const React = window.React
const ReactDOM = window.ReactDOM

// class Hello extends React.Component {
//   render () {
//     return (
//       <h1>Hello World!</h1>
//     )
//   }
// }
//  生成随机id值
function randomID () {
  let str = ''
  for (; str.length < 10; str += Math.random().toString(36).substr(2)) {}
  return str.substr(0, 10)
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
      squares: ['O', null, 'X', 'X', 'X', 'O', 'O', null, null],
      xIsNext: true
    }
  }
  handleClick (i) {
    const squares = this.state.squares.slice()
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    })
  }
  render () {
    const status = `下一步是: ${this.state.xIsNext ? 'X' : 'O'}`
    return (
      <div>
        <Status status={status} />
        <div className='game-board'>
          {this.state.squares.map(val => {
            return <Square key={randomID()} value={val} onClick={this.handleClick.bind(this)} />
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
