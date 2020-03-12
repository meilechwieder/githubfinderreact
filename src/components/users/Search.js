import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    searchText: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClearBtn: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  disabledSubmit = false;

  typeSearch = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.disabledSubmit = e.target.value === '' ? true : false;
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.searchText === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.props.searchUsers(this.state.searchText);
      this.setState({ searchText: '' });
    }
  };

  // clearUsers = () => {
  //   this.setState({ searchText: '' });
  // };

  render() {
    const { clearUsers, showClearBtn } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='searchText'
            placeholder='Search Users....'
            id=''
            value={this.state.searchText}
            onChange={this.typeSearch}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
            disabled={this.disabledSubmit}
          />
        </form>
        {showClearBtn && (
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
