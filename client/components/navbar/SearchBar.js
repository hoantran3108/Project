import React, { Component } from 'react'
import _ from 'lodash'
import { Menu, Dropdown, Icon, Search, Label } from 'semantic-ui-react'

class SearchBar extends Component {

  componentWillMount = () => {
    this.resetState()
  }

  resetState = () => this.setState({
    isLoading: false,
    results: [],
    value: ''
  })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })
    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetState()

      const reg = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => reg.test(result.name)

      this.props.searchProducts(this.state.value)
      .then(res => this.setState({
        isLoading: false,
        results: _.filter(res.data.products, isMatch)
      }))
      .catch(err => console.log(err))
    }, 500)
  }

  handleResultSelect = (e, data) => this.props.history.push(`/product/${data.result._id}`)

  resultRenderer = ({ name }) => <Label content={name} />

  render() {
    const { isLoading, value, results } = this.state
    return (
      <Search
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
        results={results}
        resultRenderer={this.resultRenderer}
        value={value}
      />
    )
  }
}

export default SearchBar
