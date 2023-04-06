import React from 'react'
import gitlogo from '../components/github.svg'
import IonIcon from '@reacticons/ionicons';
import profile from '../components/profile.png'
import html from '../components/html.png'
import css from '../components/css.png'
import bootstrap from '../components/bootstrap.png'
import javascript from '../components/javascript.png'
import react from '../components/react.png'
import { Slide, Zoom } from "react-awesome-reveal";

//INSTALL IONICONS-- npm i @reacticons/ionicons

const Home = () => {
    return (
        <div id='home-section' style={{ backgroundColor: '#f9f9f9', paddingBottom: 90, paddingTop: 120}}>
            <div class="container text-center">
                <div class="row" style={{paddingTop: 110 }}>
                    <div class="col">
                        <Zoom triggerOnce={true} >
                        <img src={profile} alt='logo' style={{ height: 400 }} />
                        </Zoom>
                    </div>
                    <div class="col">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <h1 style={{ fontSize: 55, textAlign: 'left' }}>Front-End React Developer</h1>
                            <p style={{ fontSize: 18 }}>Hi, I'm Sufian. A passionate Front-End React</p>
                            <p style={{ fontSize: 18 }}>Developer based in Kuala Lumpur, Malaysia</p>
                            <div>
                                <a href='https://github.com/Papa-Regar'>
                                    <IonIcon name="logo-github" size='large' />
                                </a>

                                <a href='https://www.linkedin.com/in/sufian-rahim-351b8a153/'>
                                    <IonIcon name="logo-linkedin" size='large' />
                                </a>
                            </div>
                            <a href='https://drive.google.com/file/d/1yEU2Oh8hGTr9czbWEVaN52Vs54gKVl5s/view?usp=share_link'>
                            <button className='btn btn-primary' style={{marginTop: 20}}>Download CV</button>
                            </a>
                        </div>

                        <div style={{ display: 'flex',marginTop: 70, gap: 4 }}>
                   <Slide duration={3000}>
                    <h4>Tech Stack |</h4>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
                        <img src={html} style={{ height: 41, width: 41, marginTop: 4 }} />
                        <img src={css} />
                        <img src={javascript} />
                        <img src={react} />
                        <img src={bootstrap} />
                    </div>
                    </Slide>
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
