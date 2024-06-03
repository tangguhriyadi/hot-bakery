import React, { useCallback, useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { Order, SourceType } from "../utils/types";

interface ModalProps extends React.ComponentPropsWithRef<"div"> {
    isOpen: boolean;
    closeModal: () => void;
}

const SOURCE_OPTIONS: SourceType[] = ["whatsapp", "call", "email"];

const ModalForm: React.FC<ModalProps> = (props) => {
    const { isOpen, closeModal, ...restProps } = props;

    const [modalPosition, setModalPosition] = useState<string>("-100%");

    const [formState, setFormState] = useState<Order>({
        name: "",
        source: "whatsapp",
        description: "",
        phone: "",
        quantity: 0,
    });

    const handleSelectSource = useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            const value = e.target.value as SourceType;
            setFormState((prev) => ({
                ...prev,
                source: value,
            }));
        },
        []
    );

    const handleChangeName = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormState((prev) => ({
                ...prev,
                name: e.target.value,
            }));
        },
        []
    );
    const handleChangePhone = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormState((prev) => ({
                ...prev,
                phone: e.target.value,
            }));
        },
        []
    );
    const handleChangeQuantity = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormState((prev) => ({
                ...prev,
                quantity: parseInt(e.target.value),
            }));
        },
        []
    );
    const handleChangeDescription = useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setFormState((prev) => ({
                ...prev,
                description: e.target.value,
            }));
        },
        []
    );

    const onSubmitForm = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();
            console.log(formState);
            closeModal();
        },
        [formState, closeModal]
    );

    useEffect(() => {
        setModalPosition(isOpen ? "0%" : "-250%");
    }, [isOpen]);

    return (
        <div
            className={cn(
                "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[9999] items-center justify-center overflow-y-auto",
                isOpen ? "flex" : "hidden"
            )}
            style={{
                transition: "top 0.3s ease",
            }}
            {...restProps}
        >
            <div
                className="flex flex-col gap-y-4 relative bg-white rounded-md shadow-sm w-fit h-fit mx-4 lg:mx-0 py-4 px-6 top-[-10%]"
                style={{
                    transform: `translateY(${modalPosition})`,
                    transition: isOpen
                        ? "transform 0.3s ease"
                        : "transform 0.3s ease, top 0.3 ease",
                }}
            >
                <h2 className="text-center text-xl">Take Order</h2>
                <form
                    className="flex flex-col gap-y-3 min-w-[300px]"
                    onSubmit={onSubmitForm}
                >
                    <div className="flex gap-x-2 justify-between">
                        <label htmlFor="source">Source</label>
                        <select
                            onChange={handleSelectSource}
                            value={formState.source}
                            className="border rounded-sm px-1 w-full max-w-[200px]"
                        >
                            {SOURCE_OPTIONS.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex gap-x-2 justify-between">
                        <label htmlFor="name">Name</label>
                        <input
                            value={formState.name}
                            onChange={handleChangeName}
                            id="name"
                            className="border rounded-sm px-1 w-full max-w-[200px]"
                            required
                        />
                    </div>

                    <div className="flex gap-x-2 justify-between">
                        <label htmlFor="phone">Phone</label>
                        <input
                            value={formState.phone}
                            onChange={handleChangePhone}
                            id="phone"
                            className="border rounded-sm px-1 w-full max-w-[200px]"
                            required
                        />
                    </div>

                    <div className="flex gap-x-2 justify-between">
                        <label htmlFor="quantity">Quantity</label>
                        <input
                            value={formState.quantity}
                            onChange={handleChangeQuantity}
                            id="quantity"
                            className="border rounded-sm px-1 w-full max-w-[200px]"
                            type="number"
                            required
                            min={1}
                        />
                    </div>

                    <div className="flex gap-x-2 justify-between">
                        <label htmlFor="desc">Description</label>
                        <textarea
                            value={formState.description}
                            onChange={handleChangeDescription}
                            id="desc"
                            className="border rounded-sm px-1 w-full max-w-[200px]"
                            required
                        />
                    </div>
                    <button
                        className="self-end bg-blue-500 py-2 px-3 rounded-md text-white hover:bg-blue-600 active:bg-blue-700"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ModalForm;
