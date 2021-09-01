import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
// import {handleAddButton, handleDeleteButton} from './actions/handleButton'
import {bindActionCreators} from 'redux'
import {handleButton} from './actions'

function App() {
  const counter = useSelector((state)=>state.counter)
  const logged = useSelector((state)=>state.islogged)
  const dispatch = useDispatch()
  const {handleAddButton, handleDeleteButton } = bindActionCreators (handleButton, dispatch)
  return (
    <div className="App">
            <h1>Counter:{counter}</h1>
            <button onClick = {()=>handleAddButton(5)}>+</button>
            <button onClick = {()=>handleDeleteButton(5)}>-</button>
            <h2>{logged?`Carig is a PIG!!!`:`You can't see this without logging in.` }</h2>
    </div>
  );
}

export default App;
