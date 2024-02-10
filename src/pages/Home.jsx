import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Element, Link } from 'react-scroll';
import { motion, useScroll } from "framer-motion"


export const Home = () => {

    const { scrollYProgress } = useScroll();

    const boxVariant = {
        opacityClear: {
            opacity: 0,
        },
        opacityDone: {
            opacity: 1,
            transition: {
                type: "spring",
                duration: 3
            }
        }
    }

    return (
        <main>
            <svg id="progress" width="50" height="50" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="1"
                    className="indicator"
                    style={{ pathLength: scrollYProgress }}
                />
            </svg>

            <div className='containerAll'>
                <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3 }}>

                    <Element name="home">
                        <section>
                            <div className='containerDivImage' >
                                <div className='imgDiv'></div>
                                <div className='gradientDivText'></div>
                                <div className='imgDivText lh-sm'>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 2 }}
                                    >
                                        <p>PASTORAL</p>
                                        <p>UNIVERSITARIA</p>
                                        <p>de ROSARIO</p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.7,
                                        }}
                                    >
                                        <Link to="inicio">
                                            <Button variant="outline-light" size="md">Saber más...</Button>
                                        </Link>
                                    </motion.div>

                                </div>
                            </div>
                        </section>
                    </Element>

                    <Container>


                        <Element name="inicio">
                            <motion.div variants={boxVariant}
                                initial="opacityClear"
                                whileInView="opacityDone"
                                viewport={{ once: false }}>
                                <section className='containerDivTittle pt-5' >
                                    <figure className='text-center pt-4'>
                                        <blockquote className="blockquote">
                                            <p>"¡Naveguemos mar adentro y echemos las redes!"</p>
                                        </blockquote>
                                        <figcaption className="blockquote-footer">
                                            Nuestro lema, inspirado en <cite title="Source Title">Lucas 5, 1:11</cite>
                                        </figcaption>
                                    </figure>
                                </section>
                            </motion.div>


                        </Element>

                        <div className='text-center pt-5'>
                            <img width="30" height="30" src="./img/whiteRosary.png" alt="white-rosary" />
                        </div>

                        <motion.div
                            variants={boxVariant}
                            initial="opacityClear"
                            whileInView="opacityDone"
                            viewport={{ once: false }}
                        >
                            <section>
                                <div className='containerDivPhotos'>
                                    <img src="./img/todos.jpg" alt="" />
                                    {/* <img src="./img/coordinacion.jpg" alt="" /> */}
                                </div>
                            </section>
                        </motion.div>



                        <div className='text-center pt-2'>
                            <img width="30" height="30" src="./img/whiteRosary.png" alt="white-rosary" />
                        </div>


                        <Element name='donde'>
                            <motion.div variants={boxVariant}
                                initial="opacityClear"
                                whileInView="opacityDone"
                                viewport={{ once: false }}>
                                <section className='text-white pt-5 text-center'>
                                    <h1 className='text-center pt-3'>¿Donde nos encontras?</h1>
                                    <p>En Córdoba 3169</p>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4735.322323040412!2d-60.667316501106924!3d-32.941014311369074!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab5a5e64313f%3A0x77b0ed343f271fee!2sPastoral%20Universitaria%20de%20Rosario!5e0!3m2!1ses-419!2sar!4v1707180965495!5m2!1ses-419!2sar" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </section>
                            </motion.div>

                        </Element>



                        <section>
                            <div className='containerInstagram'>
                                <div className="elfsight-app-5f25b315-0f82-4981-83ba-9a1777f2d00a" data-elfsight-app-lazy></div>
                            </div>
                        </section>
                    </Container>
                </motion.div >
            </div>

        </main >

    )
}
