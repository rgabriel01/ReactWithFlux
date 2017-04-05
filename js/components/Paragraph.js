import React from 'react';
import ReactDOM from 'react-dom';

class Paragraph extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default Paragraph;