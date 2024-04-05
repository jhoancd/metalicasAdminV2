import { FaSearch, FaBoxOpen } from "react-icons/fa";
import { Button, TextInput } from 'flowbite-react';
import ProductItem from '../Components/UI/ProductItem';
import IconTitle from '../Components/UI/IconTitle';
import Navbar from '../Components/UI/Navbar';
import AgregarInventario from "../Components/modals/AgregarInventario";
import { useState } from "react";

const Inventario = () => {

    const [modalAgregar, setModalAgregar] = useState(false);

    const controlAgregar = {
        variable: modalAgregar,
        funcion: setModalAgregar
    }

    return (
        <div className='inventario'>
            <AgregarInventario control={controlAgregar} />
            <Navbar />

            <div className="m-2 bg-white p-4 rounded-lg border-slate-300 border">
                <div>
                    <IconTitle
                        title="Inventario"
                        icon={<FaBoxOpen size="25px" />}
                    />

                    <TextInput className="mt-5 w-full" type="text" icon={FaSearch} />

                    <Button
                        className="mt-2 w-full"
                        size="sm"
                        onClick={() => { setModalAgregar(true) }}
                    >Agregar Inventario</Button>
                </div>
            </div>

            <div className="elements mx-2">
                <ProductItem />
            </div>
        </div>
    )
}

export default Inventario