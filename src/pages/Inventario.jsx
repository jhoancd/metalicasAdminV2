import React from 'react'
import { FaSearch, FaBoxOpen } from "react-icons/fa";
import { Label, TextInput } from 'flowbite-react';
import ProductItem from '../Components/UI/ProductItem';
import IconTitle from '../Components/UI/IconTitle';

const Inventario = () => {
    return (
        <div className='inventario'>

            <div className="max-w mb-2 container mx-auto px-1 h-48 bg-sky-950 flex items-center justify-center daily-sales rounded-b-xl">
                <div>
                    <IconTitle
                        title="Inventario"
                        icon={<FaBoxOpen size="25px" />}

                    />

                    <TextInput className="mt-5 w-full" type="text" icon={FaSearch} />
                </div>
            </div>

            <div className="elements mx-2">
                <ProductItem />
            </div>
        </div>
    )
}

export default Inventario