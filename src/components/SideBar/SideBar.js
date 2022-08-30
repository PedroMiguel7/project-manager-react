import TemporaryDrawer from "./Drawer";
import Fixed from "./Fixed";

function SideBar() {
    let path = window.location.pathname;
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