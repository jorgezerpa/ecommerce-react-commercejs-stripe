import Commerce from '@chec/commerce.js';

//Commerce took some parameters:
//     1. API key (public key)
//     2. BOOLEAN (meaning that this is going to create a new ecommerce store  

export const commerce = new Commerce('pk_39198eb938128dc8a7462215e114e7736f43de288c702', true);


            //solve the enviroment problem
// export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);
