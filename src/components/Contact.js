import React from 'react'
import maps from '../components/maps.png'
import mail from '../components/mail.png'
import linkedin from '../components/linkedin.png'


const Contact = () => {
    return (
        <div id='contact-section'>
            <div style={{ textAlign: 'center', paddingBottom: '3%' }}>
                <p style={{ color: '#147EFB', fontWeight: 'bold', fontSize: 17 }}>CONTACT</p>
                <p style={{ fontWeight: 'bold', fontSize: 25 }}>Hit Me Up!</p>
                <p>I'm at the moment open to new opportunities that will accelerate my growth as a developer, so if you are hiring, do drop me an email. Feel free to connect on my social media as well so we can be friends !</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
                <div>
                    <img src={maps} />
                    <p>Location</p>
                    <a style={{textDecoration: 'none'}} href='https://www.google.com/maps/place/Seri+Kembangan,+Selangor/@3.0089644,101.6505372,13z/data=!3m1!4b1!4m6!3m5!1s0x31cdb55f1721e103:0x682c9d5e1c509291!8m2!3d3.021998!4d101.7055411!16zL20vMDV6dGZ4'>
                        <p>Seri Kembangan, Selangor</p>
                    </a>
                </div>

                <div>
                    <img src={mail} />
                    <p>Mail</p>
                    <a style={{textDecoration: 'none'}} href='mailto:sufianrahim1@gmail.com'>
                        <p>sufianrahim1@gmail.com</p>
                    </a>
                </div>

                <div>
                    <img src={linkedin} />
                    <p>LinkedIn</p>
                    <a style={{textDecoration: 'none'}} href='https://www.linkedin.com/in/sufian-rahim-351b8a153/'>
                        <p>Sufian Rahim</p>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Contact
