

import { ObjectId } from 'mongodb'
import client from './db_config'
const SSLCommerzPayment = require('sslcommerz-lts')
const db = client.db('ghurunti')


const store_id = process.env.STORE_ID
const store_passwd = process.env.STORE_PASSWORD
const is_live = false //true for live, false for sandbox

const blog = async (req, res) =>{

     const productCollection = db.collection('payment')
     if(req.method == "GET"){
          res.send({name: 'Ibrahim Sikder'})
     }
     else if(req.method == "POST"){
      const product = productCollection.findOne({ _id: new ObjectId(req.body.productId )});
      console.log(product)
          const post = req.body;
          const data = {
            total_amount: 100,
            currency: 'BDT',
            tran_id: 'REF123', // use unique tran_id for each api call
            success_url: 'http://localhost:3030/success',
            fail_url: 'http://localhost:3030/fail',
            cancel_url: 'http://localhost:3030/cancel',
            ipn_url: 'http://localhost:3030/ipn',
            shipping_method: 'Courier',
            product_name: 'Computer.',
            product_category: 'Electronic',
            product_profile: 'general',
            cus_name: 'Customer Name',
            cus_email: 'customer@example.com',
            cus_add1: 'Dhaka',
            cus_add2: 'Dhaka',
            cus_city: 'Dhaka',
            cus_state: 'Dhaka',
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: '01711111111',
            cus_fax: '01711111111',
            ship_name: 'Customer Name',
            ship_add1: 'Dhaka',
            ship_add2: 'Dhaka',
            ship_city: 'Dhaka',
            ship_state: 'Dhaka',
            ship_postcode: 1000,
            ship_country: 'Bangladesh',
        };

        // const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
        // sslcz.init(data).then(apiResponse => {
        //     // Redirect the user to payment gateway
        //     let GatewayPageURL = apiResponse.GatewayPageURL
        //     res.redirect(GatewayPageURL)
        //     console.log('Redirecting to: ', GatewayPageURL)
        // });

        
     }
}

export default blog