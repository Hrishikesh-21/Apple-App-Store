import React, { useState } from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from "./Sidebar";
import { useDispatch, useSelector } from 'react-redux';
import { ProductsContainer, ProductWrapper, ProductsHeading, ProductInfo, ProductTitle, ProductCard, ProductImg, ProductDesc, ProductPrice, ProductButton } from '../Products/Products';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { DeleteItem, Total, addToCart, removefromcart } from '../../ReduxStore/Counter';

const Sidebar = ({ isOpen, toggle }) => {
  debugger

  const [count, setcount] = useState(0);
  const Items = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  console.log(Items, "Items")

  return (
    <SidebarContainer isOpen={isOpen} >
      <Icon onClick={toggle}>
        <CloseIcon />

      </Icon>


      {Items.productData.map((product, index) => {
        debugger
        return (

          <ProductCard key={index}>
            <img src={product.img} alt={product.alt} style={{
              maxWidth: "200px",
              maxHeight: "200px",
              display: 'flex',
              justifyContent: "center",
              overflow:'scroll'
            }} />
            <ProductInfo>
              <title>{product.name}</title>
              <h2>{product.price}</h2>
              <div style={{ display: 'flex', justifyContent: 'center', margin: "10px" }}>
                <button style={{padding:"10px",margin:"10px"}}
                onClick={() => dispatch(addToCart(product))}
                >+</button>
                <h2>{product.count}</h2>
                <button style={{padding:"10px",margin:"10px"}}
                  onClick={() => dispatch(removefromcart(product))}>-
                </button>
                <DeleteOutlineIcon
                style={{alignItems:'center'}}
                onClick={()=>{
                  dispatch(DeleteItem(product))
                }}
                />
              </div>
            </ProductInfo>
          </ProductCard>
        )
      })}

      <SideBtnWrap>
        <button onClick={() => dispatch(Total(Items.productData))}>Calculate Total</button>
        <h2>Total:{Items.total}</h2>


        {/* <SidebarRoute to="/">Order Now</SidebarRoute> */}
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
