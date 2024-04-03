import { Card, Button, Table } from "flowbite-react"
import { FaExchangeAlt, FaPlus } from "react-icons/fa";
import { useState } from "react";
import Traslado from "../modals/Traslado";

const ProductItem = () => {

    const [modalTraslado, setModalTraslado] = useState(false);
    const controlTraslado = {
        variable: modalTraslado,
        funcion: setModalTraslado
    }

    return (
        <>
            <Traslado control={controlTraslado} />

            <div className="overflow-x-auto mb-5">
                <Table striped>
                    <Table.Head>
                        <Table.HeadCell>Producto</Table.HeadCell>
                        <Table.HeadCell>Danfel</Table.HeadCell>
                        <Table.HeadCell>DyF</Table.HeadCell>
                        <Table.HeadCell>Nathan</Table.HeadCell>
                        <Table.HeadCell>Acciones</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Calentador VC; 50cm; Electrico</Table.Cell>
                            <Table.Cell>2</Table.Cell>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell>0</Table.Cell>
                            <Table.Cell>
                                <Button.Group>
                                    <Button outline onClick={() => setModalTraslado(true)}><FaExchangeAlt /></Button>
                                    <Button><FaPlus /></Button>
                                </Button.Group>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </>
    )
}

export default ProductItem