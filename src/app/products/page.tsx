import React from 'react';
import Card from '../components/Card/Card';
import { ProductServices } from '../services/productServices';
import { Category, Product } from '../types/types';
import Link from 'next/link';
import FilterButton from '../components/FilterButton/FilterButton';

type PageProps = {
  params: { [key: string]: any };
  searchParams: { [key: string]: string };
};

async function page(prop: PageProps) {
  const products = await ProductServices.getProducts();
  const category = await ProductServices.getCat();

  let filteredProducts = products;

  if (prop.searchParams.cat) {
    filteredProducts = products.filter((p: Product) => p.categories[0].id === prop.searchParams.cat);
  }else if(prop.searchParams.product){
    filteredProducts = products.filter((p: Product) => p.name.toLowerCase().includes(prop.searchParams.product.toLowerCase()));
 }

  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col">
          <h2 className="text-center">Products</h2>
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
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {filteredProducts.map((p: Product) => (
          <div className="col" key={p.id}>
            <Card pdData={p} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
