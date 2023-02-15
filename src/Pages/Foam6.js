import Sidebar from "../Components/Sidebar";
import PageHeader from "../Components/Page-header";
import FoamHeader from "../Components/Foam-header";
import InputForm from "../Components/Foam";



const Foam6 = () =>{
    return (
    <>
    <div className="row">
    <section className="col-md-2 col-sm-12">
         <Sidebar />
    </section>
    <section className="col-md-10 col-sm-12">
        <PageHeader />

        <div className="card p-2 faom-card" style={{borderRadius:'0px'}}>
        
        <FoamHeader />
        <div className="col-lg-12 p-3 mt-3 rounded-2 fw-bolder" style={{backgroundColor: '#ade2e9', color:"#4b4b4b"}}>Borang JKPB / P - 01</div>
            <h6 className="p-5 text-center" >FOAM 6</h6>
        
        </div>
    </section>
    </div>
    </>
    );
}

export default Foam6;