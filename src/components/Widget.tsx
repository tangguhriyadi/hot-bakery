import React, { ComponentPropsWithRef, useMemo } from "react";
import { useOrderContext } from "../provider/Order";
import { SourceType } from "../utils/types";

interface WidgetProps extends ComponentPropsWithRef<"div"> {
    title: SourceType;
}

const Widget: React.FC<WidgetProps> = (props) => {
    const { title, ...restProps } = props;
    const { orders } = useOrderContext();

    const value = useMemo<number>(() => {
        let res: number = 0;
        orders.forEach((order) => {
            if (order.source === title) res++;
        });
        return res;
    }, [orders, title]);
    return (
        <div
            className="flex flex-col w-full max-w-[250px] border-[2px] rounded-md border-orange-500"
            {...restProps}
        >
            <div className="border-b-[2px] border-orange-500 overflow-hidden py-2 bg-slate-200">
                <h2 className=" text-center font-semibold text-3xl capitalize">{title}</h2>
            </div>
            <div className="p-5 text-[42px] flex justify-center items-center fomt-bold">
                {value}
            </div>
        </div>
    );
};

export default Widget;
