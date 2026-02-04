import "./Price.css";
import Footer from "../Footer/Footer"; 

import { useState, useEffect } from "react";

export default function Price() {
    const [tab, setTab] = useState("makers");

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        let lastScroll = window.scrollY;

        window.addEventListener("scroll", () => {
            if (window.scrollY > lastScroll && window.scrollY > 200) {
                setSticky(true);
            } else {
                setSticky(false);
            }
            lastScroll = window.scrollY;
        });
    }, []);


    const data = [
        {
            q: "What are the benefits of Picsart Pro?",
            a: "Picsart Pro is our most comprehensive plan, designed to help you maximize your creative output. It offers all of our powerful AI tools, as well as our full suite of photo and video editing tools and extensive content library. All of these features are designed to help you create extraordinary content in less time, with less effort."
        },
        {
            q: "Do I get the benefits of Picsart Pro on the mobile app if I subscribe from picsart.com?",
            a: "Absolutely! By subscribing to Picsart Pro from our website, you automatically get access to your subscription on our mobile app (for iOS or Android). The subscription is attached to your email address and Picsart username, which is what you’ll use to sign in to the Picsart mobile app."
        },
        {
            q: "How do I cancel my subscription?",
            a: "Sign in to your account at picsart.com, and navigate to Settings. Under the Billing & Subscriptions section, you’ll see an option to cancel your subscription. Please note that if you subscribed via Picsart’s mobile app, you must cancel your subscription from whichever app store you used to purchase the subscription (App Store or Google Play); uninstalling the Picsart app will not cancel your subscription."
        },
        {
            q: "What’s the refund policy?",
            a: "If you subscribed via Picsart’s mobile app, you may be able to request a refund from the App Store or Google Play, but are subject to their refund procedures and policies. If you subscribed via Picsart’s website, you can request a refund through our customer support team"
        },
        {
            q: "What are credits?",
            a: "Think of credits as virtual tokens to use with our generative AI tools. Each tool requires a certain number of credits per generation."
        },
        {
            q: "Do unused credits roll over to the next month?",
            a: "No, credits included in your subscription don’t roll over. However, add-on credits you purchase do carry over and won’t expire."
        },
        {
            q: "How can I get more credits?",
            a: "All plans include credits, but paid plans include renewing credits as well as the ability to buy add-on credits. Free plan users will need to upgrade to a paid plan first in order to buy more credits."
        }
    ];

    const [open, setOpen] = useState(null);
    return (
        <div className="pricing-page">

            <div className="price-hero">
                <h1>The ultimate AI-powered creative toolkit.</h1>
                <div className="tab-box">
                    <button className={tab === "makers" ? "active" : ""} onClick={() => setTab("makers")}>For makers</button>
                    <button className={tab === "marketers" ? "active" : ""} onClick={() => setTab("marketers")}>For marketers</button>
                </div>
            </div>

            {tab === "makers" && (
                <div className="cards">
                    <div className="card">
                        <h2>Picsart Free</h2>
                        <p>Best for hobbyists who want to create unique designs.</p>
                        <h1>$0/mo.</h1>
                        <p>$0/year for one person</p>
                        <button className="btn-outline">Start for free</button>
                        <ul>
                            <li className="headline">What’s included:</li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12px"  viewBox="0 0 448 512"><path d="M434.8 70.1c14.3 10.4 12.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" /></svg>

                                Standard photo & video editing tools</li>
                            <li>                 <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" /></svg>
                                5 credits per week</li>
                            <li>                 <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" /></svg>
                                Free images and templates</li>
                            <li>                 <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" /></svg>
                                100 MB cloud storage</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h2>Picsart <span className="pink">Plus</span></h2>
                        <p>Best for content creators.</p>
                        <h1>₹200/mo.</h1>
                        <p>₹2400/year</p>
                        <button className="btn-pink">Try for free</button>
                        <ul>
                            <li className="headline">Everything in Free, and:</li>
                            <li>                 <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" /></svg>
                                Face retouching tools</li>
                            <li>                 <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" /></svg>
                                200 AI credits</li>
                            <li>                 <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" /></svg>
                                Premium templates</li>
                            <li>                 <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" /></svg>
                                5 GB cloud storage</li>
                        </ul>
                    </div>

                    <div className="card pro">
                        <div className="badge">✨ Best value</div>
                        <h2>Picsart <span className="pro-purple">Pro</span></h2>
                        <p>For individuals or teams.</p>
                        <h1>₹266.66/mo.</h1>
                        <p>₹3200/year</p>
                        <button className="btn-purple">Try for free</button>
                        <ul>
                            <li className="headline">Everything in Plus, and:</li>
                            <li>                 <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" /></svg>
                                15+ advanced AI tools</li>
                            <li>                 <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" /></svg>
                                1-tap background remover</li>
                            <li>                 <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" /></svg>
                                500 AI credits</li>
                            <li>                 <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" /></svg>
                                Brand kit</li>
                            <li>                 <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" /></svg>
                                100 GB cloud storage</li>
                        </ul>
                    </div>
                </div>
            )}

            {tab === "marketers" && (
                <div className="cards">
                    <div className="card">
                        <h2>AdMaker <span className="pink">Lite</span></h2>
                        <p>For individuals creating ads.</p>
                        <h1>$49/mo.</h1>
                        <p>Save 16% yearly</p>
                        <button className="btn-pink">Get started</button>
                        <ul>
                            <li className="headline">Everything in Pro, and:</li>
                            <li>                  <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" /></svg>
                                10,000 Getty images</li>
                            <li>                 <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" /></svg>
                                1 brand kit</li>
                            <li>                 <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" /></svg>
                                1500 AI credits</li>
                        </ul>
                    </div>

                    <div className="card pro">
                        <div className="badge">✨ Best value</div>
                        <h2>AdMaker <span className="purple">Max</span></h2>
                        <p>For marketing teams.</p>
                        <h1>$149/mo.</h1>
                        <p>Save 16% yearly</p>
                        <button className="btn-purple">Get started</button>
                        <ul>
                            <li className="headline">Everything in Lite, and:</li>
                            <li>                 <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" /></svg>
                                1M Getty images</li>
                            <li>                  <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" /></svg>
                                5 brand kits</li>
                            <li>                  <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" /></svg>
                                6000 AI credits</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h2>Enterprise</h2>
                        <p>Custom solution.</p>
                        <h1>Custom</h1>
                        <button className="btn-outline">Contact Sales</button>
                        <ul>
                            <li>                  <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" /></svg>
                                Photo & Video SDK</li>
                            <li>                  <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" /></svg>
                                Creative API</li>
                            <li>                 <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" /></svg>
                                Configurable editor</li>
                            <li>                  <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" /></svg>
                                E-commerce tools</li>
                        </ul>
                    </div>
                </div>
            )}




            <section className="compare-feature">

                <div className="compare">

                    <h1 className="compare-title">Compare features</h1>

                    <div className={`compare-head ${sticky ? "active" : ""}`}>

                        <div></div>

                        <div className="plan-col">
                            <h3>Free</h3>
                            <p>₹0<span>/mo</span></p>
                            <button className="btn-outline">Current plan</button>
                        </div>

                        <div className="plan-col">
                            <h3>Plus</h3>
                            <p>₹590<span>/mo</span></p>
                            <button className="btn-outline">Try for free</button>
                        </div>

                        <div className="plan-col">
                            <h3>Pro</h3>
                            <p>₹690<span>/mo</span></p>
                            <button className="btn-purple">Try for free</button>
                        </div>
                    </div>

                    <div className="compare-body">

                        <h2>Included with every plan</h2>

                        {[
                            "Standard photo and video editing tools",
                            "Custom dimensions for any edit",
                            "One-of-a-kind images from the Picsart community",
                            "Selection of customizable design templates",
                            "Selection of fonts, stickers, and shapes"
                        ].map((item, i) => (
                            <div className="row" key={i}>
                                <p>{item}</p>
                                <span className="dot gray"></span>
                                <span className="dot gradient"></span>
                                <span className="dot purple"></span>
                            </div>
                        ))}

                        <div className="divider"></div>



                        <h2>Content</h2>

                        {[
                            "Millions of stock images and video clips",
                            "Premium design templates",
                            "Premium FontFaceSet,stickers and shapes"
                        ].map((item, i) => (
                            <div className="row" key={i}>
                                <p>{item}</p>
                                <span></span>
                                <span className="dot gradient"></span>
                                <span className="dot purple"></span>
                            </div>
                        ))}

                        <div className="divider"></div>


                        <h2>Consistent branding</h2>

                        {[
                            "Export as PNG and PDF",
                            "Save brand colors",
                            "Use custom fonts"
                        ].map((item, i) => (
                            <div className="row" key={i}>
                                <p>{item}</p>
                                <span></span>
                                <span className="dot gradient"></span>
                                <span className="dot purple"></span>
                            </div>
                        ))}

                        <div className="divider"></div>



                        <h2>Collaboration and productivity</h2>

                        {[
                            "Team creation",
                            "Centralized billing and account management for a team",
                            "Batch Editor (bulk edit up to 50 images at once)",
                            "Real-time collaboration (coming soon)",
                            "Shareable links (coming soon)"
                        ].map((item, i) => (
                            <div className="row" key={i}>
                                <p>{item}</p>
                                <span></span>
                                <span className="dot gradient"></span>
                                <span className="dot purple"></span>
                            </div>
                        ))}


                        <div className="divider"></div>

                        <h2>Storage and access</h2>

                        {[
                            "Cloud storage (to store design and assets in one place)",
                            "Access projects on mobile app and on web platform",
                            "Subscription access on multiple devices"
                        ].map((item, i) => (
                            <div className="row" key={i}>
                                <p>{item}</p>
                                <span></span>
                                <span className="dot gradient"></span>
                                <span className="dot purple"></span>
                            </div>
                        ))}


                        <div className="divider"></div>

                        <h2>AI tools</h2>

                        {[
                            "Face retouching tools",
                            "1-step background & object removers for photos",
                            "1-step background & object removers for videos",
                            "QR Code Generator",
                            "AL Style Transfer (duplicates the style of a sourced image)"
                        ].map((item, i) => (
                            <div className="row" key={i}>
                                <p>{item}</p>
                                <span></span>
                                <span></span>
                                <span className="dot purple"></span>
                            </div>
                        ))}

                        <div className="divider"></div>
                    </div>

                </div>
            </section>



            <section className="questions">
                <div className="faq">
                    <h1>Frequently Asked Questions</h1>

                    <div className="faq-box">
                        {data.map((item, i) => (
                            <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
                                <div className="faq-question" onClick={() => setOpen(open === i ? null : i)}
                                >
                                    <p>{item.q}</p>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 306.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
</span>
                                </div>

                                {open === i && <div className="faq-answer">{item.a}</div>}
                            </div>
                        ))}
                    </div>

                    <p className="help">Still have a question?</p>

                    <div className="faq-buttons">
                        <button className="purple1">Visit our support page</button>
                        <button className="outline">Contact us</button>
                    </div>
                </div>

                < Footer />
            </section>


        </div>


    );
}
