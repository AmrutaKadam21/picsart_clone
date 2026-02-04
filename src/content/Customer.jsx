
import './Customer.css'

function Customer() {
  return (
    <section className="followers">
      <p>Join our creative community</p>
      <span className="text">Trusted by 150 million+ creators</span>

      <section className='tokens'>
        <section className='token1'>
          <h1 className='color-gradient1'>1B+</h1>
          <p>Creative edits made every month</p>
        </section>

        <section className='token1'>
          <h1 className='color-gradient2'>1M+</h1>
          <p>AI images generated daily</p>
        </section>


        <section className='token1'>
          <h1 className='color-gradient3'>20+</h1>
          <p>generative AI tools to transform your workflow</p>
        </section>


        <section className='token1'>
          <h1 className='color-gradient4'>300M+</h1>
          <p>editable photos, templates, and more</p>
        </section>
      </section>

      <section className='media'>
        <div className='statement'>
          Recognized by global businesses and media
          <br></br>
        </div>

        <div className='company'>
          
          <img src="images\getty.webp"></img>
          <img src="images\google.webp"></img>

          <img src="images\ideogram.webp"></img>

          <img src="images\meta.webp"></img>
          <img src="images\popsocket.webp"></img>
        </div>
      </section>
    </section>

  )
}

export default Customer
