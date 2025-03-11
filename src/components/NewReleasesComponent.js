import React from 'react'

function NewReleasesComponent() {

    const handleClick = () => {
        console.log('Gardening one clicked');
        
    }

  return (
    <div className='newReleases'>
        <h2>New Releases</h2>
        <div className="releasesContainer">
            <h3>Electronics</h3>
            <div>
                <span className='releaseItem'>
                    <img src='/assets/imageone.png' alt='phone' />
                    Electronics one
                </span>
                <span className='releaseItem'>Electronics two</span>
                <span className='releaseItem'>Electronics three</span>
                <span className='releaseItem'>Electronics four</span>
                <span className='releaseItem'>Electronics five</span>
                <span className='releaseItem'>Electronics six</span>
                <span className='releaseItem'>Electronics seven</span>
            </div>
        </div>

        <div className="releasesContainer">
        <h3>Gardening</h3>
            <div className='releaseItems'>
                <span className='releaseItem' onClick={handleClick}>Gardening one</span>
                <span className='releaseItem'>Gardening two</span>
                <span className='releaseItem'>Gardening three</span>
                <span className='releaseItem'>Gardening four</span>
                <span className='releaseItem'>Gardening five</span>
                <span className='releaseItem'>Gardening six</span>
                <span className='releaseItem'>Gardening seven</span>     
            </div>
        </div>

        <div className='releasesContainer'>
        <h3>Fashion</h3>
        <div>
            <span className='releaseItem'>Fashion one</span>
            <span className='releaseItem'>Fashion two</span>
            <span className='releaseItem'>Fashion three</span>
            <span className='releaseItem'>Fashion four</span>
            <span className='releaseItem'>Fashion five</span>
            <span className='releaseItem'>Fashion six</span>
            <span className='releaseItem'>Fashion seven</span>
        </div>
        </div>

    </div>
  )
}

export default NewReleasesComponent