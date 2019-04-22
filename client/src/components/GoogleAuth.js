import React, { Component } from 'react';
import { connect } from 'react-redux';

// import actions
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
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
          this.onAuthChange(this.auth.isSignedIn.get()); // use onAuthChange to determine the signIn/signOut state
          this.auth.isSignedIn.listen(this.onAuthChange); // use the listen method to automatically update
        });
    });
  }

  // method called for changing updating the signedIn/signedOut status
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
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
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
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

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
