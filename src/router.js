/*
 HashRouter:有#号
 BrowserRouter:没有#号
 Switch:只要匹配到一个地址不往下匹配，相当于for循环里面的break
 Link:跳转页面，相当于vue里面的router-link
exact :完全匹配路由
* */
import React from 'react';
import  {HashRouter as Router,Route,Switch, Redirect}  from  'react-router-dom';
import loadable from "./ulit/loadable";



const Input_1 = loadable(()=>import('./components/input_1'));
const Clock_1 = loadable(()=>import('./components/clock_1'));
const Conan_Drag = loadable(()=>import('./components/conan_drag'));
const ParallaxScroll_1 = loadable(()=>import('./components/parallaxScroll_1'));
const GlobalEconomyMap = loadable(()=>import('./components/globalEconomyMap'));


class Index extends React.Component{
  constructor(){
    super();
    this.state={
        Nav:[{name:'全球经济地图',isActive:false ,url:'globalEconomyMap'},
        {name:'柯南动力视图',isActive:false,url:'conan_drag'},
        {name:'视差滚动',isActive:false,url:'parallaxScroll_1'},
        {name:'黑白时钟',isActive:false,url:'clock_1'},
        {name:'鼠标悬浮输入框',isActive:false,url:'input_1'},
        ]


    };
  }
  componentDidMount(){
    /* let App = this.renderDetail(this.pageType);
    console.log(App) */
    this.getNav();
  }


  //点击导航按钮切换样式,并跳转路由切换对应组件
  changeComponent(TabIndex,TabUrl){

    //跳转子组件路由
    this.props.history.replace("/components/"+TabUrl)

    let Nav = this.state.Nav
    if (!Nav[TabIndex].isActive){
      for (let i =0; i< Nav.length; i++){
        if(Nav[i].isActive){
          Nav[i].isActive = false
          break
        }
      }
      Nav[TabIndex].isActive = true
    }
    this.setState((preState,props)=>({
      Nav
    }))
  }

  //在组件初始化时获取当前路由,以改变导航对应样式
  getNav(){
    let Nav = this.state.Nav
    let pathname=this.props.history.location.pathname.replace('/components/','')

    for(let i=0 ; i < Nav.length;i++){
        if(Nav[i].url === pathname){
          Nav[i].isActive=true
          break
        }
    }

    this.setState((preState,props)=>({
      Nav
    }))


  }


  render(){
    return(
      <div className='page'>
          <div className='area'>
            <input type="checkbox" id='check'/>
            <label htmlFor="check">
              <svg t="1597590349184" className="navBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7495" width="32" height="32"><path d="M38.5536 858.8288v-66.0992h946.944v66.0992H38.5536z m0-330.2912V462.4384H856.064v66.0992H38.5536z m0-330.3424v-66.048h946.944v66.0992H38.5536z" p-id="7496" fill="#ffffff"></path></svg>
              <svg t="1597590405426" className="cancelBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8317" width="32" height="32"><path d="M587.763033 510.545882L938.508395 159.800519c21.523199-21.523199 21.523199-56.419987 0-77.943186-21.523199-21.523199-56.419987-21.523199-77.943186 0L509.818823 432.602695 159.07346 81.857333c-21.523199-21.523199-56.419987-21.523199-77.943186 0-21.523199 21.523199-21.523199 56.419987 0 77.943186l350.745362 350.745363L81.130274 861.291245c-21.523199 21.523199-21.523199 56.419987 0 77.943186s56.419987 21.523199 77.943186 0l350.745363-350.745363L860.565209 939.234431c21.523199 21.523199 56.419987 21.523199 77.943186 0s21.523199-56.419987 0-77.943186L587.763033 510.545882z" p-id="8318" fill="#ffffff"></path></svg>
            </label>
            <div className='tabContainer'>
                  <header className='tabHeader'>My Components</header>
                  <ul>
                    {
                      this.state.Nav!=null?
                      this.state.Nav.map((item,index)=>{
                        return(
                        <div key={index} onClick={this.changeComponent.bind(this,index,item.url)} ref={index} className={item.isActive?"tabActive":''}><a>{item.name}</a></div>
                        )
                      }):''
                    }
                  </ul>
            </div>
            <section className="background">
                <div className="backgroundImg"></div>


                <div className='componentContainer'>
                    <Switch>
                        <Route path={'/components/input_1'} component={Input_1}></Route>
                        <Route path={'/components/clock_1'} component={Clock_1}></Route>
                        <Route path={'/components/parallaxScroll_1'} component={ParallaxScroll_1}></Route>
                        <Route path={'/components/conan_drag'} component={Conan_Drag}></Route>
                        <Route path={'/components/globalEconomyMap'} component={GlobalEconomyMap}></Route>
                        {<Redirect to={'/components/parallaxScroll_1'}></Redirect>}
                    </Switch>
                </div>


            </section>

          </div>
      </div>
    )
  }
}

class RouterComponent extends React.Component{
  render(){
    return(
        <Router>
          <React.Fragment>
             <Route path={"/"} component={Index}></Route>
          </React.Fragment>
        </Router>
    )
  }
}

export default RouterComponent;
