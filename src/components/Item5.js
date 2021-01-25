import React, {Component} from 'react';
import './Item.css'
import liver from '../assets/liver.jpg';
 



class Item5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: props.user,
            bidValue: '',
            bidId: 4,
            bidWinner: ''
        }
    }

    // checkWinner = () => {
    //     fetch('http://localhost:3000/resultBid5', {
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
                if (response.bidStatus[4].status === 'closed') {
                return this.checkWinner()
            }
        })
    }

    componentDidMount() {
        this.checkBidStatus()
    }

    // componentDidMount() {
    //     fetch('http://localhost:3000/resultBid5', {
    //         method: 'get',
    //         headers: {'Content-Type': 'application/json'}
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //             if (data === 'User1 won this bid!') {
    //                 this.setState({bidWinner: 'User1'})
                
    //             } else if (data === 'User1 lost this bid!') { 
    //                 this.setState({bidWinner: 'User2'})

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
    }

    render () {
        return (
            <div id="item">
                <img src={liver} alt=""/>
                <h3>Harry's liver</h3>
                <p>He said we can sell it here?</p>
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


export default Item5;