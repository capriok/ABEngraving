import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import * as i from './bank/bank.js'

import FullView from '../full-view'

import arrowPrev from '../../images/arrow-prev.png'
import arrowNext from '../../images/arrow-next.png'


const place1 = [i.H1_1]
const place2 = [i.H2_1]
const place3 = [i.H3_1]

const placeholder = place1.concat(place2, place3);

const Gallery = () => {
  const isMobile = window.innerWidth < 500
  let ref = React.useRef()
  const handleOnDragStart = (e) => e.preventDefault()
  const responsive = { 0: { items: 1 }, 600: { items: 2 }, 1024: { items: 3 } };

  const createMap = (images) => {
    const map = images.map((src, i) => (
      <div className="img-cont" key={i}>
        <img src={src} alt="" className="carousel-img"
          onDragStart={handleOnDragStart}
          onClick={() => !isMobile && setViewState({ open: true, img: src })} />
      </div>
    ))
    return map
  }

  const [items, setItems] = React.useState([])
  const [viewState, setViewState] = React.useState({
    open: false,
    img: ''
  })

  const handleViewClose = () => {
    setViewState({ open: false, img: '' })
  }

  const sets = [
    { name: 'placeholder', thumb: placeholder[3], arr: placeholder },
    { name: 'placeholder', thumb: placeholder[3], arr: placeholder },
  ]

  const navItems = sets.map((set, i) => (
    <div className="img-cont" key={i}>
      <img src={set.thumb} alt="" onClick={() => setItems(createMap(set.arr))} />
      <p>{set.name}</p>
    </div>
  ))

  React.useEffect(() => {
    setItems(createMap(placeholder))
  }, [])

  return (
    <>
      {viewState.open && <FullView state={viewState} close={handleViewClose} />}
      <h1 className="title">Gallery</h1>
      <div className="gallery-cont">
        <img src={arrowPrev} alt=""
          className="slide-btn"
          onClick={() => ref.slidePrev()} />
        <AliceCarousel
          className="alice-carousel"
          ref={(el) => (ref = el)}
          mouseTrackingEnabled={isMobile ? true : false}
          infinite={false}
          responsive={responsive}
          dotsDisabled={true}
          buttonsDisabled={true}
          items={items}
          startIndex={0}
        >
        </AliceCarousel>
        <img src={arrowNext} alt=""
          className="slide-btn"
          onClick={() => ref.slideNext()} />
      </div>
      <nav className="carousel-nav">{navItems}</nav>
    </>
  )
}

export default Gallery
