import React from 'react';
import { IMG_URL } from '../../utils/constants';


const DetailItem = ({list, content}) =>{
    return (
        <>
            <img alt="" src={IMG_URL + list.poster_path} />
            <h1>{list[content]}</h1>
            <p>{list.overview}</p>
        </>
    );
    }

export default DetailItem;