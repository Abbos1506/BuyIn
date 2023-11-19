import Footer from "../home/companents/footer";
import ActProductComp from "./companents/actProducts";
import ActiveHeaderComp from "./companents/activeHeader";


const ActivePage = () => {
    return <div className="active">
        <ActiveHeaderComp/>
        <ActProductComp/>
        <Footer/>
    </div>
}

export default ActivePage;