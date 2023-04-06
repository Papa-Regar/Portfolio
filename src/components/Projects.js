import React from 'react'
import shopii from '../components/shopii.JPG'
import recipe from '../components/recipe.JPG'
import marketing from '../components/marketing.JPG'
import movies from '../components/movies.JPG'
import IonIcon from '@reacticons/ionicons';
import { Fade } from "react-awesome-reveal";

//SCROLL REVEAL INSTALLED --npm i scrollreveal

const Projects = () => {
    return (
        <div id='projects-section' style={{ backgroundColor: '#f9f9f9', padding: 10 }}>
            <div style={{ textAlign: 'center', paddingBottom: '2%' }}>
                <p style={{ color: '#147EFB', fontWeight: 'bold', fontSize: 17 }}>PORTFOLIO</p>
                <p style={{ fontWeight: 'bold', fontSize: 25 }}>Each project is a unique piece of development</p>

            </div>

{/* FIRST PROJECT */}
            
            <div class="container" style={{ marginBottom: 40, borderRadius: 10, boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)' }}>
                <div class="row">
                    <div class="col-sm">
                        <img src={shopii} style={{ maxHeight: '100%', maxWidth: '60%', objectFit: 'cover', padding: '1%' }} />
                    </div>
                    <div class="col-sm" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', justifyContent: 'center', backgroundColor: 'white', color: 'black' }}>
                        <p style={{ fontSize: 17, color: '#147EFB', fontWeight: 'bold' }}>Ecommerce Web</p>
                        <p style={{ fontSize: 17 }}>I created a minimalist and mobile-friendly e-commerce web application with a functional shopping cart. I used several NPM libraries, including Carousel, and styled it using MDBootstrap</p>
                        <p style={{ fontWeight: 'bold' }}>React. Bootstrap</p>
                        <div>
                            <a href='https://github.com/Papa-Regar/shopii'>
                                <IonIcon name="logo-github" size='large' />
                            </a>
                            <a href='https://beamish-tulumba-69c277.netlify.app/'>
                                <IonIcon name="enter-outline" size='large' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

{/* SECOND PROJECT */}

            <div class="container" style={{ marginBottom: 40, borderRadius: 10, boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)' }}>
                <div class="row">
                    <div class="col-sm">
                        <img src={recipe} style={{ maxHeight: '100%', maxWidth: '60%', objectFit: 'cover', padding: '1%' }} />
                    </div>
                    <div class="col-sm" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', justifyContent: 'center', backgroundColor: 'white', color: 'black' }}>
                        <p style={{ fontSize: 17, color: '#147EFB', fontWeight: 'bold' }}>The Recipe Kitchen</p>
                        <p style={{ fontSize: 17 }}>I developed a recipe website that allows users to search for hundreds of recipes online. The website fetches data from the Edamam Food Database API and is styled using Bootstrap and Lottie Animation.</p>
                        <p style={{ fontWeight: 'bold' }}>React. Bootstrap. Edamam Food Database API</p>
                        <div>
                            <a href='https://github.com/Papa-Regar/The-Recipe-Kitchen'>
                                <IonIcon name="logo-github" size='large' />
                            </a>
                            <a href='https://sage-clafoutis-b24169.netlify.app/'>
                                <IonIcon name="enter-outline" size='large' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

{/* THIRD PROJECT */}

            <div class="container" style={{ marginBottom: 40, borderRadius: 10, boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)' }}>
                <div class="row">
                    <div class="col-sm">
                        <img src={marketing} style={{ maxHeight: '100%', maxWidth: '60%', objectFit: 'cover', padding: '1%' }} />
                    </div>
                    <div class="col-sm" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', justifyContent: 'center', backgroundColor: 'white', color: 'black' }}>
                        <p style={{ fontSize: 17, color: '#147EFB', fontWeight: 'bold' }}>ElevateYourBrand</p>
                        <p style={{ fontSize: 17 }}>This project focuses on styling the components for a marketing agency</p>
                        <p style={{ fontWeight: 'bold' }}>React. Bootstrap</p>
                        <div>
                            <a href='https://github.com/Papa-Regar/marketing'>
                                <IonIcon name="logo-github" size='large' />
                            </a>
                            <a href='https://sweet-mandazi-73ff35.netlify.app/'>
                                <IonIcon name="enter-outline" size='large' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

{/* FORTH PROJECT */}

            <div class="container" style={{ marginBottom: 40, borderRadius: 10, boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)' }}>
                <div class="row">
                    <div class="col-sm">
                        <img src={movies} style={{ maxHeight: '100%', maxWidth: '60%', objectFit: 'cover', padding: '1%' }} />
                    </div>
                    <div class="col-sm" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', justifyContent: 'center', backgroundColor: 'white', color: 'black' }}>
                        <p style={{ fontSize: 17, color: '#147EFB', fontWeight: 'bold' }}>Movies Go</p>
                        <p style={{ fontSize: 17 }}>This project enables users to search for a movie based on data fetched from the Movie Database Rapid API</p>
                        <p style={{ fontWeight: 'bold' }}>React. Bootstrap. Movies Database API</p>
                        <div>
                            <a href='https://github.com/Papa-Regar/movieapi'>
                                <IonIcon name="logo-github" size='large' />
                            </a>
                            <a href='https://bright-concha-f7250a.netlify.app/'>
                                <IonIcon name="enter-outline" size='large' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Projects
