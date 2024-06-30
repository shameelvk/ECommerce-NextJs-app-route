'use client';
import { useCartCount } from '@/app/contexts/CartCoutContext';
import { useRouter } from 'next/navigation';
import React from 'react'

function ClearAllBtn() {
    const {updateCartCount}=useCartCount();
    const route=useRouter();
    const clearAllCart = async () => { 
        try {
            const response = await fetch(`https://api.chec.io/v1/carts/cart_kpnNwAO9Og5mXB/items/`, {
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
            if(data){
                updateCartCount(data.total_unique_items)
                route.refresh()
            }
           
           
    
            console.log('Cart item deleted successfully');
        } catch (error) {
            console.error('Error deleteing cart item ', error);
        }
    }
  return (
    <button className="btn btn-danger btn-block pay-btn mx-2" onClick={clearAllCart}>Clear All</button>
                            
  )
}

export default ClearAllBtn