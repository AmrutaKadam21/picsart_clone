import './Resource.css'

function Resource() {

    return (
        <section className='resource-wrapper'>

            <section className='reource-left'>
                <div className='reource-head'>
                    <h3 className='learn'>Learn</h3>
                    <p className='cont'>Discover inspirational to grow your business.</p>
                    <div className='block'>
                        <div className='blog'>
                            <h4>Blog</h4>
                            <p>Trends</p>
                            <p>Latest news</p>

                            <p>Community</p>

                            <p>Advertising</p>

                            <p>Design School</p>

                            <p>Inspirational</p>

                            <span >See all articles</span>

                        </div>
                        <div className='ignite-img'>
                            <img src='images\resource1.webp'></img>
                            <p className='img-descri'>Dive into the newest features launched at Picsart ignite.</p>
                        </div>
                        <hr></hr>
                    </div>
                </div>
            </section>
            <section className='resource-right'>
                <div className='right-header'>

                    <span className='connect'>
                        Connect
                    </span>
                    <div className='right-descri'>
                        Connect with creators who share your interests.
                    </div>
 </div>
                    <div className='one-side'>
                        <div className='block2'>
                            <h4>Spaces</h4>
                            <p>The Creator Club </p>
                            <p>AI Product Design </p>
                            <p>Generative AI </p>
                            <p>Logo Design</p>
                            <span className='see-all'>See all spaces </span>

                        </div>
                   

                    <div className='purse'>
                        <img src="images\resouece2.webp"></img>
                        <p className='purse-descri'>
                            Join a community to share, learn, and improve design.
                        </p>
                    </div>
                </div>
            </section>

        </section>

    )
}

export default Resource 