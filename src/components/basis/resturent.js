import React, {useState} from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./menuCard.js";
import Navbar from "./Navbar.js";

const uniqueList= [
    ...new Set(Menu.map((curElem)=>{
    return curElem.category;
})),"All",
];

const Resturent = () => {
    const [menuData, setmenuData] = useState(Menu);
    const [menuList, setMenuList]= useState(uniqueList)

    const filterItem = (catagory) =>{

        if(catagory === "All"){
            setmenuData(Menu);
        }
        const updatedList = Menu.filter((curElem) =>{
            return curElem.category === catagory;
        });
        setmenuData(updatedList);
    };

    return (
        <>
            <Navbar filterItem={filterItem}menuList={menuList} />
            <MenuCard menuData={menuData}/>
        </>
    );
};

export default Resturent
