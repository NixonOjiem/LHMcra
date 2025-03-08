import React from 'react';
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
        <FontAwesomeIcon icon={faCartShopping} className='iconPack'/>
      </section>

      <section className='profile'>
        <FontAwesomeIcon icon={faUser} className='iconPack'/>
        
      </section>

      <section className='categoriesSection'>
      <span className='categoryItem'>New Releases</span>
        <span className='categoryItem'>Home & Garden</span>
        <span className='categoryItem'>Electronics</span> 
        <span className='categoryItem'>Stationary</span>
        <span className='categoryItem'>Baby Products</span>
        <span className='categoryItem'>Hand Tools</span>
      </section>

    </div>
  );
}

export default NavigationBar;