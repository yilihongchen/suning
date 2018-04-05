//导航效果
$(".nav_xleft_item1").mouseenter(function () {
    $(".head_dh").show();
})
$(".nav_xleft_item1").mouseleave(function () {
    $(".head_dh").hide();
})

$(".nav_xleft_item2").mouseenter(function () {
    $(".shangjia_hidden").show();
})
$(".nav_xleft_item2").mouseleave(function () {
    $(".shangjia_hidden").hide();
})
$(".nav_xleft_item3").mouseenter(function () {
    $(".kehu_hidden").show();
})
$(".nav_xleft_item3").mouseleave(function () {
    $(".kehu_hidden").hide();
})
$(".nav_xleft_item13").mouseenter(function () {
    $(".suning_hidden").show();
})
$(".nav_xleft_item13").mouseleave(function () {
    $(".suning_hidden").hide();
})

//banner图
{
	const imgs=document.querySelectorAll(".imgbox li");
	const pagers=document.querySelectorAll(".pagerbox li");
	const banner=document.querySelector(".banner");
	const next=document.querySelector(".next");
	const prev=document.querySelector(".prev");
	pagers.forEach(function(ele,index){
		ele.onmouseenter=function(){
			
			for(let i=0;i<pagers.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		 }
	});
	let n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<pagers.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			imgs[n].classList.add("active");
			pagers[n].classList.add("active");
	}
	banner.onmouseenter=function(){
		clearInterval(t)
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
	next.onclick=function(){
		move();
	};
	prev.onclick=function(){
		n-=2;
		move();
	}
}
{
	let liitems=document.querySelectorAll(".banner_nav li");
	let menus=document.querySelectorAll(".menu");
	let obj=menus[0];
	liitems.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}

	})
}
//搜索框侧导航
//totop
{
	let totop=document.querySelector(".totop");
	totop.onclick=function(){
		let st=document.documentElement.scrollTop;
		t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},6)
	}
}
{
	let topbar=document.querySelector(".topbar");
	let leftbar=document.querySelector(".leftbar");
	window.onscroll=function(){
		let st=document.documentElement.scrollTop;
		console.log(st);
		if(st>900){
			topbar.style.display="block";
		}else{
			topbar.style.display="none";
		}
		if(st>2600&&st<8500){
			leftbar.style.display="block";
		}else{
			leftbar.style.display="none";
		}
	}
}

{

    let tips=document.querySelectorAll(".tips");
		let containers=document.querySelectorAll(".container");
		let flag=true;
		tips.forEach(function(ele,index){
			ele.onclick=function(){
				flag=false;
				let ot=containers[index].offsetTop-30;
				let now=document.documentElement.scrollTop;
				let time=0;
				let speed=(ot-now)/8;
				let t=setInterval(function(){
					time+=25;
					now+=speed;
					if(time===200){
						clearInterval(t);
						flag=true;
					}
					document.documentElement.scrollTop=now;
				},25)
			}
		});


    window.addEventListener("scroll",function(){
			if(flag){
			let st=document.documentElement.scrollTop;
			for(let i=0;i<containers.length;i++){
				if(st>=containers[i].offsetTop-50){
					for(let i=0;i<tips.length;i++){
						tips[i].classList.remove("active");
					}
					tips[i].classList.add("active");
				}
			}
		}
		})

}
//显示和隐藏左侧导航
let banner_nav=document.querySelector(".banner_nav1");
let fenlei_left=document.querySelector(".fenlei_left1");
fenlei_left.onmouseenter=function(){
	banner_nav.style.display="block";
	
}
fenlei_left.onmouseleave=function(){
	banner_nav.style.display="none";
	
}
//rightbar
$(".zhichan").mouseenter(function(){
    $(".zhichanwenzi").show();

})
$(".zhichan").mouseleave(function(){
    $(".zhichanwenzi").hide();
})
$(".soucang").mouseenter(function(){
    $(".soucangwenzi").show();
})
$(".soucang").mouseleave(function(){
    $(".soucangwenzi").hide();
})
$(".look").mouseenter(function(){
    $(".lookwenzi").show();
})
$(".look").mouseleave(function(){
    $(".lookwenzi").hide();
})
$(".chongzhi").mouseenter(function(){
    $(".chongzhiwenzi").show();
})
$(".chongzhi").mouseleave(function(){
    $(".chongzhiwenzi").hide();
})
$(".fankui").mouseenter(function(){
    $(".fankuiwenzi").show();
})
$(".fankui").mouseleave(function(){
    $(".fankuiwenzi").hide();
})
$(".zixun").mouseenter(function(){
    $(".zixunwenzi").show();
})
$(".zixun").mouseleave(function(){
    $(".zixunwenzi").hide();
})
$(".saoma").mouseenter(function(){
    $(".saomawenzi").show();
})
$(".saoma").mouseleave(function(){
    $(".saomawenzi").hide();
})
$(".f_top").mouseenter(function(){
    $(".topwenzi").show();
})
$(".f_top").mouseleave(function(){
    $(".topwenzi").hide();
})

