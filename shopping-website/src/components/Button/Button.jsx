import React, { Component } from 'react'
import { useNavigate } from "react-router-dom";

export default class a extends Component {
 handlegoback = () => {
    const { navigate } = this.props;
    navigate(-1);
 }
  render() {
    
    return (
      <div>
    <button  className="btn btn-dark ms-2 py-2" onClick={this.handlegoback}>Back</button>

      </div>
    )
  }
}
