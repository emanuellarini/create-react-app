import React from 'react'
import Loadable from 'react-loadable'

export default path => {
  return Loadable({
    loader: () => path,
    loading: () => <div>Loading component!</div>,
    delay: 300,
    timeout: 10000,
  })
}
