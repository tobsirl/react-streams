import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

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
