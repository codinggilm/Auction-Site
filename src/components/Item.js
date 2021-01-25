import React, {Component} from 'react';
import './Item.css'
import hammer from '../assets/auction.jpg';
 



class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: props.user,
            itemOneBid: ''
        }
    }

    onBidChange = (event) => {
        this.setState({itemOneBid: event.target.value})
    }

    onSubmitBid = () => {
        fetch('http://localhost:3000/bid1', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: this.state.username,
                itemOneBid: this.state.itemOneBid
            })
        })
        // .then(response => response.json())
        // .then(user => {
        //     if (user.username) {
        //         this.props.loadUser(user);
        //         this.props.onRouteChange('home');
        //     }
        // })
    }

    render () {
        return (
            <div id="item">
                <img src={hammer} alt=""/>
                <p>Name</p>
                <p>description</p>
                <input 
                    type="number"
                    onChange={this.onBidChange}

                />
                <button onClick={this.onSubmitBid}>SUBMIT BID</button>
            </div>
        )
    }
};


export default Item;