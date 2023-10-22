import axios from "axios"
import { useEffect,useState } from "react"
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function App() {
  let [data,setData]=useState([])

  let getUsers = async()=>{
    try {
      let res = await axios.get(`${import.meta.env.VITE_API_URL}/user`)
      console.log(res)
      if(res.status===200)
      {
        setData(res.data.users)
      }
  } catch (error) {
    console.log(error) 
  }
}


useEffect(()=>{
  getUsers()
},[])
  return  <>
       <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
      
      <h5 className="text-center"> Student Details </h5>
     
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
      {
            data.map((e,i)=>{
              return <tr key = {e._id}>
                <td>{i+1}</td>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.email}</td>
                <td>{e.role}</td>
                <td>{e.status?"Active":"Inactive"}</td>
              </tr>
            })
          }
      </tbody>
    </Table>
    
   
    </>
  
}

export default App
