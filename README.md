# Auction Site
 

## Description
A React / Node app letting users place bids on items. <br />

Once the site Admin has logged in and closed a bid, all users UI updates in real time to show if they have won or lost the bid. <br />
Users cannot submit new bids after they have been closed by the Admin. <br />
Once the Admin has reset the bids, the database is updated and all users UI is also updated in real time to allow new bids to be placed. <br />
The client keeps track of each bid status (open / closed) to ensure users cannot keep bidding once the Admin has closed a bid. <br />
Socket.IO is implemented on the back end to allow real time UI updates for all users <br />

The point of the App at the moment is to implement a functional back-end, and an intelligent use of State in React, rather than building a beautiful and responsive UI.

## Setup/Installation
To view the app, click https://auction-site-front.herokuapp.com/

Please log in using these details: 

username: User1<br />
password: IamUserOne

username: User2<br />
password: IamUserTwo 

username: Admin<br />
password: IamTheBoss 


## How to use
Open two tabs/windows, log in using the user credentials above and submit bids.<br />
Log in as the Admin and close the bids for any item.<br />
The back end will calculate the item's winner for the bids you have closed and the users UI will update in real time.<br />
Bids can be reset from the Admin's page, updating all users UI in real time to allow new bids to be submitted. 


## Ideas for new functionalities
Implementing a time limit for each item, allowing users to add new listings and set a mininimum price, informing users how many other users have also placed bids on an item (or/and how many bids have already been placed), and more!<br />


## Technologies Used
* REACT
* NODE.JS
* EXPRESS.JS
* Socket.IO
* HTML
* CSS
* JAVASCRIPT
* NPM
* POSTMAN
