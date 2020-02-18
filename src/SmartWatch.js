import React, { Component } from 'react';
import classes from './SmartWatch.module.css';


class SmartWatch extends Component {
    state = {
        Time : 201,
        HeartRate: 0,
        ReadBand: 0,
        BlueBand: 0,
        BlackBand: 0,
        PurpleBand: 0
    }
    gettingTime = setInterval(() => {
        var hours = new Date().getHours();
        var minutes = new Date().getMinutes();
        var secounds = new Date().getSeconds();
       
        if(hours < 10){
            hours ="0" + hours;
        }
        if(minutes < 10){
            minutes ="0" + minutes;
        }
        if(secounds < 10){
            secounds ="0" + secounds;
        }

      this.setState({time:hours +":" + minutes +":" + secounds})
    },1000);

   onClickedTime = () => {
    console.log("Time Button Is Clicked");
       this.setState({Time:201});
       this.setState({HeartRate:0});
   } 
   onHeartRateClicked = () => {
    console.log("HeartRate Button Is Clicked");
    this.setState({Time:0});
    this.setState({HeartRate:201});
     }
     
    onReadBandClicked = () => {
        this.setState({ReadBand:200})
        this.setState({BlueBand:0})
        this.setState({BlackBand:0})
        this.setState({PurpleBand:0})
    }
    onBlueBandClicked = () => {
        this.setState({ReadBand:0})
        this.setState({BlueBand:200})
        this.setState({BlackBand:0})
        this.setState({PurpleBand:0})
    }
    onBlackBandClicked = () => {
        this.setState({ReadBand:0})
        this.setState({BlueBand:0})
        this.setState({BlackBand:200})
        this.setState({PurpleBand:0})
    }
    onPurpleBandClicked = () => {
        this.setState({ReadBand:0})
        this.setState({BlueBand:0})
        this.setState({BlackBand:0})
        this.setState({PurpleBand:200})
    } 
    render(){
      return (
        <div className = {classes.mainDiv}>
          <div className={classes.watchImgWrap}>
            <img style={{zIndex:this.state.ReadBand}} className={classes.watch} src="https://i.imgur.com/PTgQlim.png" alt="watchImg0"/>
            <img style={{zIndex:this.state.BlueBand}} className={classes.watch} src="https://i.imgur.com/Mplj1YR.png" alt="watchImg2"/>
            <img style={{zIndex:this.state.BlackBand}} className={classes.watch} src="https://i.imgur.com/iOeUBV7.png" alt="watchImg3"/>
            <img style={{zIndex:this.state.PurpleBand}} className={classes.watch} src="https://i.imgur.com/xSIK4M8.png" alt="watchImg4"/>
        </div>
            <div className = {classes.prductNameWrap}>
              <div className = {classes.details}>
              <h1>FitBit 19 - The Smartest Watch</h1>
              <p>GPS + Cellular, Always-On Retina display, 30% larger screen4, 
               Swimproof, ECG app, Electrical and optical heart sensors.</p> 
              <h4>Select Color</h4>
            <div className ={classes.colorWrap}>
                <div onClick={this.onReadBandClicked} className ={classes.redband}></div>
                <div onClick={this.onBlueBandClicked} className ={classes.blueband}></div>
                <div onClick={this.onBlackBandClicked} className ={classes.blackband}></div>
                <div onClick={this.onPurpleBandClicked} className ={classes.purpleband}></div>
            </div>
                <h2>Features</h2> 
                <div className ={classes.watchFeatures}>
                    <button onClick={this.onClickedTime} className = {classes.timeBtn}>Time</button>
                    <button onClick={this.onHeartRateClicked} className = {classes.heartBtn}>HertRate</button>
                    <button className = {classes.buyBtn}>BuyNow</button>
                </div>  
                <div style = {{zIndex:this.state.Time}} className = { classes.timeWrap }>
                   <h1 className = {classes.timeTxt}>{ this.state.time}</h1>
                </div>
                <div style = {{zIndex:this.state.HeartRate}} className = {classes.heart}>
                    <p className = {classes.beats}>85</p>
                <div className ={classes.icon}>

                      <i class="fas fa-heartbeat"></i>
                </div>

            </div> 
        </div>
    </div>
</div>
        );
    }
}
export default SmartWatch;