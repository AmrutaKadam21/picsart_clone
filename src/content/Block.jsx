import { useState } from "react"
import "./Block.css"

const data1 = [
  { img: "images/block-img1.webp", title: "Logos", count: "450 templates" },
  { img: "images/block-img2.webp", title: "Resumes", count: "50 templates" },
  { img: "images/block-img3.webp", title: "Banners", count: "700 templates" },
  { img: "images/block-img4.webp", title: "Social media", count: "1,000 templates" },
  { img: "images/block-img5.webp", title: "Posters", count: "1,000 templates" },
  { img: "images/block-img6.webp", title: "Business cards", count: "200 templates" },
  { img: "images/block-img7.webp", title: "Flyers", count: "250 templates" },
  { img: "images/block-img8.webp", title: "Documents", count: "150 templates" }
]

function Block() {
  const [index, setIndex] = useState(0)

  const visibleCards = 5
  const cardWidth = 190

  return (
    <div className="container">
      <h1 className="heading">
        What will you <span className="gradient-text">create</span> today?
      </h1>

      <div className="slider-wrapper">
        <button
          className="arrow"
          onClick={() => setIndex(index > 0 ? index - 1 : 0)}
        >
          ‹
        </button>

        <div className="slider">
          <div
            className="track"
            style={{
              transform: `translateX(-${index * cardWidth}px)`
            }}
          >
            {data1.map((item, i) => (
             <div className="block-card" key={i}>
  <img src={item.img} alt={item.title} />

  <div className="card-text">
    <h4>{item.title}</h4>
    <p>{item.count}</p>
  </div>
</div>

            ))}
          </div>
        </div>

        <button
          className="arrow"
          onClick={() =>
            setIndex(
              index < data1.length - visibleCards ? index + 1 : index
            )
          }
        >
          ›
        </button>
      </div>
    </div>
  )
}

export default Block
