import React, { Component } from 'react'
import './SearchBar.css'

const sortByOptions = {
    "Recommended": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
}

export default class SearchBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            term: "",
            location: "",
            sortBy: "best_match"
        }
    }

    render() {


        const handleInput = (e) => {
            this.setState({ [e.target.name]: e.target.value })
        }

        const handleSearch = (e) => {
            e.preventDefault()
            const { term, location, sortBy } = this.state
            this.props.searchYelp(term, location, sortBy)

        }

        // console.log(this.state);
        // console.log(this.props);

        return (
            <div>

                <div className="SearchBar">

                    <div className="SearchBar-sort-options">
                        <ul>
                            {Object.entries(sortByOptions).map(item => {
                                return <li
                                    onClick={() => this.setState({ sortBy: item[1] })}
                                    className={this.state.sortBy === item[1] ? "active" : null}
                                    key={item[1]}> {item[0]} </li>
                            })}
                        </ul>
                    </div>

                    <div className="SearchBar-fields">
                        <input onChange={handleInput} name="term" value={this.state.term} placeholder="Search Businesses" />
                        <input onChange={handleInput} name="location" value={this.state.location} placeholder="Where?" />
                    </div>

                    <div onClick={handleSearch} className="SearchBar-submit">
                        <a href='www.#.com' >Let's Go</a>
                    </div>

                </div>

            </div>
        )
    }
}