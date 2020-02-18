import React, {Compnonet} from 'react';
import classes from './SmartWatch.module.css';


class SmartWatch extends Compnonet {
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

   onTimeClicked = () => {
       this.setState({time:201});
       this.setState({HeartRate:0})
   } 
   onHeartRateClicked = () => {
    this.setState({time:0});
    this.setState({HeartRate:201})
     }
     
    onRedBandClicked = () => {
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
            <img style={{zIndex:this.state.RedBand}} className={classes.watch} src="https://i.imgur.com/PTgQlim.png" alt="watchImg0"/>
            <img style={{zIndex:this.state.BlueBand}} className={classes.watch} src="https://i.imgur.com/Mplj1YR.png" alt="watchImg2"/>
            <img style={{zIndex:this.state.BlackBand}} className={classes.watch} src="https://i.imgur.com/iOeUBV7.png" alt="watchImg3"/>
            <img style={{zIndex:this.state.PurpleBand}} className={classes.watch} src="https://i.imgur.com/xSIK4M8.png" alt="watchImg4"/>
        </div>
            <div className = {classes.prductNameWrap}>
              <div className = {classes.details}>
              <h1>FitBit 19 - The Smartest Watch</h1>
              <p>GPS + Cellular, Always-On Retina display, 30% larger screen4, 
               Swimproof, ECG app, Electrical and optical heart sensors.</p> 
              <h1>Select Color</h1>
            <div className ={classes.colorWrap}>
                <div onClick={this.onReadBandClicked} className ={classes.redband}></div>
                <div onClick={this.onBlueBandClicked} className ={classes.blueband}></div>
                <div onClick={this.onBlackBandClicked} className ={classes.blackband}></div>
                <div onClick={this.onPurpleBandClicked} className ={classes.purpledband}></div>
            </div>
                <h2>Features</h2> 
                <div className ={classes.watchFeatures}>
                    <button onClick={this.onTimeClicked} className = {classes.timeBtn}>Time</button>
                    <button onClick={this.onHeartRateClicked} className = {classes.heartBtn}>Hert Rate</button>
                    <button className = {classes.buyBtn}>Buy Now</button>
                </div>  
                <div style = {{zIndex:this.state.Time}} className = { classes.timeWrap }>
                <h1 className = {classes.timeTxt}>{ this.state.time}</h1>
                </div>
                <div style = {{zIndex:this.state.HeartRate}} className = {classes.heart}>
                    <p className = {classes.beats}>85</p>
                <div className ={classes.icon}>
                    <img className = {classes.heartBeatIcon} src="data:image/png;base64,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" alt="heartLogo"/>

                </div>
            </div> 
        </div>
    </div>
</div>
        )
    }
}
export default SmartWatch;