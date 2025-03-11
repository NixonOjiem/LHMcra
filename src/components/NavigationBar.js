import React from 'react';
import { Link } from 'react-router-dom';
import SearchComponent from './SearchComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function NavigationBar() {
  return (
    <div className='navigationBar'>
      <section className='logoIcon'>
        <img src='/assets/Logo.png' alt='website logo' />
      </section>

      <SearchComponent />

      <section className='cart'>
        <FontAwesomeIcon icon={faCartShopping} className='iconPack'/> <br />
        
      </section>

      <section className='profile'>
        <FontAwesomeIcon icon={faUser} className='iconPack'/> <br />
        
      </section>



    </div>
  );
}

export default NavigationBar;      <section className='categoriesSection'>
        <span className='categoryItem'> 
            <Link to="/new-releases" className='linkItems'>New Releases</Link>
        </span>
        <span className='categoryItem'>
            <Link to="/home-and-garden" className='linkItems'>Home & Garden</Link>
        </span>
        <span className='categoryItem'>
            <Link to="/electronics" className='linkItems'>Electronics</Link>
        </span> 
        <span className='categoryItem'>
            <Link to="/stationary" className='linkItems'>Stationary</Link>
        </span>
        <span className='categoryItem'>
            <Link to="/baby-products" className='linkItems'>Baby Products</Link>
        </span>
        <span className='categoryItem'>
            <Link to="/hand-tools" className='linkItems'>Hand Tools</Link>
        </span>
      </section>