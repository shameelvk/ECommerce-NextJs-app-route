'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ProductServices } from '../services/productServices';

type CartCountContextType = {
  cartCount: number;
  updateCartCount: (count: number) => void;
};

const CartCountContext = createContext<CartCountContextType | undefined>(undefined);

export const useCartCount = () => {
  const context = useContext(CartCountContext);
  if (!context) {
    throw new Error('useCartCount must be used within a CartCountProvider');
  }
  return context;
};

type CartCountProviderProps = {
  children: ReactNode;
};

export const CartCountProvider: React.FC<CartCountProviderProps> = ({ children }) => {
    useEffect(() => {
      const getInitalCart=async()=>{
        let cartData=await ProductServices.getCartData()
        setCartCount(cartData.total_unique_items)
      }
    
      getInitalCart()
      
    }, [])
    
  const [cartCount, setCartCount] = useState<number>(0);

  const updateCartCount = (count: number) => {
    setCartCount(count);
  };

  return (
    <CartCountContext.Provider value={{ cartCount, updateCartCount }}>
      {children}
    </CartCountContext.Provider>
  );
};
