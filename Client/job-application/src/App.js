
import './App.css';
import Axios from "axios"
import React, { useState, useEffect } from 'react';
import JobCard from "./components/job-cards";

export default function App() {

  const [listOfTradie, setListOfTradie] = useState([])
  const [search, setSearch] = useState("")
  const [sortByName, setSortByName] = useState(true)


  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response)=>{
      setListOfTradie(response.data)
      
    })
  }, [])

  function handleChange(event){
    setSearch(event.target.value)
  }

  function sortChange(event){
  setSortByName(event.target.value == "Name") 
  }

  const filteredSearch = listOfTradie.filter((listOfTradie)=> (listOfTradie.firstname+" "+listOfTradie.lastname).toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="App">

      <h1 className='Header'>Tradie Applications</h1>

      <input className='inputField' type="text" onChange={handleChange} placeholder="Search a tradie" />
      <select onChange={sortChange}>
        <option value="Name">Name</option>
        <option value="Id">Id</option>
        
      </select>
    <br />
    <br />
    <br />
    <br />
    <br />

      {sortByName && filteredSearch.sort((a,b) => {return(a.firstname > b.firstname? 1:-1)} ).map((user)=>{
        return(
          <div >
            <JobCard id={user.id} firstname={user.firstname} lastname={user.lastname} date= {Date(user.date).toString().split('GMT+1200 (New Zealand Standard Time)')} />
          </div>
        )
      })}
      {!sortByName && filteredSearch.sort((a,b) =>{ return(a.id > b.id ? 1:-1)}).map((user)=>{
        return(
          <div >
            <JobCard id={user.id} firstname={user.firstname} lastname={user.lastname} contact= {user.contact} date= {Date(user.date).toString().split('GMT+1200 (New Zealand Standard Time)')} />
          </div>
        )
      })}
      
      
      
    </div>
  );
}


