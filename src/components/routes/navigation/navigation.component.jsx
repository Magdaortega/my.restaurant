import {Link} from "react-router-dom"
import { Fragment } from "react"

export const Navigation = () => {
    <Fragment>
        <div>
            <Link to="/">Home</Link>
            <Link to="/sobreNosotros">Sobre Nosotros</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/reservas">Reservas</Link> 
        </div>
        <Outlet />
    </Fragment>
}