import ActProductComp from "./companents/actProducts";
import ActiveHeaderComp from "./companents/activeHeader";


const ActivePage = () => {
    return <div className="active">
        <ActiveHeaderComp/>
        <ActProductComp/>
    </div>
}

export default ActivePage;