"use client"
import { useRouter } from 'next/navigation'
import React from 'react'


type btnprop={
    btnName:string
    btnId?:string
}
function FilterButton({btnName,btnId}:btnprop) {
    const route=useRouter();
  return (
    <button style={{width:"100%"}} className='btn btn-danger' onClick={()=>route.push(`/products/?cat=${btnId}`)}>{btnName}</button>
  )
}

export default FilterButton