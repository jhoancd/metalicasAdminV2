import { HiArrowSmDown, HiSearch, HiCheck } from "react-icons/hi"
import { Button, TextInput, Badge, Table } from "flowbite-react"
import IconTitle from "../Components/UI/IconTitle"
import Navbar from "../Components/UI/Navbar"
import { useState } from "react"
import Gasto from "../Components/modals/Gasto"


const Salidas = () => {

    const [modalGasto, setModalGasto] = useState(false);

    const controlGasto = {
        "variable": modalGasto,
        "funcion": setModalGasto
    }

    return (
        <>
            <Navbar />
            <Gasto control={controlGasto} />
            <div className='salidas p-2'>
                <div className="mb-2 bg-white p-4 rounded-lg border-slate-300 border">
                    <IconTitle
                        title="Salidas"
                        icon={<HiArrowSmDown size="25px" />}
                    />
                    <TextInput className="mt-2 w-full" type="text" icon={HiSearch} />
                    <Button
                        className="mt-2 w-full"
                        size="sm"
                        onClick={() => { setModalGasto(true) }}
                    >Agregar Salida</Button>
                </div>

                <div className="overflow-x-auto mb-5">
                    <Table striped>
                        <Table.Head>
                            <Table.HeadCell>Fecha</Table.HeadCell>
                            <Table.HeadCell>Descripcion</Table.HeadCell>
                            <Table.HeadCell>Motivo</Table.HeadCell>
                            <Table.HeadCell>Almacen</Table.HeadCell>
                            <Table.HeadCell>Valor</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            <Table.Row className="bg-white">
                                <Table.Cell>4-04-2024</Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Envoplast</Table.Cell>
                                <Table.Cell><Badge color="success" icon={HiCheck}>Pago</Badge></Table.Cell>
                                <Table.Cell>Danfel</Table.Cell>
                                <Table.Cell>$1.300.000</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Salidas