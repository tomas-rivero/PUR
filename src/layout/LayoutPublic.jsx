import { LazyMotion, domAnimation, m } from "framer-motion"
import { useLocation, Outlet, useNavigation } from "react-router-dom"
import { CompFooter, CompNavbar } from "../components";
import UseScrollTop from "../components/ScrollToTop";


export const LayoutPublic = () => {

    const location = useLocation();
    const navigation = useNavigation();
    console.log(navigation.state);
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

    UseScrollTop()
    return (
        <LazyMotion features={domAnimation}>
            <m.div animate={{ opacity: 1 }} >

                {isNavbarVisible && <CompNavbar />}

                <main>
                    {navigation.state === "loading" && (<h1>Loading...</h1>)}

                    <Outlet />
                </main>

                {isNavbarVisible && <CompFooter />}

            </m.div>

        </LazyMotion>
    )
}
