import React from "react";
import { useOrderContext } from "../provider/Order";

const Table: React.FC = () => {
    const { orders } = useOrderContext();
    return (
        <table className="border w-full">
            <thead>
                <th className="border border-black">No</th>
                <th className="border border-black">Source</th>
                <th className="border border-black">Email</th>
                <th className="border border-black">Phone</th>
                <th className="border border-black">Quantity</th>
                <th className="border border-black">Description</th>
            </thead>
            <tbody>
                {orders.length === 0 && <h3>No Order Found</h3>}
                {orders &&
                    orders.length > 0 &&
                    orders.map((order, index) => (
                        <tr>
                            <td className="border text-center">{index + 1}</td>
                            <td className="border text-center">{order.source}</td>
                            <td className="border text-center">{order.name}</td>
                            <td className="border text-center">{order.phone}</td>
                            <td className="border text-center">{order.quantity}</td>
                            <td className="border text-center">{order.description}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};

export default Table;
