import React from 'react'
import MaterialDrawer from 'material-ui/Drawer'
import Close from 'material-ui-icons/Close'

export default function (props) {
  return (
    <MaterialDrawer
      {...props}
      style={{width: '100%', position: 'relative', backgroundColor: 'white'}}
    >
      <Close
        onClick={props.onRequestClose}
        style={{cursor: 'pointer', color: 'black', position: 'absolute', right: 10, top: 10}}
        size={20}
      />

      <div style={{marginTop: 35, width: 280, ...props.containerStyle}}>
        {props.children}
      </div>
    </MaterialDrawer>
  )
}
