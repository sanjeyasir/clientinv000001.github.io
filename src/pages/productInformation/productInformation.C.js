// src/components/ProductGrid.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ProductGrid.css'; // Optional for styling
import { Box, Typography } from '@mui/material';
import islandjuteimg from '../../assets/AJTraders.png';

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
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '15px', padding: '10px', justifyContent: 'center' }}>
      {products.map((product) => (
        <Box
          key={product.id}
          sx={{
            position: 'relative',
            width: '300px',
            height: '300px', // Adjust height as needed
            overflow: 'hidden',
            borderRadius: '10px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            },
          }}
        >
          <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'opacity 0.3s ease',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                '&:hover': {
                  opacity: 1,
                },
                borderRadius: '10px',
              }}
            >
              <img src={islandjuteimg} alt="Logo" style={{ height: '40px', width: '40px' }} />
              <Typography variant="h6" sx={{ mb: 2 }}>
                {product.name}
              </Typography>
            </Box>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export {ProductGrid};
