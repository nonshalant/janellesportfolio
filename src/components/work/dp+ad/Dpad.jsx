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
                <h2>{film.title}</h2>
                <h3>Directed by: <span>{film.directed}</span></h3>
                <h3>AD: <span>{film.AD}</span></h3>
                <h3><span>{film.DP}</span></h3>
                <h4>desc: {film.description}</h4>
              </div>
            )
          }
        </div>
        <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0kPZbJxlwik?si=gq-erC1iqFw6iLP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      <div className="film-content">
        <div className="thumbNail">
          {
            contentFile.map( film => film.title === "Intrusive Thoughts" &&
              <div className="thumbNail-details">
                <h2>{film.title}</h2>
                <h3>Directed by: <span>{film.directed}</span></h3>
                <h3>Dp: <span>{film.dp}</span></h3>
                <h3>Sound Op: <span>{film.soundOp}</span></h3>
                <h4>desc: {film.description}</h4>
              </div>
            )
          }
        </div>
        <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0o0tf8mUAuY?si=aGDajpVtDYgpfmFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Dpad