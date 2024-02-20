import { Route, Routes, useLocation } from "react-router-dom"
import { Pantaleon, NotFound, Home, ManosalaObra, AreasEquipos } from "./"
import { CompFooter, CompNavbar } from "../components";
import { LazyMotion, domAnimation, m } from "framer-motion"
import { Sociales, Salud, Ecopuring, AyD } from "./areas";

export const App = () => {

  const location = useLocation();
  const validRoutes =
    ["/",
      "/sanpantaleon",
      "/manosalaobra",
      "/pur/equipos",
      "/areas/sociales",
      "/areas/salud",
      "/areas/ecopuring",
      "/areas/arteydisenio",
      "equipos/comunicacion"
    ];

  const isNavbarVisible = validRoutes.includes(location.pathname);

  return (
    <LazyMotion features={domAnimation}>
      <m.div animate={{ opacity: 1 }} >
        {isNavbarVisible && <CompNavbar />}

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='areas/sociales' element={<Sociales />} />
          <Route path='areas/ecopuring' element={<Ecopuring />} />
          <Route path='areas/arteydisenio' element={<AyD />} />
          <Route path='areas/salud' element={<Salud />} />

          <Route path='/pur/equipos' />


          <Route path='/sanpantaleon' element={<Pantaleon />} />
          <Route path='/manosalaobra' element={<ManosalaObra />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        {isNavbarVisible && <CompFooter />}


      </m.div>

    </LazyMotion>
  )
}
