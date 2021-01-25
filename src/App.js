import React, {Component} from 'react';
// import { Route } from 'react-router-dom';
// import Item from './components/Item';
import Signin from './components/Signin';
import AuctionPage from './components/AuctionPage';
import './App.css';


const intialState = {
    route: 'signin',
    isSignedIn: false,
	username: '',
	password: '',
    itemOneBid: 0,
	itemTwoBid: 0,
	itemThreeBid: 0,
	itemFourBid: 0,
	itemFiveBid: 0,
	itemSixBid: 0,

};

class App extends Component {
	constructor() {
		super();
		this.state = intialState;
	}

	loadUser = (data) => {
        this.setState({
			username: data.username,
			password: '',
            itemOneBid: data.itemOneBid,
			itemTwoBid: data.itemTwoBid,
			itemThreeBid: data.itemThreeBid,
			itemFourBid: data.itemFourBid,
			itemFiveBid: data.itemFiveBid,
			itemSixBid: data.itemSixBid,

        })
    };
	
	// componentDidMount() {
	// 	fetch('http://localhost:3000/')
	// 	.then(response => response.json())
	// 	.then(console.log)
	// }

	// onRouteChange = (route) => {
    //     if (route === 'signout') {
    //       this.setState(intialState)
    //     } else if (route === 'home') {
    //        this.setState({ isSignedIn: true })
    //     }
    //     this.setState({ route: route });
	// }

	onRouteChange = (route) => {
        this.setState({ route: route });
	}

	
	onInputChange = (event) => {
        this.setState({ input: event.target.value });
    } 


	render() {
		const { route } = this.state;
		return (
			<div className="App">
				
				{/* <Route path="/home" component={AuctionPage} />
				<Route path="/"  component={<Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />} /> */}
				
				{/* { route === 'home'?
                    <div>
                        <AuctionPage />
                    </div>
                    : ( route === 'signin'? 
						<div>
                        	<Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
						</div>
                    :   null
                    )
                }  */}

				{
					route === 'signin' ? 

					<Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
					: 
					<AuctionPage user={this.state.username} onRouteChange={this.onRouteChange}/>
				}
			</div>
		);
	}

	// render() {
	// 	  return (
	// 		<div className="App">
	// 			<Route path="/" exact component={Signin} />
	// 			<Route path="/auctionPage" component={AuctionPage} />
	// 		</div>
	// 	);
	// }
}

export default App;
