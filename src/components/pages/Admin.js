import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';


const Admin = () => {
    const [washers, setWashers] = useState([])

    let navigate = useNavigate()


    useEffect(() => {
        fetch("http://localhost:8081/admin/allpacks").then(result => {
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
                <h1 className="bookAppointTitle mb-5 text-center">Wash pack</h1>
            </div>

            {washers.map((emp, ind) => (
                <div className="bk2 ml-5" >

                    <div>
                        <p className="bk3">Id : {emp.id}</p>
                        <p className="bk3"> Name : {emp.packagename}</p>
                        <p className="bk3">Cost: {emp.cost}</p>
                        <p className="bk3">Description : {emp.description}</p>
                    </div>
                    <div>
                        <button className=" bookBtn bookBtnUpdate" onClick={() => { navigate('/addpacks') }}>Addpacks</button>
                        <button className=" bookBtn bookBtnUpdate" onClick={() => { navigate('/washer') }}>Orderdetails</button>
                    </div>
                    <hr style={{ marginTop: "30px" }} />
                </div>
            ))
            }
        </div>
    )
}

export default Admin