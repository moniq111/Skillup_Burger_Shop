// Write all the code here
import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import {FiShoppingCart} from "react-icons/fi";
import { motion } from "framer-motion";
import DropdownMenu from "./DropdownMenu";


const Header = () => {
    return(
        <nav>
            <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}><IoFastFoodOutline />
            </motion.div>
            <div>
                <a href="/">Inicio</a>
                <a href="Contact">Contacto</a>
                <a href="About">Quiénes Somos</a>
                
                <a href="/cart"> <FiShoppingCart /></a>
                
                                
                <DropdownMenu />
            </div>
            
            

        </nav>

    )
        
    }


export default Header;
