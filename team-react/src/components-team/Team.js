import React, { Component } from "react";
import TeamMember from "./TeamMember";
import './style.css';
import MemberInfo from "./MemberInfo";


class Team extends Component{
    constructor(){
        super()
        this.state={info:MemberInfo}
    }

    mapping(x){
        const members = x.map(member => <TeamMember
            key={member.id}
            img={member.img}
            name={member.name}
            position={member.position}
            phone={member.phone}
            email={member.email}
            website={member.website}                 
        />
        )
        return members
    }

    clickEvent(){

    }


    render(){          
        return(
            <div className="row">
                <button className="btn btn-primary btn-lg btn-block" onClick={this.clickEvent}>Show</button>
                {this.mapping(this.state.info)}
            </div>
        )
    }
}
export default Team;