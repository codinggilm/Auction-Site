import React, {Component} from 'react';
import Item1 from './Item1';
import Item2 from './Item2';
import Item3 from './Item3';
import Item4 from './Item4';
import Item5 from './Item5';
import Item6 from './Item6';
import '../App.css';


class AuctionPage extends Component {
	constructor(props) {
		super(props);
	}

	onResetBids = () => {
		fetch('http://localhost:3000/resetBids', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				newValues: 0,
				requestFrom: 'Admin'
			})
		})
	}

		
	render() {
		return (
			<div className="App">
				<header>
					<h1>{`Welcome, ${this.props.user}`}</h1>
					<input
						onClick={()=>this.props.onRouteChange('signin')} 
						className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
						type="submit" 
						value="Sign Out"
					/>

					{
					  this.props.user === 'Admin' ? 
					  <button 
					  onClick={this.onResetBids}
					  id='reset'
					  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
					  >Reset all bids</button> : null
				  	}	
				</header>

				{
					this.props.user === 'Admin' ? 
					<div className="auction-items">
						<Item1 user={this.props.user} action='CLOSE BIDS'/>
						<Item2 user={this.props.user} action='CLOSE BIDS'/>
						<Item3 user={this.props.user} action='CLOSE BIDS'/>
						<Item4 user={this.props.user} action='CLOSE BIDS'/>
						<Item5 user={this.props.user} action='CLOSE BIDS'/>
						<Item6 user={this.props.user} action='CLOSE BIDS'/>
					</div>

					: 

					<div className="auction-items">
						<Item1 user={this.props.user} action='SUBMIT BID'/>
						<Item2 user={this.props.user} action='SUBMIT BID'/>
						<Item3 user={this.props.user} action='SUBMIT BID'/>
						<Item4 user={this.props.user} action='SUBMIT BID'/>
						<Item5 user={this.props.user} action='SUBMIT BID'/>
						<Item6 user={this.props.user} action='SUBMIT BID'/>
					</div>
				}  

			</div>
		);
	}
}

export default AuctionPage;