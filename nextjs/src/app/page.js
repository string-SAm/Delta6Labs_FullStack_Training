'use client'
import Link from 'next/link'
import React, { useEffect,useState } from 'react'
import ExampleComponent from './components/ExampleComponent'
import DataFetching from './components/DataFetching'
import axios from 'axios'


function page() {
  const[todos,setTodos]=useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        const response = await axios.get('/api/data');
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Link href='/about'>About</Link>
      <br/>
      <Link href='/form'>Form</Link>
      <br/>
      <Link href='/productlist'>ProductList</Link>
      <br/>

      
      <ExampleComponent/>
      
      {/* Dynamic Routing */}

      <Link href='/products/1'>ProductList Page </Link>


    <DataFetching/>

    <div>
        <h1>Todos List</h1>
        {todos ? (
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        ):(
          <p>Loading...</p>
        ) }
      </div>

    </div>
  )
}

export default page
