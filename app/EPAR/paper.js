// Image link On error
$('#app-main').on('DOMSubtreeModified', function(entries) {
	//    for(var i=0; i<$("img").length;i++){
	      //  $("img")[i].setAttribute("loading","lazy");
	// }
	$("img").error(function(){ console.log("Image Broken");this.src='https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png';});		
                        
});

function udpf_link_finder1(filter, url="https://telemetr.io/en/channels/1571630354-cricket_live_link_updates/posts" ){
var op=udpf.js_browser(proxy_url(url)).trim();	
var urlRegex = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;
var url = op.match(urlRegex);
//return url;
var __FOUND ="";
for(var i=0; i< url.length; i++) {
	var ttext=(url[i]).toString() ;
	//console.log(i+ttext)
	if( ttext.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
		__FOUND = url[i];
		break;
	}
}

//return __FOUND.replace("_lowest","").replace("_low","").replace("_medium","").replace("_high","");
document.getElementById("ext_player_url").src = __FOUND;
//Website2APK.openExternal(__FOUND);
//ext.main.plyr_init();
	
ext.main.plyr_init_mod_jionews();
 }
 
 function udpf_link_finder2(filter, url="https://telemetr.io/en/channels/1571630354-cricket_live_link_updates/posts",ind=1){
var op=udpf.js_browser(proxy_url(url)).trim();	
var urlRegex = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;
var url = op.match(urlRegex);
//return url;
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

//return __FOUND.replace("_lowest","").replace("_low","").replace("_medium","").replace("_high","");
//document.getElementById("ext_player_url").src = __FOUND;
Website2APK.openExternal(__FOUND);
//ext.main.plyr_init();
	
//ext.main.plyr_init_mod_jionews();
 }

var app_paper='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> News Paper  ( Daily Updated @ 07:00 AM)</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/telegraph-newspaper/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://yojanapdf.com/wp-content/uploads/The-Telegraph.jpg" alt="" width="100%" height="100px"><p class="w3-center ">TeleGraph</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/times-of-india-epaper-pdf-download-2022/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://yojanapdf.com/wp-content/uploads/Times-Of-India-Daily-E-Newspaper-PDF-1-1.jpg" alt="" width="100%" height="100px"><p class="w3-center ">TOI</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/economic-times-newspaper-today/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://logos-download.com/wp-content/uploads/2021/01/The_Economic_Times_Logo-700x700.png" alt="" width="100%" height="100px"><p class="w3-center ">Economics</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/the-asian-age-epaper/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="http://onlineepaper.asianage.com/images/AA-logo.png" alt="" width="100%" height="100px"><p class="w3-center ">Asia Age</p></div>'+

	'</div>'+
'<!-- horizontal contdiner end -->'

app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white ">समाचार पत्र (दैनिक अद्यतन @ 07:00 पूर्वाह्न) </div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/dainik-jagran-newspaper-download-2022/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://yojanapdf.com/wp-content/uploads/The-Telegraph.jpg" alt="" width="100%" height="100px"><p class="w3-center ">दैनिक जागरण</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/amar-ujala-news-paper-today/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://yojanapdf.com/wp-content/uploads/Times-Of-India-Daily-E-Newspaper-PDF-1-1.jpg" alt="" width="100%" height="100px"><p class="w3-center ">अमर उजाल</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/prabhat-khabar-epaper/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://logos-download.com/wp-content/uploads/2021/01/The_Economic_Times_Logo-700x700.png" alt="" width="100%" height="100px"><p class="w3-center ">प्रभात खबर</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/dainik-bhaskar-epaper/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="http://onlineepaper.asianage.com/images/AA-logo.png" alt="" width="100%" height="100px"><p class="w3-center ">दैनिक भास्कर</p></div>'+

	'</div>'+
'<!-- horizontal contdiner end -->'


app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white ">Employment News weakly (SAT- FIR)</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://www.rojgarsmachar.in/rojgar-samachar-2022/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://www.rojgarsmachar.in/wp-content/uploads/Rojgar-Samachar-2022.jpg" alt="" width="100%" height="100px"><p class="w3-center ">English</p></div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://www.rojgarsmachar.in/rojgar-samachar-2022/",2)'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://www.rojgarsmachar.in/wp-content/uploads/Rojgar-Samachar-2022.jpg" alt="" width="100%" height="100px"><p class="w3-center ">Hindi</p></div>'+


	'</div>'+
'<!-- horizontal contdiner end -->'

app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white ">Magzine</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("ts/pdf/yojana","https://chahalacademy.com/free-downloads-yojana")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://chahalacademy.com/assets/current/yojana.jpg" alt="" width="100%" height="100px"><p class="w3-center ">Yojana Mag</p></div>'+
'<div  onclick='+' udpf_link_finder2("assets/pdf/yojana-hindi","https://chahalacademy.com/free-downloads-yojana")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://chahalacademy.com/assets/current/yojana.jpg" alt="" width="100%" height="100px"><p class="w3-center ">Yojana Hindi</p></div>'+
'<div  onclick='+' udpf_link_finder2("2022-current-aff","https://chahalacademy.com/current-affairs-magazine")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://chahalacademy.com/assets/current/current-affairs-magazine.jpg" alt="" width="100%" height="100px"><p class="w3-center ">Current Affairs</p></div>'+
'<div  onclick='+' udpf_link_finder2("2022-hindi-current","https://chahalacademy.com/current-affairs-magazine")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://chahalacademy.com/assets/current/current-affairs-magazine.jpg" alt="" width="100%" height="100px"><p class="w3-center ">Current Affairs</p></div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://www.allexamgurublog.com/2020/04/amar-ujala-udaan-career-magazine.html?m=1")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="" alt="" width="100%" height="100px"><p class="w3-center ">Udan</p></div>'+
'<div  onclick='+'Website2APK.openExternal("https://pdfmyurl.com/api?license=yourlicensekey&url=https://m-hindi.webdunia.com/astrology-daily-horoscope")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://www.jansatta.com/wp-content/uploads/2022/07/Saptahik-Rashifal-1.jpg?resize=300,462" alt="" width="100%" height="100px"><p class="w3-center ">Rasifal Daily</p></div>'+
'</div>'+
'<!-- horizontal contdiner end -->'

app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white ">Current Affairs</div>'+
'<!-- horizontal contdiner items start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<!-- horizontal contdiner start--->'+
 '<div  onclick='+' udpf_link_finder2("file/d/","https://sscstudy.com/weekly-current-affairs-pdf-download/?amp")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://sscstudy.com/wp-content/uploads/2020/08/download-pdf-button-300x88.png" alt="" width="100%" height="100px"><p class="w3-center ">Weakly</p></div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://sscstudy.com/current-affairs-2022-pdf-download/?amp")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://gknow.in/wp-content/uploads/2022/07/english-june-791x1024.jpg" alt="" width="100%" height="100px"><p class="w3-center ">Monthly</p></div>'+

	'</div>'+
'<!-- horizontal contdiner end -->';
