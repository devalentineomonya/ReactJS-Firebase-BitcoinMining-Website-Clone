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
        icon1: <FaRegCompass />,
        icon2: <FaCompass />
    },
    {
        id: 2,
        name: "Products",
        href: "/products",
        icon1: <BsGrid />,
        icon2: <BsGridFill />
    },
    {
        id: 3,
        name: "Walet",
        href: "/walet",
        icon1: <AiOutlineDollar />,
        icon2: <AiFillDollarCircle />
    },
    {
        id: 4,
        name: "Me",
        href: "/profile",
        icon1: <FaRegUserCircle />,
        icon2: <FaUserCircle />
    }

];
export default NavLinks