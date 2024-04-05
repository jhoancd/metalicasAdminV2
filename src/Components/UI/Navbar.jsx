import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

const Navbar = () => {
    return (
        <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-800">
            <Breadcrumb.Item href="/" icon={HiHome}>
                Inicio
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default Navbar