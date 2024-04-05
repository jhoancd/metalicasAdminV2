import { Button, Table } from "flowbite-react"
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import Traslado from "../modals/Traslado";
import Ingreso from "../modals/Ingreso";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { collection, getDocs, } from 'firebase/firestore';
import { db } from "./../../firebase/config"

const ProductItem = () => {

    const inventarioRef = collection(db, "inventario")

    const [modalTraslado, setModalTraslado] = useState(false);
    const [modalIngreso, setModalIngreso] = useState(false);
    const [data, setData] = useState([]);

    const controlTraslado = {
        variable: modalTraslado,
        funcion: setModalTraslado
    }

    const controlIngreso = {
        variable: modalIngreso,
        funcion: setModalIngreso
    }

    const obtenerInventario = async () => {
        const items = await getDocs(inventarioRef)
        setData(items)
    }

    useEffect(() => {
        obtenerInventario()
    })

    return (
        <>
            <Traslado control={controlTraslado} />
            <Ingreso control={controlIngreso} />

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
                        {
                            data.forEach(doc => {
                                let articulo = doc.data()

                                return <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{articulo.articulo}</Table.Cell>
                                    <Table.Cell>{articulo.dyf}</Table.Cell>
                                    <Table.Cell>{articulo.danfel}</Table.Cell>
                                    <Table.Cell>{articulo.dyf}</Table.Cell>
                                    <Table.Cell>
                                        <Button.Group>
                                            <Button outline onClick={() => setModalTraslado(true)}><HiOutlineSwitchHorizontal /></Button>
                                            <Button onClick={() => setModalIngreso(true)}><FaPlus /></Button>
                                        </Button.Group>
                                    </Table.Cell>
                                </Table.Row>

                            })
                        }

                    </Table.Body>
                </Table>
            </div>
        </>
    )
}

export default ProductItem