'use client';
import { useCartCount } from '@/app/contexts/CartCoutContext';
import { useRouter } from 'next/navigation';
import React from 'react'

function QuantityChangeBtn({text,quntity,itemId}:any) {
    const {updateCartCount}=useCartCount();
    const route=useRouter()
    const quantityChangeFromCart = async () => {
      
        try {
            const response = await fetch(`https://api.chec.io/v1/carts/cart_kpnNwAO9Og5mXB/items/${itemId}`, {
                method: 'PUT',
                headers: {
                    'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6', 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    quantity: quntity
                })
            });
    
            if (!response.ok) {
                throw new Error('Failed to decrease cart item quantity');
            }
            const data=await response.json();
            updateCartCount(data.total_unique_items)
            route.refresh()
    
            console.log('Cart item quantity decreased successfully');
        } catch (error) {
            console.error('Error decreasing cart item quantity:', error);
        }
    };

  return (
    <button className="btn btn-dark " onClick={quantityChangeFromCart} >{text}</button>
  )
}

export default QuantityChangeBtn