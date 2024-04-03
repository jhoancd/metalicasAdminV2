import { HiOutlineCurrencyDollar, HiSearch } from "react-icons/hi"
import { Button, TextInput } from "flowbite-react"
import IconTitle from "../Components/UI/IconTitle"
import Navbar from "../Components/UI/Navbar"


const Ventas = () => {
    return (
        <div className='ventas'>
            <Navbar />

            <div className="m-2 bg-white p-4 rounded-lg border-slate-300 border">
                <IconTitle
                    title="Ventas"
                    icon={<HiOutlineCurrencyDollar size="25px" />}
                />

                <TextInput className="mt-2 w-full" type="text" icon={HiSearch} />
                <Button className="mt-2 w-full" size="sm" color="blue">Agregar Venta</Button>
            </div>
        </div>
    )
}

export default Ventas