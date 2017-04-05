
import React from 'react';
import ReactDOM from 'react-dom';
import Paragraph from './components/Paragraph.js';
import Header from './components/Header.js';

import constants from './constants/AppConstants.js';
import {incrementActions} from './actions/AppActions.js';
import {TodoStore} from './stores/AppStores.js';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header title='BudgetSeer' />
        <Paragraph text='the quick brown fox jumps over the lazy dog and cat'/>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: TodoStore.getCount()
    }
    this.increment = this.increment.bind(this)
    this._onChange = this._onChange.bind(this)
  }

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange)
  }

  _onChange() {
    this.setState({
      count: TodoStore.getCount()
    })
  }

  increment() {
    incrementActions.incrementCount()
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increase Count</button>
      </div>
    )
  }
}


var mountNode = document.getElementById('root');
ReactDOM.render(<App />, mountNode);