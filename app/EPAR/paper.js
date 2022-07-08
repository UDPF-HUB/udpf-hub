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



var app_paper='<div class="w3-bar-items w3-padding w3-left w3-margin w3-red " style="width:92%;">  NewsPaper(s) ( Updated @ 6:30 AM)</div>'+

'<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> English NewsPaper </div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/times-of-india-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> TOI  </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/business-line-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Business Line </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/economic-times-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Economic Times </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/hindustan-times-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Hindustan Times </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/hans-india-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Hans India </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/the-telegraph-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Telegraph </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/business-standard-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Business Standard </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/mint-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Mint </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/telangana-today-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> TeLangana Today </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/mumbai-mirror-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Mumbai Mirror </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/the-financial-express-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> The Financial Express </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/deccan-chronicle-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Decan Chronical </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/the-pioneer-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> The Pioneer </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/the-statesman-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> The Statements </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/the-tribune-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> The Tribune </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/the-asian-age-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> The Asian Age </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/lokmat-times-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Lokmat Times </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/the-greater-kashmir-epaper-download-newspaper-pdf.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> The Great Kashmir </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/deccan-herald-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Deccan Herald </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/kashmir-times-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Kashmir Times </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/oheraldo-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center">Oheraldo </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/nagaland-post-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Nagaland Post </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/state-times-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> State Times </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/assam-tribune-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Assam Tribune </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/arunachal-times-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Arunachal Times </div>'+

	'</div>'+
'<!-- horizontal contdiner end -->';

app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Hindi NewsPaper</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/amar-ujala-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Amar Ujala </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/dainik-jagran-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Danik jagran </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/hindustan-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Hindustan </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/the-pioneer-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center">The Pioneer </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/prabhat-khabar-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Prabhat Khabar </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/jansatta-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Jansatta </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/navbharat-times-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Navbharat Times </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/rajasthan-patrika-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Rajsthan Patrika </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/dainik-navajyoti-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Dainik Navajyoti </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/punjab-kesari-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Punjab Keshri </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/dainik-bhaskar-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> dainik Bhaskhar </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/business-standard-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Business Standard </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/hari-bhoomi-epaperhari-bhoomi-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Hari Bhoomi </div>'+
 
	'</div>'+
'<!-- horizontal contdiner end -->';

app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Telgu NewsPaper</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/eenadu-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Eeadu </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/sakshi-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Sakshi </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/andhra-jyothi-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Andhra Jyot </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/namasthe-telangana-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Namasthe TeLangana </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/nava-telangana-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Nava Telangana </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/mana-telangana-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Mana TeLangana </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/vaartha-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Vaartha </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/surya-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> surya </div>'+

	'</div>'+
'<!-- horizontal contdiner end -->';

app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Marathi NewsPaper </div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/loksatta-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Loksatta </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/saamana-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Saamana </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/lokmat-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Lokmat </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/sakal-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Sakal </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/divya-marathi-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Divya Mar </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/maharashtra-times-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Maharashtra Times </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/tarun-bharat-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Tarun Bharat </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/pudhari-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Pushari </div>'+

	'</div>'+
'<!-- horizontal contdiner end -->';

app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Bangala  NewsPaper</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/sangbad-pratidin-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Sangbad Pratidin </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/uttarbanga-sambad-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> UttarBanga Sambad </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://www.fresherwave.com/bartaman-patrika-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Bartaman Patrika </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://www.fresherwave.com/dainik-statesman-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Danik Statements </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/ekdin-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Ekdin </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/ganashakti-epaper-pdf.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Qanashak </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/anandabazar-patrika-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> AnandaBazaar Patrika </div>'+

	'</div>'+
'<!-- horizontal contdiner end -->';

app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Gujrati NewsPaper </div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/gujarat-samachar-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Gujrat Samachar </div>'+

	'</div>'+
'<!-- horizontal contdiner end -->';

app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white ">Tamil NewsPaper </div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/the-hindu-tamil-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> The Hindu Tamil </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/dinakaran-epaper-pdf.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Dinakaran </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/dinamani-epaper-pdf.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Dinamani </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/daily-thanthi-epaper-pdf.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Daily Thanthi </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/dinamalar.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Dinamalar </div>'+

	'</div>'+
'<!-- horizontal contdiner end -->';

app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> malayalam NewsPaper </div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/malayala-manorama-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Malayalam Manorama </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/mathrubhumi-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Mathrubhumi </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/madhyamam-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Madhyamam </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/chandrika-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center">Chandrika </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/deshabhimani-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Deshabhimani </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/suprabhaatham-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Suprabhaatham </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/deepika-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Deepika </div>'+

	'</div>'+
'<!-- horizontal contdiner end -->';

app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Kannada NewsPaper </div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/vijayavani-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Vijayavani </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/sanjevani-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center">Sanjevani </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/udayavani-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> UdayaVani </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/prajavani-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Prajavani </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/vijaya-karnataka-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Vijay  Karnathaka </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/suddimoola-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Suddimoola </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/vishwavani-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Vishwavani </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/vartha-bharathi-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Vartha Bharathi </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/kannada-prabha-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Kannada Prabha </div>'+

	'</div>'+
'<!-- horizontal contdiner end -->';

app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Odiya NewsPaper</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/dharitri-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Dharitri  </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/sambad-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Sambad </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/samaja-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Samaja </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://www.careerswave.in/dharitri-epaper/ ")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Dharitri </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/orissapost-epaper-pdf.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Orissa Post </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/pragativadi-epaper-pdf.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Pragativadi </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/prameya-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> Prameya  </div>'+

	'</div>'+
'<!-- horizontal contdiner end -->';
