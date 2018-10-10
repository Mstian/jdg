//顶部广告
var ad_top = document.getElementsByClassName('ad_top')[0];
var closebtn = document.getElementsByClassName('closebtn')[0];
closebtn.onclick = function(){
    ad_top.style.display = 'none';
}
$('.ad_top img').onclick = function(){
    location.href = 'http://www.baidu.com/';
}
//搜索框自动换物品
var input = $('#search .searchinput input');
var em = $('#search .searchinput p em');
var goods = ['iphonexs','vivoX21','samsung S9','huawei荣耀','美的冰箱','lol周边','vr眼镜'];
function changegoods(){
    var randomindex = parseInt(Math.random()*goods.length);
    input.placeholder = goods[randomindex];
    em.innerHTML = goods[randomindex];
}
changegoods();
var changegoodstime = setInterval(changegoods,2000);

//轮播图
var oBtnright = document.getElementsByClassName('btnright')[0];
var oBtnleft = document.getElementsByClassName('btnleft')[0];
var aLi = document.querySelectorAll('#banner .scrollimg li');
var aSpan = document.querySelectorAll('#banner .scrollimg span');
var timer = null;
var index = 0;
oBtnright.onclick = function(){
    for(var i = 0; i<aLi.length; i++){
        aLi[i].className = '';
    }
    if(index == aLi.length - 1 ){
        index = 0;
    }else{
        index++
    }
    aLi[index].className = 'transparent';
    for(var i = 0; i<aSpan.length;i++){
        aSpan[i].className = '';
    }
    aSpan[index].className = 'active';
}
oBtnleft.onclick = function(){
    for(var i = 0; i<aLi.length; i++){
        aLi[i].className = '';
    }
    if(index == 0){
        index = aLi.length - 1;
    }else{
        index--;
    }
    aLi[index].className = 'transparent';
    for(var i = 0; i<aSpan.length; i++){
        aSpan[i].className = '';
    }
    aSpan[index].className = 'active';
    
}
for(let j = 0; j < aSpan.length; j++){
    aSpan[j].onmouseenter = function(){
        index = j;
        for(var i = 0; i<aSpan.length;i++){
            aSpan[i].className = '';
        }
        aSpan[index].className = 'active';
        for(var i = 0; i<aLi.length; i++){
            aLi[i].className = '';
        }
        aLi[index].className = 'transparent';
    }
}
timer = setInterval(oBtnright.onclick,3000);
oBtnright.onmouseenter = function(){
    clearInterval(timer);
}
oBtnright.onmouseleave = function(){
    clearInterval(timer);
    timer = setInterval(oBtnright.onclick,3000);
}
oBtnleft.onmouseenter = function(){
    clearInterval(timer);
}
oBtnleft.onmouseleave = function(){
    clearInterval(timer);
    timer = setInterval(oBtnright.onclick,3000);
}
$('#banner .scrollimg p').onmouseenter = function(){
    clearInterval(timer);
}
$('#banner .scrollimg p').onmouseleave = function(){
    clearInterval(timer);
    timer = setInterval(oBtnright.onclick,3000);
}
//侧边栏广告
var sidead = $('.sidead');
var scrollad = $('.scrollad');
sidead.onmouseenter = function(){
    move(scrollad,{
        'width':790
    });
}
sidead.onmouseleave = function(){
    move(scrollad,{
        'width':0
    });
}
scrollad.onmouseenter = function(){
    move(scrollad,{
        'width':790
    });
}
scrollad.onmouseleave = function(){
    move(scrollad,{
        'width':0
    });
}
var closesidead = $('.closesidead');
closesidead.onclick = function(){
    move(closesidead.parentNode,{
        'width':0
    });
}


//侧边栏选项卡;
$('#banner .content_side .sidetab .tab li:nth-child(1)').onmouseenter = function(){
    $('#banner .content_side .sidetab .tabmain .tab1').style.display = 'block';
    $('#banner .content_side .sidetab .tabmain .tab2').style.display = 'none';
}
$('#banner .content_side .sidetab .tab li:nth-child(2)').onmouseenter = function(){
    $('#banner .content_side .sidetab .tabmain .tab1').style.display = 'none';
    $('#banner .content_side .sidetab .tabmain .tab2').style.display = 'block';
}


