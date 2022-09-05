import React from 'react';

function SocialItem(props){

    return(
        <li className="list-group-item">
            <img src={props.p.img} />
            <input type="checkbox" id={props.p.id}/>
            <label htmlfor={props.id}>{props.p.media}</label>
        </li>
    )
}

export default SocialItem