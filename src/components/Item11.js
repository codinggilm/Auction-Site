import React, {Component} from 'react';
import './Item.css'
import hammer from '../assets/auction.jpg';
 



class Item11 extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: props.user,
            itemOneBid: '',
            // User1Won: false,
            // User2Won: false,
            bidWinner: '',
            isWon: false

            // itemOneBid: '',
            // isBidClosed: false
        }
    }

    // componentDidMount() {
    //     console.log(this.state.bidWinner)
    // }

    // getResults = () => {
    //     fetch('http://localhost:3000/results', {
    //         method: 'get',
    //         headers: {'Content-Type': 'application/json'}
    //         // body: JSON.stringify({
    //             //     username: this.state.username,
    //             //     itemOneBid: this.state.itemOneBid
    //             // })
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //             // console.log('click')
    //             // console.log(data)
    //             // console.log(this.state.bidWinner)
    //         if (data === 'User1 won this bid!') {
    //             this.setState({bidWinner: 'User1'})
    //             // console.log('click')
    //             // console.log(data)
    //             // console.log(this.state.bidWinner)
    //         } else {
    //             this.setState({bidWinner: 'User2'})
    //             // console.log(data)
    //             // console.log(this.state.bidWinner)
    //         }
    //     })
    // }

    componentDidMount() {
        console.log(this.state.bidWinner)
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
    }

    onCloseBid = () => {
        fetch('http://localhost:3000/results', {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
            // body: JSON.stringify({
                //     username: this.state.username,
                //     itemOneBid: this.state.itemOneBid
                // })
            })
            .then(response => response.json())
            .then(data => {
                // console.log('click')
                // console.log(data)
                // console.log(this.state.bidWinner)
            if (data === 'User1 won this bid!') {
                this.setState({bidWinner: 'User1'})
                // console.log('click')
                // console.log(data)
                // console.log(this.state.bidWinner)
            } else {
                this.setState({bidWinner: 'User2'})
                // console.log(data)
                // console.log(this.state.bidWinner)
            }
        })
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
                {/* <button onClick={this.onSubmitBid}>SUBMIT BID</button> */}
                {
                    
                    this.state.username === 'Admin' ?
                    <button onClick={this.onCloseBid}>{this.props.action}</button>

                    : 

                    this.state.username !== 'Admin' && this.state.bidWinner === ''? 
                    <button onClick={this.onSubmitBid}>{this.props.action}</button>
                    
                    :

                    this.state.username === this.state.bidWinner ? <p>You won the bid!</p> : <p>You lost the bid!</p>
                    
                    

                }
            </div>
        )
    }
};


export default Item11;


// this.state.User1Won === false && this.state.User1Won === false ? 
// <button onClick={this.onSubmitBid}>{this.props.action}</button>

// this.state.username === this.state.bidWinner ? <p>You won the bid!</p> : <p>You lost the bid!</p>