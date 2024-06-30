'use client';
import { useCartCount } from '@/app/contexts/CartCoutContext';
import { ProductServices } from '@/app/services/productServices';
import { useRouter } from 'next/navigation';
import React from 'react'

function AddToCartBtn({prdId}:any) {
  const {updateCartCount}=useCartCount();
  const route=useRouter()

    const handleAddToCart=async()=>{

       let data= await ProductServices.addToCart(prdId)
       if(data){
        updateCartCount(data.total_unique_items)
          route.refresh()
       }
       

    }
  return (
    <button className="btn btn-danger" onClick={handleAddToCart}>Add to Cart</button>
               
  )
}

export default AddToCartBtn