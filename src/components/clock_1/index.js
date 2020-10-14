import React from 'react';
import Css from './clock_1.module.css';
import Tips from '../insertTips/index'


export default class clock_1 extends React.Component {
  constructor(props){
    super(props);
    this.state={
        isDark:true,
        tips:['1.使用Date制作的时钟','2.可切换黑白模式']
    }
    this.timer = null;
  }
  componentDidMount(){
    this.runClock()
  } 

  //让时钟走起来
  runClock(){

    let hr = this.refs['hr'];
    let mn = this.refs['mn'];
    let sc = this.refs['sc'];
    let deg = 6;

   this.timer = setInterval(()=>{

    let day = new Date();
    let hour = (day.getHours()-12) * 30
    let minute = day.getMinutes() * deg
    let second = day.getSeconds() * deg

      /* this.setState((preState,props)=>({
        hour,
        minute,
        second,
      }),()=>{
        this.hr.style.transform =  `rotate(${(this.state.hour)+(this.state.minute/12)}deg)`;
        this.mn.style.transform =  `rotate(${(this.state.minute)+(this.state.second/60)}deg)`;
        this.sc.style.transform =  `rotate(${this.state.second}deg)`;
      }) */
      hr.style.transform =  `rotate(${(hour)+(minute/12)}deg)`;
      mn.style.transform =  `rotate(${(minute)+(second/60)}deg)`;
      sc.style.transform =  `rotate(${second}deg)`;
    },1000) 
  }

  //切换白天与黑夜模式
  toggleClass(){
    let isDark = !this.state.isDark
    this.setState((preState,props)=>({
        isDark,
    })
    )
  }



  componentWillUnmount(){
    clearInterval(this.timer)
  }

  render(){
    return (
      <div className={Css['page']}>
          <Tips tipText={this.state.tips}></Tips>
          <div className={this.state.isDark?Css['dark']:Css['light']} >
          <div className={Css['toggleClass']} onClick={this.toggleClass.bind(this)}></div>
              <div className={this.state.isDark?Css['clock']:Css['clock']+' '+Css['lightClock']}>
                  <div className={Css['hour']}>
                      <div className={Css['hr']} ref='hr'></div>
                  </div>
                  <div className={Css['min']}>
                      <div className={Css['mn']}  ref='mn'></div>
                  </div>
                  <div className={Css['sec']}>
                      <div className={Css['sc']}  ref='sc'></div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
  
}
