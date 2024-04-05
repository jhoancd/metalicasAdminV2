import { Button, Table, Badge } from "flowbite-react"
import { HiCheck, HiOutlineDocumentText, HiOutlineExclamation } from "react-icons/hi";
import IconTitle from "./IconTitle";
import { useState } from "react";
import DetallesFactura from "../modals/DetallesFactura";

const TablaVentas = () => {

    const [modalDetalles, setModalDetalles] = useState(false)

    const control = {
        "variable": modalDetalles,
        "funcion": setModalDetalles
    }

    return (
        <div>

            <DetallesFactura control={control} />

            <div className="overflow-x-auto mb-5">
                <Table striped>
                    <Table.Head>
                        <Table.HeadCell>Fecha</Table.HeadCell>
                        <Table.HeadCell>Factura</Table.HeadCell>
                        <Table.HeadCell>Articulo</Table.HeadCell>
                        <Table.HeadCell>Almacen</Table.HeadCell>
                        <Table.HeadCell>Estado</Table.HeadCell>
                        <Table.HeadCell>Total</Table.HeadCell>
                        <Table.HeadCell>Detalles</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white">
                            <Table.Cell>4-04-2024</Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">8752</Table.Cell>
                            <Table.Cell>Calentador VC; 50cm; Electrico</Table.Cell>
                            <Table.Cell>Danfel</Table.Cell>
                            <Table.Cell>
                                <Badge color="warning" icon={HiOutlineExclamation}>Pendiente</Badge>
                            </Table.Cell>
                            <Table.Cell>$1.300.000</Table.Cell>
                            <Table.Cell>
                                <Button size="xs" outline onClick={() => setModalDetalles(true)} >
                                    <IconTitle
                                        title="Detalles"
                                        size="sm"
                                        sm
                                        icon={<HiOutlineDocumentText />}
                                    />
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white">
                            <Table.Cell>4-04-2024</Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">8752</Table.Cell>
                            <Table.Cell>Calentador VC; 50cm; Electrico</Table.Cell>
                            <Table.Cell>Danfel</Table.Cell>
                            <Table.Cell>
                                <Badge color="success" icon={HiCheck}>Pago</Badge>
                            </Table.Cell>
                            <Table.Cell>$1.300.000</Table.Cell>
                            <Table.Cell>
                                <Button size="xs" outline >
                                    <IconTitle
                                        title="Detalles"
                                        size="sm"
                                        sm
                                        icon={<HiOutlineDocumentText />}
                                    />
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}

export default TablaVentas