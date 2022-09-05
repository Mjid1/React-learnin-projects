import React from 'react';

function Header(){

    const client="Designer"

    const title={
        designer:"Design",
        programmer:"Programming"
    }
    const info={
        name: "Majid",
        nick: "Ghaiati"
    }
    
    return(
        <div className="text-center">
            Hello {`${info.name}  ${info.nick}`}
            <h1>
                {client === "Designer" ? title.designer : title.programmer} is my life
            </h1>
        </div>       
    );
}
export default Header;