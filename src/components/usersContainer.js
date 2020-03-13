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

  useEffect(() => {

    const unsubscribe = firebase.firestore().collection('users').onSnapshot((snapshot) => {
      const newUsers = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()

      }))

      setUsers(newUsers)

    })
    return () => unsubscribe()


  }, [])

  const clear = (id) => {
    let newArr = users.map(el => {
      if (el.id == id) {
        setTimeout(() => { firebase.firestore().collection('users').doc(el.id).delete() }, 400);

        return { ...el, flag: false }
      }
      else return el
    })
    setUsers(newArr)
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
      <Users addPost={addPost} addpost={addpost} onUpdate={onUpdate} clear={clear} users={users}  setUsers={setUsers} toggle={toggle}  setToggle={setToggle} toggle2={toggle2} setToggle2={setToggle2} name={name} setName={setName} />
    </div>
  )
}

export default UsersContainer
