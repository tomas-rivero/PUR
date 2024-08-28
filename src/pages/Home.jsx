import { Carousel, Col, Container, Ratio, Row } from 'react-bootstrap';
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
                    transition={{ duration: 1 }}>

                    <Element name="home">
                        <section>
                            <div className='containerDivImage' >
                                <div className='imgDiv backgroundPur'></div>
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
                                            <p className='fs-1'>"¡Naveguemos mar adentro y echemos las redes!"</p>
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
                                    <img src="./img/todos.jpg" alt="" loading="lazy"/>
                                    {/* <img src="./img/coordinacion.jpg" alt="" /> */}
                                </div>
                            </section>
                        </motion.div>

                        <div className='text-center'>
                            <img width="30" height="30" src="./img/whiteRosary.png" alt="white-rosary" />
                        </div>


                        <div>
                            <section className='text-white mt-3'>
                                <h1 className='text-center pb-4'>¿Quienes somos?</h1>
                                <Row>
                                    <Col xs={12} md={12} lg={6}>
                                        <div className='lh-lg'>
                                            <p>
                                                El <b> Equipo Arquidiocesano de Pastoral Universitaria</b>  es la instancia de la Iglesia Católica encargada de acompañar y apoyar a los católicos en la universidad o institutos de enseñanza superior, sean alumnos, personal docente, personal administrativo y de maestranza.
                                            </p>
                                            <p>
                                                Somos un grupo de amigos católicos, una comunidad, que buscamos entrar y profundizar en el diálogo fe-cultura, fe-vida, fe-ciencia, fe-razón.
                                            </p>
                                            <p>
                                                Realizamos cientos de actividades. Entre ellas: conferencias, debates universitarios, campamentos, retiros, proyectos solidarios, misiones en las universidades, entre otras.
                                            </p>
                                            <p>
                                                La <b>PUR</b> (Pastoral Universitaria de Rosario) es una gran familia, una gran comunidad donde buscamos afianzar nuestra amistad en Cristo e ir tejiendo de a poco una red de profesionales que estén dispuestos a donar parte de su tiempo a quienes más lo necesitan.
                                                <cite> Profesionales de buena voluntad, que sirvan a la Iglesia y al mundo.</cite>
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={12} lg={6}>
                                        <Carousel fade >
                                            <Carousel.Item>
                                                <img className="d-block w-100" src="../img/1.jpeg" alt="" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="d-block w-100" src="../img/2.jpg" alt="" text="First slide" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="d-block w-100" src="../img/3.jpg" alt="" />
                                            </Carousel.Item>
                                        </Carousel>

                                    </Col>
                                </Row>

                            </section>
                        </div>

                        <div className='text-center pb-5'>
                            <img width="30" height="30" src="../img/whiteRosary.png" alt="white-rosary" />
                        </div>

                    </Container>

                    <div className="parallax">


                        <Container>
                            <Row className="justify-content-md-center align-items-center">
                                <Ratio aspectRatio={50}>
                                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/a9HRv2bPL34?si=AiTZqVTQF3XyZAh4&amp;start=27" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </Ratio>
                            </Row>
                        </Container>

                    </div>

                    <Container fluid="xl">
                        <div className='text-center py-4'>
                            <img width="30" height="30" src="../img/whiteRosary.png" alt="white-rosary" />
                        </div>
                        <section className='text-white'>
                            <h1 className='text-center mb-4'>Nuestros patronos</h1>
                            <Row xs={1} md={2} lg={3}>
                                <Col>
                                    <motion.div
                                        variants={boxVariant}
                                        initial="opacityClear"
                                        whileInView="opacityDone"
                                        viewport={{ once: false }}>
                                        <div className="card mb-3 cardBackground text-white border-5">
                                            <Row className='g-0'>
                                                <Col xs={4} sm={4} lg={4} >
                                                    <img src="../img/santos/lourdes.jpg" className="img-fluid rounded-start" alt="..." />
                                                </Col>
                                                <Col xs={8} sm={8} lg={8}>
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold">Nuestra Señora de Lourdes</h5>
                                                        <hr className="text-white-50" />

                                                        <p className="card-text"><small className="text-white-50">27 de octubre</small></p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>

                                    </motion.div>

                                </Col>
                                <Col>
                                    <motion.div
                                        variants={boxVariant}
                                        initial="opacityClear"
                                        whileInView="opacityDone"
                                        viewport={{ once: false }}
                                    >
                                        <div className="card mb-3 cardBackground text-white border-5">
                                            <Row className='g-0'>
                                                <Col xs={4} sm={4} lg={4}>
                                                    <img src="../img/santos/chiara.jpg" className="img-fluid rounded-start" alt="..." />
                                                </Col>
                                                <Col xs={8} sm={8} lg={8}>
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold">Beata Chiara Luce Badano</h5>
                                                        <hr className="text-white-50" />

                                                        <p className="card-text"><small className="text-white-50">27 de octubre</small></p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </motion.div>
                                </Col>
                                <Col>
                                    <motion.div
                                        variants={boxVariant}
                                        initial="opacityClear"
                                        whileInView="opacityDone"
                                        viewport={{ once: false }}
                                    >

                                        <div className="card mb-3 cardBackground text-white border-5">
                                            <Row className='g-0'>
                                                <Col xs={4} sm={4} lg={4}>
                                                    <img src="../img/santos/tomasaquino.jpg" className="img-fluid rounded-start" alt="..." />
                                                </Col>
                                                <Col xs={8} sm={8} lg={8}>
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold">Santo Tomas de Aquino</h5>
                                                        <hr className="text-white-50" />

                                                        <p className="card-text"><small className="text-white-50">28 de enero</small></p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </motion.div>

                                </Col>
                                <Col>
                                    <motion.div
                                        variants={boxVariant}
                                        initial="opacityClear"
                                        whileInView="opacityDone"
                                        viewport={{ once: false }}
                                    >
                                        <div className="card mb-3 cardBackground text-white border-5 icon-link-hover">
                                            <Row className='g-0'>
                                                <Col xs={4} sm={4} lg={4}>
                                                    <img src="../img/santos/sanpantaleonimage.jpg" className="img-fluid rounded-start" alt="..." />
                                                </Col>
                                                <Col xs={8} sm={8} lg={8}>
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold">San Pantaleon</h5>
                                                        <hr className="text-white-50" />

                                                        <p className="card-text"><small className="text-white-50">27 de julio</small></p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </motion.div>
                                </Col>
                                <Col>
                                    <motion.div
                                        variants={boxVariant}
                                        initial="opacityClear"
                                        whileInView="opacityDone"
                                        viewport={{ once: false }}
                                    >
                                        <div className="card mb-3 cardBackground text-white border-5 icon-link-hover">
                                            <Row className='g-0'>
                                                <Col xs={4} sm={4} lg={4}>
                                                    <img src="../img/santos/jpii.jpg" className="img-fluid rounded-start" alt="..." />
                                                </Col>
                                                <Col xs={8} sm={8} lg={8}>
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold">San Juan Pablo II</h5>
                                                        <hr className="text-white-50" />

                                                        <p className="card-text"><small className="text-white-50">22 de octubre</small></p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </motion.div>

                                </Col>
                                <Col>
                                    <motion.div
                                        variants={boxVariant}
                                        initial="opacityClear"
                                        whileInView="opacityDone"
                                        viewport={{ once: false }}
                                    >
                                        <div className="card mb-3 cardBackground text-white border-5 icon-link-hover">
                                            <Row className='g-0'>
                                                <Col xs={4} sm={4} lg={4}>
                                                    <img src="../img/santos/teresita.jpeg" className="img-fluid rounded-start" alt="..." />
                                                </Col>
                                                <Col xs={8} sm={8} lg={8}>
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold">Santa teresita del niño jesús</h5>
                                                        <hr className="text-white-50" />

                                                        <p className="card-text"><small className="text-white-50">01 de octubre</small></p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </motion.div>

                                </Col>
                            </Row>

                        </section>

                        <div className='text-center pt-4'>
                            <img width="30" height="30" src="../img/whiteRosary.png" alt="white-rosary" />
                        </div>


                        <Element name='donde'>
                            <motion.div variants={boxVariant}
                                initial="opacityClear"
                                whileInView="opacityDone"
                                viewport={{ once: false }}>
                                <section className='text-white text-center'>
                                    <h1 className='text-center pt-4'>¿Donde nos encontras?</h1>
                                    <p>En Córdoba 3169</p>
                                  
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4735.322323040412!2d-60.667316501106924!3d-32.941014311369074!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab5a5e64313f%3A0x77b0ed343f271fee!2sPastoral%20Universitaria%20de%20Rosario!5e0!3m2!1ses-419!2sar!4v1707180965495!5m2!1ses-419!2sar" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            

                                </section>
                             </motion.div>

                        </Element>

                        <div className='text-center py-4'>
                            <img width="30" height="30" src="./img/whiteRosary.png" alt="white-rosary" />
                        </div>

                        <section>
                            <div className='containerInstagram'>
                                <div className="elfsight-app-5f25b315-0f82-4981-83ba-9a1777f2d00a" data-elfsight-app-lazy></div>
                            </div>
                        </section>

                        <div className='text-center py-4'>
                            <img width="30" height="30" src="./img/whiteRosary.png" alt="white-rosary" />
                        </div>
                    </Container>
                </motion.div >
            </div>

        </main >

    )
}
