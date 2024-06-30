import React from 'react'
import './Card.css'
import { Product } from '@/app/types/types'
import Link from 'next/link';


type CardProps = {
    pdData: Product;
  };

function Card({pdData}:CardProps) {
  return (
    <div className="card pd-card">
      <img src={pdData.image.url} className="card-img-top pd-image p-2" alt={""} />
      <div className="card-body">
        <h5 className="card-title">{pdData.name}</h5>
        <p className='card-text card-description'>{pdData.description.slice(3,-4)}</p>
        <p className="card-text">MRP:₹{pdData.price.raw}<del className="text-danger ms-2">${(pdData.price.raw * 1.2).toFixed(2)}</del></p>
        <p className='deliver'><strong>Free Delivery By FurniQuest</strong></p>
        <Link href={"products/"+pdData.id} className="btn btn-danger">View Product</Link>
      </div>
    </div>
  )
}

export default Card