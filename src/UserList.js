import React, { useEffect, useState } from 'react'
import axios from 'axios';
import User from './User';
import "bootstrap/dist/css/bootstrap.min.css"
export default function UserList() {
    const [listOfUSer, setListOfUSer] = useState([]); 
    const [error, setError] = useState(null);
    useEffect(() => {
      function fetchData() {
        axios.get("https://jsonplaceholder.typicode.com/users")
          .then(res => setListOfUSer(res.data))
          .catch(err => setError(err)); 
      }
   
      fetchData();
    }, []);
   
    return (
      <div className='mt'>
         <table className="table table-hover">
            <thead>
            <tr className='table table-dark'>
                <th>Name</th>
                <th>User Name</th>
                <th>email</th>
                <th>addrese</th>
            </tr>
            </thead>
           <tbody>
            {listOfUSer.map(course => (
            <User nom = {course.name} username = {course.username} email = {course.email} address = {course.address.city}/>
          ))}
          </tbody>
        </table>
      </div>
    );
   };
