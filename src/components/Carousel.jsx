import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import consultDoctorImage from './Assets/consultdoctor.jpg';
import findHospitalsImage from './Assets/findhospitals.jpg';
import findMedicineShopsImage from './Assets/findmedicineshops.jpg';
import labTestImage from './Assets/labtest.jpg';
import heroImage from './Assets/hero.jpg';
import './Carousel.css';

const ControlledCarousel = () => {
  return (
    <Carousel prevIcon={<span className="carousel-control-prev-icon black-icon" />} nextIcon={<span className="carousel-control-next-icon black-icon" />}>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src={consultDoctorImage}
          alt="First slide"
          style={{ width: '100%', maxWidth: '800px', objectFit: 'contain' }}
        />
        <Carousel.Caption>
          <h5>Find Best Doctors Near you</h5>
          <p>Compare ratings, read reviews, and book appointments instantly.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src={findHospitalsImage}
          alt="Second slide"
          style={{ width: '100%', maxWidth: '800px', objectFit: 'contain' }}
        />
        <Carousel.Caption>
          <h5>Find Best Hospitals Near You</h5>
          <p>Explore top-rated hospitals for every specialty, right in your area.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src={findMedicineShopsImage}
          alt="Third slide"
          style={{ width: '100%', maxWidth: '800px', objectFit: 'contain' }}
        />
        <Carousel.Caption>
          <h5>Best Medicine Shops Near you</h5>
          <p>Locate trusted pharmacies with real-time stock and doorstep delivery options.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src={labTestImage}
          alt="Fourth slide"
          style={{ width: '100%', maxWidth: '800px', objectFit: 'contain' }}
        />
        <Carousel.Caption>
          <h5>Top Medical Laboratories Near You</h5>
          <p>Find certified labs nearby for accurate and fast test results.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src={heroImage}
          alt="Fifth slide"
          style={{ width: '100%', maxWidth: '800px', objectFit: 'contain' }}
        />
        <Carousel.Caption>
          <h5>Want To Be a Hero?</h5>
          <p>Step up, save lives — register as yourself and become someone’s hero today.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;
