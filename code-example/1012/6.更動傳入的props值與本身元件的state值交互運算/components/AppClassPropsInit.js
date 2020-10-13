// 導入react函式庫
import React from 'react'

// 繼承類別
class AppClassPropsInit extends React.Component {
  // 建構式
  constructor(props) {
    // 建構式的第一行需要使用super呼叫父母類別的建構式
    super(props)
    // 這裡建立狀態的初始化值
    this.state = {
      increment: 0,
    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   // Any time the current user changes,
  //   // Reset any parts of state that are tied to that user.
  //   if (props.initValue !== state.initTotal) {
  //     return {
  //       initTotal: props.initValue,
  //     }
  //   }
  //   return null
  // }

  // render的回傳值即為最後呈現在網頁上的元素
  render() {
    console.log(this.props)

    return (
      <>
        {/* 呈現狀態值要使用this.state.total */}
        <h1>{this.props.title}</h1>
        <h1>{this.props.initValue + this.state.increment}</h1>
        {/* 設定/更動狀態要呼叫this.setState方法，給定之後狀態要改變的物件樣子 */}
        <button
          onClick={() => this.setState({ increment: this.state.increment + 1 })}
        >
          +1
        </button>
        <button
          onClick={() => this.setState({ increment: this.state.increment - 1 })}
        >
          -1
        </button>
      </>
    )
  }
}

export default AppClassPropsInit
