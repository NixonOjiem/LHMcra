import React from 'react'
import FlashSale from '../components/FlashSale'
import NavigationBar from '../components/NavigationBar'
import DummyComponent from '../components/DummyComponent'

function HomePage() {
  return (
    <div>
        <FlashSale />
        <NavigationBar />
        <DummyComponent />
    </div>
  )
}

export default HomePage