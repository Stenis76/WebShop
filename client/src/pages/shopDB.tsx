import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductFetcher() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3002/api/product')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    })
    
    return (
        <div>

        </div>
    )
}




export default ProductFetcher;