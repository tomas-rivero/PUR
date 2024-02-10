import { NavLink } from "react-router-dom"

export const NotFound = () => {
    return (
        <div>
            <section className="page_404">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-sm-12">
                            <div className="text-center">
                                <img src="../img/logopur.png" alt=""/>
                                <div className="four_zero_four_bg">

                                </div>
                                <div className="contant_box_404">
                                    <h1 className="text-center fw-bold text-danger">Error 404</h1>
                                    <p className="fw-semibold">¡Uh, qué macana! Parece que te tomaste el colectivo equivocado en la web.<br />Tranca, mientras tanto te invitamos a chusmear otras partes del sitio. ¡Gracias por bancarnos, loco!</p>
                                    <NavLink className="btn btn-dark" to='/' >Volver al inicio</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}
