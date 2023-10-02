import NavBar from '../NavBar/NavBar';
import Footer from "../Footer/Footer";
import FormLogin from "./FormLogin";

const FormLoginContainer = () => {

    return (
        <>
        <NavBar/>
        <div className="mt-5">
            <FormLogin/>
        </div>
        <Footer/>
        </>
    )
}

export default FormLoginContainer;