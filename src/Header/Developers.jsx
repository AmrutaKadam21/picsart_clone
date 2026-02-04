import './Developers.css'

function Developers() {


    return (

        <section className='developer-wrapper'>
            <section className='developer-header'>
                <h3>Integrations & Solutions</h3>
                <p>Make your products and technologies better and faster with Picsart API/SDK solutions.</p>
                <div className='dev-grid'>
                    <div className='grid1'>
                        <span className='cir-icon'>
                          
                        <h4>Automations</h4></span>
                        <p>Make</p>
                        <p>Zapier</p>
                        <p>Elastic.io</p>
                        <p>Integrately</p>
                        <p>Pabbly</p>
                        <span className='see-all'>See all automations</span>
                    </div>

                    <div className='grid1'>
                        <h4>SDK/API</h4>
                        <p>Print Editor SDK</p>
                        <p>Upscaler API</p>
                        <p>Social Media EDitor SDK</p>
                        <p>Background Remover API</p>
                        <p>Ultra Enhance API</p>
                        <span className='see-all'>See all SDK/API</span>

                    </div>

                    <div className='grid1'>
                        <div className='img-box'>
                            <img src='images\developer-nav.webp'></img>
                            <p>Integrate AI Powered Content Editor to your platform.</p>
                        </div>
                    </div>
                </div>

            </section>
        </section>



    )
}
export default Developers