import React, { PureComponent } from 'react'
import Text from './Text'

export default class Pre extends PureComponent {
  static defaultProps = {
    is: 'pre',
    fontFamily: 'mono',
    marginTop: 0,
    marginBottom: 'standard',
  }

  render() {
    return <Text {...this.props} />
  }
}
