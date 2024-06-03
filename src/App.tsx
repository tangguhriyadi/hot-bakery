import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Widget from "./components/Widget";
import { OrderProvider } from "./provider/Order";

function App() {
    return (
        <OrderProvider>
            <Navbar />
            <main className="p-4">
                <section className="flex w-full justify-around">
                    <Widget title="whatsapp" />
                    <Widget title="call" />
                    <Widget title="email" />
                </section>
                <section className="mt-4">
                    <Table />
                </section>
            </main>
        </OrderProvider>
    );
}

export default App;
