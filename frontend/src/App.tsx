import DataTable from "componets/DataTable";
import Footer from "componets/Footer";
import NavBar from "componets/NavBar";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
  return (
    <>    
      <NavBar />

      <div className="container">
        <h5 className="text-primary py-3"> Sistema &gt; Usuários         
        </h5>
        <div className="move-right">
          <a href="/#" className='btn btn-success btn-mini addUser'> 
            Cadastrar <FontAwesomeIcon icon={faUserPlus}/> </a>
        </div>
         
        <DataTable />
      </div>
      
      <Footer />
    </>
  );
}

export default App; /* Visível */
