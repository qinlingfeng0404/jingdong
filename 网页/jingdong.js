function text(){
	document.getElementById('yetou').style.display='none';
}
function text_01(num){
	for(i=1;i<=2;i++){
		var b2uli='b2ul'+i;
		document.getElementById(b2uli).style.display='none';
	}
	var val=3+(48*(num-1))+"px";
	var b2ulnum='b2ul'+num;
	document.getElementById('yz_01').style.left=val;
	document.getElementById(b2ulnum).style.display='block';
	}
function text_tu(num,over){
	for(i=1;i<=8;i++){
		var tu1_tui='tu1_tu0'+i;
		var pi='p'+i;
		document.getElementById(tu1_tui).style.display='none';
		document.getElementById(pi).className='';
	}
	var tu1_tunum='tu1_tu0'+num;
	var pnum='p'+num;
	document.getElementById(pnum).className='tu1_p1';
	document.getElementById(tu1_tunum).style.display='block';
	num++;
	if(num>=9){
		num=1;
	}
	if(over===1){
		return false;
	}
	time=setTimeout('text_tu('+num+')',2000);
}
text_tu(1);
function text_tu_stop(num){
	text_tu(num, 1);
    clearTimeout(time);
}
function text_tu_start(num) {
    time = setTimeout(function() {
    	text_tu(num);
    }, 2000);
}
function text_02(num){
	for(i=1;i<=5;i++){
		var  yz43ul2i='yz43ul2'+i;
		document.getElementById(yz43ul2i).style.display='none';
	}
	var val=18+(74*(num-1))+"px";
	var yz43ul2num='yz43ul2'+num;
	document.getElementById('yz43div').style.left=val;
	document.getElementById(yz43ul2num).style.display='block';
}
function text_03(num,over){
	for(i=1;i<=5;i++){
		var d2_pi='d2_p'+i;
		var d2_02i='d2_02'+i;
		document.getElementById(d2_pi).className='';
		document.getElementById(d2_02i).style.display='none';
	}
	var d2_pnum='d2_p'+num;
	var d2_02num='d2_02'+num;
	document.getElementById(d2_pnum).className='d2_05p';
	document.getElementById(d2_02num).style.display='block';
	num++;
	if(num>=6){
		num=1;
	}
	if(over===1){
		return false;
	}
	me=setTimeout('text_03('+num+')',2000);
}
text_03(1);
function text_03_stop(num){
	text_03(num, 1);
    clearTimeout(me);
}
function text_03_start(num) {
    me = setTimeout(function() {
    	text_03(num);
    }, 2000);
}
function djs(){
	var xs=new Date();
	var gds=new Date('2017-03-31 19:30:00');
	x=xs.getTime();
	g=gds.getTime();
	y=g-x;
	var d=0;
	var h=0;
	var m=0;
	var s=0;
		d=Math.floor(y/1000/60/60/24);
		h=Math.floor(y/1000/60/60%24);
		m=Math.floor(y/1000/60%60);
		s=Math.floor(y/1000%60);
		if(h<=9){
			h='0'+h;
		}else{
			h;
		}
		if(m<=9){
			m='0'+m;
		}else{
			m;
		}
		if(s<=9){
			s='0'+s;
		}else{
			s;
		}
	document.getElementById('yz31_01d1').innerHTML=h;
	document.getElementById('yz31_01d2').innerHTML=m;
	document.getElementById('yz31_01d3').innerHTML=s;
	sj=setTimeout('djs()',1000);
	if(xs >= gds){
		clearTimeout(sj);
		document.getElementById('yz31_01d1').innerHTML='00';
		document.getElementById('yz31_01d2').innerHTML='00';
		document.getElementById('yz31_01d3').innerHTML='00';
	}
}
djs();
function text_04(num){
	document.getElementById('b3_01').style.display='none';
	document.getElementById('b3_02').style.display='block';
	document.getElementById('b3_x').style.display='block';
	for(i=1;i<=4;i++){
		var b3_ullii='b3_ulli'+i;
		var b3_ai='b3_a'+i;
		var b3_02i='b3_02'+i;
		document.getElementById(b3_ullii).className='';
		document.getElementById(b3_ai).className='';
		document.getElementById(b3_02i).style.display='none';
	}
	var b3_ullinum='b3_ulli'+num;
	var b3_anum='b3_a'+num;
	var b3_02num='b3_02'+num;
	document.getElementById(b3_ullinum).className='b3_ulli1';
	document.getElementById(b3_anum).className='b3_a1';
	document.getElementById(b3_02num).style.display='block';
}
function text_05(num){
	for(i=1;i<=4;i++){
		var b3_ullii='b3_ulli'+i;
		var b3_ai='b3_a'+i;
		var b3_02i='b3_02'+i;
		document.getElementById(b3_ullii).className='';
		document.getElementById(b3_ai).className='';
		document.getElementById(b3_02i).style.display='none';
	}
	var b3_ullinum='b3_ulli'+num;
	var b3_anum='b3_a'+num;
	var b3_02num='b3_02'+num;
	document.getElementById(b3_ullinum).className='b3_ulli1';
	document.getElementById(b3_anum).className='b3_a1';
	document.getElementById(b3_02num).style.display='block';
}
function text_06(){
	document.getElementById('b3_02').style.display='none';
	document.getElementById('b3_01').style.display='block';
	document.getElementById('b3_x').style.display='none';
}
function text_07(num){
	for(i=1;i<=3;i++){
		var b3_021pi='b3_021p'+i;
		var b3_021ai='b3_021a'+i;
		var b3_021ii='b3_021i'+i;
		var b3_021di='b3_021d'+i;
		document.getElementById(b3_021pi).className='';
		document.getElementById(b3_021ai).className='';
		document.getElementById(b3_021ii).className='';
		document.getElementById(b3_021ii).style.display='none';
		document.getElementById(b3_021di).style.display='none';
	}
	var b3_021pnum='b3_021p'+num;
	var b3_021anum='b3_021a'+num;
	var b3_021inum='b3_021i'+num;
	var b3_021dnum='b3_021d'+num;
	document.getElementById(b3_021pnum).className='b3_021p';
	document.getElementById(b3_021anum).className='b3_021a';
	document.getElementById(b3_021inum).className='iconfont b3_021i1';
	document.getElementById(b3_021inum).style.display='block';
	document.getElementById(b3_021dnum).style.display='block';
}
function text_08(num){
	for(i=1;i<=8;i++){
		var b3_spani='b3_span'+i;
		document.getElementById(b3_spani).style.display='none';
	}
	var b3_spannum='b3_span'+num;
	document.getElementById(b3_spannum).style.display='block';
}
function text_09(num){
	for(i=1;i<=5;i++){
		var b3_span2i='b3_span2'+i;
		document.getElementById(b3_span2i).style.display='none';
	}
	var b3_span2num='b3_span2'+num;
	document.getElementById(b3_span2num).style.display='block';
}
function text_10(num){
	for(i=1;i<=3;i++){
		var b3_022pi='b3_022p'+i;
		var b3_022ai='b3_022a'+i;
		var b3_022ii='b3_022i'+i;
		var b3_022di='b3_022d'+i;
		document.getElementById(b3_022pi).className='';
		document.getElementById(b3_022ai).className='';
		document.getElementById(b3_022ii).className='';
		document.getElementById(b3_022ii).style.display='none';
		document.getElementById(b3_022di).style.display='none';
	}
	var b3_022pnum='b3_022p'+num;
	var b3_022anum='b3_022a'+num;
	var b3_022inum='b3_022i'+num;
	var b3_022dnum='b3_022d'+num;
	document.getElementById(b3_022pnum).className='b3_022p';
	document.getElementById(b3_022anum).className='b3_022a';
	document.getElementById(b3_022inum).className='iconfont b3_022i1';
	document.getElementById(b3_022inum).style.display='block';
	document.getElementById(b3_022dnum).style.display='block';
}
function text_b3(num){
	for(i=1;i<=2;i++){
		var b3_023pi='b3_023p'+i;
		var b3_023ai='b3_023a'+i;
		var b3_023ii='b3_023i'+i;
		var b3_023di='b3_023d'+i;
		document.getElementById(b3_023pi).className='';
		document.getElementById(b3_023ai).className='';
		document.getElementById(b3_023ii).className='';
		document.getElementById(b3_023ii).style.display='none';
		document.getElementById(b3_023di).style.display='none';
	}
	var b3_023pnum='b3_023p'+num;
	var b3_023anum='b3_023a'+num;
	var b3_023inum='b3_023i'+num;
	var b3_023dnum='b3_023d'+num;
	document.getElementById(b3_023pnum).className='b3_023p';
	document.getElementById(b3_023anum).className='b3_023a';
	document.getElementById(b3_023inum).className='iconfont b3_023i1';
	document.getElementById(b3_023inum).style.display='block';
	document.getElementById(b3_023dnum).style.display='block';
}
function text_b4(num){
	for(i=1;i<=3;i++){
		var b3_024pi='b3_024p'+i;
		var b3_024ai='b3_024a'+i;
		var b3_024ii='b3_024i'+i;
		var b3_024di='b3_024d'+i;
		document.getElementById(b3_024pi).className='';
		document.getElementById(b3_024ai).className='';
		document.getElementById(b3_024ii).className='';
		document.getElementById(b3_024ii).style.display='none';
		document.getElementById(b3_024di).style.display='none';
	}
	var b3_024pnum='b3_024p'+num;
	var b3_024anum='b3_024a'+num;
	var b3_024inum='b3_024i'+num;
	var b3_024dnum='b3_024d'+num;
	document.getElementById(b3_024pnum).className='b3_024p';
	document.getElementById(b3_024anum).className='b3_024a';
	document.getElementById(b3_024inum).className='iconfont b3_024i1';
	document.getElementById(b3_024inum).style.display='block';
	document.getElementById(b3_024dnum).style.display='block';
}
function text_11(num){
	for(i=1;i<=8;i++){
		var b3_spani='b3_span1'+i;
		document.getElementById(b3_spani).style.display='none';
	}
	var b3_spannum='b3_span1'+num;
	document.getElementById(b3_spannum).style.display='block';
}
function text_12(num){
	for(i=1;i<=8;i++){
		var b3_spani='b3_span2'+i;
		document.getElementById(b3_spani).style.display='none';
	}
	var b3_spannum='b3_span2'+num;
	document.getElementById(b3_spannum).style.display='block';
}
function text_xkai(){
	document.getElementById('d1_sr').value='ÇëÊäÈëÊÖ»úºÅ';
}

