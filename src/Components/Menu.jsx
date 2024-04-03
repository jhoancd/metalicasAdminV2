import "./styles/menu.css"
import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <>
            <div className="menu container column-3 px-7 mt-4 flex justify-between flex-col text-sky-950">
                <ul>
                    <li className="w-full bg-white rounded-lg"><Link to="/inventario">Inventario </Link></li>
                    <li className="w-full bg-white rounded-lg"><Link to="/ventas">Ventas </Link></li>
                    <li className="w-full bg-white rounded-lg"><Link to="/salidas">Salidas </Link></li>
                    <li className="w-full bg-white rounded-lg"><Link to="/proveedores">Proveedores </Link></li>
                    <li className="w-full bg-white rounded-lg"><Link to="/informe">Informe </Link></li>
                </ul>

            </div>
        </>
    )
}

export default Menu