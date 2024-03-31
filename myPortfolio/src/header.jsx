import { FaRegLightbulb } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { GrContact } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { FaReact } from "react-icons/fa";



function Header(){

    return(
        <header>
            <h1>MyPortfolio</h1>

                <ul>
                    <li><CgProfile /></li>
                    <li><FaReact /></li>
                    <li><GrProjects /></li>
                    <li><GrContact /></li>
                    <li><button><FaRegLightbulb /></button></li>
                </ul>
                
        </header>
    )
}
export default Header