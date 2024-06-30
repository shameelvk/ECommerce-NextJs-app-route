'use client';
import { useCartCount } from '@/app/contexts/CartCoutContext';
import { useRouter } from 'next/navigation';
import React from 'react'

function DeleteProductFrmCartBtn({itemId}:any) {
    const {updateCartCount}=useCartCount();
    const route=useRouter()
    const deleteProductFromCart = async () => {
        
        try {
            const response = await fetch(`https://api.chec.io/v1/carts/cart_kpnNwAO9Og5mXB/items/${itemId}`, {
                method: 'DELETE',
                headers: {
                    'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6', 
                    'Content-Type': 'application/json'
                },
                
            });
    
            if (!response.ok) {
                throw new Error('Failed to delete cart item ');
            }
            const data=await response.json();
            route.refresh();
            updateCartCount(data.total_unique_items)
            
           
    
            console.log('Cart item deleted successfully');
        } catch (error) {
            console.error('Error deleteing cart item ', error);
        }
    };
  return (
    <button className="btn btn-danger" onClick={deleteProductFromCart}  >Remove</button>
  )
}

export default DeleteProductFrmCartBtn