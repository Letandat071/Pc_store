import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

const DefaultLayout = ({children}) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 relative">
            <Header/>
            <main className="flex-grow pt-32">
                <Breadcrumb />
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default DefaultLayout