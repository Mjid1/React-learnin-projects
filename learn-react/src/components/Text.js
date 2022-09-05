import React from 'react';

function Text(){
    const client="Designer"
    const color={
        designer:"red",
        programmer:"blue"
    }

    return(
        <p> <span style={{color: client === "Designer" ? color.designer : color.programmer}}>React</span> is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.</p>
    );
}
export default Text;