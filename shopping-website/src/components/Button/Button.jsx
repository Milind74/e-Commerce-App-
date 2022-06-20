import React, { Component } from 'react'
import "../../Style/Navbar.css"

export default class a extends Component {
 handlegoback = () => {
    const { navigate } = this.props;
    navigate(-1);
 }
  render() {
    
    return (
      <div c>
    <button  data-testid="back" className="back btn btn-dark ms-2 py-2" onClick={this.handlegoback}>Back</button>

      </div>
    )
  }
}
