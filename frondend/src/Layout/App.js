import { React } from "react";
import mylogo from "../img/UAM_Logo.png";
import myfooter from '../img/footer.png';
import './AppStyle.scss';
import Login from '../components/login.js';


function App() {
  return (
    <div className="container" >
      <div className="header">
        <img className="Logo" src={mylogo} alt=" esta mal"></img>
      </div>
      <Login></Login> 
      <div className="footer">
      <img className="infoFooter" src={myfooter} alt=" esta mal"></img>
      </div>
    </div>
  );
  
}
export default App;