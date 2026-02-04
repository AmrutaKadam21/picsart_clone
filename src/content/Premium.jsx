import './Premium.css'

function Premium() {
    return (
        <section className='price'>
            <div className='word'>
                Do more with Picsart
            </div>


            <div className='ticket'>
            <div className='price-card'>
                <p className='text'>Monthly
                    Yearly (Best value)</p>

                <div className='box'>
                    <span className='free' >Free</span>
                    <h1> ₹0 <span style={{ fontSize: "20px" }}>/mon</span></h1>
                    <button className='get-start'>Get started</button>

                    <hr></hr>
                    <div className='comment'>
                        <span>Craft exceptional content</span>
                        <p>Selection of free images, videos, and templates to create original content, without breaking the bank</p>
                    </div>
                </div>
            </div>

             <div className='price-card'>
                <p className='text'>Monthly
                    Yearly (Best value)</p>

                <div className='box'>
                    <span className='free' >
                        <img src="\images\piscartplus.svg"></img>
                    </span>
                    <h1> ₹590<span style={{ fontSize: "20px" }}>/mon</span></h1>
                    <button className='get-start'>Learn about plus</button>

                    <hr></hr>
                    <div className='comment'>
                        <span>Elevate your designs</span>
                        <p>Access to premium content and templates to level up your designs.</p>
                    </div>
                </div>
            </div>


             <div className='price-card'>
                <p className='text'>Monthly
                    Yearly (Best value)</p>

                <div className='box'>
                    <span className='free' >
                        <img src="\images\piscartpro.svg"></img>
                    </span>
                    <h1> ₹690 <span style={{ fontSize: "20px" }}>/mon</span></h1>
                    <button className='get-start'>Learn about pro</button>

                    <hr></hr>
                    <div className='comment'>
                        <span>Maximize creative efficiency</span>
                        <p>Full suite of powerful AI tools, with centralized billing and admin controls to scale as your business grows.</p>
                    </div>
                </div>
            </div>
</div>

        </section>
    )
}

export default Premium