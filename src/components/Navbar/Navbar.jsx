import React from 'react';
import './Navbar.css';
import discountImage from '../Assets/discount.png';
import accountImage from '../Assets/account.png';
import dropdownImage from '../Assets/dropdown.png';
import dropdownImage2 from '../Assets/dropdownred.png';

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className='navbar'>
          <div className="nav-logo">
            <div style={{
              width: '40px',
              height: '40px',
              marginRight: '10px',
              backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibnVsbCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzJFY2M3MSIvPgo8cGF0aCBkPSJNMTggMTZIMjJWMjRIMjhWMjhIMjJWMzZIMThWMjhIMTJWMjRIMThWMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=")',
              backgroundSize: 'contain',
            }} />
            <p>SURAKSHANIKETAN</p>
          </div>

          <div className="location-selector">
            <select defaultValue="" style={{
              padding: '8px 12px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: '#f5f5f5',
              cursor: 'pointer',
            }}>
              <option value="" disabled>Select Location</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="bangalore">Bangalore</option>
              <option value="hyderabad">Hyderabad</option>
            </select>
          </div>

          <div className="nav-offer">
            <button 
              onClick={() => {}}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            >
              <img 
                src={discountImage} 
                alt="Discount" 
                style={{
                  width: '40px',
                  height: '40px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.6))',
                  marginRight: '10px',
                }} 
              />
            </button>
            <button 
              onClick={() => {}}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            >
              <img 
                src={accountImage} 
                alt="Account" 
                style={{
                  width: '40px',
                  height: '40px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.6))',
                  borderRadius: '50%',
                }} 
              />
            </button>
          </div>
        </div>
        <div className='secondary-navbar'>
          <ul className="nav-menu">
            <li>Home</li>
            <li className="appointment-dropdown">
              <select defaultValue="" style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '1rem',
                cursor: 'pointer',
                outline: 'none',
                appearance: 'none',
                padding: '0 25px 0 0',
                backgroundImage: `url(${dropdownImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 8px center',
                backgroundSize: '10px',
              }}>
                <option value="" disabled>Book Appointments</option>
                <option value="doctor">Consult Doctor</option>
                <option value="lab">Book Lab Tests</option>
              </select>
            </li>
            <li className="nearby-dropdown">
              <select defaultValue="" style={{
                width: '76px',
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '1rem',
                cursor: 'pointer',
                outline: 'none',
                appearance: 'none',
                padding: '0 25px 0 0',
                backgroundImage: `url(${dropdownImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 8px center',
                backgroundSize: '10px',
              }}>
                <option value="" disabled>Nearby</option>
                <option value="hospitals">Hospitals</option>
                <option value="medical-shops">Medical Shops</option>
              </select>
            </li>
            <li className="emergency-dropdown">
              <select defaultValue="" style={{
                width: '106px',
                background: 'transparent',
                border: 'none',
                color: 'red',
                fontSize: '1rem',
                cursor: 'pointer',
                outline: 'none',
                appearance: 'none',
                padding: '0 25px 0 0',
                backgroundImage: `url(${dropdownImage2})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 8px center',
                backgroundSize: '10px',
              }}>
                <option value="" disabled style={{color: 'red'}}>Emergency</option>
                <option value="blood-banks" style={{color: 'red'}}>Blood Banks</option>
                <option value="ambulance" style={{color: 'red'}}>Ambulance Booking</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