//banner区域选项卡
var tabList = $('.tab_list');
var tabListLi = tabList.children;
var tabMain = $('.tab_main');
var tabMainLi = tabMain.children;
for(var i = 0;  i < tabListLi.length; i++){
    tabListLi[i].index = i;
    tabListLi[i].onmouseenter = function(){
        for(var i = 0; i<tabMainLi.length; i++){
            tabMainLi[i].style.display = 'none';
        }
        tabMainLi[this.index].style.display = 'block'
    }
    tabListLi[i].onmouseleave = function(){
        tabMainLi[this.index].style.display = 'none';
    }
    tabMainLi[i].onmouseenter = function(){
        this.style.display = 'block';
    }
    tabMainLi[i].onmouseleave = function(){
        this.style.display = 'none';
    }
}

//倒计时

function timeCount(){
    var now = new Date().getTime();
    var target = new Date('2018/10/1').getTime();
    var durTime = target - now;
    var hour = parseInt(durTime/1000/60/60);
    var minute = parseInt((durTime - hour * 1000*3600) / 1000 /60); 
    var seconds = parseInt((durTime - hour*1000*3600 - minute*1000*60)/1000);   
    if(hour<10){
        hour = '0'+hour;
    }
    if(minute<10){
        minute = '0'+minute;
    }
    if(seconds<10){
        seconds = '0'+seconds;
    }
    $('#kill .time p span:nth-child(1)').innerHTML = hour;
    $('#kill .time p span:nth-child(2)').innerHTML = minute;
    $('#kill .time p span:nth-child(3)').innerHTML = seconds;
}
timeCount();
setInterval(timeCount,1000);

//autoscroll
var autoscrollbar = $('.autoscroll ul');
var autoscrollimg = autoscrollbar.children;
var nowindex = 0
function autoscroll(){
    if(nowindex == autoscrollimg.length - 1){
        autoscrollbar.style.left = 0 + 'px';
        nowindex = 1; 
    }else{
        nowindex ++;
    }
   move(autoscrollbar,{
       'left':-nowindex * 196
   });
}
var autotimer = setInterval(autoscroll,3000);


//倒计时轮播图
//
var scrollkillbar = $('.scrollkillbar');
var scrollbar = $('.scrollbar'); 
var right_btn = $('.right_btn');
var left_btn = $('.left_btn');
var killbar_index = 0;
right_btn.onclick = function(){
    if(killbar_index == scrollbar.length - 1){
        scrollkillbar.style.left = 0;
        killbar_index = 1;
    }else{
        killbar_index++;
    }
   
    // scrollkillbar.style.left = - killbar_index * 784 + 'px';
    move(scrollkillbar,{
        left: - killbar_index * 784
    })
}
left_btn.onclick = function(){
    if(killbar_index == 0){
        scrollkillbar.style.left = -(scrollbar.length - 1)*784+'px';
        killbar_index = scrollbar.length-2;
    }else{
        killbar_index--;
    }
    move(scrollkillbar,{
        left: - killbar_index * 784
    })
}
// 排行榜选项卡效果
  var ranknav_li = $('.ranknav li');
  var tab_list = $('.tab .tablist ');
  // console.log(ranknav_li,tab_list);
  for(let i = 0; i < ranknav_li.length; i++){
    ranknav_li[i].onmouseenter = function(){
        this.index = i;
        for(var j = 0; j < tab_list.length; j++){
            tab_list[j].style.display = 'none';
            ranknav_li[j].className = '';
        }
        ranknav_li[i].className = 'fontcolor';
        tab_list[this.index].style.display = 'block';
    }
    ranknav_li[i].onmouseleave = function(){
       
    }
  }
