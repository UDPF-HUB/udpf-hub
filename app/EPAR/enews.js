// Image link On error
$('#app-main').on('DOMSubtreeModified', function(entries) {
	//    for(var i=0; i<$("img").length;i++){
	      //  $("img")[i].setAttribute("loading","lazy");
	// }
	$("img").error(function(){ console.log("Image Broken");this.src='https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png';});		
                        
});

function udpf_link_finder2(filter, url="url",ind=1){
var op=udpf.js_browser(proxy_url(url)).trim();	
var urlRegex = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;
var url = op.match(urlRegex);

//Link Search
var __FOUND ="";
for(var i=0,y=1; i< url.length; i++) {
	var ttext=(url[i]).toString() ;
	//console.log(i+ttext)
	if( ttext.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
		__FOUND = url[i]; 
		if(ind==y)
		break;
		y++;
	}
}

Website2APK.openExternal(__FOUND);
 }



var app_enews='<div class="w3-bar-items w3-padding w3-left w3-margin w3-red " style="width:92%;">  Employment Newspaper (SAT - FIR, Weakly update on every Saturday)</div>'+

'<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Employment News  English</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://www.rojgarsmachar.in/rojgar-samachar-2022/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="ffh.png" alt="" width="100%" height="100px" loading="lazy"></br></br> English</div>'+
	'</div>'+
'<!-- horizontal contdiner end -->';

app_enews+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Employment News  Hindi</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://www.rojgarsmachar.in/rojgar-samachar-2022/",2)'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="ffh.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Hindi </div>'+
	'</div>'+
'<!-- horizontal contdiner end -->';

