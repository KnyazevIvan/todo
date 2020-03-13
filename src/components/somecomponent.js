import React, { useContext } from 'react'
import { InputGroup, FormControl, Button, Accordion, Card, Alert } from 'react-bootstrap'
import { Spring, Transition } from 'react-spring/renderprops'




export default function AlertSuccses(props) {
  console.log(props)
  return (
    <div>
      
      <Transition
        items={props.toggle}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
        config={{ duration: 500 }}>
        {toggle => toggle && (propss =>

          <div style={propss} className='alert'>
            <Alert variant={props.alertType}>
              {props.text}
    </Alert>
    
            <div onClick={() =>  {props.setToggle(false)}} className='close'>
              x
    </div>
          </div>)}


      </Transition>
    </div>
  )
}
