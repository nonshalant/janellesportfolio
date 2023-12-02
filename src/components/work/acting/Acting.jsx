import React from 'react'
import { contentFile } from '../../../content'
import { Image } from 'cloudinary-react'

const Acting = () => {
  return (
    <div className='film'>
      <div className="film-content">
        <div className="thumbNail">
          {
            contentFile.map( film => film.title === "Oneiric" &&
              <div className="thumbNail-details">
                <Image cloudName='dyzydm9nl' publicId={film.thumbNail}/>
                <h2>{film.title}</h2>
                <h3>{film.directed}</h3>
                <h3>Lead Actress: {film.leadActress}</h3>
                <h3>Assistant Sound Op: {film.assistantSoundOp}</h3>
                <h4>desc: {film.description}</h4>
              </div>
            )
          }
        </div>
        <div className="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/2x0N3jK3M5A?si=vGarpZciaPmq6ICT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Acting