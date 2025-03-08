import React from 'react'
import FlashSale from '../components/FlashSale'
import NavigationBar from '../components/NavigationBar'
import DummyComponent from '../components/DummyComponent'
import BunnerComponent from '../components/BunnerComponent'
import ImageSlider from '../components/ImageSlider'

function HomePage() {
    const images = [
        '/assets/baby.jpg',
        '/assets/gardening.jpg',
        '/assets/outdoor.jpg',
        '/assets/man_shoping_bags.jpg',
    ]


  return (
    <div>
        <FlashSale />
        <NavigationBar />
        <ImageSlider images ={images}/>
        <BunnerComponent />
        {/* <DummyComponent /> */}

    </div>
  )
}

export default HomePage