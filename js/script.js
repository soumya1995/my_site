
function focus(ob){
	if(ob.value=="Name"){
		ob.value="";
		ob.style.color="#000";
	}
}
function blur(ob){
	if(ob.value==""){
		ob.value="DefaultValue";
		ob.style.color="#888";
	}	
}
