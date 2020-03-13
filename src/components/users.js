import React, { useState, useEffect } from 'react'
import firebase from '../firestore'
import { InputGroup, FormControl, Button, Accordion, Card, Alert } from 'react-bootstrap'
import { Spring, Transition } from 'react-spring/renderprops'
import { useTransition, animated } from 'react-spring'
import AlertSuccses from './somecomponent'


const Users = (props) => {

  let newUsers = props.users.map(el =>
    <div >  {el.name != ''
      ?
      <div>
        <Transition
          items={el.flag}
          from={{ opacity: 0, marginLeft: 0 }}
          enter={{ opacity: 1, marginLeft: 0 }}
          leave={{ opacity: 0, marginLeft: -190 }}
          config={{ duration: 300 }}>
          {toggle => toggle && (propss =>

            <div style={propss} className='notes'>
              <div>
                <span className='span'> {el.name} </span>
              </div>
              <div className='button'>

                <Button onClick={() =>{ setTimeout(() => {
                  props.clearthat()
                }, 500);   props.clear(el.id)}} variant="outline-danger">x</Button>
              </div>
            </div>)}
        </Transition >
      </div>
      : null}
      
      {props.onUpdate(el.id, el.name, el.flag)}
    </div>
  )

  return (

    <div>

<AlertSuccses alertType='success' toggle={props.toggle} setToggle={props.setToggle} text='Запись успешно добавлена!' />

<AlertSuccses alertType='warning' toggle={props.toggle2} setToggle={props.setToggle2} text='Ну введи чего-нибудь!' />

      <div className='container'>
        <h3>Введите заметку</h3>

        <InputGroup className="mb-3" onKeyPress={props.addpost} type='text' onChange={e => props.setName(e.target.value)}>
          <FormControl value={props.name}
            placeholder="Сюда пиши"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button onClick={() => props.addPost()} variant="outline-secondary">Добавить</Button>
          </InputGroup.Append>
        </InputGroup>

        {newUsers}
  
      </div>
    </div>

  )
}

export default Users;