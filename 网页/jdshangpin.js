function text_01(num){
	for(i=1;i<=35;i++){
		var dzullii='dzulli'+i;
		document.getElementById(dzullii).className='';
	}
	var dzullinum='dzulli'+num;
	document.getElementById(dzullinum).className='dzulli1';
}
function text_02(num){
		var ytulli0num='ytulli0'+num;
		var ytullidnum='ytullid'+num;
		document.getElementById(ytulli0num).style.backgroundColor='#FFF';
		document.getElementById(ytulli0num).style.borderLeftColor='#CCC';
		document.getElementById(ytulli0num).style.borderRightColor='#CCC';
		document.getElementById(ytullidnum).style.display='block';
}
function text_03(num){
		var ytulli0num='ytulli0'+num;
		var ytullidnum='ytullid'+num;
		document.getElementById(ytulli0num).style.backgroundColor='#F1F1F1';
		document.getElementById(ytulli0num).style.borderLeftColor='#F1F1F1';
		document.getElementById(ytulli0num).style.borderRightColor='#F1F1F1';
		document.getElementById(ytullidnum).style.display='none';
}
function text_04(){
	document.getElementById('zytd2d1_div').style.borderColor='#FFF';
	document.getElementById('zytd2d1_div').style.boxShadow='0px 0px 4px #A6A6A6';
	document.getElementById('zytd2d1_div2').style.display='block';
}
function text_05(){
	document.getElementById('zytd2d1_div').style.borderColor='#CCC';
	document.getElementById('zytd2d1_div').style.boxShadow='';
	document.getElementById('zytd2d1_div2').style.display='none';
}
function text_06(num){
	for(i=1;i<=15;i++){
		var zytwei_d1_divlii='zytwei_d1_divli'+i;
		var zytwei_d1_divai='zytwei_d1_diva'+i;
		var zytwei_d1_divli_di='zytwei_d1_divli_d'+i;
		document.getElementById(zytwei_d1_divlii).style.backgroundColor='';
		document.getElementById(zytwei_d1_divai).style.color='';
		document.getElementById(zytwei_d1_divli_di).style.display='none';
	}
	var zytwei_d1_divlinum='zytwei_d1_divli'+num;
	var zytwei_d1_divanum='zytwei_d1_diva'+num;
	var zytwei_d1_divli_dnum='zytwei_d1_divli_d'+num;
	document.getElementById(zytwei_d1_divlinum).style.backgroundColor='#F2F2F2';
	document.getElementById(zytwei_d1_divanum).style.color='#B1191A';
	document.getElementById(zytwei_d1_divli_dnum).style.display='block';
}
function text_07(num){
	for(i=1;i<=5;i++){
		var yz1zuoullii='yz1zuoulli'+i;
		var yz1zuo_di='yz1zuo_d'+i;
		document.getElementById(yz1zuoullii).className='';
		document.getElementById(yz1zuo_di).style.display='none';
	}
	var yz1zuoullinum='yz1zuoulli'+num;
	var yz1zuo_dnum='yz1zuo_d'+num;
	document.getElementById(yz1zuoullinum).className='yz1zuoulli';
	document.getElementById(yz1zuo_dnum).style.display='block';
}
function text_08(num){
	var yz1you_d2_d1_dnum='yz1you_d2_d1_d'+num;
	document.getElementById(yz1you_d2_d1_dnum).style.display='block';
}
function text_09(num){
	var yz1you_d2_d1_dnum='yz1you_d2_d1_d'+num;
	document.getElementById(yz1you_d2_d1_dnum).style.display='none';
}
function text_10(){
	var obj=document.getElementById('d2_d2_div1_d3');
	if(obj.style.display=='none'){
		obj.style.display='block';
		document.getElementById('d2_d2_div1_d1i').style.transform='rotate(0deg)';
	}else{
		obj.style.display='none';
		document.getElementById('d2_d2_div1_d1i').style.transform='rotate(180deg)';
	}
}
function text_11(num){
	for(i=1;i<=3;i++){
		var d2_d2_div1_d3p_di='d2_d2_div1_d3p_d'+i;
		var d2_d2_div1_d3pi='d2_d2_div1_d3p'+i;
		document.getElementById(d2_d2_div1_d3p_di).style.display='none';
		document.getElementById(d2_d2_div1_d3pi).className='';
	}
	var d2_d2_div1_d3p_dnum='d2_d2_div1_d3p_d'+num;
	var d2_d2_div1_d3pnum='d2_d2_div1_d3p'+num;
	document.getElementById(d2_d2_div1_d3p_dnum).style.display='block';
	document.getElementById(d2_d2_div1_d3pnum).className='d2_d2_div1_d3p';
}
function text_12(num){
	for(i=1;i<=6;i++){
		var yz2ytullii='yz2ytulli'+i;
		var yz2yzi='yz2yz'+i;
		document.getElementById(yz2ytullii).className='';
		document.getElementById(yz2yzi).style.display='none';
	}
	var yz2ytullinum='yz2ytulli'+num;
	var yz2yznum='yz2yz'+num;
	document.getElementById(yz2ytullinum).className='yz2ytulli';
	document.getElementById(yz2yznum).style.display='block';
}
function text_13(num){
	for(i=1;i<=3;i++){
		var yz3_zuo_d4ul1lii='yz3_zuo_d4ul1li'+i;
		var yz3_zuo_d4uli='yz3_zuo_d4ul'+i;
		document.getElementById(yz3_zuo_d4ul1lii).className='';
		document.getElementById(yz3_zuo_d4uli).style.display='none';
	}
	var yz3_zuo_d4ul1linum='yz3_zuo_d4ul1li'+num;
	var yz3_zuo_d4ulnum='yz3_zuo_d4ul'+num;
	document.getElementById(yz3_zuo_d4ul1linum).className='yz3_zuo_d4ul1li';
	document.getElementById(yz3_zuo_d4ulnum).style.display='block';
}
function text_14(){
	document.getElementById("zytding").style.display="none";
}
$(document).scroll(function(){
 a=$(document).scrollTop();
 if(a>=1280){
	document.getElementById("zytding").style.display="block";
 }else{
	document.getElementById("zytding").style.display="none"; 
 }
});