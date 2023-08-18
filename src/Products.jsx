import React, {useEffect, useState} from 'react'
import Product from './Product';

import axios from 'axios';





const api = 'https://fakestoreapi.com/products';
const {data: fetch_shop} = await axios.get(api);

function Products() {
    const [products, setProducts] = useState([]);

    console.log(fetch_shop);

    


  return (
    <div>
        {fetch_shop.map((fetch_shop) => (
            <Product key={fetch_shop?.id} {...fetch_shop} />
        ))}
    </div>
  )
}

export default Products