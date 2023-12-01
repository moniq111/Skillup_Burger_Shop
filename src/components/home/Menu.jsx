// Write all the code here
import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
    const addToCartHandler = ( itemNum) => {};
    return(
        <section id="menu">
            <h1>MENÛ</h1>
            <div>
                <MenuCard
                    itemNum={1} 
                    burgerSrc={burger1} 
                    price={3.30}
                    title="Hamburguesa con queso"
                    handler={addToCartHandler} 
                    delay={0.1}
                />
                <MenuCard
                    itemNum={2} 
                    burgerSrc={burger2} 
                    price={4.50}
                    title="Hamburguesa Vegetariana con queso"
                    handler={addToCartHandler} 
                    delay={0.5}
                />
                <MenuCard
                    itemNum={3} 
                    burgerSrc={burger3} 
                    price={6.10}
                    title="Hamburguesa con queso y patatas fritas"
                    handler={addToCartHandler} 
                    delay={0.8}
                />
                    

            </div>

        </section>
    )
}

export default Menu;


