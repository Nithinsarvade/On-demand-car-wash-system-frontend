import React from 'react';
import './services.css'
import { useNavigate } from 'react-router-dom'




const Services = () => {
  let navigate = useNavigate();


  return (
    <div className='title'>
      <h1>Affordable Pricing For Everyone..</h1>
      <div>
        <h3 className='sub'>Book Your Wash Today.....!</h3>
        <div class="line-2"></div>


        <div >
          <div class='flip-card'>
            <div className='flip-card-inner'>
              <div class='flip-card-front'>
                <h2>Super Wash</h2>
                <h1 className='mo'>Rs.499</h1>
              </div>
              <div class='flip-card-back'>
                <h3>Soft Cloth Tunnel Wash</h3>
                <h3> Spot Free Rinse </h3>
                <h3> Turbo Air Dry</h3>
                <button className="pack" onClick={() => { navigate('/Booking') }}>Book Now </button></div>
            </div>
          </div>




          <div class='flip-card'>
            <div className='flip-card-inner'>
              <div class='flip-card-front'>
                <h2>Express Wash</h2>
                <h1 className='mo'>Rs.799</h1>
              </div>
              <div class='flip-card-back'>
                <h3>Express Wash plus…</h3>
                <h3> In-Tunnel Wheel Cleaner</h3>
                <h3>Triple Foam Wax</h3>
                <h3>Clear Coat Conditioner</h3>
                <button className="pack" onClick={() => { navigate('/Booking') }}>Book Now</button></div>
            </div>
          </div>




          <div class='flip-card'>
            <div className='flip-card-inner'>
              <div class='flip-card-front'>
                <h2>Ultimate Wash</h2>
                <h1 className='mo'>Rs.999</h1>
              </div>
              <div class='flip-card-back'>
                <h3>The Super Wash plus…</h3>
                <h3>In-Tunnel Tire Shine</h3>
                <h3>Underbody Wash</h3>
                <button className="pack" onClick={() => { navigate('/Booking') }}>Book Now</button></div>
            </div>
          </div>



          <div class='flip-card'>
            <div className='flip-card-inner'>
              <div class='flip-card-front'>
                <h2>The Wheel Deal</h2>
                <h1 className='mo'>Rs.1499</h1>
              </div>
              <div class='flip-card-back'>
                <h3>Deluxe Wash Package plus…</h3>
                <h3>Clear Coat Conditioner</h3>
                <h3>Triple Foam Wax</h3>
                <h3>Wheels Finished by Hand</h3>
                <h3>Tire Shine by Hand</h3>
                <button className="pack" onClick={() => { navigate('/Booking') }}>Book Now</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}
export default Services