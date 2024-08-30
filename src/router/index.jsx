import { AyD, Ecopuring, Salud, Sociales } from "../pages/areas"
import { createBrowserRouter } from "react-router-dom";
import { LayoutPublic } from "../layout/layoutPublic";
import { Pantaleon, NotFound, Home, ManosalaObra } from "../pages"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/sanpantaleon',
                element: <Pantaleon />,
            },
            {
                path: '/manosalaobra',
                element: <ManosalaObra />,
            },
            {
                path: '/areas/sociales',
                element: <Sociales />,
            },
            {
                path: '/areas/salud',
                element: <Salud />,
            },
            {
                path: '/areas/ecopuring',
                element: <Ecopuring />,
            },
            {
                path: '/areas/arteydisenio',
                element: <AyD />,
            },
        ]
    },


])