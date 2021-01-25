import React, {Component} from 'react';
import './Item.css'
import watch from '../assets/watch.jpg';
 



class Item2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: props.user,
            bidValue: '',
            bidId: 1,
            bidWinner: ''
        }
    }

    // checkWinner = () => {
    //     fetch('http://localhost:3000/resultBid2', {
    //         method: 'get',
    //         headers: {'Content-Type': 'application/json'}
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //             if (data === 'User1 won this bid!') {
    //                 this.setState({bidWinner: 'User1'})
    
    //                     console.log(this.state.bidWinner)
    //                 } else if (data === 'User1 lost this bid!') { 
    //                     this.setState({bidWinner: 'User2'})
                        
    //             } else if (data === 'no winner') {
    //                 this.setState({bidWinner: ''})
    //         }
    //     })
    // }

    checkWinner = () => {
        fetch('http://localhost:3000/results', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: this.state.username,
                    bidId: this.state.bidId
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data === 'User1 won this bid!') {
                    this.setState({bidWinner: 'User1'})
    
                        console.log(this.state.bidWinner)
                    } else if (data === 'User1 lost this bid!') { 
                        this.setState({bidWinner: 'User2'})
                        
                } else if (data === 'no winner') {
                    this.setState({bidWinner: ''})
            }
        })
    }

    checkBidStatus = () => {
        fetch('http://localhost:3000/', {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
            })
            .then(response => response.json())
            .then(response => {
                // if (response.bidStatus[0].bid2 === 'closed') {
                if (response.bidStatus[1].status === 'closed') {
                return this.checkWinner()
            }
        })
    }

    componentDidMount() {
        this.checkBidStatus()
    }
    
    // componentDidMount() {
    //     fetch('http://localhost:3000/resultBid2', {
    //         method: 'get',
    //         headers: {'Content-Type': 'application/json'}
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //             if (data === 'User1 won this bid!') {
    //                 this.setState({bidWinner: 'User1'})

    //             } else if (data === 'User1 lost this bid!') { 
    //                 this.setState({bidWinner: 'User2'})
                    
    //         } else if (data === 'no winner') {
    //             this.setState({bidWinner: ''})
    //         }
    //     })
    // }

    onBidChange = (event) => {
        this.setState({bidValue: event.target.value})
    }

    onSubmitBid = () => {
        fetch('http://localhost:3000/placeBid', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: this.state.username,
                bidValue: this.state.bidValue,
                bidId: this.state.bidId
            })
        })
    }

    // onBidChange = (event) => {
    //     this.setState({itemTwoBid: event.target.value})
    // }

    // onSubmitBid = () => {
    //     fetch('http://localhost:3000/bid2', {
    //         method: 'put',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //             username: this.state.username,
    //             itemTwoBid: this.state.itemTwoBid,
    //             bidId: this.state.bidId
    //         })
    //     })
    // }

    // onCloseBid = () => {
    //     fetch('http://localhost:3000/closeBid2', {
    //         method: 'post',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //             bid2: 'closed'
    //         })
    //     })
    //     console.log('bid2 closed')
    // }

    onCloseBid = () => {
        fetch('http://localhost:3000/closeBid', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                status: 'closed',
                bidId: this.state.bidId,
            })
        })
    }

    render () {
        return (
            <div id="item">
                <img src={watch} alt=""/>
                <h3>Hero Watch</h3>
                <p>If you look at it, you'll know time!</p>
                {/* <input 
                    type="number"
                    onChange={this.onBidChange}

                /> */}
                {/* <button onClick={this.onSubmitBid}>SUBMIT BID</button> */}
                {
                    
                    this.state.username === 'Admin' ?
                    <button onClick={this.onCloseBid}>{this.props.action}</button>

                    : 

                    this.state.username !== 'Admin' && this.state.bidWinner === ''? 
                    <div>
                        <input 
                        type="number"
                        onChange={this.onBidChange}
                        />
                        <button onClick={this.onSubmitBid}>{this.props.action}</button>
                    </div>
                    
                    :

                    this.state.username === this.state.bidWinner ? <h2>You won this bid!</h2> : <h2>You lost this bid!</h2>
                    
                    

                }
            </div>
        )
    }
};


export default Item2;