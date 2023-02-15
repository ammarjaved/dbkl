import { Link, NavLink } from "react-router-dom";

const Navbar = () =>{
    return (
        <>
        <nav className="shadow-sm bg-white ">
        <Link href="#" style={{float:"left" }}>a</Link>
            <ul className="p-3">
                <li>ONLINE PERMIT APPLICATION</li>
                
                <li className="for-mob float-right">12334234</li>
                <li className="for-mob float-right">MANUAL</li> 
                <li className="for-mob float-right">MOHD SAIFUL ANUAR BIN MOHD RAPHEAL, IR. TS. (UTILENGINEER, WBGEENGINEER)</li>
                
            </ul>
        </nav>
        </>
    )
}

export default Navbar;