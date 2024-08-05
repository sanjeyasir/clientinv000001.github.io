// src/components/ProductGrid.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ProductGrid.css'; // Optional for styling

import jutegunnybag from '../../assets/jutegunnybags.jpg';//https://www.ebay.com/itm/224593886268
import jutehessianclothe from '../../assets/jutehessiancloth.jpg';//https://www.amazon.co.uk/1m-100-Natural-Hessian-Fabric/dp/B08BZV5WFN?th=1
import juteyarn from '../../assets/juteyarn.jpg';//https://www.indiamart.com/proddetail/jute-yarn-19323820688.html
import propylenebags from '../../assets/propylenebags.jpg' //https://flexpack.com/product/white-standard-woven-polypropylene-bags-without-tie-strings/
import boppfilms from '../../assets/boppfilms.jpg' //https://europlas.com.vn/en-US/blog-1/what-is-bopp-plastic-film-bopp-film-manufacturing-process
import lenomeshbags from '../../assets/lenomeshbag.png' //https://europlas.com.vn/en-US/blog-1/what-is-bopp-plastic-film-bopp-film-manufacturing-process
import balingtwine from '../../assets/balingtwine.png' //https://www.ehow.com/list_7343448_crafts-make-baling-twine.html
import juteyarn163 from '../../assets/juteyarn163.jpg' //https://musajute.com/product/colour-jute-yarn/


const products = [
  {
    id: 1,
    name: 'Jute Gunny Bags',
    description: 'Description for Product 1',
    imageUrl: jutegunnybag
  },
  {
    id: 2,
    name: 'Jute Hessian Cloth',
    description: 'Description for Product 2',
    imageUrl: jutehessianclothe
  },
  {
    id: 3,
    name: 'Jute Yarn 28/1',
    description: 'Description for Product 2',
    imageUrl: juteyarn
  },
  {
    id: 4,
    name: 'Jute Yarn 16/3',
    description: 'Description for Product 2',
    imageUrl: juteyarn163
  },
  {
    id: 5,
    name: 'Baling Twin Rope',
    description: 'Description for Product 2',
    imageUrl: balingtwine
  },
  {
    id: 6,
    name: 'Polypropylene Bags',
    description: 'Description for Product 2',
    imageUrl: propylenebags
  },
  {
    id: 7,
    name: 'Leno Mesh Bags',
    description: 'Description for Product 2',
    imageUrl: lenomeshbags
  },
  {
    id: 8,
    name: 'BOPP Films',
    description: 'Description for Product 2',
    imageUrl: boppfilms
  },
];

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/products/${product.id}`}>
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export {ProductGrid};
