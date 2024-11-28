import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchResturant } from '../redux/resturantSlice'

function Header() {
  const dispatch = useDispatch()
   
  return (
    <>
       <Navbar className="bg-body-tertiary">
        <Container>
        <Navbar.Brand>
              <Link style={{textDecoration:'none', color:'black'}} to={'/'}>
              <i className="fa-solid fa-cookie-bite"></i>  Eat'n
              </Link>
        </Navbar.Brand>
        <div className="d-flex align-items-center ms-auto">
          <input onChange={(e)=>dispatch(searchResturant(e.target.value))} type="text" className='form-control' placeholder='Search Restaurants' />
          <i className="fa-solid fa-search" style={{marginLeft:'-30px'}}></i>
        </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header