//排行榜效果
{

        let prev=document.querySelector(".phlbtn");
        let next=document.querySelector(".phrbtn");
        let inner=document.querySelector(".inner");
        let circles=document.querySelectorAll(".pacicrle");
        let content=document.querySelectorAll(".phb_bottom_box");
        let n=0;
        next.onclick=function(){
            n++;
            if(n===content.length){
                n=content.length-1;
            }
            inner.style.marginLeft=n*-369+"px";
            circles[n].classList.add("active");
            circles[n-1].classList.remove("active");

        };
        prev.onclick=function(){
            n--;
            if(n<0){
                n=0;
            }
            inner.style.marginLeft=n*-369+"px";
            circles[n].classList.add("active");
            circles[n+1].classList.remove("active");
            obj=circles[n];

        };
        let obj=circles[0];
        circles.forEach(function(ele,index){
            ele.onclick=function(){
                obj.classList.remove("active");
                ele.classList.add("active");
                obj=ele;
                inner.style.marginLeft=index*-369+"px";
                n=index;
            }

        })
		// inner.addEventListener("transitionend",function(){
		// 	flag=true;
		// 	if(n===4){
		// 		inner.style.transition="none";
		// 		inner.style.marginLeft="-1000px";
		// 		n=1;
		// 	}
		// 	if(n===0){
		// 		inner.style.transition="none";
		// 		inner.style.marginLeft="-3000px";
		// 		n=3;
		// 	}
		// })



}
//大聚惠轮播
{
	const prev=document.querySelector(".ldabtn");
	const next=document.querySelector(".rdabtn");
	const inner=document.querySelector(".buy_inner");
	const dbi=document.querySelector(".disc_bottom_item");
	let n=1;
	let flag=true;
	next.onclick=function(){
		if(flag){
		flag=false;
		n++;
		inner.style.transition="all 1s"
		inner.style.marginLeft=-1000*n+"px";
		}
	}
	prev.onclick=function(){
		if(flag){
		flag=false;
		n--;
		inner.style.transition="all 1s";
		inner.style.marginLeft=-1000*n+"px";
		}
	}
	inner.addEventListener("transitionend",function(){
		flag=true;
		if(n===4){
			inner.style.transition="none";
			inner.style.marginLeft="-1000px";
			n=1;
		}
		if(n===0){
			inner.style.transition="none";
			inner.style.marginLeft="-3000px";
			n=3;
		}
	})

}
//视频轮播
{
	const prev=document.querySelector(".lsbtn");
	const next=document.querySelector(".rsbtn");
	const inner=document.querySelector(".shipin_inner");
	const dbi=document.querySelector(".xshipin_opcity");
	let n=1;
	let flag=true;
	next.onclick=function(){
		if(flag){
		flag=false;
		n++;
		inner.style.transition="all 1s"
		inner.style.marginLeft=-390*n+"px";
		}
	}
	prev.onclick=function(){
		if(flag){
		flag=false;
		n--;
		inner.style.transition="all 1s";
		inner.style.marginLeft=-390*n+"px";
		}
	}
	inner.addEventListener("transitionend",function(){
		flag=true;
		if(n===3){
			inner.style.transition="none";
			inner.style.marginLeft="-390px";
			n=1;
		}
		if(n===0){
			inner.style.transition="none";
			inner.style.marginLeft="-780px";
			n=2;
		}
	})

}
//乐拼购轮播
{
	const prev=document.querySelector(".six_prev");
	const next=document.querySelector(".six_next");
	const inner=document.querySelector(".six_inner");
	let n=1;
	let flag=true;
	next.onclick=function(){
		if(flag){
		flag=false;
		n++;
		inner.style.transition="all 1s"
		inner.style.marginLeft=-530*n+"px";
		}
	}
	prev.onclick=function(){
		if(flag){
		flag=false;
		n--;
		inner.style.transition="all 1s";
		inner.style.marginLeft=-530*n+"px";
		}
	}
	inner.addEventListener("transitionend",function(){
		flag=true;
		if(n===4){
			inner.style.transition="none";
			inner.style.marginLeft="-530px";
			n=1;
		}
		if(n===0){
			inner.style.transition="none";
			inner.style.marginLeft="-1590px";
			n=3;
		}
	})
}