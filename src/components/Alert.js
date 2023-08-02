import React from 'react'

export default function Alert(props) {
  
  const converter=(mssg)=>{
      return mssg.charAt(0).toUpperCase()+ mssg.slice(1);
  }

  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{converter(props.alert.type)}</strong>:{props.alert.msg} 
     
    </div>
  )
}
