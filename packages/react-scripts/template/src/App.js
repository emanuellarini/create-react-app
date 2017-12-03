import React from 'react'
import Routes from 'router'

export default function () {
  return [
    <header key="app-header">Header</header>,
    <main key="app-header">{Routes()}</main>,
    <footer key="app-footer">Footer</footer>
  ]
}
