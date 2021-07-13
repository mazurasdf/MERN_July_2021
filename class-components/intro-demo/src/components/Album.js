import React, {Component} from 'react';

class Album extends Component{
    render(){
        return(
            <div>
                <img src={this.props.imgLink} alt={this.props.albumName}/>
                <h3>{this.props.albumName}</h3>
                <h3>{this.props.artistName}</h3>
            </div>
        )
    }
}

export default Album;