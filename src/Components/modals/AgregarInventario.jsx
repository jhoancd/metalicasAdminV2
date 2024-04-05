import React, { useState } from 'react'
import { HiPlus } from "react-icons/hi";
import { Button, TextInput, Modal, Label } from 'flowbite-react';
import IconTitle from '../UI/IconTitle';
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../../firebase/config"

const AgregarInventario = ({ control }) => {

    const inventarioRef = collection(db, "inventario")
    const [objeto, setObjeto] = useState({});

    const agregarElemento = (nuevaPropiedad, nuevoValor) => {
        setObjeto((prevObjeto) => ({
            ...prevObjeto,
            [nuevaPropiedad]: nuevoValor,
        }));
    };

    const agregar = () => {
        addDoc(inventarioRef, objeto)
        control.funcion(false)
        setObjeto({})
    }

    return (
        <div>
            <Modal show={control.variable} onClose={() => control.funcion(false)}>
                <Modal.Header className="items-center px-5 py-2.5">
                    <IconTitle
                        title="Ingresar mercancia"
                        icon={<HiPlus size="20px" />}
                    />
                </Modal.Header>
                <Modal.Body className='p-4'>
                    <div className='mb-2'>
                        <div className="block mt-2">
                            <Label value="Articulo:" />
                        </div>
                        <TextInput type="text" required shadow onChange={(e) => { agregarElemento("articulo", e.target.value) }} />
                    </div>
                    <div className='mb-2'>
                        <div className="block mt-2">
                            <Label value="Metalicas DyF:" />
                        </div>
                        <TextInput type="number" required shadow onChange={(e) => { agregarElemento("dyf", parseInt(e.target.value)) }} />
                    </div>
                    <div className='mb-2'>
                        <div className="block mt-2">
                            <Label value="Metalicas Danfel:" />
                        </div>
                        <TextInput type="number" required shadow onChange={(e) => { agregarElemento("danfel", parseInt(e.target.value)) }} />
                    </div>
                    <div className='mb-2'>
                        <div className="block mt-2">
                            <Label value="Metalicas Nathan:" />
                        </div>
                        <TextInput type="number" required shadow onChange={(e) => { agregarElemento("nathan", parseInt(e.target.value)) }} />
                    </div>
                    <div className="mb-2">
                        <div className="block mt-2">
                            <Label value="Costo:" />
                        </div>
                        <TextInput type="number" required shadow onChange={(e) => { agregarElemento("costo", parseInt(e.target.value)) }} />
                    </div>
                </Modal.Body>
                <Modal.Footer className='justify-end p-2.5'>
                    <Button color="failure" outline onClick={() => control.funcion(false)}>
                        Cancelar
                    </Button>
                    <Button color="success" onClick={() => agregar()}>Aceptar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AgregarInventario