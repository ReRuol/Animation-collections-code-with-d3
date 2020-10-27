/* eslint-disable jsx-a11y/anchor-has-content */

export default function colorLegend (colorG ,props){
  const {colorScale,circleRadius,onClick,selectedColorValue} = props

  //添加背景矩形
  colorG.selectAll('rect').data([null])
    .enter()
    .append('rect')
    .attr('width',200)
    .attr('height',220)
    .attr('fill','#fff')
    .attr('transform', (d,i)=>{
      return `translate(${0},${0})`
    })
    .attr('rx',20)
    .attr('opacity',0.85)


  const groups = colorG.selectAll('g')
    .data(colorScale.domain());

  const groupsEnter = groups.enter().append('g')
    .attr('class','globalEconomyMap-module-tick');

  groupsEnter.merge(groups)
    .attr('transform', (d,i)=>{
      return `translate(${20},${20+i*30})`
    })
    .on('click',d => onClick(
      d === selectedColorValue?
        null:d
    ))
    .attr('opacity',d => (!selectedColorValue || d === selectedColorValue)?1:0.1//设置被选中与未选中颜色部分的透明度
    )

  groups.exit().remove()

  //添加圆形颜色图形
  groupsEnter.append('circle')
    .merge(groups.select('circle'))
      .attr('r',circleRadius)
      .attr('fill',colorScale)

  //中文对应描述
  const ChineseText = ['1.发达地区:7国集团','2.发达地图:非7国集团','3.新兴地区:BRIC','4.新兴地区:MIKT','5.新兴地区:G20','6.发展中地区','7.欠发达地区']

  //添加对应文字描述
  groupsEnter.append('text')
  .merge(groups.select('text'))
    .text((d,i)=>{return ChineseText[i]})
    .attr('y',5)
    .attr('x',20)
    .attr('fill',' rgb(66, 71, 78)')
    .attr('font-size',15)

}
