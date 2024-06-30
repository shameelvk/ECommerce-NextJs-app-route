export class ProductServices{
    static async getProducts() {
         const response = await fetch('https://api.chec.io/v1/products?limit=26', {
           headers: {
             'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6',
             'Accept': 'application/json',
             'Content-Type': 'application/json'
           }
         });
         const data = await response.json();
         return data.data;
       }


       static async getProductById(prodctID:string){
        const response = await fetch('https://api.chec.io/v1/products/'+prodctID, {
          headers: {
            'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        const ProductData = await response.json();
        return ProductData;
      }


      static async getCat() {
        try {
          const response = await fetch('https://api.chec.io/v1/categories', {
            method: 'GET',
            headers: {
              'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6'
            }
          });
          
          if (!response.ok) {
            throw new Error('Failed to fetch category');
          }
    
          const data = await response.json();
          return data.data;
        } catch (error) {
          console.error('Error fetching categories:', error);
          return [];
        }
      }

      static getCartData = async () => {
        try {
          const response = await fetch('https://api.chec.io/v1/carts/cart_kpnNwAO9Og5mXB', {
            cache:"no-cache",
            method: 'GET',
            headers: {
                'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6'
            }
        });
          
console.log(response);

            if (!response.ok) {
                throw new Error('Failed to fetch cart data');

            }

            const cartsData = await response.json();
            
            
           return cartsData
            
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    static async addToCart(itemId: any) {
      try {
        const response = await fetch('https://api.chec.io/v1/carts/cart_kpnNwAO9Og5mXB/', {
          method: 'POST',
          headers: {
            'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: itemId,
            quantity: 1
          })
        });
  
        if (!response.ok) {
          throw new Error('Failed to add item to cart');
        }
  
        const data = await response.json();
        return data
        
      } catch (error) {
        console.error('Error adding item to cart:', error);
      }
    }
    


 }