// 排行榜自动轮播
    var firstwrap = $('#content1 .ranking .tab .tablist .firstwrap');
    var first = $('#content1 .ranking .tab .tablist .firstwrap .first');
    var rankpoint = $('#content1 .ranking .rankpoint');
    var rankpointChild = rankpoint.children;
    var self_index = 0;
    function firstautoscroll(){
    if(self_index == first.length - 1){
            firstwrap.style.left = 0 + 'px';
            self_index = 1;
        }else{
            self_index ++;
        }   
        for(var j = 0 ;j < rankpointChild.length; j++){
                rankpointChild[j].className = '';
            }
        var count;
        if(self_index == first.length - 1){   // 对应第一个下标
            count = 0;
        }else{
            count = self_index;
        }
        rankpointChild[count].className = 'change';
        move(firstwrap,{
            left: - self_index * 370
        })
   }
   for(let i = 0 ; i<rankpointChild.length; i++){  

        rankpointChild[i].onmouseenter = function(){
            clearInterval(firstautoscrolltimer)   
            for(var j = 0 ;j < rankpointChild.length; j++){
                rankpointChild[j].className = '';
            }
            self_index = i;
            rankpointChild[self_index].className = 'change';
            move(firstwrap,{
                left: - self_index * 370
            })
        }
        rankpointChild[i].onmouseleave = function(){
            clearInterval(firstautoscrolltimer);
            firstautoscrolltimer = setInterval(firstautoscroll,3000)
        }
    }

   var firstautoscrolltimer = setInterval(firstautoscroll,3000)
    
// 会买专辑轮播
    var ab_btn_r = $('#content1 .album .scrollbtn .right');
    var ab_btn_l = $('#content1 .album .scrollbtn .left');
    var scrollwrap = $('#content1 .album .scrollwrap');
    var scrollfirst = $('#content1 .album .scrollfirst');
    var scrollfirst_index = 0;
    var point = $('#content1 .album .point');
    var pointChild = point.children;
    ab_btn_r.onclick = function(){
        if(scrollfirst_index == scrollfirst.length - 1){
            scrollwrap.style.left = 0 + 'px';
            scrollfirst_index = 1;
        }else{
            scrollfirst_index ++;
        }   
        for(var j = 0 ;j < pointChild.length; j++){
                pointChild[j].className = '';
            }
        var count;
        if(scrollfirst_index == scrollfirst.length - 1){   // 对应第一个下标
            count = 0;
        }else{
            count = scrollfirst_index;
        }
        pointChild[count].className = 'change';
        move(scrollwrap,{
            left: - scrollfirst_index * 370
        })
    }
    ab_btn_l.onclick = function(){
        if(scrollfirst_index == 0){
            scrollwrap.style.left = -(scrollfirst.length - 1)* 370 + 'px';
            scrollfirst_index = scrollfirst.length - 2;
        }else{
            scrollfirst_index --;
        }   
        for(var j = 0 ;j < pointChild.length; j++){
                pointChild[j].className = '';
            }
        pointChild[scrollfirst_index].className = 'change';
        move(scrollwrap,{
            left: - scrollfirst_index * 370
        })
    }
    for(let i = 0 ; i<pointChild.length; i++){
        
        pointChild[i].onmouseenter = function(){
            clearInterval(vip_timer)
            for(var j = 0 ;j < pointChild.length; j++){
                pointChild[j].className = '';
            }
            scrollfirst_index = i;
            pointChild[scrollfirst_index].className = 'change';
            move(scrollwrap,{
                left: - scrollfirst_index * 370
            })
        }
        pointChild[i].onmouseleave = function(){
            vip_timer = setInterval(ab_btn_r.onclick,3000);
        }
    }
    var vip_timer = setInterval(ab_btn_r.onclick,3000);


