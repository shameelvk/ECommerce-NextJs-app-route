'use client';
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import './Navbar.css';
import { ProductServices } from '@/app/services/productServices';
import { useCartCount } from '@/app/contexts/CartCoutContext';

function NavBar() {
    const [searchText, setSearchText] = useState('')
   
    const route=useRouter()
    const {cartCount}=useCartCount()
    

    const handleSubmit=()=>{
       
        route.push(`/products/?product=${searchText}`)
    }
   
    

    
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">EComm</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link href={'/'} className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={'/products'} className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={'/about-us'} className="nav-link">About Us</Link>
                            </li>
                        </ul>
                        <div className="d-flex mx-auto my-2 my-lg-0 nav-search">
                            <input
                                className="form-control me-2 search-input"
                                type="search"
                                placeholder="Search Products"
                                aria-label="Search"
                                value={searchText}
                                onChange={(e)=>setSearchText(e.target.value)}

                            />
                            <button className="btn btn-outline-success" onClick={handleSubmit} >Search</button>

                        </div>

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href={'/contact-us'} className="nav-link">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                            <Link href={'/cart'} className="nav-link cart-nav">
                                <img src={'https://static-00.iconduck.com/assets.00/cart-icon-502x512-60inykbf.png'} alt="" style={{ width: "2vw" }} className='cart-img' />
                                <div className="cart-count">
                                    {cartCount}
                                </div>
                            </Link>
                        </li>
                          

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar