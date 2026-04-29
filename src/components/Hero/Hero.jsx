import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="hero__title">
          Fast Food<br /><span className="gold">Restaurant</span>
        </h1>
        <p className="hero__sub">
          Fresh ingredients, bold flavours, and a whole lot of love — crafted just for you. Dine in, take out, or order online.
        </p>
        <a href="#menu" className="hero__btn">Explore Menu</a>
      </div>
    </section>
  )
}

export default Hero