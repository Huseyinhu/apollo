import React, { Component } from 'react'
import Business from '../business/Business'
import './BusinessList.css'

export default class BusinessList extends Component {
  render() {
    // console.log(this.props.business);

    return (

      <div className="BusinessList">

        {this.props.business.map((item, i) => <Business key={i} business={item} />)}

      </div>
    )
  }
}