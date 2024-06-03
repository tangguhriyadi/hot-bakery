import React, { useCallback, useState } from "react";
import ModalForm from "./ModalForm";

const Navbar: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const closeModal = useCallback<() => void>(() => {
        setIsModalOpen(false);
    }, []);

    return (
        <header className="w-full px-6 py-4 bg-slate-500 flex justify-between items-center">
            <h1 className="font-bold text-2xl text-white">Hot Bakery</h1>
            <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-3 bg-orange-500 rounded-md hover:bg-orange-400 active:bg-orange-600 transition-all duration-300 text-white"
            >
                Take Some Order
            </button>
            <ModalForm isOpen={isModalOpen} closeModal={closeModal} />
        </header>
    );
};

export default Navbar;
