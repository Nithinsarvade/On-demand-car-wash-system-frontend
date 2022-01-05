import React, { useEffect, useState } from 'react';



const Washer = () => {

    const [washers, setWashers] = useState([])



    useEffect(() => {
        fetch("http://localhost:9999/order/allorders").then(result => {
            result.json().then(
                resp => {
                    setWashers(resp)
                    console.log(resp)
                })
        })
    }, [])




    return (

        <div>
            <div>
                <h1 className="bookdetails">Booked Details</h1>
            </div>

            {washers.map((emp, ind) => (
                <div className="booking" >

                    <div>
                        <p className="wash">Name : {emp.username}</p>
                        <p className="wash">Car Name : {emp.carName}</p>
                        <p className="wash">Car Model: {emp.carModel}</p>
                        <p className="wash">Appointment Date : {emp.date}</p>
                        <p className="wash">Wash Pack price: {emp.washpackId}</p>
                        <p className="wash">Contact.No : {emp.contactno}</p>
                        <p className="wash">Address: {emp.address}</p>
                        <button className="bookBtn2" >Confirm Booking</button>
                        <button className="bookBtn1" >Cancel Booking</button>
                    </div>
                    <hr style={{ marginTop: "30px" }} />
                </div>
            ))
            }
        </div>
    )
}

export default Washer