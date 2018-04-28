import React from 'react'
import PropTypes from 'prop-types'
import { DocumentConsumer } from './Context'

/**
 * Access project configuration object
 */
function withDocument (WrappedComponent) {
  return (props) => (
    <DocumentConsumer>
      {({ document, window }) => <WrappedComponent {...props} window={window} document={document} />}
    </DocumentConsumer>
  )
}

export default withDocument

