import { HiOutlineCurrencyDollar, HiOutlineX, HiPlus } from "react-icons/hi";
import { Button, Modal, Label, TextInput, Select } from 'flowbite-react';
import IconTitle from '../UI/IconTitle';

const PagoAbono = ({ control }) => {
    return (
        <div>
            <Modal show={control.variable} onClose={() => control.funcion(false)}>
                <Modal.Header className="items-center px-5 py-2.5">
                    <IconTitle
                        title="Abonar"
                        icon={<HiOutlineCurrencyDollar size="20px" />}
                    />
                </Modal.Header>
                <Modal.Body className='p-4' >
                    <div className='mb-2'>
                        <div className="block mt-2">
                            <Label value="Fecha" />
                        </div>
                        <TextInput type="date" required shadow />
                    </div>
                    <div className='mb-2'>
                        <div className="block mt-2">
                            <Label value="Valor" />
                        </div>
                        <TextInput type="number" required shadow />
                    </div>
                    <div className="max-w mt-2">
                        <div className="block">
                            <Label value="Metodo" />
                        </div>
                        <Select required>
                            <option value="">Seleccionar metodo</option>
                            <option value="efectivo">Efectivo</option>
                            <option value="transferencia">Transferencia</option>
                            <option value="sistecrediro">Sistecredito</option>
                        </Select>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button size="sm" color="failure" onClick={() => control.funcion(false)}>
                        <IconTitle
                            sm
                            title="Cancelar"
                            icon={<HiOutlineX />}
                        />
                    </Button>
                    <Button size="sm" color="success" onClick={() => control.funcion(false)}>
                        <IconTitle
                            sm
                            title="Abonar"
                            icon={<HiPlus />}
                        />
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default PagoAbono