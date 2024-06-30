
import React, { useState, useEffect } from 'react';
import { ProductServices } from '../services/productServices';
import Image from 'next/image';
import QuantityChangeBtn from '../components/QuantityChangeBtn/QuantityChangeBtn';
import DeleteProductFrmCartBtn from '../components/DeleteProductFrmCartBtn/DeleteProductFrmCartBtn';
import ClearAllBtn from '../components/ClearAllBtn/ClearAllBtn';
import AddToCartBtn from '../components/AddToCartBtn/AddToCartBtn';

const Cart = async() => {
    
    let cartData=await ProductServices.getCartData();
   
    
    


    

    

    // const quantityChangeFromCart = async (itemId,qunti) => {
    //     const cartId = 'cart_kpnNwAO9Og5mXB'; 
    //     console.log(itemId);
    //     try {
    //         const response = await fetch(`https://api.chec.io/v1/carts/cart_kpnNwAO9Og5mXB/items/${itemId}`, {
    //             method: 'PUT',
    //             headers: {
    //                 'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6', 
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 quantity: qunti
    //             })
    //         });
    
    //         if (!response.ok) {
    //             throw new Error('Failed to decrease cart item quantity');
    //         }
    //         const data=await response.json();
    //         updateCartCount(data.total_unique_items)
    //         setCartData(data);
           
    
    //         console.log('Cart item quantity decreased successfully');
    //     } catch (error) {
    //         console.error('Error decreasing cart item quantity:', error);
    //     }
    // };


    // const deleteProductFromCart = async (itemId) => {
    //     const cartId = 'cart_kpnNwAO9Og5mXB'; 
    //     console.log(itemId);
    //     try {
    //         const response = await fetch(`https://api.chec.io/v1/carts/cart_kpnNwAO9Og5mXB/items/${itemId}`, {
    //             method: 'DELETE',
    //             headers: {
    //                 'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6', 
    //                 'Content-Type': 'application/json'
    //             },
                
    //         });
    
    //         if (!response.ok) {
    //             throw new Error('Failed to delete cart item ');
    //         }
    //         const data=await response.json();
    //         updateCartCount(data.total_unique_items)
    //         setCartData(data);
           
    
    //         console.log('Cart item deleted successfully');
    //     } catch (error) {
    //         console.error('Error deleteing cart item ', error);
    //     }
    // };
    // const clearAllCart = async () => {
    //     const cartId = 'cart_kpnNwAO9Og5mXB'; 
    //     try {
    //         const response = await fetch(`https://api.chec.io/v1/carts/cart_kpnNwAO9Og5mXB/items/`, {
    //             method: 'DELETE',
    //             headers: {
    //                 'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6', 
    //                 'Content-Type': 'application/json'
    //             },
                
    //         });
    
    //         if (!response.ok) {
    //             throw new Error('Failed to delete cart item ');
    //         }
    //         const data=await response.json();
    //         updateCartCount(data.total_unique_items)
    //         setCartData(data);
    //         console.log(data);
           
    
    //         console.log('Cart item deleted successfully');
    //     } catch (error) {
    //         console.error('Error deleteing cart item ', error);
    //     }
    // };

    return (
        <div className='container p-2'>
            <div className='row m-2 '>
               {
                cartData.total_items>0? <div className='col-12  table-responsive'>
                <table className="table ">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col text-center">Actions</th>
                            <th scope="col">Total</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartData.line_items&&cartData.line_items.map((product:any) => {
                            return (
                                <tr key={product.id}>
                                    <td>
                                        <img src={product.image.url} alt={""} style={{ width: '100px' }} />
                                    </td>
                                    <td className='p-2'>{product.name}</td>
                                    <td>₹{product.price.raw}</td>
                                    <td>{product.quantity}</td>
                                    <td>
                                        <div className='d-flex gap-1'><QuantityChangeBtn text={'+'} quntity={product.quantity+1} itemId={product.id}/>
                                        <QuantityChangeBtn text={'-'} quntity={product.quantity-1} itemId={product.id}/>
                                       </div>
                                        
                                    </td>
                                    <td>₹{product.line_total && product.line_total.raw}</td>
                                    <td><DeleteProductFrmCartBtn itemId={product.id} /></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>:<div className='m-2 row justify-content-center'>
            <img alt='no data'style={{width:500}}  src={"https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?t=st=1719467240~exp=1719467840~hmac=979aa5d103aeec227b5d5a2a9a56765ab906a35bd5f885254f6a2565b0aa7520"}/>
               
                </div>
            }
                <div className='row align-items-center mt-3'>
                    <div className="col-md-6 col-12">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title mb-2 ">Cart Total Details</h5>
                                <hr />
                                <p className=''>Subtotal: ₹{cartData?.subtotal && cartData.subtotal.raw}</p>
                                <hr />
                                <p>Shipping Fee: Free</p>
                                <hr />
                                <p>Total: ${cartData?.subtotal && cartData.subtotal.raw}</p>
                                <hr />
                                <button className="btn btn-warning btn-block pay-btn">Proceed to Pay</button>
                                
                                <ClearAllBtn/>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="input-group">
                            <input type="text" className="form-control promocode-input" placeholder="Enter Promo Code" />
                            <button className="btn btn-secondary promocode-btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;