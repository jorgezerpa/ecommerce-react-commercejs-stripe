import React from 'react';
 
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useState } from 'react';

import useStyles from './styles';

import { commerce } from '../../../lib/commerce';

import AdressForm from '../AdressForm';
import PaymentForm from '../PaymentForm';
import { useEffect } from 'react';


const steps = ['Shipping address', 'Payment details'];

const Checkout = ({cart, order, onCaptureCheckout, error}) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});
    const [checkoutToken, setCheckoutToken] = useState(null);


    useEffect(()=>{
        const generateToken = async ()=>{
            try{
               const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});
            
               setCheckoutToken(token);
            }
            catch(error){
                console.log(error)
            }
        }
    
        generateToken();
    }, [cart]);


    const nextStep= ()=>{
        setActiveStep((prevStep)=>prevStep+1)
    }

    const backStep= ()=>{
        setActiveStep((prevStep)=>prevStep-1)
    }

    const next = (data)=>{
        setShippingData(data);
        nextStep();
    }

    let Confirmation = ()=> order.customer ? (
        <>
            <div>
                <Typography variant='h5'>Thank you for your purchase, {order.customer.firstname} {order.customer.lastname} </Typography>
                <Divider className={classes.divider} />
                <Typography variant='subtitle2'>order ref: {order.customer.reference}</Typography>
            </div>
            <Button component={Link} to="/" variant='outlined' type='button'>Back to Home</Button>
        </>    
    ) : (
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    )
    
    if(error){
        <>
            <Typography variant='h5'>
                    error: {error}
            </Typography>
            <br />
             <Button component={Link} to="/" variant='outlined' type='button'>Back to Home</Button>
        </>
    }

    const Form = ()=> activeStep===0
        ? <AdressForm checkoutToken={checkoutToken} next={next} />
            //shipping data is getted from the adress form, and stored on shippingData to use it on Payment form 
        : <PaymentForm shippingData={shippingData} nextStep={nextStep} checkoutToken={checkoutToken} backStep={backStep} onCaptureCheckout={onCaptureCheckout}/>;


  return(
      <>
        <div className={classes.toolbar} />
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant='h4' align='center'>Checkout</Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((step)=>(
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>   
                    ))}
                </Stepper>
                    {activeStep===steps.length ? <Confirmation /> : checkoutToken && <Form />}
            
            </Paper>
        </main>
      </>
  )
};

export default Checkout;
