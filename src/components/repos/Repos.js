import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  const repositories = repos.map(repo => (
    <RepoItem key={repo.id} repo={repo} />
  ));
  return (
    <Fragment>
      <div>Latest Repositories</div>
      {repositories}
    </Fragment>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;
