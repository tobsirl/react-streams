import React, { Component } from 'react';
import { connect } from 'react-redux';

// import actions
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  // initialize state
  state = {
    isSignedIn: null
  };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '139946060856-ja20bf7qskgf03gb4bepkum7rrb6l07p.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance(); // assign auth to the getAuthInstance object
          this.setState({ isSignedIn: this.auth.isSignedIn.get() }); // update the state with setState
          this.auth.isSignedIn.listen(this.onAuthChange); // use the listen method to automatically update
        });
    });
  }

  // method called for changing updating the signedIn/signedOut status
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  // helper method to sign in
  onSignInClick = () => {
    this.auth.signIn();
  };

  // helper method to sigh out
  onSignOutClick = () => {
    this.auth.signOut();
  };

  // display the signedIn/signedOut status
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui green google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => ({});

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
