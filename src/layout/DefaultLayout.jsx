import Header from "../components/Header";
import Footer from "../components/Footer";

const DefaultLayout = ({children}) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header/>
            <main className="flex-grow pt-16">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default DefaultLayout