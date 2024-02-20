import { Col, Container, Row } from 'react-bootstrap'

import { motion, useScroll } from "framer-motion"

export const Ecopuring = () => {

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
                                <Row lg={12} className='justify-content-md-center align-items-center'>
                                    <Col lg={7}>
                                        <p className='textGobold'>Ecopuring</p>
                                    </Col>
                                    <Col lg={5}>
                                        <img src="../img/areas/ingenieria.svg" alt="" srcset="" width={700} />
                                    </Col>
                                </Row>

                            </section>
                        </div>

                        <div className='text-center pb-5'>
                            <img width="30" height="30" src="../img/whiteRosary.png" alt="white-rosary" />
                        </div>

                    </Container>

                </motion.div >

            </div>


        </main>
    )
}
