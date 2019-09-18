import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }
  }

  handleSearchBarChange(searchTerm) {
    this.setState({ searchTerm })
    this.props.onChange(searchTerm)
  }

  render() {
    return (
        <div>
            <h1>Giphy Search React App</h1>
      <div className="search-bar">
            <input
              type="text"
              placeholder="Search Giphy Gifs"
              value={this.state.searchTerm}
              onChange={(ev) => this.handleSearchBarChange(ev.target.value)}
            />
      </div>
      </div>
    )
  }
}

export default SearchBar
