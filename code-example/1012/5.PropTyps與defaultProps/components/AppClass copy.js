// 導入react函式庫
import React from 'react'

// 繼承類別
class AppClass extends React.Component {
  // 建構式
  constructor(props) {
    // 建構式的第一行需要使用super呼叫父母類別的建構式
    super(props)
    // 這裡建立狀態的初始化值
    this.state = {
      total: 0,
    }
  }

  // render的回傳值即為最後呈現在網頁上的元素
  render() {
    console.log(this.props)

    let initValue = this.props.initValue
      ? this.props.initValue
      : this.state.total

    return (
      <>
        {/* 呈現狀態值要使用this.state.total */}
        <h1>{this.props.title}</h1>
        <h1>{initValue}</h1>
        {/* 設定/更動狀態要呼叫this.setState方法，給定之後狀態要改變的物件樣子 */}
        <button onClick={() => this.setState({ total: initValue + 1 })}>
          +1
        </button>
        <button onClick={() => this.setState({ total: initValue - 1 })}>
          -1
        </button>
      </>
    )
  }
}

export default AppClass
