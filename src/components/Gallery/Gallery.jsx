import { useState, useEffect, useCallback } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { galleryImages } from '../../data/menuData'
import './Gallery.css'

function Gallery() {
  const [current, setCurrent] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(3)

  const slides = galleryImages

  useEffect(() => {
    const update = () => setSlidesPerView(window.innerWidth <= 768 ? 1 : 3)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxIndex = Math.max(0, slides.length - slidesPerView)

  const prev = useCallback(() => setCurrent((c) => (c > 0 ? c - 1 : maxIndex)), [maxIndex])
  const next = useCallback(() => setCurrent((c) => (c < maxIndex ? c + 1 : 0)), [maxIndex])

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__inner">
        <p className="section-tag">Gallery</p>
        <h2 className="section-heading">A Feast for the Eyes</h2>

        <div className="gallery__slider">
          <button className="gallery__arrow gallery__arrow--prev" onClick={prev} aria-label="Previous">
            <FaChevronLeft />
          </button>

          <div className="gallery__viewport">
            <div
              className="gallery__track"
              style={{ transform: `translateX(-${current * (100 / slidesPerView)}%)` }}
            >
              {slides.map((src, i) => (
                <div className="gallery__slide" key={i}>
                  <img src={src} alt={`Gallery ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <button className="gallery__arrow gallery__arrow--next" onClick={next} aria-label="Next">
            <FaChevronRight />
          </button>
        </div>

        <div className="gallery__dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`gallery__dot${current === i ? ' gallery__dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery