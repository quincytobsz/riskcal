import React from 'react';
import {Link} from 'react-router-dom';

function homeitem(props){
    return(
        <>
        <li className='home_item'>
            <Link className='home_item_link' to={props.path}>
                <figure className='home_item_pic-wrap' data-category={props.label}>
                    <img
                    className='home_item_img'
                    alt='Home img'
                    src={props.src}
                    />
                </figure>
            </Link>
        </li>
        </>
    )
}

export default homeitem;