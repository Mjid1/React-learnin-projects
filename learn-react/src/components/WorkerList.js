import React from 'react';

function WorkerItem(props){
    const color={
        Exist:"red",
        NotExist:"blue"
    }

    const hid='hidden'


    return(
        <li className="list-group-item">
            <img src={props.p.img} className="photo"/>
            <h2 style={{color: props.p.email != "" ? color.Exist : color.NotExist}}>{`Name: ${props.p.name}`}</h2>
            <h2>{`Job: ${props.p.job}`}</h2>
            <h2>{`Phone: ${props.p.phone}`}</h2>
            <h2> {`${props.p.email != "" ? "Email" : " "} ${props.p.email}`}</h2>
        </li>
    )
}

export default WorkerItem