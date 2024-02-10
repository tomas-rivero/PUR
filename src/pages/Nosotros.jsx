import React from 'react'
import { Carousel, Col, Container, Ratio, Row } from 'react-bootstrap'

import { motion, useScroll } from "framer-motion"

export const Nosotros = () => {

    const { scrollYProgress } = useScroll();

    const boxVariant = {
        opacityClear: {
            opacity: 0,
        },
        opacityDone: {
            opacity: 1,
            transition: {
                type: "spring",
                duration: 2,
                delay: 0.2
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
                    transition={{ duration: 1 }}
                >
                    <Container>
                        <div className='pt-4'>
                            <section className='text-white mt-5'>
                                <h1 className='text-center'>¿Quienes somos?</h1>
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

                    <Container>
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
                                            <div className="row g-0">
                                                <div className="col-md-3">
                                                    <img src="../img/lourdes.jpeg" className="img-fluid rounded-start" alt="..." />
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold">Nuestra Señora de Lourdes</h5>
                                                        <hr className="text-white-50" />

                                                        <p className="card-text"><small className="text-white-50">27 de octubre</small></p>
                                                    </div>
                                                </div>
                                            </div>
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
                                            <div className="row g-0">
                                                <div className="col-md-3">
                                                    <img src="../img/chiara.jpg" className="img-fluid rounded-start" alt="..." />
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold">Beata Chiara Luce Badano</h5>
                                                        <hr className="text-white-50" />

                                                        <p className="card-text"><small className="text-white-50">27 de octubre</small></p>
                                                    </div>
                                                </div>
                                            </div>
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
                                            <div className="row g-0">
                                                <div className="col-md-3">
                                                    <img src="../img/tomasaquino.jpg" className="img-fluid rounded-start" alt="..." />
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold">Santo Tomas de Aquino</h5>
                                                        <hr className="text-white-50" />

                                                        <p className="card-text"><small className="text-white-50">28 de enero</small></p>
                                                    </div>
                                                </div>
                                            </div>
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
                                            <div className="row g-0">
                                                <div className="col-md-3">
                                                    <img src="../img/sanpantaleonimage.jpg" className="img-fluid rounded-start" alt="..." />
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold">San Pantaleon</h5>
                                                        <hr className="text-white-50" />

                                                        <p className="card-text"><small className="text-white-50">27 de julio</small></p>
                                                    </div>
                                                </div>
                                            </div>
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
                                            <div className="row g-0">
                                                <div className="col-md-3">
                                                    <img src="../img/jpii.jpg" className="img-fluid rounded-start" alt="..." />
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold">San Juan Pablo II</h5>
                                                        <hr className="text-white-50" />

                                                        <p className="card-text"><small className="text-white-50">22 de octubre</small></p>
                                                    </div>
                                                </div>
                                            </div>
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
                                            <div className="row g-0">
                                                <div className="col-md-3">
                                                    <img src="../img/teresita.jpeg" className="img-fluid rounded-start" alt="..." />
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold">Santa teresita del niño jesús</h5>
                                                        <hr className="text-white-50" />

                                                        <p className="card-text"><small className="text-white-50">1 de octubre</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                </Col>
                            </Row>

                        </section>

                        <div className='text-center py-4'>
                            <img width="30" height="30" src="../img/whiteRosary.png" alt="white-rosary" />
                        </div>

                    </Container>


                </motion.div >
            </div>


        </main>
    )
}
