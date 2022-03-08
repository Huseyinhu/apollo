import BusinessList from '../businessList/BusinessList';
import SearchBar from '../searchBar/SearchBar';
import './App.css';
import React, { Component } from 'react'
import Yelp from '../../util/Yelp'


export default class App extends Component {

  state = {
    business: [

    ]
  }

  render() {


    const searchYelp = (term, location, sortBy) => {
      Yelp.search(term, location, sortBy)
        .then(business => this.setState({ business }))
    }

    return (
      <div className="App">

        <SearchBar searchYelp={searchYelp} />
        <BusinessList business={this.state.business} />


      </div>
    )
  }
}