//领券中心自动轮播
   var lesswrap = $('#content1 .vouchers .lesswrap');
   var lessmoney = $('#content1 .vouchers .lessmoney');
   var less_index = 0;
   var autopoint = $('#content1 .vouchers .autopoint');
   var autopointChild = autopoint.children;

   function lessautoscroll(){
    if(less_index == lessmoney.length - 1){
            lesswrap.style.left = 0 + 'px';
            less_index = 1;
        }else{
            less_index ++;
        }   
        for(var j = 0 ;j < autopointChild.length; j++){
                autopointChild[j].className = '';
            }
        var count;
        if(less_index == lessmoney.length - 1){   // 对应第一个下标
            count = 0;
        }else{
            count = less_index;
        }
        autopointChild[count].className = 'change';
        move(lesswrap,{
            left: - less_index * 370
        })
   }
   for(let i = 0 ; i<autopointChild.length; i++){  

        autopointChild[i].onmouseenter = function(){
            clearInterval(lessautoscrolltimer)   
            for(var j = 0 ;j < autopointChild.length; j++){
                autopointChild[j].className = '';
            }
            less_index = i;
            autopointChild[less_index].className = 'change';
            move(lesswrap,{
                left: - less_index * 370
            })
        }
        autopointChild[i].onmouseleave = function(){
            clearInterval(lessautoscrolltimer);
            lessautoscrolltimer = setInterval(lessautoscroll,3000)
        }
    }

   var lessautoscrolltimer = setInterval(lessautoscroll,3000)

//觅自动轮播
    var readywrap = $('#content2 .find .readywrap');
    var readyscroll = readywrap.children;
    var findpoint = $('#content2 .find .point');
    var findChild = findpoint.children;
    var findindex = 0;
     function findautoscroll(){
    if(findindex == readyscroll.length - 1){
            readywrap.style.left = 0 + 'px';
            findindex = 1;
        }else{
            findindex ++;
        }   
        for(var j = 0 ;j < findChild.length; j++){
                findChild[j].className = '';
            }
        var count;
        if(findindex == readyscroll.length - 1){   // 对应第一个下标
            count = 0;
        }else{
            count = findindex;
        }
        findChild[count].className = 'change';
        move(readywrap,{
            left: - findindex * 370
        })
   }
   for(let i = 0 ; i<findChild.length; i++){  

        findChild[i].onmouseenter = function(){
            clearInterval(findautoscrolltimer)   
            for(var j = 0 ;j < findChild.length; j++){
                findChild[j].className = '';
            }
            findindex = i;
            findChild[findindex].className = 'change';
            move(readywrap,{
                left: - findindex * 370
            })
        }
        findChild[i].onmouseleave = function(){
            clearInterval(findautoscrolltimer);
            findautoscrolltimer = setInterval(findautoscroll,3000)
        }
    }

   var findautoscrolltimer = setInterval(findautoscroll,3000)







//瀑布流
function Waterfull(){}

Waterfull.prototype.init = function(){
    this.ul = $('#more .wrap ul');
    this.page_num = 0;
    this.rendering = false;
    this.loadjson()
    .then(function(data){
        this.renderPage();
    }.bind(this))
    this.handleEvent()
}
Waterfull.prototype.handleEvent = function(){
    onscroll = this.ifRender.bind(this);
}
Waterfull.prototype.loadjson = function(){
    return new Promise(function(success){
        var xhr = new XMLHttpRequest();
        xhr.open("GET","data.json");
        xhr.send(null)
        xhr.onload = function(){
            if(xhr.status){
                this.json = JSON.parse(xhr.response);
                success(this.json);
            }
        }.bind(this)
    }.bind(this))
}

Waterfull.prototype.ifRender = function(){
    var children = this.ul.children;
    if(this.rendering){return 0}

    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var clientHeight = document.documentElement.clientHeight;
    var lastChildren = children[children.length - 1];

    var lastTop = children[children.length-1].offsetTop;
    if(clientHeight + scrollTop > lastTop){
       this.rendering = true;
       this.page_num++;
       this.renderPage();
    }
}

Waterfull.prototype.renderPage = function(){
    var html = '';
    var list = this.json.subjects;
    for(var i = this.page_num*10; i< this.page_num*10+10; i++){
        html+= `<li>
                    <img src="${list[i].images.small}" alt="">
                    <p class="price">${list[i].title}</p>
                </li>`;
    }
    this.ul.innerHTML += html;
    this.rendering = false;
}
var waterfull = new Waterfull();
waterfull.init();

