import { Modal, Button, Select, Label, TextInput } from 'flowbite-react'
import { FaExchangeAlt } from "react-icons/fa";
import IconTitle from '../UI/IconTitle';

const Traslado = ({ control }) => {

    return (
        <>
            <Modal show={control.variable} onClose={() => control.funcion}>
                <Modal.Header>
                    <IconTitle
                        title="Traslado"
                        icon={<FaExchangeAlt size="20px" />}

                    /></Modal.Header>
                <Modal.Body>
                    <div className="space-y-6 mb-2">
                        <p className="text-base font-size text-lg font-bold ">
                            Calentador VC; 50cm; Electrico
                        </p>
                    </div>

                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="countries" value="De:" />
                        </div>
                        <Select id="countries" required>
                            <option value="danfel">Danfel</option>
                            <option value="dyf">DyF</option>
                            <option value="nathan">Nathan</option>
                        </Select>
                    </div>
                    <div className="max-w-md mt-2">
                        <div className="mb-2 block">
                            <Label htmlFor="countries" value="A:" />
                        </div>
                        <Select id="countries" required>
                            <option value="danfel">Danfel</option>
                            <option value="dyf">DyF</option>
                            <option value="nathan">Nathan</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block mt-2">
                            <Label value="Cantidad" />
                        </div>
                        <TextInput type="number" required shadow />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="success" onClick={() => control.funcion(false)}>Aceptar</Button>
                    <Button color="failure" outline onClick={() => control.funcion(false)}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Traslado