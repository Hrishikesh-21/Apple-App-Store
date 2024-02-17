import React, { useState } from 'react'
import { ProductsContainer, ProductWrapper, ProductsHeading, ProductInfo, ProductTitle, ProductCard, ProductImg, ProductDesc, ProductPrice, ProductButton } from "./Products";
import { useDispatch, useSelector } from 'react-redux';
import { Total, addToCart } from '../../ReduxStore/Counter';

const Products = ({ heading, data }) => {
  const [count, setcount] = useState(0);

  const dispatch = useDispatch()
  const Items = useSelector((state) => state.counter)

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton

                  onClick={() => {
                    debugger
                    dispatch(addToCart(
                      product
                    )
                    )
                  }}

                  

                >{product.button}</ProductButton>

              </ProductInfo>
            </ProductCard>
          )
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
