import { useState } from "react";
import './Blackbox.css'
function Black() {

    const [activeimg, setImg] = useState("images/fashion-beauty.png");


    return (
        <section className="menu">
            <div className="title">
                <span>Where work and play

                    blend together</span>
                <p>With Picsart, you don't have to choose between creativity and productivity. Powering your part-time, full-time, and fun times.</p>
            </div>
            <section className="tokens">
                <div className="menubar">
                    <div className="menu1" onMouseEnter={() => setImg("images/fashion-beauty.png")}> Fashion & Beauty</div>
                    <div className="menu1" onMouseEnter={() => setImg("images/real-estate.png")}>Real Estate</div>

                    <div className="menu1" onMouseEnter={() => setImg("images/food-drink.png")}>Food & Drink</div>

                    <div className="menu1" onMouseEnter={() => setImg("images/interior-design.png")}>Interior Design</div>

                    <div className="menu1" onMouseEnter={() => setImg("images/health.png")}>Health & Wellness</div>

                    <div className="menu1" onMouseEnter={() => setImg("images/education.png")}>Education</div>
                    <div className="menu1" onMouseEnter={() => setImg("images/entertainment.webp")}>Entertainment</div>



                </div>

                <div className="preview-box">
                    <img src={activeimg} className="preview-img" />
                </div>

            </section>
            <button className="free-btn">Try for free</button>


        </section>


    )
}
export default Black