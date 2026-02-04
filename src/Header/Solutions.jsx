import "./Solutions.css"

export default function Solutions() {
 
  return (
 <div className="solutions-wrapper">
      <div className="solutions-container">

        <div className="solutions-header">
          <h1>Solutions</h1>
          <p>For every creative need.</p>
        </div>

        <div className="solutions-grid">

          <div className="col">
            <h3>Audiences</h3>
            <p>For businesses</p>
            <p>For creators</p>
            <p>For marketers</p>
            <p>For solopreneurs</p>
            <p>For students</p>
            <p>For teams</p>
            <span className="see">See all</span>
          </div>

          <div className="col">
            <h3>Use cases</h3>
            <p>Ad creation</p>
            <p>YouTube thumbnails</p>
            <p>Print designs</p>
            <p>Product photography</p>
            <p>Instagram posts</p>
            <p>Banner creation</p>
          </div>

          <div className="col">
            <h3>Industries</h3>
            <p>Fashion</p>
            <p>Beauty</p>
            <p>Food and Drink</p>
            <p>Health and Fitness</p>
            <p>E-commerce templates</p>
            <span className="see">See all</span>
          </div>

          <div className="col">
            <h3>Products</h3>
            <p>Flow</p>
            <p>AI Assistant</p>
            <p>Ad Maker</p>
            <p>AI Photo & Video Editor</p>
            <p>Brand Kit</p>
            <p>Batch Editor</p>
          </div>

          <div className="promo">
            <img
              src="images\solution-nav.webp"
              alt="ad"
            />
            <p>Create winning ads in minutes with AI</p>
          </div>

        </div>
      </div>
      
    </div>
   
  )
}
