import { FaCompass } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { AiOutlineDollar } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";



const NavLinks = [
    {
        id: 1,
        name: "Home",
        href: "/",
        icon1: <FaRegCompass size={30}/>,
        icon2: <FaCompass size={30}/>
    },
    {
        id: 2,
        name: "Products",
        href: "/products",
        icon1: <BsGrid size={30}/>,
        icon2: <BsGridFill size={30}/>
    },
    {
        id: 3,
        name: "Walet",
        href: "/walet",
        icon1: <AiOutlineDollar size={30}/>,
        icon2: <AiFillDollarCircle size={30}/>
    },
    {
        id: 4,
        name: "Me",
        href: "/profile",
        icon1: <FaRegUserCircle size={30}/>,
        icon2: <FaUserCircle size={30}/>
    }

];
export default NavLinks