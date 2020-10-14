/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Fragment } from 'react';
import Css from './input_1.module.css';
import Tips from '../insertTips/index'

export default class Input_1 extends React.Component {
  constructor(props){
    super(props);
    this.state={
      tip:['1.鼠标移至搜索图标','展开输入框']
    };
  }
  componentDidMount(){
    
  }

  

  render(){
    return (
        <Fragment>
          <Tips tipText={this.state.tip}></Tips>
          <div ref='ComponentsMove' className={Css['area']}>
              <div className={Css['search-box']}>
                  <input className={Css['search-txt']}  type="text" name="" placeholder="鼠标移至这里输入"/>
                  <div className={Css['search-btn']}></div>
              </div>
          </div>
        </Fragment>
          
    );
  }
  
}

