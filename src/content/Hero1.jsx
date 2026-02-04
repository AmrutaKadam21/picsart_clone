import heroImg from "../assets/images/header-img1.png";
import heroImg2 from "../assets/images/header-img2.png";
import './Hero1.css'

function Hero1() {
  return (
    <section className="hero">
      <section className="imgs">
        <img src={heroImg} alt="Hero" />
        <img src={heroImg2} alt="Hero" />
      </section>
      <article className="header-text">
        <span>
          <div className="gradient-text">Design</div> made easy
        </span>

        <p>The only AI-powered creative companion you’ll ever need to grow your brand. Get it all done with Picsart’s ultimate creative suite.</p>
        <button className="get-start">Get started for free</button>
      </article>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
        poster="https://pastatic.picsart.com/cms-pastatic/985e4540-08d0-4944-ad6c-3a63d9ef5360.jpg"
      >
        <source
          src="https://pastatic.picsart.com/cms-pastatic/fc24d726-cee2-4b34-8920-05b5f181d21a.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  )
}

export default Hero1