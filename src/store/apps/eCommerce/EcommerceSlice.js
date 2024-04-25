import axios from '../../../utils/axios';
import { filter, map } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const API_URL = '/api/data/eCommerce/ProductsData';

const initialState = {
  products: [],
  productSearch: '',
  sortBy: 'newest',
  cart: [],
  total: 0,
  filters: {
    category: 'All',
    color: 'All',
    gender: 'All',
    price: 'All',
    rating: '',
  },
  error: ''
};

// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  databaseURL: "https://reno-eb105-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export const EcommerceSlice = createSlice({
  name: 'ecommerce',
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },
    // GET PRODUCTS
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    SearchProduct: (state, action) => {
      state.productSearch = action.payload;
    },
    setVisibilityFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
    //  SORT  PRODUCTS
    sortByProducts(state, action) {
      state.sortBy = action.payload;
    },
    //  SORT  PRODUCTS
    sortByGender(state, action) {
      state.filters.gender = action.payload.gender;
    },
    //  SORT  By Color
    sortByColor(state, action) {
      state.filters.color = action.payload.color;
    },
    //  SORT  By Color
    sortByPrice(state, action) {
      state.filters.price = action.payload.price;
    },
    //  FILTER PRODUCTS
    filterProducts(state, action) {
      state.filters.category = action.payload.category;
    },
    //  FILTER Reset
    filterReset(state) {
      state.filters.category = 'All';
      state.filters.color = 'All';
      state.filters.gender = 'All';
      state.filters.price = 'All';
      state.sortBy = 'newest';
    },
    // ADD TO CART
    addToCart(state, action) {
      const product = action.payload;
      state.cart = [...state.cart, product];
    },
    // qty increment
    increment(state, action) {
      const productId = action.payload;
      const updateCart = map(state.cart, (product) => {
        if (product.id === productId) {
          return {
            ...product,
            qty: product.qty + 1,
          };
        }
        return product;
      });

      state.cart = updateCart;
    },
    // qty decrement
    decrement(state, action) {
      const productId = action.payload;
      const updateCart = map(state.cart, (product) => {
        if (product.id === productId) {
          return {
            ...product,
            qty: product.qty - 1,
          };
        }
        return product;
      });

      state.cart = updateCart;
    },
    // delete Cart
    deleteCart(state, action) {
      const updateCart = filter(state.cart, (item) => item.id !== action.payload);
      state.cart = updateCart;
    },
  },
});
export const {
  hasError,
  getProducts,
  SearchProduct,
  setVisibilityFilter,
  sortByProducts,
  filterProducts,
  sortByGender,
  increment,
  deleteCart,
  decrement,
  addToCart,
  sortByPrice,
  filterReset,
  sortByColor,
} = EcommerceSlice.actions;

async function storeUserIPInformation() {
  const currentDateTime = new Date().toISOString();
  const response = await fetch('https://api.ipify.org?format=json');
  const data = await response.json();
  set(ref(database, 'ipAddress/'), {
    timeStamp: currentDateTime,
    ipAddress: data["ip"]
  });
}

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}`);
    storeUserIPInformation();
    dispatch(getProducts(response.data));
  } catch (error) {
    dispatch(hasError(error));
  }
};

export default EcommerceSlice.reducer;
