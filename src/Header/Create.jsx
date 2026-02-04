import "./Create.css";

function Create() {
  return (
    <section className="create-wrapper">

      <div className="create-column border-right">
        <h2 className="main-title">Design library</h2>
        <p className="sub-title">
          Start creating instantly with our ready-made design templates.
        </p>
<section ><p></p></section>
        <div className="section">
          <div className="section-header">
            <span className="circle-icon">▦</span>
            <h3>Templates</h3>
          </div>

          <div className="two-col">
            <ul>
              <li>Social media</li>
              <li>Resumes</li>
              <li>Flyers</li>
              <li>Logos</li>
              <li>Videos</li>
            </ul>
            <ul>
              <li>Instagram</li>
              <li>YouTube</li>
              <li>Facebook</li>
              <li>Etsy</li>
              <li>Pinterest</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <span className="circle-icon">⚙</span>
            <h3>Assets</h3>
          </div>

          <ul>
            <li>Colors</li>
            <li>Fonts</li>
            <li>Stickers</li>
            <li>Backgrounds</li>
            <li>Images</li>
          </ul>
        </div>

        <p className="see-all">See all templates</p>
      </div>

      <div className="create-column">
        <h2 className="main-title">Tools</h2>
        <p className="sub-title">
          Explore the full suite of AI tools for photo, video, and design.
        </p>

        <div className="tools-grid">
        

          <div>
            <div className="section-header">
              <span className="circle-icon">🖼</span>
              <h3>Image Tools</h3>
            </div>
            <ul>
              <li>Change Background</li>
              <li>Remove Background</li>
              <li>Collage Maker</li>
              <li>Photo to Cartoon</li>
              <li>Resize Image</li>
              <li>Photo Filters</li>
            </ul>
            <p className="see-all">See all image tools</p>
          </div>

          <div>
            <div className="section-header">
              <span className="circle-icon">✨</span>
              <h3>AI Tools</h3>
            </div>
            <ul>
              <li>AI Image Generator</li>
              <li>AI Image Enhancer</li>
              <li>AI Design Generator</li>
              <li>AI Background</li>
              <li>AI Logo Generator</li>
              <li>AI Replace</li>
            </ul>
            <p className="see-all">See all AI tools</p>
          </div>

          <div>
            <div className="section-header">
              <span className="circle-icon">•••</span>
              <h3>Other</h3>
            </div>
            <ul>
              <li>Color Picker</li>
              <li>Color Wheel</li>
              <li>Video Editor</li>
              <li>Text Editor</li>
              <li>Batch Editor</li>
              <li>Font Generator</li>
            </ul>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Create;
