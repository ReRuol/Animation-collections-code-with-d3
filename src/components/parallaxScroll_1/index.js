/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Fragment } from 'react';
import Css from './parallaxScroll_1.module.css';
import Tips from '../insertTips/index'

export default class Input_1 extends React.Component {
  constructor(props){
    super(props);
    this.state={
        content:'<h1>Let life be beautiful like summer flowers</h1></br></br><p>Life, thin and light-off time and time again</br>Frivolous tireless</p></br></br><p>one</br>I heard the echo, from the valleys and the heart</br>Open to the lonely soul of sickle harvesting</br>Repeat outrightly, but also repeat the well-being of</br>Eventually swaying in the desert oasis</br></br>I believe I am</br>Born as the bright summer flowers</br>Do not withered undefeated fiery demon rule</br>Heart rate and breathing to bear the load of the cumbersome</br>Bored</p></br></br><p>Two</br>I heard the music, from the moon and carcass</br>Auxiliary extreme aestheticism bait to capture misty</br>Filling the intense life, but also filling the pure</br>There are always memories throughout the earth</br></br>I believe I am</br>Died as the quiet beauty of autumn leaves</br>Sheng is not chaos, smoke gesture</br>Even wilt also retained bone proudly Qing Feng muscle</br>Occult</br></br></p><p>Three</br>I hear love, I believe in love</br>Love is a pool of struggling blue-green algae</br>As desolate micro-burst of wind</br>Bleeding through my veins</br>Years stationed in the belief</br></br></p><p>Four</br>I believe that all can hear</br>Even anticipate discrete, I met the other their own</br>Some can not grasp the moment</br>Left to the East to go West, Gu, the dead must not return to</br></br>See, I head home Zanhua, in full bloom along the way all the way</br>Frequently missed some, but also deeply moved by wind, frost, snow or rain</br></br></p><p>Five</br>Prajna Paramita, soon as soon as</br>life be beautiful like summer flowers and death like autumn leaves</br>Also care about what has</p>'
        ,toggleFullScreen:false,
        tips:['1.滚动改变背景尺寸,形成视差效果','2.可全屏展开']
      };
  }
  componentDidMount(){
    this.scrollParallax()
  }

  //滚动改变视差
  scrollParallax(){
    const area   = this.refs['area']
    const valley = this.refs['valley']
    const fullScreen = this.refs['fullScreen']


    area.addEventListener('scroll',function(event){
      // 解决兼容问题
      event = event || window.event;

     // 将cancenBubble属性设置为false即可
      event.cancelBubble = true;
      event.stopPropagation()
      let scrollPos = area.scrollTop


      valley.style.backgroundSize = 120 + scrollPos + '%'
      fullScreen.style.top = 20 + scrollPos +'px'
    },true)
  }

  //更替全屏模式
  togglefullScreen(e){

    e.stopPropagation()

    const full = this.refs['full']
    const narrow = this.refs['narrow']

    if(!this.state.toggleFullScreen){
      Object.assign(this.refs['area'].style
      ,{width:'100%',height:'100%'}
      )

      full.style.opacity = 0
      narrow.style.opacity = 1

      this.setState((preState,props)=>({
        toggleFullScreen:true
      }))

    }else{
      Object.assign(this.refs['area'].style
      ,{width:'50%',height:'60%'}
      )

      full.style.opacity = 1
      narrow.style.opacity = 0

      this.setState((preState,props)=>({
        toggleFullScreen:false
      }))
    }


  }


  render(){
    return (
          <Fragment>
            <Tips tipText={this.state.tips}></Tips>
            <div ref='area' id={Css['area']}>
              <div ref='valley' className={Css['valley']}>
                <div className={Css['mountain-peak']}></div>
              </div>
              <div className={Css['content']} dangerouslySetInnerHTML={{__html:this.state.content}}></div>

              <div ref='fullScreen' className={Css['fullScreen']} onClick={e=>this.togglefullScreen(e)}>
                <div ref='full' className={Css['full']}></div>
                <div ref='narrow' className={Css['narrow']}></div>
              </div>



            </div>

          </Fragment>

    );
  }

}
