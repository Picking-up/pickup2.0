import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import SvgIcon from 'material-ui/SvgIcon';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';



class Map extends Component {
  constructor(props){
  super(props);
    this.state = {
      open: false
    };
  this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }


  handleToggle(e){
    e.preventDefault();
    this.setState({open: !this.state.open})
  }

  onSearchSubmit() {
    console.log("hello")
  }

   render(){
     const coords = {
       lat: 34.052235,
       lng: -118.243683
     };
     return(
      <div>
       <div className='svIcon'>
        <MuiThemeProvider>
          <SvgIcon style={{width:'50px', height:'50px'}} onTouchTap={this.handleToggle.bind(this)}>
            <path d="M10,1.445c-4.726,0-8.555,3.829-8.555,8.555c0,4.725,3.829,8.555,8.555,8.555c4.725,0,8.555-3.83,8.555-8.555C18.555,5.274,14.725,1.445,10,1.445 M10,17.654c-4.221,0-7.654-3.434-7.654-7.654c0-4.221,3.433-7.654,7.654-7.654c4.222,0,7.654,3.433,7.654,7.654C17.654,14.221,14.222,17.654,10,17.654 M14.39,10c0,0.248-0.203,0.45-0.45,0.45H6.06c-0.248,0-0.45-0.203-0.45-0.45s0.203-0.45,0.45-0.45h7.879C14.187,9.55,14.39,9.752,14.39,10 M14.39,12.702c0,0.247-0.203,0.449-0.45,0.449H6.06c-0.248,0-0.45-0.202-0.45-0.449c0-0.248,0.203-0.451,0.45-0.451h7.879C14.187,12.251,14.39,12.454,14.39,12.702 M14.39,7.298c0,0.248-0.203,0.45-0.45,0.45H6.06c-0.248,0-0.45-0.203-0.45-0.45s0.203-0.45,0.45-0.45h7.879C14.187,6.848,14.39,7.051,14.39,7.298" />
          </SvgIcon>
       </MuiThemeProvider>
       </div>
       <div>
           <MuiThemeProvider>
               <Drawer
                  docked={false}
                  width={200}
                  open={this.state.open}
                  onRequestChange={(open) => this.setState({open})}
                >
              <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
              <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
            </Drawer>
           </MuiThemeProvider>
      </div>

       <div>
        <Gmaps
              className='map_canvas'
              lat={coords.lat}
              lng={coords.lng}
              zoom={12}
              params={{v: '3.exp', key:'AIzaSyAB5tiiDGVCleRxo6tGkyGJjQ_BDtBHF_w'}}
              mapTypeControl={false}
              onMapCreated={this.onMapCreated}/>
              <form className='animated fadeIn'>
                <input type='text' placeholder='find a game' />
                <Link to="home" onClick={this.onSearchSubmit}><button>search</button></Link>
              </form>
      </div>
    </div>

     )
   }
 }

 export default Map
