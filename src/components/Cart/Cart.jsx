import React from 'react';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';

import { Link } from 'react-router-dom';

import { Container, Typography, Button, Grid } from '@material-ui/core'



const Cart = ({ 
                cart,
                handleUpdateCartQuantity,
                handleRemoveFromCart,
                handleEmptyCart
                }) => {
    const classes = useStyles();

    const EmptyCart= ()=>(
        <Typography variant='subtitle1'>
            You have no items in your shopping cart,
            <Link to="/" className={classes.link}>start adding some!</Link> 
        </Typography>
    )
    const FilledCart=()=>(
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item)=>(
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} handleUpdateCartQuantity={handleUpdateCartQuantity} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className={ classes.cardDetails }>
                <Typography variant="h4">subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                <Button className={classes.emptyBottom} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                <Button component={Link} to ="/checkout" className={classes.checkoutBottom} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    )

    const Loading=()=>(
        <div className={classes.loading}>Loading...</div>
    )

   {if(!cart.line_items)return <Loading />}

  return (
      <Container>
          <div className={classes.toolbar}>
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
          </div>
            {cart.line_items.length===0 ? <EmptyCart /> : <FilledCart />}

      </Container>
  )
};

export default Cart;
