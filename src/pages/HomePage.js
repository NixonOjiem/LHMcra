import React from 'react'
import FlashSale from '../components/FlashSale'
import NavigationBar from '../components/NavigationBar'
import DummyComponent from '../components/DummyComponent'
import ImageSlider from '../components/ImageSlider'
import PopularCategory from '../components/PopularCategory'
import NewReleasesComponent from '../components/NewReleasesComponent'
import FooterComponent from '../components/FooterComponent'

function HomePage() {
    const images = [
        '/assets/baby.jpg',
        '/assets/gardening.jpg',
        '/assets/outdoor.jpg',
        '/assets/man_shoping_bags.jpg',
    ]


  return (
    <div>
        {/* <FlashSale /> */}
        <NavigationBar />
        <ImageSlider images ={images}/>
        <PopularCategory />
        <NewReleasesComponent />
        <FooterComponent />
        {/* <DummyComponent /> */}

    </div>
  )
}

export default HomePage