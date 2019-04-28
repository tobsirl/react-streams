import React from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../actions';

const StreamEdit = props => {
  console.log(props);
  return <div>StreamEdit</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamEdit);
