/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Css from './insertTips.module.css';

export default class InsertTips extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isTipsShow : true,
    };
    this.toggleTips=this.toggleTips.bind(this);
  }


  toggleTips(){
    let isTipsShow = this.state.isTipsShow
    let tipIcon = this.refs['tipIcon'];
    let contentWrap = this.refs['contentWrap'];

    if(!isTipsShow){
      tipIcon.style.opacity = 0
      contentWrap.style.display = "block"
      setTimeout(()=>contentWrap.style.left = 0, 1);
      this.setState((preState,props)=>({
        isTipsShow:true
      }))

    }else{
      tipIcon.style.opacity = 1
      contentWrap.style.left = "100%"
      setTimeout(()=>contentWrap.style.display = "none", 500);

      this.setState((preState,props)=>({
        isTipsShow:false
      }))
    }
  }



  render(){
    return (
          <div className={Css['area']}>
            <div ref='tipIcon' className={Css['tipIcon']} onClick={this.toggleTips}></div>
            <div  ref='contentWrap' className={Css['contentWrap']}>
              <div ref='closeIcon' className={Css['closeIcon']} onClick={this.toggleTips}></div>
              <div ref='content' className={Css['content']}>Tips
                  {this.props.tipText?this.props.tipText.map((item,index)=>{
                    return <p key={index}>{item}</p>
                  }):''}
              </div>
            </div>
          </div>
    );
  }

}
