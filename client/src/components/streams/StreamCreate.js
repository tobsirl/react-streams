import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  renderInput(formProps) {
    return (
      <input
        type="text"
        onChange={formProps.input.onChange}
        value={formProps.input.value}
      />
    );
  }
  render() {
    return (
      <form>
        <Field
          name="title"
          type="text"
          component={this.renderInput}
          label="Title"
        />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: 'StreamCreate'
})(StreamCreate);
