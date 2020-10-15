// 導入react函式庫
import React from 'react'

// 繼承類別
class AppClass extends React.Component {
  // 建構式
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
    }

    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
    console.log(this.state.total)
  }

  // render的回傳值即為最後呈現在網頁上的元素
  render() {
    console.log('render')
    return (
      <>
        <button
          onClick={() => {
            this.setState({ total: 2 })
          }}
        >
          Change State
        </button>
      </>
    )
  }
}

export default AppClass