$(document).scroll(function(){
 a=$(document).scrollTop();
 if(a>=730){
	document.getElementById("yzdw").style.display="block";
 }else{
	document.getElementById("yzdw").style.display="none"; 
 }
 if(a>=1750){
	document.getElementById('ywdw').style.display='block';
 }else{
	document.getElementById('ywdw').style.display='none'; 
 }
 if(a>=1750&&a<2500){
	 document.getElementById('dwulli1').className='dwultouli';
 }else{
	 document.getElementById('dwulli1').className='';
 }
 if(a>=2500&&a<3050){
	 document.getElementById('dwulli2').className='dwultouli';
 }else{
	 document.getElementById('dwulli2').className='';
 }
 if(a>=3050&&a<3650){
	 document.getElementById('dwulli3').className='dwultouli';
 }else{
	 document.getElementById('dwulli3').className='';
 }
 if(a>=3650&&a<4200){
	 document.getElementById('dwulli4').className='dwultouli';
 }else{
	 document.getElementById('dwulli4').className='';
 }
 if(a>=4200&&a<4850){
	 document.getElementById('dwulli5').className='dwultouli';
 }else{
	 document.getElementById('dwulli5').className='';
 }
 if(a>=4850&&a<5450){
	 document.getElementById('dwulli6').className='dwultouli';
 }else{
	 document.getElementById('dwulli6').className='';
 }
 if(a>=5450&&a<6000){
	 document.getElementById('dwulli7').className='dwultouli';
 }else{
	 document.getElementById('dwulli7').className='';
 }
 if(a>=6000&&a<6600){
	 document.getElementById('dwulli8').className='dwultouli';
 }else{
	 document.getElementById('dwulli8').className='';
 }
 if(a>=6600&&a<7450){
	 document.getElementById('dwulli9').className='dwultouli';
 }else{
	 document.getElementById('dwulli9').className='';
 }
 if(a>=7450){
	 document.getElementById('dwulli10').className='dwultouli';
 }else{
	 document.getElementById('dwulli10').className='';
 }
});
