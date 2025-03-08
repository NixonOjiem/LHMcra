import React from 'react';
import SearchComponent from './SearchComponent';

function NavigationBar() {
  return (
    <div className='navigationBar'>
      <section className='logoIcon'>
        <img src='/assets/Logo.png' alt='website logo' />
      </section>

      <SearchComponent />

      <section className='cart'>
        cart
      </section>

      <section className='profile'>
        profile
      </section>
    </div>
  );
}

export default NavigationBar;