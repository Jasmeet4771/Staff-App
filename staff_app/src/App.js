import { useState } from 'react';
import './App.css';
import Cardlist from './Cardlist';
import Header from './Header';

function App() {
  
 let [searchTerm,setsearchTerm] =useState('')
 function handlechange(e)
 {
     setsearchTerm(e.target.value)
 }
  return (<div >
   <div className='head' >
   <Header 
   heading = 'Staff List SIT313'
   />

   <input type='text'
   placeholder="search the staff"
   onChange= {handlechange}
   />
   </div> 

   <Cardlist 
     staffsearch ={searchTerm}
   />

  </div>   
  );
}

export default App;
