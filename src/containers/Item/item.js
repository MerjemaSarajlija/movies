import React from 'react';
import { IMG_URL } from '../../utils/constants';
import '../../assets/item.css';
import { Link } from 'react-router-dom';


const Item = ({list, content}) =>{
    return(
        list.map((item) => {
            return (
                <Link to={`/details/${item.id}`} className="flexItem" key={item.id}>
                    <img alt ="" src={IMG_URL + item.poster_path} />
                    <h2>{item[content]}</h2>
                </Link>
            );
        })
    )}

export default Item;