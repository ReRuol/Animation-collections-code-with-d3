import React from 'react';
import Css from './conan_drag.module.css';
import * as d3 from 'd3';
import Tips from '../insertTips/index'


export default class dragIndex extends React.Component {

  constructor(props){
    super();
    this.state={
          isMobile:false,
          nodes : [//节点集
            {name:"江户川柯南",text:'声优：高山南</br></br>他是故事里的男主角，"名侦探柯南"的灵魂人物。原名工藤新一，帝丹高中二年极学生，与小兰是青梅竹马。继承了父亲的超强推理能力，帮助警方破获了不少案子，被誉为高中生名侦探。他喜欢看推理小说，最崇拜福尔摩斯，另外踢足球的水平也是一流的。不幸被卷入黑衣组织的交易被灌下APTX4869，但是没有死，只是变成了小孩，目前年龄定为6、7岁。改名江户川柯南(取自两个侦探小说里的人名)。幸亏智力没有衰退，头脑还是一样灵光，推理能力丝毫未减。为了找出黑衣人的下落，寄住在家开侦探事务所的小兰家，一方面暗地协助小五郎破案。而体力上的不足靠阿栗博士的发明来弥补。变小后就读于帝丹小学1年纪B班，认识了步美、元太、光彦三人，还成立了少年侦探团，是其中最重要的"首脑"。不管是变小前后，唱歌五音不全还是没有办法变更的事实……唱歌走音非常夸张。最常穿著的服装：红领结+蓝西装+短裤+球鞋。但现较少穿著) 受到许多同年龄的女孩们欢迎，人气和未缩小前不相上下! 有多次差点泄漏身分，但到最后总是千钧一发。知道他真实身份的有：阿利博士、他父母(听博士说的)、服部平次(与柯南一起破案过程中自己发现的)、怪盗Kid(与柯南的较量中自己发现的)、灰原哀(变小前奉黑衣组织之命调查新一时发现的)。名字的由来︰「江户川」乱步、「柯南」.道尔。</br></br>初登场：002 董事长千金绑架事件'
                ,imgUrl:'http://img.qqzhi.com/uploads/2018-12-03/014958552.jpg'},
            {name:"工藤新一",text:'声优：山口胜平</br></br>工藤新一，帝丹高中二年极学生。5月4日生，金牛座。与小兰是青梅竹马，两人感情很好。继承了父母的优良基因。有敏锐的观察力、过人的推理能力，是位高中生侦探。帮助警方破获了不少棘手的案件，经常活跃在新闻、报纸上，拥有不少侦探迷。被誉为"高中生名侦探"、"平成的福尔摩斯"、"日本警察的救世主"、"关东的工藤"。他喜欢看推理小说，偶像是柯南.道尔所创造的名侦探：夏洛克.福尔摩斯。最喜欢的柯南.道尔的作品是〈四个签名。最擅长的运动是足球，踢足球的水平也是一流的，其它运动也很在行，国中时是足球队的中锋。最大缺点唱歌五音不全，是个大音痴。 喜欢的食物是柠檬派，最讨厌葡萄干("特别篇"漫画山岸荣一老师设定)。喜欢的人是青梅竹马的毛利兰。自父母3年前到美国居住，独自一人住在「推理之家」中。首次侦办的案件是在前往洛杉矶的飞机上。住址是东京都米花市米花町2丁目21番地。名字的由来:「工藤」俊作。</br></br>初登场：001 云霄飞车杀人事件'
                ,imgUrl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2561355949,369093416&fm=26&gp=0.jpg'},
            {name:"毛利兰",text:'声优：山崎和佳奈</br></br>兰是故事里的女主角，新一的青梅出马，帝丹高中2年级生，和新一是同班同学，血型和新一相同，对他有着超越一般朋友的感情但又不愿承认。好友为园子及和叶，坚强又温柔的女孩，擅长料理家事，喜欢追求流行、偶像，常与园子去唱卡拉OK。 因崇拜空手道冠军前田聪，便开始学习空手道且对空手道有着浓厚的兴趣，工夫也不浅，为空手道社的主将，还曾经获得东京空手道大会的冠军。所以她一生气柯南就很怕。 不过她最怕的东西是妖魔鬼怪，明明有实力打倒袭击她的凶手，可是却被吓得动弹不得。她曾经多次怀疑过柯南和新一是同一个人，但是阴差阳错的被柯南瞒过去了(有时是有人帮忙的)。希望分居的父母能和好，经常计画一起碰面，但总是被拆穿。最大的愿望是新一赶快回来吧!但其实小小新一就在身边…… 名字的由来：「莫理(mo ri)」士.卢布「朗(ran)」。</br></br>初登场：001 云霄飞车杀人事件'
                ,imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591025229382&di=5d27e951ae8c32889e4126d2257c9dfd&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fb812c8fcc3cec3fd980ff5afd688d43f87942732.jpg'},
            {name:"毛利小五郎",text:'声优：神谷明</br></br>小兰的父亲，职业是侦探，推理能力奇差，自行推理出的案件约不到十件，大多都由柯南的暗示才得以破解。所以每回柯南都把他麻醉后再用他的声音揭破案件的真相，所以大家送这位毛利侦探一个"沉睡的小五郎"的名号。他原来是一名优秀的警局刑警，和目暮十三是同事，后来因为一起事件而辞职(详见剧场版《十四番目之标的》)，改行当私人侦探,在自家二楼开「毛利侦探事务所」,三楼为居住地。 毛利小五郎的枪法十分准，柔道也是一流的，大学时代是柔道社的，被主将认为是社里最有实力的人(小兰的空手道才能也有他的遗传因素吧)。小五郎一见漂亮女性就眼睛发直，最喜欢的偶像是歌星冲野洋子小姐。另外他的吃相非常不好，没事喜欢去打麻将，或是喝啤酒，经常喝醉。因受不了小五郎的种种不良嗜好,老婆妃英理因此受不了他，于是在十年前就与他分居。每每柯南要侦查案件，小五郎总以为他要来妨碍办案，所以常在柯南头上留下一个大肿包…… 名字的由来：明智「小五郎」。</br></br>初登场：001 云霄飞车杀人事件'
                ,imgUrl:'http://5b0988e595225.cdn.sohucs.com/images/20190604/530ec9b5547544c5b1034a9086193ff1.jpeg'},
            {name:"目暮十三",text:'声优：茶风林</br></br>警视厅搜查一课的组长，小五郎辞职前和他是搭档，工藤优作和他也是旧识。他视小五郎为不吉利的人，因为经常是小五郎到了哪里，哪里就会发生命案(其实是柯南啦，和金田一一很象嘛，侦探故事里的主角遇到的凶杀案比现实生活中的绝大多数警察多要多)。虽然是警官，但却与小五郎相同，是个迷糊的警官。 侦查的案件绝大多数都是靠新一解决的，十分仰赖新一。 自新一失踪后，案件就全依靠沉睡的小五郎了。木暮警官有一个奇怪的习惯，就是无论什么时候都戴着那顶米黄色的帽子，就连受伤住院时也是如此，所以被少年侦探团怀疑是秃头。名字的由来:「梅古雷」。</br></br>初登场：001 云霄飞车杀人事件'
                ,imgUrl:'http://p2.qhimg.com/t010eeb1666d352e3ff.jpg'},
            {name:"小岛元太",text:'声优：高木涉</br></br>米花小学一年级B班学生，与柯南同班，少年侦探团成员，最爱吃，特别是鳗鱼饭,一听到大数目的钱就想可以买多少盒鳗鱼饭。体型壮硕，是一般小孩的2倍左右，所以喜欢用暴力胁迫人，似乎是孩子王般的人物，柯南就是受害者之一,自视为少年侦探团的团长。元太也喜欢步美。</br></br>初登场：001 云霄飞车杀人事件'
                ,imgUrl:'https://img5.51tietu.net/pic/2019-082115/jp0k3gtwq2vjp0k3gtwq2v.jpg'},
            {name:"圆谷光彦",text:'声优：大谷育江</br></br>米花小学一年级B班学生，与柯南同班，少年侦探团成员，不相信怪力乱神，只相信科学.喜欢用科学原理来解释事情(连玩个捉迷藏也……)。在少年侦探团里是除了柯南、哀之外较有分析头脑的人。 喜欢步美。名字的由来:浅见「光彦」。</br></br>初登场：001 云霄飞车杀人事件'
                ,imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590925545757&di=982e8440f7f704588f9c097593023c9a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2Fcebd0017806f5a224b90a736.jpg'},
            {name:"吉田步美",text:'声优：岩居由希子</br></br>米花小学一年级B班学生，与柯南同班，少年侦探团成员。活泼又可爱的个性，令元太和光彦着迷。喜欢与人交朋友，对新同学都十分主动，如：柯南、哀， 喜欢帮助别人，但对情敌也是会不客气的喔!家住在高耸的大楼里，且接近顶楼。曾见过新一、KID 本人;又与柯南成为同学，是个十分幸运的女孩呢!喜欢柯南。初登场：001 云霄飞车杀人事件'
                ,imgUrl:'http://imgsrc.baidu.com/forum/w=580;cp=tieba,10,403;ap=%BC%AA%CC%EF%B2%BD%C3%C0%B0%C9,90,411/sign=d947df23cf5c1038247ececa822af063/e8175082b2b7d0a23ce3dba4c2ef76094b369a80.jpg'},
            {name:"阿笠博士",text:'声优：绪方 贤一</br></br>住在工藤新一家隔壁的发明家，最常做的事就是把自己从实验室里炸出来。靠卖自己的古怪发明专利来赚钱。在新一的父母去美国后，很照顾新一(其实新一不去美国有一部分是为了兰哦)，也帮忙管理新一父亲的案件资料。也是新一缩小后第一个投靠的人，为数不多的知道柯南真实身份的人之一。用自己的发明帮了柯南很多忙。身体缩小后的灰原也寄宿在他家。</br></br>初登场：情人节遇害事件'
                ,imgUrl:'http://img.diudou.com/file/juqingjieshao/dongman/2017-08-09/79c9e5c1fecbe50c3f9257dcae28c3fb.jpg'},
            {name:"灰原哀",text:'声优：林原惠</br></br>是柯南之后班里的又一个转学生，同为少年侦探团的一员。看上去长得很可爱，可是经常板着脸(可以称的上是剧中最Cool的角色)，寄宿在阿栗博士家。智商很高，精通电脑。她的真实身份是黑衣组织里的研究员，是APTX4869的制药者。本名宫野志保，18岁,代号雪莉，父母也都是黑衣组织成员，在她小的时候就死了，留下她和姐姐两个人。其姐宫野明美因为不服从组织而被杀害，志保因此不愿继续APTX4869的研究而被囚禁在瓦斯室。绝望的她服下了藏着的APTX4969想要自杀，没想到与新一一样没被毒死而身体缩小成儿童时期模样，得以挣脱了手铐从垃圾信道逃了出来。因为她之前已经知道新一也变小了，所以想要向他求助，最后倒在新一家门口，被博士捡回了家。因为缺少资料，所以哀也无法制出解药，但不管怎么说都是一个希望。其实她的推理能力也不错，有时可以帮助柯南破案。名字的由来：蔻蒂莉亚.「葛蕾(gray.灰)」、V.「I(ai)」.渥修斯基</br></br>初登场：129 来自黑暗组织的女子_大学教授杀人事件'
                ,imgUrl:'http://n.sinaimg.cn/sinacn/w640h409/20180101/b55a-fyqefvw7401167.jpg'},
            {name:"服部平次",text:'声优：堀川亮</br></br>大阪人，有着浓厚的关西腔。大阪警察局局长服部平藏的儿子，与新一齐名的关西的高中生名侦探。喜欢的推理作家为艾拉里.昆恩。因为人们经常把他们做比较，说什么"关东的工藤，关西的服部"，所以服部平次把新一当作劲敌，一直想找新一比试一下。因为新一变成了柯南，所以他当然找不到新一本人。在之后的案件推理中，还是柯南技高一筹，但是平次也注意到柯南的可疑迹象，最终识破了他的真身。以后他们就成了好友，但经常联手出击，两人之间似乎有深厚的友谊。可是平次每次看到柯南都"工藤""工藤"的乱叫，引起小兰的怀疑，还好平次人比较活络，都能够掩饰过去，即使这样柯南还是每次都会吓个半死(这样想想，平次是故意的也说不定)。最高兴的事是和新一的推理意见有分歧的时候。他经常带着青梅竹马--和叶做的护身符在身上，每次有大事发生时， 总是能救他一命，似乎很灵验喔!名字的由来：钱形「平次」。</br></br>初登场：048 外交官杀人事件(前篇)'
                ,imgUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4077461941,2125627978&fm=26&gp=0.jpg'}
            ,{name:'铃木园子',text:'声优：松井菜樱子</br></br>帝丹高中二年级B班的学生，新一和兰的同学，也是兰的好友。铃木财团的二千金(有姐姐——铃木绫子)，是个见到帅哥就变花痴的大小姐。性格很豪迈。虽然出生名门，但和兰之间的感情相当好，完全没有什么地位悬殊之类的。她放弃了荣华富贵，投身于平凡，从来不在人前炫耀自己的出生。男友是被称为“踢击的名公子”的全国空手道冠军——京极真，因为救过园子一命而认识的。但后来京极真去美国练习，目前他们之间正隔着太平洋。</br></br>初登场：006 情人节杀人事件'
                ,imgUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1560243357,10432809&fm=26&gp=0.jpg'}
            ,{name:'远山和叶',text:'声优：宫村优子</br></br>大阪的高中2年级生，平次的青梅竹马。父亲为大阪警署的刑事部长。身手矫健，会徒手制服歹徒。自称与平次为「铁链」相结合的好伙伴。喜欢平次，曾经误会小兰而吃她的醋。自从解开对小兰的误会后，便与小兰成为亲密的好友。将手铐的碎片放进平次的护身符里，每次不仅能保住平次的性命，还曾救了柯南一命。</br></br>初登场：118 浪花连续杀人事件'
                ,imgUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1297698154,3470952437&fm=26&gp=0.jpg'}
          ],
          edges : [//边集
            {source:0,target:1,relation:"同一人物",value:0.7},
            {source:0,target:2,relation:"关心",value:1},
            {source:0,target:3,relation:"寄住/扎他",value:1.1},
            {source:0,target:4,relation:"协助",value:1},
            {source:0,target:8,relation:"邻居/好友",value:1},
            {source:0,target:9,relation:"APTX4869",value:1},
            {source:0,target:5,relation:"少年侦探团",value:1},
            {source:0,target:6,relation:"少年侦探团",value:1.5},
            {source:0,target:7,relation:"少年侦探团",value:1},
            {source:0,target:10,relation:"对手/朋友",value:1},
            {source:1,target:2,relation:"青梅竹马",value:0.6},
            {source:2,target:3,relation:"父女",value:0.8},
            {source:4,target:3,relation:"搭档",value:0.8},
            {source:5,target:6,relation:"搭档",value:0.8},
            {source:6,target:7,relation:"搭档",value:0.8},
            {source:9,target:8,relation:"寄住",value:0.8},
            {source:11,target:2,relation:'同学/闺蜜',value:0.7}
            ,{source:12,target:10,relation:'青梅竹马',value:0.7}
          ],
          isPanelActive:false,
          nodesDetail:{name:'',imgUrl:'',text:''}
          ,tips:['1.使用d3.js绘制的力学导图','2.点击人物头像节点可进行自由拖拽','3.点击人物头像节点可以高亮','4.同被点击节点存在联系的节点也会被点亮','5.再次点击同一节点取消高亮']


    };
    this.nodesDetailName=null;
    this.nodesDetailText=null;
    this.nodesDetailImg=null;



  }
  componentDidMount(){
    //this.isMobile();
    this.initArgu();
  }


  //点击模糊区域隐藏细节界面
  hideDetail(e){
    e.stopPropagation()

    Object.assign(this.refs['detail'].style
      ,{top:'25%',opacity:'0'}
    )


    setTimeout(()=>{
      this.refs['detailWrap'].style.display='none'
    },650)
  }


  //创建参数与svg
  initArgu(){

    /* const marge = {top:50,bottom:60,left:40,right:60} */
    const svg = d3.select('#svg')
        .call(d3.zoom() //创建缩放行为
        .scaleExtent([0, 2])//设置缩放范围
        .on('zoom',zoom_actions));
    const svgDom= this.refs['svg'];
    const {clientWidth,clientHeight}= svgDom
    const width = clientWidth
    const height = clientHeight

    const g = svg.append('g')
          .attr('width',width*0.75)
          .attr('height',height*0.75)


    //新建一个d3力导向图
    const forceSimulation = d3.forceSimulation()
        .force("link",d3.forceLink())//设置连线,
        .force("charge",d3.forceManyBody().strength(-1000))//设置万有引力
        .force("center",d3.forceCenter(width/2,height/2))//设置力学仿真器(图形)的中心
        .alphaDecay(0.03)//设置 alpha 衰减率.迭代150，默认0.0228
        .force("collide",d3.forceCollide(55).strength(0.5).iterations(100))// 碰撞作用力，为节点指定一个radius区域来防止节点重叠，设置碰撞力的强度，范围[0,1], 默认为0.7。设置迭代次数，默认为1，迭代次数越多最终的布局效果越好，但是计算复杂度更高


    //从这里开始初始化力导向图，也就是传入数据
    //生成节点数据
    forceSimulation.nodes(this.state.nodes)
        .on("tick",ticked);

    //生成边集数据
    forceSimulation.force("link")
    		.links(this.state.edges)
    		.distance(function(d){//每一边的长度
    			return d.value*210;
        })

    // defs  <defs>标签的内容不会显示，只有调用的时候才显示
    const defs=g.append('defs');

    const arrow_path = 'M2,2 L10,6 L2,10 L6,6 L2,2';
    /* M 2,2 – 把笔落下，放在2,2处
      L 10,6 – 从起点2 2出发绘制一条直线到10,6处
      L 2,10 – 从起点10,6出发绘制一条直线到L2,10处
      L 6,6 – 从起点2,10出发绘制一条直线到L6,6处
      L L2,2 – 从起点6,6出发绘制一条直线到L2,2处*/

    //添加选中显示的箭头
    const unSelectedArrow = defs.append('marker')
    .attr('id', 'unSelectedArrow')
    .attr('markerWidth', '19')   //maker视窗的宽
    .attr('markerHeight', '22')  //maker视窗的高
    .attr('viewBox', '0 0 12 12')
    .attr('refX', '28') //refX和refY，指的是图形元素和marker连接的位置坐标
    .attr('refY', '6')
    .attr('orient', 'auto') //orient="auto"设置箭头的方向为自动适应线条的方向
    .attr('fill','#fff')

    //测试里不添加这个属性也不影响箭头渲染,不过添加后能去除定义后未使用的警告
    unSelectedArrow.append('path')
    .attr('d', arrow_path)

    //添加选中显示的箭头
    const selectedArrow = defs.append('marker')
      .attr('id', 'selectedArrow')
      .attr('markerWidth', '19')   //maker视窗的宽
      .attr('markerHeight', '22')  //maker视窗的高
      .attr('viewBox', '0 0 12 12')
      .attr('refX', '28.5') //refX和refY，指的是图形元素和marker连接的位置坐标
      .attr('refY', '6')
      .attr('orient', 'auto') //orient="auto"设置箭头的方向为自动适应线条的方向
      .attr('fill','#ff9933')
    .append('path')
      .attr('d', arrow_path)

    selectedArrow.append('path')
    .attr('d', arrow_path)


    //得到节点和边数据后开始绘制边。因为d3各元素有层级关系，先绘制的在下面，所以应该先绘制边
    const linksG = g.append('g')
    const links = linksG.selectAll("line")
          .data(this.state.edges)
    const linksEnter = links
          .enter()
          .append("line")
          .attr("strokewidth",1)
          .attr('stroke-dasharray', 3, 2)

/* 因为svg中,先描绘的元素在底层,为了更好的显示效果,嵌板的渲染放在links连线之后、nodes节点之间 */

    //添加关系嵌板
    const panelG = g.append('g')
    const panel=panelG.selectAll("rect")
      .data(this.state.edges)
    const panelEnter = panel
      .enter()
      .append("rect")
      .attr('rx', 10)
      .attr('ry', 10)
      .attr('width', 58)
      .attr('height', 18)
      .attr('stroke', '#aaa')

    //添加关系嵌板的text部分
    const panelText=panelG.selectAll(".panelText")
      .data(this.state.edges)
    const panelTextEnter = panelText
      .enter()
      .append('text')
      .attr('class', 'panelText')
      .attr("x",5)
      .attr("y",10)
      .text(d => d.relation)
      .attr('font-size', '10px')


    //建立用来放在每个节点和对应文字的分组<g>
    const gs = g.selectAll(".circleText")
          .data(this.state.nodes)
    const gsEnter = gs
          .enter()
          .append("g")
          .attr('class','circleText')
          .call(d3.drag()
            .on("start",started)
            .on("drag",dragged)
            .on("end",ended)
          )
          .on('click',(d,i)=>{
            if(selectedNodesData === d.name){
              return onClick(null,i)
            }else{
              return onClick(d,i)
            }
          })

    //绘制节点的圆形circle
    const nodesCircle = gs.select("circle")
    const nodesCircleEnter = gsEnter.append('circle')
    nodesCircle.merge(nodesCircleEnter)
      .attr("r",29)
      .attr('fill',(d,i)=>{//为圆形添加图片填充
        const catpattern = defs.append('pattern')
          .attr('id', `catpattern${i}`)
          .attr('height', 2)
          .attr('width', 2)
        catpattern.append('image')
          .attr('x', -18)
          .attr('y', -16)
          .attr('width', 95)
          .attr('height', 90)
          .attr('xlink:href', d.imgUrl)
          .attr('transform','scale(1)')

      return `url(#catpattern${i})`;
      })
      .on('mouseover', function (d) {
        if(!selectedNodesData || d.name !== selectedNodesData){
          d3.select(this).attr('stroke-width', 2.8);
        }

      })
      .on('mouseout', function (d) {
        if(!selectedNodesData || d.name !== selectedNodesData){
          d3.select(this).attr('stroke-width', 1.6);
        }
      })

    //绘制节点文字
    gs.select('text').merge(gsEnter.append("text"))
          .attr("x",32)
          .attr("y",4)
          .text(d => d.name)
          .attr('fill','#DED7D6  ')
          .attr('font-size','12')

      let selectedNodesData = null
      let selectedLinksNodes = []
      let selectedEdgesData = []
      //添加一个节点的onCLick函数
      const onClick = (d,selected_i) => {
        const edges = this.state.edges
        if(d){
          selectedNodesData = d.name//选中的节点

          //添加选中的连接边集
          selectedEdgesData.length = 0
          edges.map((item,index)=>{
            if(item.source.name === d.name || item.target.name === d.name){
              return selectedEdgesData.push(item)
            }
            return true
          })
          //添加连接节点
          selectedLinksNodes.length = 0
          selectedEdgesData.map((item,index)=>{
            if(item.source.name === selectedNodesData){
              return selectedLinksNodes.push(item.target.name)
            }else if(item.target.name ===selectedNodesData){
              return selectedLinksNodes.push(item.source.name)
            }
            return true
          })

        }else{
          selectedNodesData = null
          selectedEdgesData.length = 0
          selectedLinksNodes.length = 0



        }

        //重新渲染更改了样式的元素,再执行一次dragRender函数
        dragRender()

      }

      //改变被选中以及连接节点颜色的函数
      const LinksNodes = (d)=>{
        if(!selectedNodesData){
          return '#fff'
        }else{
          if(d.name === selectedNodesData  ){
            return '#ff9933'
          }else{
            let isLinkNodes = false
            for(let j=0;j<selectedLinksNodes.length;j++){
              if(d.name === selectedLinksNodes[j]){
                isLinkNodes = true
                break
              }
            }
            return isLinkNodes?'#ff9933':'#fff'
          }

        }
      }

      //改变选中连线颜色的函数
      const LinksSelectedStroke = (d,i) => {
        let isLinksSelected=false
        if(selectedEdgesData.length > 0){
          for(let j = 0;j<selectedEdgesData.length;j++){
             if(selectedEdgesData[j].index === i){
               isLinksSelected = true
               break
             }
           }
         }else if(selectedEdgesData.length <= 0){
           isLinksSelected = false
         }
         return isLinksSelected?"#ff9933":"#fff"
      }

      //改变选中连线箭头的函数
      const LinksSelectedArrow = (d,i) => {
        let isArrowsSelected=false
        if(selectedEdgesData.length > 0){
          for(let j = 0;j<selectedEdgesData.length;j++){
             if(selectedEdgesData[j].index === i){
               isArrowsSelected = true
               break
             }
           }
        }else if(selectedEdgesData.length <= 0){
           isArrowsSelected = false
        }
        return isArrowsSelected?'url(#selectedArrow)':'url(#unSelectedArrow)'
      }

      //改变被选中关系嵌板的函数
      const panelSelected = (d,i) =>{
        let isSelectedPanel = false
        if(selectedEdgesData.length>0){
          for(let j=0;j<selectedEdgesData.length;j++){
            if(i === selectedEdgesData[j].index){
              isSelectedPanel = true
              break
            }
          }
        }else{
          isSelectedPanel = false
        }
        return isSelectedPanel?'#ff9933':'#fff'
      }

      //改变被选中关系嵌板文字的函数
      const panelTextSelected = (d,i) =>{
        let selected = false
        if(selectedEdgesData.length>0){
          for(let j=0;j<selectedEdgesData.length;j++){
            if(i === selectedEdgesData[j].index){
              selected = true
              break
            }
          }
        }else{
          selected = false
        }
        return selected?'#fff':'#000'
      }



      //这里的dragRender函数用来渲染需要动态改变的元素
      const dragRender = () =>{

        //links连线的颜色以及箭头
        links.merge(linksEnter)
          .attr('stroke',(d,i) => LinksSelectedStroke(d,i))
          .attr('marker-end', (d,i) => LinksSelectedArrow(d,i))

        //绘制节点的圆圈
        nodesCircle.merge(nodesCircleEnter)
          .attr('stroke',LinksNodes)//边框颜色
          .attr('stroke-width',d => (!selectedNodesData || d.name !== selectedNodesData)?'1.6':'4')//边框尺寸

        //关系嵌板的颜色
        panel.merge(panelEnter)
          .attr('fill', (d,i)=>panelSelected(d,i))

        //关系嵌板文本
        panelText.merge(panelTextEnter)
          .attr('fill', (d,i)=>panelTextSelected(d,i))


      }
      dragRender()//执行dragRender函数

      //ticked函数
      function ticked(){
          links.merge(linksEnter)
            .attr("x1",function(d){return d.source.x;})
            .attr("y1",function(d){return d.source.y;})
            .attr("x2",function(d){return d.target.x;})
            .attr("y2",function(d){return d.target.y;});

          gs.merge(gsEnter)
            .attr("transform",function(d) {
              return "translate(" + d.x + "," + d.y + ")"
            });

          panel.merge(panelEnter)
            .attr("x",d=>{return (d.source.x + d.target.x)/2-29})
            .attr("y",d=>{return (d.source.y + d.target.y)/2-9})
            .attr("transform",function(d,i) {
              const lineWidth = Math.sqrt((d.source.x - d.target.x) * (d.source.x - d.target.x) + (d.source.y - d.target.y) * (d.source.y - d.target.y))
              let angle = Math.floor(Math.acos((d.source.x - d.target.x) / lineWidth) / Math.PI * 180)
              angle = angle ? (d.source.y < d.target.y) ? -angle : angle : 0
              return `rotate(${angle},${(d.source.x + d.target.x) / 2},${(d.source.y + d.target.y) / 2})`
            });

          panelText.merge(panelTextEnter)
            .attr("x",d=>{return (d.source.x + d.target.x)/2-25})
            .attr("y",d=>{return (d.source.y + d.target.y)/2+3})
            .attr("transform",function(d,i) {
              const lineWidth = Math.sqrt((d.source.x - d.target.x) * (d.source.x - d.target.x) + (d.source.y - d.target.y) * (d.source.y - d.target.y))
              let angle = Math.floor(Math.asin((d.source.y - d.target.y) / lineWidth) / Math.PI * 180)
              angle = angle ? (d.source.x < d.target.x) ? -angle : angle : 0
              return `rotate(${angle},${(d.source.x + d.target.x) / 2},${(d.source.y + d.target.y) / 2})`
            });

      }

      //设置拖拽的started、drag、ended函数
      function started(d){

          if(!d3.event.active){
            forceSimulation.alphaTarget(0.7).restart();//设置衰减系数，对节点位置移动过程的模拟，数值越高移动越快，数值范围[0，1]
          }
          forceSimulation.alphaTarget(0.7).restart();//设置衰减系数，对节点位置移动过程的模拟，数值越高移动越快，数值范围[0，1]
          d.fx = d.x;
          d.fy = d.y;
      };
      function dragged(d){
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      };
      function ended(d){
          if(!d3.event.active){
            forceSimulation.alphaTarget(0);
          }
          d.fx = null;
          d.fy = null;
      };

      //缩放函数
      function zoom_actions() {
        //限定缩放比例
        if(d3.event.transform.k >=2){
          d3.event.transform.k =2
        }else if(d3.event.transform.k <= 0.6){
          d3.event.transform.k =0.6
        }

        //设定拖拽范围
        if(d3.event.transform.x <=width*-0.5){
          d3.event.transform.x =width*-0.5
        }else if(d3.event.transform.x >= width*0.5){
          d3.event.transform.x = width/2
        }
        if(d3.event.transform.y <=height*-0.5){
          d3.event.transform.y =height*-0.5
        }else if(d3.event.transform.y >= height*0.5){
          d3.event.transform.y = height/2
        }

        g.attr("transform", d3.event.transform)
      }


  }
  render(){
    return (
    <div className={Css['main']} ref='main'>
      <Tips tipText={this.state.tips}></Tips>
      <div ref='detailWrap' id={Css['detailWrap']}>
        <div ref='detailBg' id={Css['detailBg']} onClick={e=>this.hideDetail(e)}></div>
        <div ref='detail' id={Css['detail']}>
          <h1>{this.state.nodesDetail.name!==""?this.state.nodesDetail.name:'我是小黑'}</h1>
          <div id={Css['imgWrap']}>
            <img id={Css['img']} src={this.state.nodesDetail.imgUrl!==""?this.state.nodesDetail.imgUrl:require('./images/微信图片_20181227124844.jpg')} alt=""/>
          </div>
          <div id={Css['textWrap']}>
            <div id={Css['text']} dangerouslySetInnerHTML={{__html:this.state.nodesDetail.text}}></div>
          </div>
        </div>
      </div>

        <svg id="svg" ref='svg'></svg>

    </div>
    )
  }
}
