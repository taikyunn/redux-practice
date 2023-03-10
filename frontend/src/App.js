import React, { Component } from 'react';
import {connect } from 'react-redux';
import './App.css';

// ステートのマッピング
function mappingState(state) {
  return state;
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Redux</h1>
        <Message />
        <Button />
      </div>
    );
  }
}

// ストアのコネクト
App = connect()(App);

// メッセージ表示のコンポーネント
class Message extends Component {
  style = {
    fontSize: "20pt",
    padding: "20px 5px"
  };

  render(){
    return (
      <p style={this.style}>
        {this.props.message}: {this.props.counter}
      </p>
    )
  };
}

// ストアのコネクト
// ステートを使用しているため、mappingStateを引数にセットしている
Message = connect(mappingState)(Message);

// ボタン表示のコンポーネント
class Button extends Component {
  style = {
    fontSize: '16pt',
    padding: '5px 10px'
  };

  constructor(props) {
    super(props);
    this.doAction = this.doAction.bind(this)
  }

  doAction(e) {
    // シフトキーを押しながらクリックしているか否かを確認
    if (e.shiftKey) {
      this.props.dispatch({type: 'DECREMENT'});
    } else {
      this.props.dispatch({type: 'INCREMENT'});
    }
  }

  render() {
    return(
      <button style={this.style} onClick={this.doAction}>Click</button>
    )
  }
}

// ストアのコネクト
Button = connect()(Button);

export default App;
