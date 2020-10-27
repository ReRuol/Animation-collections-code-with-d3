/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Css from './globalEconomyMap.module.css';
import colorLegend from './colorLegend.js'
import * as d3 from 'd3';
import { feature }from 'topojson';
import Tips from '../insertTips/index'


export default class globalEconomyMap extends React.Component {
  constructor(props){
    super(props);
    this.state={
        tips:['1.使用d3.js绘制的世界地图','2.不同颜色分区代表不同经济水平','3.地图可放大缩小和拖拽','4.鼠标悬浮地图将显示相应国家板块'
        ,'5.点击颜色比例尺将高亮对应经济水平国家'
        ,'6.再次点击比例尺取消高亮'
        ]
      };
  }
  componentDidMount(){
    this.initGeo()

  }

  componentWillUnmount(){

  }

  initGeo(){
    const svgDom = this.refs['svg']
    const svg = d3.select('#globalEconomyMap-module-svg')//使用d3选择的svg能够后续添加元素

    let width = svgDom.clientWidth
    let height = svgDom.clientHeight

    let pjScale
    let clPos
    let ecScale


    if(width>height){
      pjScale = width/6
      clPos = height*0.67
      ecScale = 1
    }else{
      pjScale = height / 7
      clPos = height
      ecScale = 0.68
    }


    const projection = d3.geoNaturalEarth1()
      .translate([width/2,height/2])
      .scale([pjScale])
    const pathGenerator = d3.geoPath(projection)

    //根据resize事件获取svgDom的宽高
    // window.addEventListener("resize",function(){
    //   width = svgDom.clientWidth
    //   height = svgDom.clientHeight
    //   if(height>width){
    //     projection.scale()
    //   }
    //
    // },false)

    //建立一个worldG分组用来保存地球绘制图形
    const worldG = svg.append('g')
      .attr('width',width)
      .attr('height',height)



    //为地图设置缩放和拖动
    svg.call(d3.zoom()
    .scaleExtent([0.5, 5])
    .on('zoom',zoom_actions))

    //缩放函数
    function zoom_actions() {
      return worldG.attr("transform", d3.event.transform)
    }

    //用pathGenerator为地图添加并描绘球体的path
    worldG.selectAll('path').data([null]).enter().append('path')
    .attr('d',pathGenerator({type:'Sphere'}))
    .attr('id','globalEconomyMap-module-earthPath')

    //设置颜色指示图的onClick函数
    let selectedColorValue//在函数外部定义一个已选择颜色的变量
    const onClick = d => {
    d3.event.stopPropagation()//阻止冒泡
      selectedColorValue = d
      worldRender()
    }

    let countries = []//定义一个countries变量,使得worldRender函数能够调用

    //在worldG分组中添加一个g,使其在更改selectedColorValue后能够重新绘制世界地图
    const countriesPath = worldG.selectAll('g').data([null]).enter().append('g')

    const economyColorG = svg.append('g')//定义一个表示经济分类的颜色指示图的g
    .attr('class','globalEconomyMap-module-economyColorG')
    .attr('transform',`scale(${ecScale}),translate(${width/10},${clPos})`)

    Promise.all([
      d3.tsv('https://unpkg.com/world-atlas@1.1.4/world/110m.tsv'),//获取国家经济以及名称
      d3.json('https://unpkg.com/world-atlas@1.1.4/world/110m.json')//获取自然地图形状数据
    ]).then(([tsvData,jsonData])=>{


     countries = feature(jsonData, jsonData.objects.countries)


      //将tsvData中所有数据保存保存至rowById中
      const rowById = tsvData.reduce((accumulator,d) => {
        accumulator[d.iso_n3] = d
        return accumulator
      },{})

      //将rowById中的数据保存至countries.features.property中
      countries.features.forEach(d => {
        Object.assign(d.properties,rowById[d.id])
      })

      worldRender()

    })

    //世界地图渲染的worldRender函数
    const worldRender = () =>{

      //设置不同国家对应经济水平颜色比例尺
      const economyColorScale = d3.scaleOrdinal().domain(countries.features.map(d => d.properties.economy))
      economyColorScale
        .domain(economyColorScale.domain().sort())
        .range(d3.schemeSpectral[economyColorScale.domain().length])

      const Paths = countriesPath.selectAll('path')
        .data(countries.features)
      const PathsEnter = Paths
        .enter().append('path')
          .attr('class',`globalEconomyMap-module-countries`)
          .attr('d', pathGenerator)
          .attr('fill',d => economyColorScale(d.properties.economy))
        .append('title')
          .text(d => d.properties.name);
      Paths
        .merge(PathsEnter)
        .attr('opacity', d=>(!selectedColorValue || d.properties.economy === selectedColorValue)?1:0.1) //设置地图选中与未选中部分的透明度

      //使用economyColorG调用colorLegend函数,生成颜色指示图
      economyColorG
        .call(colorLegend,{
          colorScale:economyColorScale
          ,circleRadius:10
          ,onClick
          ,selectedColorValue
          })

    }

  }



  render(){

    return (
            <div ref='area' id={Css['area']}>
              <Tips tipText={this.state.tips}></Tips>
              <svg ref='svg' id={Css['svg']}>

              </svg>
            </div>

    );
  }

}
