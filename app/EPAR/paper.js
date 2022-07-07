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



var app_paper='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white ">  NewsPaper</div>'+

'<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> English NewsPaper</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/times-of-india-epaper-pdf-download-2022/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">TOI</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/economic-times-newspaper-today/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Economics Times</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/financial-express-newspaper/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Financial Express</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/deccan-chronicle-epaper/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Deccam Chro..</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/the-asian-age-epaper/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">The Asia Age</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/statesman-newspaper-today/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Statesman</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/the-tribune-epaper/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">The Tribune</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/telegraph-newspaper/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Telegram</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/pioneer-epaper/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Pionner</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/the-free-press-journal-epaper-download/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy">The Free Press....<p style=" overflow-wrap: break-word; " class="w3-center ">The Free Press jonural</p></div>'+

	'</div>'+
'<!-- horizontal contdiner end -->';

app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Hindi NewsPaper</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/dainik-jagran-newspaper-download-2022/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">danik Jagaran</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/jansatta-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Jansatta</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/amar-ujala-news-paper-today/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Amar Ujala</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/rajasthan-patrika-epaper/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Raj Patrika</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/prabhat-khabar-epaper/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Peabhat Khabar</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/dainik-bhaskar-epaper/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">danik Bhaskar</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/navbharat-times-epaper/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center "> NabBharat Times</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/punjab-kesari-epaper/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Punjab Keshari</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/rashtriya-sahara-epaper/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Rashtriya Sahara</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/loksatta-newspaper-download/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">loksatta</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/hari-bhoomi-epaper/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Hari Bhommi</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/dainik-navajyoti-epaper/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Danik Navajyoti</p></div>'+

	'</div>'+
'<!-- horizontal contdiner end -->';
app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Bangali NewsPaper</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/bartaman-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Bartaman</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/anandabazar-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">AnanadBazar</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/aajkaal-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Aajkaal</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/ekdin-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Ekdin</p></div>'+
	'</div>'+
'<!-- horizontal contdiner end -->';
app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Gujarati NewsPaper</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/gujarat-samachar-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Gujrat Samachar</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/mid-day-gujrati-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Mid Day Guj</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/sandesh-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Sandesh</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/divya-bhaskar-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Divya</p></div>'+

	'</div>'+
'<!-- horizontal contdiner end -->';
app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Kannada NewsPaper</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/vijay-karnataka-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Vijay Karnataka</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/prajavani-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Prajavani</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/kannada-prabha-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Kannada Prabha</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/udayavani-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Udavavani</p></div>'+
	'</div>'+
'<!-- horizontal contdiner end -->';
app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Malayalam NewsPaper</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/malayala-manorama-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Malayala Manorama</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/deepika-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Deepika</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/mathrubhumi-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">mathrubhmi</p></div>'+

	'</div>'+
'<!-- horizontal contdiner end -->';
app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Marthi NewsPaper</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/tarun-bharat-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Tarun Bharat</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/divya-marathi-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Divva marathi</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/pudhari-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Pudhari</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/maharashtra-times-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">maharathra Times</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/sakal-newspaper-today-in-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Sakal</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/saamna-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Samma</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/lokmat-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Lokmat</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/loksatta-newspaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Loksatta</p></div>'+
'</div>'+
'<!-- horizontal contdiner end -->';
app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> OdiyaNewsPaper</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/samaja-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Samaja</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/sambad-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Sambad</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/dharitri-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Dharitri</p></div>'+

	'</div>'+
'<!-- horizontal contdiner end -->';
app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Punjabi NewsPaper</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/jagbani-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Jagbani</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/ajit-punjabi-epaper-pdf-free-download/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Ajit Punjabi</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/punjabi-tribune-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Punjab Tribune</p></div>'+
	'</div>'+
'<!-- horizontal contdiner end -->';
app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Tamil NewsPaper</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/dinamani-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">dinamani</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/dinakaran-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Dinakran</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/dinamalar-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Dinamalar</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/daily-thanthi-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Daily Thanthi</p></div>'+
	'</div>'+
'<!-- horizontal contdiner end -->';
app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> telgu NewsPaper</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/andhra-bhoomi-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Andhra Bhomi</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/vaartha-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Vaartha</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/andhra-prabha-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Andhra Prabha</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/andhra-jyothi-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Andhra Jyoti</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/eenadu-epaper-pdf-download-2020/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Eenadu</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/nava-telangana-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Nava Teangana</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/sakshi-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Sakshi</p></div>'+
	'</div>'+
'<!-- horizontal contdiner end -->';

app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white ">Urdu NewsPaper</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/inquilab-epaper/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Inquilab</p></div>'+
'<div  onclick='+' udpf_link_finder2("vk.com/doc","https://dailyepaper.in/siasat-daily-epaper/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"><img src="https://instaoffline.net/assets/img/folder.png" alt="" width="100%" height="100px" loading="lazy"><p style=" overflow-wrap: break-word; " class="w3-center ">Siasat</p></div>'+
	'</div>'+
'<!-- horizontal contdiner end -->';
