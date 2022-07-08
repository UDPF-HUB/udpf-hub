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



var app_mag='<div class="w3-bar-items w3-padding w3-left w3-margin w3-red " style="width:92%;"> Magazine</div>'+

'<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white ">Daily Magazine</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("ts/pdf/yojana","https://chahalacademy.com/free-downloads-yojana")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://chahalacademy.com/assets/current/yojana.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> Yojana Eng. </div>'+
'<div  onclick='+' udpf_link_finder2("assets/pdf/yojana-hindi","https://chahalacademy.com/free-downloads-yojana")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://chahalacademy.com/assets/current/yojana.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> Yojana Hindi</div>'+
'<div  onclick='+' udpf_link_finder2("2022-current-aff","https://chahalacademy.com/current-affairs-magazine")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://chahalacademy.com/assets/current/current-affairs-magazine.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br>CA ENG </div>'+
'<div  onclick='+' udpf_link_finder2("2022-hindi-current","https://chahalacademy.com/current-affairs-magazine")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://chahalacademy.com/assets/current/current-affairs-magazine.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> CA Hindi</div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://www.allexamgurublog.com/2020/04/amar-ujala-udaan-career-magazine.html?m=1")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="ffh.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Udan </div>'+
'<div  onclick='+' Website2APK.openExternal("https://pdfmyurl.com/api?license=yourlicensekey&url=https://m-hindi.webdunia.com/astrology-daily-horoscope")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.jansatta.com/wp-content/uploads/2022/07/Saptahik-Rashifal-1.jpg?resize=300,462" alt="" width="100%" height="100px" loading="lazy"></br></br> Daily Rasifal</div>'+
	'</div>'+
'<!-- horizontal contdiner end -->';

var app_mag+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white" style="width:92%;"> Weakly Magazine</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("ts/pdf/yojana","https://chahalacademy.com/free-downloads-yojana")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://chahalacademy.com/assets/current/yojana.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> Yojana Eng. </div>'+
'<div  onclick='+' udpf_link_finder2("assets/pdf/yojana-hindi","https://chahalacademy.com/free-downloads-yojana")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://chahalacademy.com/assets/current/yojana.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> Yojana Hindi</div>'+
'<div  onclick='+' udpf_link_finder2("2022-current-aff","https://chahalacademy.com/current-affairs-magazine")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://chahalacademy.com/assets/current/current-affairs-magazine.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br>CA ENG </div>'+
'<div  onclick='+' udpf_link_finder2("2022-hindi-current","https://chahalacademy.com/current-affairs-magazine")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://chahalacademy.com/assets/current/current-affairs-magazine.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> CA Hindi</div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://www.allexamgurublog.com/2020/04/amar-ujala-udaan-career-magazine.html?m=1")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="ffh.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Udan </div>'+
'<div  onclick='+' Website2APK.openExternal("https://pdfmyurl.com/api?license=yourlicensekey&url=https://m-hindi.webdunia.com/astrology-daily-horoscope")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.jansatta.com/wp-content/uploads/2022/07/Saptahik-Rashifal-1.jpg?resize=300,462" alt="" width="100%" height="100px" loading="lazy"></br></br> Daily Rasifal</div>'+
	'</div>'+
'<!-- horizontal contdiner end -->';


var app_mag+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white" style="width:92%;"> Monthly Magazine</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("ts/pdf/yojana","https://chahalacademy.com/free-downloads-yojana")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://chahalacademy.com/assets/current/yojana.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> Yojana Eng. </div>'+
'<div  onclick='+' udpf_link_finder2("assets/pdf/yojana-hindi","https://chahalacademy.com/free-downloads-yojana")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://chahalacademy.com/assets/current/yojana.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> Yojana Hindi</div>'+
'<div  onclick='+' udpf_link_finder2("2022-current-aff","https://chahalacademy.com/current-affairs-magazine")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://chahalacademy.com/assets/current/current-affairs-magazine.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br>CA ENG </div>'+
'<div  onclick='+' udpf_link_finder2("2022-hindi-current","https://chahalacademy.com/current-affairs-magazine")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://chahalacademy.com/assets/current/current-affairs-magazine.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> CA Hindi</div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://www.allexamgurublog.com/2020/04/amar-ujala-udaan-career-magazine.html?m=1")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="ffh.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Udan </div>'+
'<div  onclick='+' Website2APK.openExternal("https://pdfmyurl.com/api?license=yourlicensekey&url=https://m-hindi.webdunia.com/astrology-daily-horoscope")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.jansatta.com/wp-content/uploads/2022/07/Saptahik-Rashifal-1.jpg?resize=300,462" alt="" width="100%" height="100px" loading="lazy"></br></br> Daily Rasifal</div>'+
	'</div>'+
'<!-- horizontal contdiner end -->';
