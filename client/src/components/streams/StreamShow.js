import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
  render() {
    return <div>StreamShow</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.stream };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);
