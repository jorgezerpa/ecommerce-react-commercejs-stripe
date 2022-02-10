import Commerce from '@chec/commerce.js';

//Commerce took some parameters:
//     1. API key (public key)
//     2. BOOLEAN (meaning that this is going to create a new ecommerce store  


    //two type of keys=> sanbox (for testing) and ondirect(for "real life")
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);

            //solve the enviroment problem
// export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);
