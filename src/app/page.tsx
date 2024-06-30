import React from 'react'
import Carousel from './components/Banner/Banner'
import { ProductServices } from './services/productServices';
import { Category, Product } from './types/types';
import Card from './components/Card/Card';
import FilterButton from './components/FilterButton/FilterButton';
import Link from 'next/link';

async function Home() {
  let products = await ProductServices.getProducts();
  let category=await ProductServices.getCat()

  return (
    <div>
      <Carousel/>
      <div className="container py-4">
            <div className="row">
                <div className="col">
                    <h2 className="text-center mb-4">Products</h2>
                </div>
            </div>
            <div className="row mb-4 justify-content-center">
        <div className="col-12 col-md-auto mb-2">
          <Link className="btn btn-danger w-100" href="/products">ALL</Link>
        </div>
        {category.map((c: Category) => (
          <div className="col-12 col-md-auto mb-2" key={c.id}>
            <FilterButton btnName={c.name} btnId={c.id}  />
          </div>
        ))}
      </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {products.map((p: Product) => {
                    return <div className="col" key={p.id}>
                        <Card pdData={p} />
                    </div>
                })}

            </div>
        </div>

    </div>
  )
}

export default Home