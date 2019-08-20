import React, { Component } from 'react';

class Card extends Component {
    state = {  }
    render() { 
        const profile = this.props
        return (
             <div className="github-profile" style={{ margin:'1rem' }}>
            <img src={profile.avatar_url} alt="profile Pic"/>
            <div style={{display:'inline-block',marginLeft:10}} className="info">
                <div className="name" style={{ fontSize : '125%'}}>{profile.name}</div>
                <div className="company">{profile.company}</div>
            </div>

        </div> 
        );
    }
}
 
export default Card;