import { HiOutlineCurrencyDollar, HiSearch } from "react-icons/hi"
import { Button, TextInput } from "flowbite-react"
import IconTitle from "../Components/UI/IconTitle"
import Navbar from "../Components/UI/Navbar"
import TablaVentas from "../Components/UI/TablaVentas"
import AgregarVenta from "../Components/modals/AgregarVenta"
import { useState } from "react"


const Ventas = () => {

    const [modalVenta, setModalVenta] = useState(false);
    const controlVenta = {
        variable: modalVenta,
        funcion: setModalVenta
    }

    return (
        <>
            <Navbar />
            <AgregarVenta control={controlVenta} />

            <div className='ventas p-2'>
                <div className="mb-2 bg-white p-4 rounded-lg border-slate-300 border">
                    <IconTitle
                        title="Ventas"
                        icon={<HiOutlineCurrencyDollar size="25px" />}
                    />
                    <TextInput className="mt-2 w-full" type="text" icon={HiSearch} />
                    <Button
                        className="mt-2 w-full"
                        size="sm"
                        color="blue"
                        onClick={() => { setModalVenta(true) }}
                    >Agregar Venta</Button>
                </div>

                <TablaVentas />
            </div>
        </>
    )
}

export default Ventas