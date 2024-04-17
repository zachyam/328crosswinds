import React, { useState } from 'react';
import { sum } from 'lodash';
import { IconShoppingCart, IconX } from '@tabler/icons';
import { Box, Typography, Badge, Drawer, IconButton, Button, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItems from './CartItems';

const Cart = () => {
  // Get Products
  const Cartproduct = useSelector((state) => state.ecommerceReducer.cart);
  const bcount = Cartproduct.length > 0 ? Cartproduct.length : '0';

  const checkout = useSelector((state) => state.ecommerceReducer.cart);
  const total = sum(checkout.map((product) => product.price * product.qty));

  const [showDrawer, setShowDrawer] = useState(false);
  const handleDrawerClose = () => {
    setShowDrawer(false);
  };

  const cartContent = (
    <Box>
      {/* ------------------------------------------- */}
      {/* Cart Content */}
      {/* ------------------------------------------- */}
      <Box>
        <CartItems />
      </Box>
    </Box>
  );

  return (
    <div> </div>
    // <Box>
    //   <IconButton
    //     size="large"
    //     color="inherit"
    //     onClick={() => setShowDrawer(true)}
    //     sx={{
    //       ...(showDrawer && {
    //         color: 'primary.main',
    //       }),
    //     }}
    //   >
    //     <Badge color="error" badgeContent={bcount}>
    //       <IconShoppingCart size="21" stroke="1.5" />
    //     </Badge>
    //   </IconButton>
    //   {/* ------------------------------------------- */}
    //   {/* Cart Sidebar */}
    //   {/* ------------------------------------------- */}
    //   <Drawer
    //     anchor="right"
    //     open={showDrawer}
    //     onClose={() => setShowDrawer(false)}
    //     PaperProps={{ sx: { maxWidth: '500px' } }}
    //   >
    //     <Box display="flex" alignItems="center" p={3} pb={0} justifyContent="space-between">
    //       <Typography variant="h5" fontWeight="500">
    //         Shopping Cart
    //       </Typography>
    //       <Box>
    //         <IconButton
    //           color="inherit"
    //           sx={{
    //             color: (theme) => theme.palette.grey.A200,
    //           }}
    //           onClick={handleDrawerClose}
    //         >
    //           <IconX size="1rem" />
    //         </IconButton>
    //       </Box>
    //     </Box>

    //     {/* component */}
    //     {cartContent}
    //     {/* ------------------------------------------- */}
    //     {/* Checkout  */}
    //     {/* ------------------------------------------- */}
    //     <Box px={3} mt={2}>
    //       {Cartproduct.length > 0 ? (
    //         <>
    //           <Stack direction="row" justifyContent="space-between" mb={3}>
    //             <Typography variant="subtitle2" color="textSecondary" fontWeight={400}>
    //               Total
    //             </Typography>
    //             <Typography variant="subtitle2" color="textSecondary">
    //               ${total}
    //             </Typography>
    //           </Stack>
    //           <Button
    //             fullWidth
    //             component={Link}
    //             to="/apps/ecommerce/eco-checkout"
    //             variant="contained"
    //             color="primary"
    //           >
    //             Checkout
    //           </Button>
    //         </>
    //       ) : (
    //         ''
    //       )}
    //     </Box>
    //   </Drawer>
    // </Box>
  );
};

export default Cart;
