import React, { useState } from 'react'

class BMIClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: '',
      weight: '',
      bmi: '',
    }

  }

  calcBMI = (h, w) =>
    h > 0 && w > 0 ? (w / Math.pow(h / 100, 2)).toFixed(1) : 0

  handleInput = (e) => {
    this.setState({ height: e.target.value })
  }

  render() {
    return (
      <>
        你目前的身高（公分）：
        <br />
        <input
          type="text"
          value={this.state.height}
          onChange={this.handleInput}
        />
        <br />
        你目前的體重（公斤）：
        <br />
        <input
          type="text"
          value={this.state.weight}
          onChange={(e) => this.setState({ weight: e.target.value })}
        />
        <br />
        <button
          onClick={() =>
            this.setState({
              bmi: this.calcBMI(+this.state.height, +this.state.weight),
            })
          }
        >
          計算
        </button>
        <br />
        BMI：{this.state.bmi}
      </>
    )
  }
}

export default BMIClass
