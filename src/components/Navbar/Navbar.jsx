import React from 'react';

        //the Badge is normally use for represent notificacions, objects number on card...
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

        //logo
import Logo from '../../assets/logo.png';

import useStyles from './styles';

const Navbar = ({totalItems}) => {

    const classes=useStyles();
    const location= useLocation();


  return(
    <>
        <AppBar position='fixed' className={classes.appBar } color="inherit">
            <Toolbar>
                <Typography component={Link} to="/" variant="h6" className={classes.title} color='inherit' >
                    <img src={Logo} alt="logo" height="25px" className={classes.image} />
                    commerce.js
                </Typography>
                
                <div className='{classes.grow' />

            {location.pathname==='/' && (
                <div className={classes.button}>
                    <IconButton component={Link} to="/cart" arial-label="show cart items" color="inherit">
                                {/* badgeContent have to be in function of real data, put 2 just by now  */}
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>

                </div>
                )}
            </Toolbar>
        </AppBar>
    </>
  )
};

export default Navbar;
