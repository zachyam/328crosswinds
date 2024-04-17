import React, { useEffect } from 'react';
import { filter, orderBy } from 'lodash';
import {
  Box,
  Grid,
  Stack,
  CardContent,
  useMediaQuery,
  Typography,
  Rating,
  Fab,
  Tooltip,
  Button,
  Skeleton,
  CardMedia,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProducts,
  addToCart,
  filterReset,
} from '../../../../store/apps/eCommerce/EcommerceSlice';
import ProductSearch from './ProductSearch';
import { IconBrandAmazon, IconMenu2 } from '@tabler/icons';
import AlertCart from '../productCart/AlertCart';
import emptyCart from 'src/assets/images/products/empty-shopping-cart.svg';
import BlankCard from '../../../shared/BlankCard';
import AmazonLogo from 'src/assets/images/logos/amazon.svg';

const ProductList = ({ onClick }) => {
  const dispatch = useDispatch();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const getVisibleProduct = (products, sortBy, filters, search) => {
    // SORT BY
    if (sortBy === 'newest') {
      products = orderBy(products, ['created'], ['desc']);
    }
    if (sortBy === 'priceDesc') {
      products = orderBy(products, ['price'], ['desc']);
    }
    if (sortBy === 'priceAsc') {
      products = orderBy(products, ['price'], ['asc']);
    }
    if (sortBy === 'discount') {
      products = orderBy(products, ['discount'], ['desc']);
    }

    // FILTER PRODUCTS
    if (filters.category !== 'All') {
      //products = filter(products, (_product) => includes(_product.category, filters.category));
      products = products.filter((_product) => _product.category.includes(filters.category));
    }

    //FILTER PRODUCTS BY GENDER
    if (filters.gender !== 'All') {
      products = filter(products, (_product) => _product.gender === filters.gender);
    }

    //FILTER PRODUCTS BY GENDER
    if (filters.color !== 'All') {
      products = products.filter((_product) => _product.colors.includes(filters.color));
    }

    //FILTER PRODUCTS BY Search
    if (search !== '') {
      products = products.filter((_product) =>
        _product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
      );
    }

    //FILTER PRODUCTS BY Price
    if (filters.price !== 'All') {
      const minMax = filters.price ? filters.price.split('-') : '';
      products = products.filter((_product) =>
        filters.price ? _product.price >= minMax[0] && _product.price <= minMax[1] : true,
      );
    }

    return products;
  };

  const getProducts = useSelector((state) =>
    getVisibleProduct(
      state.ecommerceReducer.products,
      state.ecommerceReducer.sortBy,
      state.ecommerceReducer.filters,
      state.ecommerceReducer.productSearch,
    ),
  );

  // for alert when added something to cart
  const [cartalert, setCartalert] = React.useState(false);

  const handleClick = (link) => {
    window.open(link, '_blank'); // Open externalLink in a new tab
  };

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setCartalert(false);
  };

  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      {/* ------------------------------------------- */}
      {/* Header Detail page */}
      {/* ------------------------------------------- */}
      <Stack direction="row" justifyContent="space-between" pb={3}>
        {lgUp ? (
          <Typography variant="h5">Products</Typography>
        ) : (
          <Fab onClick={onClick} color="primary" size="small">
            <IconMenu2 width="16" />
          </Fab>
        )}
        <Box>
          <ProductSearch />
        </Box>
      </Stack>

      {/* ------------------------------------------- */}
      {/* Page Listing product */}
      {/* ------------------------------------------- */}
      <Grid container spacing={3}>
        {getProducts.length > 0 ? (
          <>
            {getProducts.map((product) => (
              <Grid
                item
                xs={12}
                lg={4}
                md={4}
                sm={6}
                display="flex"
                alignItems="stretch"
                key={product.id}
              >
                {/* ------------------------------------------- */}
                {/* Product Card */}
                {/* ------------------------------------------- */}

                <BlankCard className="hoverCard">
                  <Typography
                    onMouseEnter={(e) => {
                      e.target.style.cursor = 'pointer'; // Change cursor to pointer on hover
                    }}
                    onClick={() => handleClick(product.link)}>
                    {isLoading || !product.photo ? (
                      <>
                        <Skeleton variant="square" width={270} height={300}></Skeleton>
                      </>
                    ) : (
                      <CardMedia
                        component="img"
                        width="100%"
                        height="200px"
                        image={product.photo}
                        alt="products"
                      />
                    )}
                  </Typography>
                  <Tooltip title="Purchase on Amazon">
                    <Fab
                      size="small"
                      color="green"
                      onClick={() => handleClick(product.link)}
                      sx={{ bottom: '75px', right: '15px', position: 'absolute' }}
                    >
                      <img src={AmazonLogo} alt="cart" width="30" />
                    </Fab>
                  </Tooltip>
                  <CardContent sx={{ p: 3, pt: 2 }}>
                    <Typography variant="h6">{product.title}</Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      mt={1}
                    >
                    </Stack>
                  </CardContent>
                </BlankCard>

                <AlertCart handleClose={handleClose} openCartAlert={cartalert} />
                {/* ------------------------------------------- */}
                {/* Product Card */}
                {/* ------------------------------------------- */}
              </Grid>
            ))}
          </>
        ) : (
          <>
            <Grid item xs={12} lg={12} md={12} sm={12}>
              <Box textAlign="center" mt={6}>
                <img src={emptyCart} alt="cart" width="200px" />
                <Typography variant="h2">There is no product</Typography>
                <Typography variant="h6" mb={3}>
                  Sorry! There is no such product.
                </Typography>
                <Button variant="contained" onClick={() => dispatch(filterReset())}>
                  Try Again
                </Button>
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default ProductList;
