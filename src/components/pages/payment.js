import React from 'react'

import { toast } from 'react-toastify';
function Payment() {

    let promise = () => {
        const resolveAfter3Sec = new Promise(resolve => 
        setTimeout(resolve, 3000));
        toast.promise(
            resolveAfter3Sec,
            {
                pending: 'Processing  Payment',
                success: 'Payment Success',
                error: 'Payment Failed'
            }
        );
    }



    return (
        <div>


            <h1 className='text-center'>PAYMENT</h1>
            <div className="formDetails">

                <input type="text" placeholder='Card Holder Name' /><br /><br />
                <input type="text" placeholder='Card Number' /> <br /> <br />
                <input type="text" placeholder='MM/YY' /> <input type="password" placeholder='CVV' />
                <br />
                <br />
                <button onClick={promise} className=' paymentButton btn btn-primary'>Pay</button>
             

            </div>

        </div>
    )
}

export default Payment