import React from 'react'
import mainImage from '../../src/images/greatSymbolImage.jpg'

class MainContent extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

export default MainContent