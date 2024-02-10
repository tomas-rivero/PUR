import { Route, Routes, useLocation } from "react-router-dom"
import { Pantaleon, NotFound, Home } from "./"
import { CompNavbar } from "../components/CompNavbar";
import { ManosalaObra } from "./ManosalaObra";
import { Nosotros } from "./Nosotros";
import { CompFooter } from "../components/CompFooter";
import { LazyMotion, domAnimation, m } from "framer-motion"

export const App = () => {

  const location = useLocation();
  const validRoutes = ["/", "/sanpantaleon", "/manosalaobra", "/pur/nosotros"];
  const isNavbarVisible = validRoutes.includes(location.pathname);

  return (
    <LazyMotion features={domAnimation}>
      <m.div animate={{ opacity: 1 }} >
        {isNavbarVisible && <CompNavbar />}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pur/nosotros' element={<Nosotros />} />
          <Route path='/pur/integrantes' element={<Home />} />
          <Route path='/sanpantaleon' element={<Pantaleon />} />
          <Route path='/manosalaobra' element={<ManosalaObra />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <CompFooter />
      </m.div>

    </LazyMotion>
  )
}
