import React from 'react'
import './home.css'
import { Image } from 'cloudinary-react'
import { FaCamera } from 'react-icons/fa'

const Home = () => {
  return (
    <div className='home'>
        <div className='home-content'>
            <h1>An Aspiring Creator <FaCamera /></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus dolores ratione temporibus officiis, recusandae aspernatur rem obcaecati eligendi</p>
        </div>
        <div className="home-image">
            <Image cloudName='dyzydm9nl' publicId='https://res.cloudinary.com/dyzydm9nl/image/upload/v1701374706/Janelle%20Portfolio/IMG_1345_mxtxlx.jpg'/>
        </div>
    </div>
  )
}

export default Home