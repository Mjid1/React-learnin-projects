import React, { Component } from "react";
import TeamMember from "./TeamMember";
import './style.css';
import MemberInfo from "./MemberInfo";


class Team extends Component{
    constructor(){
        super()
        this.state={
            memberInfo:MemberInfo,
            members: [],
            counter:0,
        }
        this.clickEvent = this.clickEvent.bind(this)
    }

    clickEvent(){
        if(this.state.counter < this.state.memberInfo.length){
            this.state.members.push(this.state.memberInfo[this.state.counter])
            this.setState(function(prevState){
                return {counter:prevState.counter+1}
            })
    
            this.newMembers = this.state.members.map(function(member){
                return <TeamMember key={member.id} img={member.img} name={member.name} position={member.position} phone={member.phone} email={member.email} website={member.website}/>
            })
        }
    }

    render(){          
        return(
            <div className="row">
                <button className="btn btn-primary btn-lg btn-block" onClick={this.clickEvent}>Show</button>
                {this.newMembers}
            </div>
        )
    }
}
export default Team;