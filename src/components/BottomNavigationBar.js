import React from 'react'
import { Link } from 'react-router-dom';

function BottomNavigationBar() {
  return (
    <div className='bottomNavigationBar'>
        <section className='categoriesSection'>
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
    </div>
  )
}

export default BottomNavigationBar