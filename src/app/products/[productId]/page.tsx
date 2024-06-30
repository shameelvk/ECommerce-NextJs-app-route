import React from 'react'
import { ProductServices } from '@/app/services/productServices';
import { Product } from '@/app/types/types';
import AddToCartBtn from '@/app/components/AddToCartBtn/AddToCartBtn';

type PageProps = {
    params: {
        productId: string;
    };
    searchParams: {};
};
async function page(props: PageProps) {
    var product: Product = await ProductServices.getProductById(props.params.productId)
    
  

   


    return (
        <div className="container">


            <div className="row align-items-center justify-content-center p-2 my-2">
                <div className="col-md-6 d-flex">
                    {product.image && <img src={product.image.url} className="img-fluid pd-img m-auto" alt="Product" style={{ width: "70%" }} />}
                </div>
                <div className="col-md-6">
                    <h2>{product.name}</h2>
                    <p>{product.description.slice(3,-4)}</p>
                    <p>Price: ₹{product.price?.raw}</p>
                    <AddToCartBtn prdId={product.id}/>
                    
                    </div>
            </div>



        </div>
    )
}

export default page