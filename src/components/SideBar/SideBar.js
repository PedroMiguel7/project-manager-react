import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TemporaryDrawer from "./Drawer";
import Fixed from "./Fixed";

function SideBar() {
    const navigate = useNavigate();
    const signout = (e) =>{
        e.preventDefault()
        localStorage.removeItem('token')
    }
    
    let path = window.location.pathname;
    let pathId = path.substring(path.lastIndexOf('/') + 1);
    const location = useLocation();
    if(path === '/' | localStorage.getItem("token") === null){
        return;
    }
    
    return(
        <>
            <Fixed />
            <TemporaryDrawer />
        </>
    );
}

export default SideBar;