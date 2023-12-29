import { Image } from 'cloudinary-react'
import React from 'react'
import { contentFile } from '../../../content'

const DirectingAndProduced = () => {
  return (
    <div className='film'>
      <div className="film-content2">
        <div className="thumbNail">
          {
            contentFile.map( film => film.title === "Spiritual Antenna A Loc Journey" &&
              <div className="thumbNail-details">
                <h2>{film.title}</h2>
                <h3>Directed by <span>{film.directed}</span></h3>
                <h3>Dp: <span>{film.dp}</span></h3>
                <h3>Gaffer: <span>{film.gaffer}</span></h3>
                <h3>Sound: <span>{film.sound}</span></h3>
                <h3>Editor: <span>{film.editor}</span></h3>
                <h4>desc: {film.description}</h4>
              </div>
            )
          }
        </div>
        <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Jjb3fbrY25w?si=xo8cO_VA-XJezSZ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default DirectingAndProduced