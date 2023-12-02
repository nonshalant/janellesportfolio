import React from 'react'
import {contentFile} from '../../../content'
import { Image } from 'cloudinary-react'
import './dpad.css'

const Dpad = () => {
  return (
    <div className='film'>
      <div className="film-content">
        <div className="thumbNail">
          {
            contentFile.map( film => film.title === "Fumbling Baddies" &&
              <div className="thumbNail-details">
                <Image cloudName='dyzydm9nl' publicId={film.thumbNail}/>
                <h2>{film.title}</h2>
                <h3>{film.directed}</h3>
                <h3>{film.AD}</h3>
                <h3>{film.DP}</h3>
              </div>
            )
          }
        </div>
        <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0kPZbJxlwik?si=gq-erC1iqFw6iLP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Dpad