function text_01(num){
	for(i=1;i<=2;i++){
		var pi='p'+i;
		var yzz_0i='yzz_0'+i;
		document.getElementById(pi).className='';
		document.getElementById(yzz_0i).style.display='none';
	}
	var pnum='p'+num;
	var yzz_0num='yzz_0'+num;
	document.getElementById(pnum).className='p1';
	document.getElementById(yzz_0num).style.display="block";
}
function text_02(){
	var val=82-74+"px";
	document.getElementById('zz_01tu1').style.left=val;
	document.getElementById('zz_01tu2').style.display='block';
}
function text_03(){
	var val=8+74+"px";
	document.getElementById('zz_01tu1').style.left=val;
	document.getElementById('zz_01tu2').style.display='none';
}