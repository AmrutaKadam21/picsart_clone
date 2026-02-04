import "./toolkit.css";

export default function Toolkit() {
  return (
    <div className="toolkit">
      <h2>Explore the Picsart toolkit</h2>
      <p>
        Get creative with our <b>AI photo editing tools</b>
      </p>

      <div className="card-wrapper">
        <div className="tool-card">
          <div className="icon-circle">
           <img src="https://cdn.icon-icons.com/icons2/3871/PNG/512/gallery_edit_icon_244108.png" className="tool-img" alt="Photo Editor Icon" />
          </div>
          <h4>Photo Editor</h4>
        </div>

        <div className="tool-card">
          <div className="icon-circle">
           <img src="https://static.vecteezy.com/system/resources/previews/040/248/811/non_2x/generator-icon-logo-design-template-vector.jpg" className="tool-img" alt="Logo Generator Icon" />
          </div>
          <h4>Logo Generator</h4>
        </div>

        <div className="tool-card">
          <div className="icon-circle">
           <img src="https://tse1.mm.bing.net/th/id/OIP.5w5qfm8B8gefhi9uuYfaNQAAAA?w=256&h=256&rs=1&pid=ImgDetMain&o=7&rm=3" className="tool-img" alt="Image Enhancer Icon" />
          </div>
          <h4>Image Enhancer</h4>
        </div>

        <div className="tool-card">
          <div className="icon-circle">
           <img src="https://cvisionlab.com/wp-content/themes/cvisionlab/images/editor/cases/background-removal/icon-removal.png" className="tool-img" alt="Background Remover Icon" />
          </div>
          <h4>Background Remover</h4>
        </div>

        <div className="tool-card">
          <div className="icon-circle">
           <img src="https://tse3.mm.bing.net/th/id/OIP.aBQyBkHlWgFfc6dliPrsOQHaD2?rs=1&pid=ImgDetMain&o=7&rm=3" className="tool-img" alt="Text Editor Icon" />
          </div>
          <h4>Text Editor</h4>
        </div>

        <div className="tool-card">
          <div className="icon-circle">
           <img src="https://png.pngtree.com/png-vector/20240426/ourlarge/pngtree-obj-format-file-type-icons-document-extension-symbol-icon-with-a-vector-png-image_12312081.png" className="tool-img" alt="Remove Object Icon" />
          </div>
          <h4>Remove Object</h4>
        </div>

        <div className="tool-card">
          <div className="icon-circle">
           <img src="https://img.favpng.com/10/8/15/computer-icons-racer-png-favpng-U9ueSgJB7pXVZdxQYVA2h9HBQ.jpg" className="tool-img" alt="Collage Maker Icon" />
          </div>
          <h4>Collage Maker</h4>
        </div>

        <div className="tool-card">
          <div className="icon-circle">
           <img src="https://e1.pngegg.com/pngimages/726/813/png-clipart-metrostation-adobe-illustrator-logo-thumbnail.png" className="tool-img" alt="AI Tools Icon" />
          </div>
          <h4>AI Tools</h4>
        </div>
      </div>
    </div>
  );
}
