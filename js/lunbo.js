
		window.onload=function(){
			var img=document.getElementsByTagName('img')
			var list=document.getElementsByTagName('li')
			
			var c=0;
			function hanshu(){
				c++;
				if(c==6){
					c=0;
				};
				for(var i=0;i<6;i++){
					list[i].style.background='gray'
					img[i].style.display='none'
				}
				list[c].style.background='red'
				img[c].style.display='block'
				
			}
			timer=setInterval(function(){
				hanshu()
			},1000)
			
			for(var i=0;i<6;i++){
				list[i].xuhao=i;//list[i]是代表每个li元素，是对象，所以for循环瞬间完成，但是每个对象中存储了属性序号，值为对应的i，存储属性值和for循环是同步进行的，事件不是
				list[i].onmouseover=function(){
					
					clearInterval(timer)
					c=this.xuhao;
					
					for(var i=0;i<6;i++){
					list[i].style.background='gray'
					img[i].style.display='none'
					}
				list[c].style.background='red'
				img[c].style.display='block'
				}
				
				list[i].onmouseout=function(){
					timer=setInterval(function(){
						hanshu()
					},1000)
				}
			}
		}
	