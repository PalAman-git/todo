import './App.css';
import { useState } from 'react';
import { Button,FormControl,Input,InputLabel } from '@mui/material'
import Todo from './Todo';
import { useEffect } from 'react';
import db from './firebase.js'
import firebase from 'firebase/compat/app'

function App() {

  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState('');
  
  //when the app loads, we need to listen to the database and fetch the new todos as they get added/removed
  useEffect(()=>{
    //this code runs after the app.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  },[])


  const handleOnClick = (e) => {
    e.preventDefault();

    //on click we are going to add this to the database
    db.collection('todos').add({
      todo : input ,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');//make the input field empty
  }
  

  return (
    <div className='App'>
      <form>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input type="text" value={ input } onChange={(e) => setInput(e.target.value)} />
        </FormControl>


        <Button disabled={!input} variant="contained" color="success" type="submit" onClick={ handleOnClick }> Add Todo</Button>

        <ul>
          {
            todos.map((todo) => {
            return <Todo todo={ todo } />
            })
          }
        </ul>
      </form>
    </div>
  );
}

export default App;
