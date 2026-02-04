import './Article.css'

function Article() {

    return (

        <section className='align'>
            <section className='article-cards'>

                <div className='paragraph'>
                    <span> Better design.<br></br>Less time.</span>

                    <p> Accelerate your creative projects and processes. AI makes it faster and easier to edit your photos, remove backgrounds, and generate new backgrounds - all before your first cup of coffee.</p>
                    <button className='explore'>Explore AI tools</button>
                </div>
                <div className='side-img'>
                    <img src='images\fashion-beauty.png'></img>
                </div>
            </section>


            <section className='article-cards'>
                <div className='side-img2'>
                    <img src="images\food-multiply.webp"></img>
                </div>

                <div className='paragraph'>
                    <span> Multiply your ideas</span>
                    <p>Go from an idea to execution in a flash. Generate images or discover plenty of ready-to-use design templates you won’t find anywhere else. Never run out of inspiration again. </p>
                    <button className='explore'>Generate AI image</button>
                </div>

            </section>


            <section className='article-cards'>
                <div className='paragraph'>
                    <span> Engage a creative community</span>

                    <p> Join our community of 150 million+ creators just like you. Picsart unlocks fresh creative avenues, empowering you to explore AI creation, share your ideas, and connect with others who share your interests in Spaces.</p>

                </div>
                <div className='side-img'>
                    <img src='\images\community.webp'></img>
                </div>
            </section>
        </section>




    )
}

export default Article