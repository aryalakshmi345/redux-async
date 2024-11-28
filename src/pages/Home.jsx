import React, { useEffect } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import RestCard from '../Components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestuarant } from '../redux/resturantSlice'

function Home() {
    const {allRestuarants,loading,error} = useSelector((state)=>state.resturantSlice)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchRestuarant())
    },[])
console.log(allRestuarants);
  return (
    <>
    <div className='d-flex justify-content-center align-items-center mt-5 w-100'>
      {
        loading && <div> <Spinner animation="border" varient="info"/> <span className='ms-2'>Loading...</span></div>
      }
    </div>
    <div className='d-flex justify-content-center align-items-center mt-5 w-100'>
      {
        loading && error? <div><span className='fw-bolder text-danger'>{error}</span></div>:null
    }
    </div>
    <Row className='m-5'>
        {
            allRestuarants?.length>0?allRestuarants?.map(restaurant=>(
                <Col className='px-3 py-3 ' sm={12} md={6} lg={4} xl={3}>
                <RestCard restaurant={restaurant}/>
                </Col>
            ))
            :
            <div className='w-100 d-flex  align-items-center justify-content-center text-danger fw-bolder'>
                No Resturants are available...!
            </div>
        }
    </Row>
    </>
  )
}

export default Home