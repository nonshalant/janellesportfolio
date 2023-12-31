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
                <h2>{film.title}</h2>
                <h3>Directed by <span>{film.directed}</span></h3>
                <h3>Lead Actress: <span>{film.leadActress}</span></h3>
                <h3>Assistant Sound Op: <span>{film.assistantSoundOp}</span></h3>
                <h4>desc: {film.description}</h4>
              </div>
            )
          }
        </div>
        <div className="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/2x0N3jK3M5A?si=vGarpZciaPmq6ICT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      <div className="film-content2">
        <div className="thumbNail">
          {
            contentFile.map( film => film.title === "The One" &&
              <div className="thumbNail-details">
                <h2>{film.title}</h2>
                <h3>Directed by <span>{film.directed}</span></h3>
                <h3>Supporting Role: <span>{film.supportingRole}</span></h3>
                <h4>desc: {film.description}</h4>
              </div>
            )
          }
        </div>
        <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/H2zV9Pv93Ig?si=SyQLmeYhz5k9oXwX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Acting