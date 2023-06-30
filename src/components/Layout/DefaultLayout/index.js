import Header from "../components/Header";
import Sidebar from "./Sidebar";

function DefaultLauout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLauout;