import React, { Component } from "react";

class TeamMember extends Component{
    render(){
        return(
            <div className="col-md-4">
                <div className="card" style={{borderColor: this.props.website ?'':'red'}}>
                <div className="card-header">
                    <img className="img" src={this.props.img} />
                </div>
                <div className="card-body">
                    <h2>{this.props.name}</h2>
                    <h5>{this.props.position}</h5>
                    <div>{this.props.phone}</div>
                    <div>{this.props.email}</div>
                    <div>{this.props.website}</div>
                </div>
                </div>
            </div>
        )
    }
}
export default TeamMember;