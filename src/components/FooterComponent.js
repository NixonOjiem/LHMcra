import React from 'react'

function FooterComponent() {
  return (
    <div className='footer'>
        <div className='loveHomeMart'>
            <p>Love Home Mart</p>
            <ul>
                <li>About us</li>
                <li>Our Blog</li>
                <li>Careers</li>
                <li>Our Story</li>
            </ul>
        </div>

        <div className='ShopWithUs'>
            <p>Shop With Us</p>
            <ul>
                <li>Categories</li>
                <li>FAQ</li>
                <li>Shipping</li>
                <li>Returns</li>
            </ul>
        </div>

        <div className='ContactUs'>
            <p>Contact Us</p>
            <ul>
                <li>Phone: 123-456-7890</li>
                <li>Email: </li>
                <li>Address: 1234 Highridge Nairobi</li>
                
            </ul>
        </div>

    </div>
  )
}

export default FooterComponent