import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/ProductDetails.css';

import jutegunnybag from '../../assets/jutegunnybags.jpg';
import jutehessianclothe from '../../assets/jutehessiancloth.jpg';
import juteyarn from '../../assets/juteyarn.jpg';
import propylenebags from '../../assets/propylenebags.jpg';
import boppfilms from '../../assets/boppfilms.jpg';
import lenomeshbags from '../../assets/lenomeshbag.png';
import balingtwine from '../../assets/balingtwine.png';
import juteyarn163 from '../../assets/juteyarn163.jpg';

const products = [
  {
    id: 1,
    name: 'Jute Gunny Bags',
    description: 'Durable and eco-friendly gunny bags made from high-quality jute, perfect for agricultural use.',
    imageUrl: jutegunnybag,
    price: '25 USD',
    availability: 'In Stock',
    purchaseLink: 'https://www.ebay.com/itm/224593886268'
  },
  {
    id: 2,
    name: 'Jute Hessian Cloth',
    description: 'Natural hessian cloth made from jute fibers, ideal for crafting and packaging.',
    imageUrl: jutehessianclothe,
    price: '15 USD',
    availability: 'In Stock',
    purchaseLink: 'https://www.amazon.co.uk/1m-100-Natural-Hessian-Fabric/dp/B08BZV5WFN?th=1'
  },
  {
    id: 3,
    name: 'Jute Yarn 28/1',
    description: 'Strong and versatile jute yarn, suitable for various industrial applications.',
    imageUrl: juteyarn,
    price: '10 USD',
    availability: 'In Stock',
    purchaseLink: 'https://www.indiamart.com/proddetail/jute-yarn-19323820688.html'
  },
  {
    id: 4,
    name: 'Jute Yarn 16/3',
    description: 'High-quality jute yarn with a thicker gauge for specific textile needs.',
    imageUrl: juteyarn163,
    price: '12 USD',
    availability: 'In Stock',
    purchaseLink: 'https://musajute.com/product/colour-jute-yarn/'
  },
  {
    id: 5,
    name: 'Baling Twin Rope',
    description: 'Sturdy baling twine rope, ideal for bundling and securing agricultural products.',
    imageUrl: balingtwine,
    price: '8 USD',
    availability: 'In Stock',
    purchaseLink: 'https://www.ehow.com/list_7343448_crafts-make-baling-twine.html'
  },
  {
    id: 6,
    name: 'Polypropylene Bags',
    description: 'Durable and lightweight polypropylene bags, great for packaging and storage.',
    imageUrl: propylenebags,
    price: '20 USD',
    availability: 'In Stock',
    purchaseLink: 'https://flexpack.com/product/white-standard-woven-polypropylene-bags-without-tie-strings/'
  },
  {
    id: 7,
    name: 'Leno Mesh Bags',
    description: 'Breathable and flexible leno mesh bags, suitable for packaging fruits and vegetables.',
    imageUrl: lenomeshbags,
    price: '15 USD',
    availability: 'In Stock',
    purchaseLink: 'https://europlas.com.vn/en-US/blog-1/what-is-bopp-plastic-film-bopp-film-manufacturing-process'
  },
  {
    id: 8,
    name: 'BOPP Films',
    description: 'High-quality BOPP films for versatile packaging applications.',
    imageUrl: boppfilms,
    price: '30 USD',
    availability: 'In Stock',
    purchaseLink: 'https://europlas.com.vn/en-US/blog-1/what-is-bopp-plastic-film-bopp-film-manufacturing-process'
  },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
    
    <div className="product-content" style={{marginTop:'60px'}}>
      <img src={product.imageUrl} alt={product.name} className="detail-image" />
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p><strong>Price:</strong> {product.price}</p>
        <p><strong>Availability:</strong> {product.availability}</p>
       
      </div>
    </div>
  </div>
  
  );
}

export { ProductDetailPage };
