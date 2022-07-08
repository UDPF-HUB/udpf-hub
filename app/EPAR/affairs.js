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
 var app_affairs='<div class="w3-bar-items w3-padding w3-left w3-margin w3-red " style="width:92%;">Updated Daily</div>'+

'<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Weakly Current Affrairs</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://sscstudy.com/weekly-current-affairs-pdf-download/?amp")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="http" alt="" width="100%" height="100px" loading="lazy"></br></br> English</div>'+
	'</div>'+
'<!-- horizontal contdiner end -->';

app_affairs+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white ">Monthly Current Affairs</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://sscstudy.com/current-affairs-2022-pdf-download/?amp",1)'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://gknow.in/wp-content/uploads/2022/07/english-june-791x1024.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> हिन्दी</div>'+
	'</div>'+
'<!-- horizontal contdiner end -->';