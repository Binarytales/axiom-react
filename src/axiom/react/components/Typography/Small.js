import React, { Component } from 'react';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';

export class Small extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const {children} = this.props;

    return (
      <small {...this.props}>
        {children}
      </small>
    );
  }
}

export default enhance(Small)(
  addDisplayName('Small'),
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
