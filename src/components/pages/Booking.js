import axios from "axios";
import React from "react";
import { useState } from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './booking.css';
toast.configure()
const Booking = () => {

    

    const [order, setOrder] = useState({
        carModel: "",
        carName: "",
        contactno: "",
        date: "",
        orderId: "",
        username: "",
        washpackId: "",
        address: ""

    });


    const changeHandler = e => {
        setOrder({ ...order, [e.target.name]: e.target.value });
    }




    const submitHandler = () => {
        axios.post('http://localhost:8083/order/addorder', order)
            .then(res => {
                if (res.status === 200)

                    alert("Booked Successfully")


                else
                    Promise.reject()
            })
            .catch(err => alert('Something went wrong'))
    }
  




    return (
        <>

            <div className="formTop">
                <div className="formTitle">
                    <p className="c1"><h1>BOOK YOUR CAR WASH </h1></p>
                </div>
            </div>
            <div>
                <div className="formDetails">
                    <form className="actualForm" onSubmit={submitHandler}>
                        <div style={{ marginBottom: "30px" }}>
                        <p className="formName">FILL BELOW DETAILS</p>
                        </div>
                        <div className="formDateTime">
                            <input type="date" name="date" onChange={changeHandler} />
                        </div>

                        <div style={{ marginBottom: "20px" }}>
                            <select className="contactDetails" name="washpackId" onChange={changeHandler} >
                            <option className="opt1">Service Types</option>
                            <option>499</option>
                            <option>799</option>
                            <option>999</option>
                            <option>1499</option>
                            </select>
                        </div>
                        <div style={{ marginBottom: "30px" }}>
                            <p className="formName">CONTACT DETAILS</p>
                        </div>
                        <div >
                            <input className="contactDetails" type="text" name="username" onChange={changeHandler}
                                placeholder="Enter Your Full Name" /><br />
                            <input className="contactDetails" name="carName" type="text" placeholder="Enter Your Car Name"
                                onChange={changeHandler} /><br />

                            <input className="contactDetails" type="text" name="carModel"
                                placeholder="Enter Your Car Model" onChange={changeHandler} /><br />

                            <input type="text" className="contactDetails" name="contactno"
                                onChange={changeHandler}
                                placeholder="Enter Phone" /><br />

                            <textarea cols="30" className="contactDetailsTextArea" rows="10" type="text" name="address"
                                onChange={changeHandler}
                                placeholder="Your Address" />
                        </div>
                        <div className="Submit">
                            <input type="submit" className="btn btn-success" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Booking;
