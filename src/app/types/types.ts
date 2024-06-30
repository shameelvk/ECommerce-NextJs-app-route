export type Price = {
    raw: number;
    formatted: string;
    formatted_with_symbol: string;
    formatted_with_code: string;
  };
  
  export type Inventory = {
    managed: boolean;
    available: number;
  };
  
  export type Conditionals = {
    is_active: boolean;
    is_tax_exempt: boolean;
    is_pay_what_you_want: boolean;
    is_inventory_managed: boolean;
    is_sold_out: boolean;
    has_digital_delivery: boolean;
    has_physical_delivery: boolean;
    has_images: boolean;
    collects_fullname: boolean;
    collects_shipping_address: boolean;
    collects_billing_address: boolean;
    collects_extra_fields: boolean;
  };
  
  export type Is = {
    active: boolean;
    tax_exempt: boolean;
    pay_what_you_want: boolean;
    inventory_managed: boolean;
    sold_out: boolean;
  };
  
  export type Has = {
    digital_delivery: boolean;
    physical_delivery: boolean;
    images: boolean;
  };
  
  export type Collects = {
    fullname: boolean;
    shipping_address: boolean;
    billing_address: boolean;
    extra_fields: boolean;
  };
  
  export type CheckoutUrl = {
    checkout: string;
    display: string;
  };
  
  export type Category = {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    products: number;
    created: number;
    updated: number;
  };
  
  export type Image = {
    id: string;
    url: string;
    description: string | null;
    is_image: boolean;
    filename: string;
    file_size: number;
    file_extension: string;
    image_dimensions: {
      width: number;
      height: number;
    };
    meta: any[];
    created_at: number;
    updated_at: number;
  };
  
  export type Product = {
    id: string;
    created: number;
    updated: number;
    active: boolean;
    permalink: string;
    name: string;
    description: string;
    price: Price;
    inventory: Inventory;
    sku: string;
    sort_order: number;
    seo: {
      title: string | null;
      description: string | null;
    };
    thank_you_url: string | null;
    meta: any | null;
    conditionals: Conditionals;
    is: Is;
    has: Has;
    collects: Collects;
    checkout_url: CheckoutUrl;
    categories: Category[];
    image: Image;
  };