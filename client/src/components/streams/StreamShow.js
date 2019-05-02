import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

const StreamShow = () => {
  return <div>StreamShow</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.stream };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);
