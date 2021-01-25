import React, {Component} from 'react';
import './Item.css'
import banana from '../assets/banana.jpg';
 



class Item1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: props.user,
            itemOneBid: '',
            bidValue: '',
            bidId: 0,
            bidWinner: ''
        }
    }

    // checkWinner = () => {
    //     fetch('http://localhost:3000/resultBid1', {
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
                // console.log(response)
                // console.log(response.bidStatus[0].bid1)
                // if (response.bidStatus[0].bid1 === 'closed') {
                if (response.bidStatus[0].status === 'closed') {
                return this.checkWinner()
            }
        })
    }

    componentDidMount() {
        this.checkBidStatus()
    }

    // componentDidMount() {
    //     fetch('http://localhost:3000/resultBid1', {
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

    onCloseBid = () => {
        fetch('http://localhost:3000/closeBid', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                status: 'closed',
                bidId: this.state.bidId,
            })
        })
        console.log('bid1 closed')
    }

    // Previous Bid Change & Submit & Close *******************************************

    // onBidChange = (event) => {
    //     this.setState({itemOneBid: event.target.value})
    // }

    // onSubmitBid = () => {
    //     fetch('http://localhost:3000/bid1', {
    //         method: 'put',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //             username: this.state.username,
    //             itemOneBid: this.state.itemOneBid,
    //             bidId: this.state.bidId
    //         })
    //     })
    // }

    // onCloseBid = () => {
    //     fetch('http://localhost:3000/closeBid1', {
    //         method: 'post',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //             bid1: 'closed'
    //         })
    //     })
    //         console.log('bid1 closed')
    // }



    render () {
        return (
            <div id="item">
                <img src={banana} alt=""/>
                <h3>A Banana</h3>
                <p>The most delicious banana, ever</p>
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


export default Item1;


// this.state.User1Won === false && this.state.User1Won === false ? 
// <button onClick={this.onSubmitBid}>{this.props.action}</button>

// this.state.username === this.state.bidWinner ? <p>You won the bid!</p> : <p>You lost the bid!</p>

// onCloseBid = () => {
    //     fetch('http://localhost:3000/resultBid1', {
    //         method: 'get',
    //         headers: {'Content-Type': 'application/json'}
    //         // body: JSON.stringify({
    //             //     username: this.state.username,
    //             //     itemOneBid: this.state.itemOneBid
    //             // })
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //             if (data === 'User1 won this bid!') {
    //                 this.setState({bidWinner: 'User1'})
    //                 // console.log('click')
    //                 // console.log(data)
    //                 // console.log(this.state.bidWinner)
    //             } else {
    //                 this.setState({bidWinner: 'User2'})
    //                 // console.log(data)
    //             //  console.log(this.state.bidWinner)
    //         }
    //     })
    // }