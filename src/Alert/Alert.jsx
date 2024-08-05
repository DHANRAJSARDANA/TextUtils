import React,{useState} from 'react'

export default function Alert(props) {
  return (

    <div>
      <div className={`alert alert-${props.type}`} role="alert">{props.alert}
</div>
    </div>
  )
}
