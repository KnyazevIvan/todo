import React, { useState, useEffect } from 'react'
import Users from './users'
import firebase from '../firestore'


function UsersContainer() {

  const [name, setName] = useState('')
  const [toggle2, setToggle2] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [users, setUsers] = useState([])
 
  
  
  const onUpdate = (id, name, flag) => {
    firebase.firestore().collection('users').doc(id).set({ ...users[id], name, id, flag })
  }


  React.useEffect(() => {
    const fetchData = async () => {

      const db = firebase.firestore();
      const data = await db.collection('users').get();
      setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))

    };
    fetchData()
   
  }, [])




  

  const clear = (id) => {
   
    let newArr = users.map(el => {
    if (el.id === id) {
      console.log('hi')
    
      firebase.firestore().collection('users').doc(el.id).delete()
 
        return {...el, flag: false }
      }
      return el;
    })
        setUsers(newArr)
   
        
  }


  const clearthat = () => {

    let newUsers=  users.map(el => {
       if (el.flag == false) {
         firebase.firestore().collection('users').doc(el.id).delete()
      
         return null;}
     if (el.flag==true)
     return el
        
       } )
    
      }


  let addpost = e => {
    if (e.key === 'Enter') {
      addPost()
    }
  }


  let addPost = () => {
    if (name != '') {
      setToggle(true)
      setToggle2(false)
      let i = Date.now()
      setUsers([
        ...users, {
          name: name,
          id: String(i),
          flag: true
        }
      ])
      setName('')
    }
    else {
      setToggle(false)
      setToggle2(true)
    }
  }



  return (
    <div>
      <Users clearthat={clearthat} addPost={addPost} addpost={addpost} onUpdate={onUpdate} clear={clear} users={users}  setUsers={setUsers} toggle={toggle}  setToggle={setToggle} toggle2={toggle2} setToggle2={setToggle2} name={name} setName={setName} />
    </div>
  )
}

export default UsersContainer
