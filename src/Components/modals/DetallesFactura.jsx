import React, { useState } from 'react'
import { HiCheck, HiOutlineClock, HiOutlineDocumentText, HiOutlineX, HiPlus } from "react-icons/hi";
import { Button, Modal, Table, Badge } from 'flowbite-react';
import IconTitle from '../UI/IconTitle';
import TextDetail from '../UI/TextDetail';
import HistorialPagos from './HistorialPagos';

const DetallesFactura = ({ control }) => {

    const [modalHistorialPagos, setHistorialPagos] = useState(false);

    const controlHistorialPagos = {
        "variable": modalHistorialPagos,
        "funcion": setHistorialPagos
    }

    return (

        <>
            <HistorialPagos control={controlHistorialPagos} />
            <div>
                <Modal show={control.variable} onClose={() => control.funcion(false)}>
                    <Modal.Header>
                        <IconTitle
                            title="Detalles factura"
                            icon={<HiOutlineDocumentText size="20px" />}
                        />
                    </Modal.Header>
                    <Modal.Body className='p-4'>
                        <div className="grid md:grid-cols-2">
                            <TextDetail title="Factura" detail="5968" />
                            <div>
                                <span className='text-slate-600 block text-sm'>Estado</span>
                                <Badge className="w-16" color="success" icon={HiCheck}>Pago</Badge>
                                <hr className="mt-2" />
                            </div>
                        </div>
                        <TextDetail title="Fecha" detail="04-04-2024" />
                        <TextDetail title="Almacen" detail="Metalicas Danfel" />
                        <div className="tabla-detalles mb-2 overflow-x-auto">
                            <span className='text-slate-600 block text-sm'>Articulos</span>

                            <Table striped>
                                <Table.Head>
                                    <Table.HeadCell>Cant.</Table.HeadCell>
                                    <Table.HeadCell>Articulo</Table.HeadCell>
                                    <Table.HeadCell>Und.</Table.HeadCell>
                                    <Table.HeadCell>Total</Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y">
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell>2</Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Calentador VC; 50cm; Electrico</Table.Cell>
                                        <Table.Cell>4</Table.Cell>
                                        <Table.Cell>0</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </div>
                        <TextDetail title="Metodo de pago" detail="Efectivo" />
                        <TextDetail title="Total" detail="$4.500.000" />
                        <TextDetail title="Abono" detail="$4.000.000" />
                        <TextDetail title="Pendiente" detail="$500.000" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button size="sm" color="failure" onClick={() => control.funcion(false)}>
                            <IconTitle
                                sm
                                title="Cerrar"
                                icon={<HiOutlineX />}
                            />
                        </Button>
                        <Button.Group>
                            <Button size="sm" color="success">
                                <IconTitle
                                    title="Abono"
                                    sm
                                    icon={<HiPlus />}
                                />
                            </Button>
                            <Button size="sm" color="success" outline onClick={() => setHistorialPagos(true)}>
                                <IconTitle
                                    title="Pagos"
                                    sm
                                    icon={<HiOutlineClock />}
                                />
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default DetallesFactura