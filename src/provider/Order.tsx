import {
    createContext,
    useState,
    SetStateAction,
    Dispatch,
    useContext,
} from "react";
import { Order } from "../utils/types";

interface InitProviderProps {
    children: React.ReactNode;
}

interface OrderContextType {
    orders: Order[];
    setOrder: Dispatch<SetStateAction<Order[]>>;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<InitProviderProps> = ({ children }) => {
    const [data, setData] = useState<Order[]>([]);

    return (
        <OrderContext.Provider value={{ orders: data, setOrder: setData }}>
            {children}
        </OrderContext.Provider>
    );
};

// eslint-disable-next-line
export const useOrderContext = (): OrderContextType => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error(
            "useOrderContext must be used within a CourseProvider"
        );
    }

    return context;
};

export default OrderContext;
