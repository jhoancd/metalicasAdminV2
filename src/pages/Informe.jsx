import Navbar from '../Components/UI/Navbar'
import { HiX, HiOutlineTrendingUp, HiOutlineCurrencyDollar, HiOutlineArrowNarrowDown, HiOutlineSwitchHorizontal, HiMenuAlt4, HiCash } from "react-icons/hi"
import { Label, TextInput } from "flowbite-react"
import IconTitle from "../Components/UI/IconTitle"
import InformeBadge from '../Components/UI/InformeBadge'

const Informe = () => {
    return (
        <>
            <Navbar />
            <div className='m-2'>
                <div className="mb-2 bg-white p-4 rounded-lg border-slate-300 border">
                    <IconTitle
                        title="Informe de ventas"
                        icon={<HiOutlineTrendingUp size="25px" />}
                    />
                    <div className="flex mt-3">
                        <div className='flex-1 mr-2'>
                            <div className="block">
                                <Label value="Desde" />
                            </div>
                            <TextInput type="date" required />
                        </div>
                        <div className='flex-1'>
                            <div className="block">
                                <Label value="Hasta" />
                            </div>
                            <TextInput type="date" required />
                        </div>
                    </div>
                </div>
                <div className=" mb-2 bg-white p-4 rounded-lg border-slate-300 border ">
                    <InformeBadge title="$2.500.000" subTitle="Ventas" color="green" icon={<HiOutlineCurrencyDollar size="20px" />} />
                    <InformeBadge title="$700.000" subTitle="Salidas" color="red" icon={<HiOutlineArrowNarrowDown size="20px" />} />
                    <hr />
                    <InformeBadge title="$830.000" subTitle="Saldos Pendientes" color="yellow" icon={<HiX size="20px" />} />
                    <hr />
                    <InformeBadge title="$1.300.000" subTitle="Transferencias" color="blue" icon={<HiOutlineSwitchHorizontal size="20px" />} />
                    <hr />
                    <InformeBadge title="$590.000" subTitle="Total ventas" color="blue" icon={<HiMenuAlt4 size="20px" />} />
                    <InformeBadge title="$300.000" subTitle="Total Efectivo" color="blue" icon={<HiCash size="20px" />} />

                </div>
            </div>
        </>

    )
}

export default Informe