import React, { Component } from 'react';
import './App.css';
import GiphyList from './components/GiphyList'
import SearchBar from './components/SearchBar'
import _ from 'lodash'

const API_KEY = "AzVK7Nb2aRxjR2UZFmOZCcXoIFKGXqDE"

class App extends Component {
  constructor() {
    super()

    this.state = {
      gifs: {}
    }
  }

  componentDidMount() {
    this.fetchGifs()
  }

  fetchGifs(searchTerm) {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}&limit=24`)
    .then( res => res.json() )
    .then(json => {
      if(json.error) {
        alert("err")
      } else {
        this.setState({
          gifs: json
        })
      }
    })
  }

  render() {
    const fetchGifs = _.debounce((searchTerm) => {this.fetchGifs(searchTerm)}, 200)

    if(!this.state.gifs.data) {
      return null
    } else {
      return (
        <div className="main-search">
          <SearchBar onChange={(searchTerm) => fetchGifs(searchTerm)} />

          <div className='list-area'>
            <GiphyList gifs={this.state.gifs.data}/>
          </div>
        </div>
      );
    }
  }
}

export default App;