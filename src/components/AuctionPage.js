import React, {Component} from 'react';
// import Item from './Item';
import Item1 from './Item1';
import Item2 from './Item2';
import Item3 from './Item3';
import Item4 from './Item4';
import Item5 from './Item5';
import Item6 from './Item6';

import '../App.css';

// const AuctionPage = ({onRouteChange, user}) => {
	class AuctionPage extends Component {
		constructor(props){
			super(props);
		}

		

		render() {
			return (
			  <div className="App">
			  <header>
				  <h1>{`Welcome, ${this.props.user}`} </h1>
				  {/* <h1>{`Welcome, ${user}`} </h1> */}
				  {/* <a href="/signin" className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Sign Out</a> */}
				  {/* <a onClick={()=>onRouteChange('signin')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Sign Out</a> */}
				  <input
					//   onClick={()=>onRouteChange('signin')} 
					  onClick={()=>this.props.onRouteChange('signin')} 
					  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
					  type="submit" 
					  value="Sign Out"
				  />
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
						
						{/* <Item user={this.props.user}/>
						<Item/>
						<Item/>
						<Item/>
						<Item/>
						<Item/> */}
					</div>
				}  
	  
			  </div>
			);
		}
	}
// }

export default AuctionPage;