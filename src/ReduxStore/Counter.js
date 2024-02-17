import { createSlice } from '@reduxjs/toolkit'
import { productData } from '../components/Products/data';

const initialState = {
  productData: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    Total: (state, action) => {
      const total = action.payload.reduce((acc, item) => {
        // Assuming item.price is a string like "From ₹xxx"
        const price = Number(item.price.replace("From ₹", ""));
        const count = item.count
        return acc + price * count;
      }, 0);

      state.total = total;
    },

    addToCart: (state, action) => {
      debugger
      const newItem = action.payload;
      const existingItem = state.productData.find(item => item.id === newItem.id);

      if (existingItem) {
        debugger
        // If the item is already in the cart, update its quantity
        return {
          ...state,
          productData: state.productData.map(item => {
            debugger
            return item.id === newItem.id ? { ...item, count: item.count + 1 } : item
          }
          ),
        }
      } else {
        // If the item is not in the cart, add it
        let initalitem = {
          ...newItem,
          count: 1
        }

        return {
          ...state,
          productData: [...state.productData, initalitem],
        }
      }


    },

    removefromcart: (state, action) => {
      debugger
      const newItem = action.payload;
      return {
        ...state,

        productData: state.productData.map((item) => {
          debugger
          if (item.id === newItem.id) {
            return { ...item, count: item.count - 1 }
          }
          else {
            return item
          }
        }),

        // productData: state.productData.map(item => {
        //   debugger
        //   return item.id === newItem.id ? { ...item, count: item.count + 1 } : item
        // }
        // ),


      }
    },

    DeleteItem: (state, action) => {
      debugger
      const productIndexToDelete = action.payload

      return {

        ...state,
        productData: state.productData.filter((item) => {
          if (item.id !== productIndexToDelete.id) {
            return item
          }
        })


      }







    }


  }
})

// Action creators are generated for each case reducer function
export const { addToCart, removefromcart, Total, DeleteItem } = counterSlice.actions

export default counterSlice.reducer