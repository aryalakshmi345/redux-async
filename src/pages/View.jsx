import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function View() {
    const {id} = useParams()
    const {allRestuarants,loading,error} = useSelector((state)=>state.resturantSlice)
    const [restaurant, setRestuarant] = useState({})
    useEffect(()=>{
        setRestuarant(allRestuarants.find(item=>item.id==id))
    },[])
    console.log(restaurant);

  return (
    <>
     view   
    </>
  )
}

export default View