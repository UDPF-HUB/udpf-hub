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
function paperboy(id){
  var url="https://www.paperboy.com/api/get_full_news_paper/v1?paper_id="+id,
  var headers={
     "referrer": url,
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,fil;q=0.8",
    "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sender": "Web"
  };
var op=js_browser(url,"get",headers);
   return op.data.paper.page_url;
}

function t(x){
const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
const days = ["","01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12","13","14","15","16", "17", "18", "19", "20", "21", "22", "25", "24", "25", "26", "27","28","29","30","31"];
var d = new Date("2015-07-06");
if(x=="d")
return document.getElementById("demo").innerHTML = days[d.getDate()];
if(x=="y")
return document.getElementById("demo").innerHTML = d.getFullYear();
if(x=="m")
return document.getElementById("demo").innerHTML = months[d.getMonth()];
if(x=="d1")
return d.getFullYear() +"-"+ months[d.getMonth()] + "-"+days[d.getDate()];

}


function paperboy(id){
  var url="https://www.paperboy.com/api/get_full_news_paper/v1?paper_id="+id ;
  var headers={
'accept': 'application/json, text/plain, */*',
'accept-encoding': 'gzip, deflate, br',
'accept-language': 'en-US,en;q=0.9,fil;q=0.8',
'referer':' https://www.paperboy.com/dainik-jugasankha-guwahati-epaper/176',
'sender': 'Web',
'user-agent': 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
  };
var op=udpf.js_browser(url,"get","", headers);
   return udpf.json_decode(op.data.paper.page_url);
}



var app_paper='<div class="w3-bar-items w3-padding w3-left w3-margin w3-red " style="width:92%;">  NewsPaper(s) ( Updated @ 6:30 AM)</div>'+

'<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> English NewsPaper </div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/times-of-india-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.javatpoint.com/fullformpages/images/toi.png" alt="" width="100%" height="100px" loading="lazy"></br></br> TOI  </div>'+
'<div  onclick='+' udpf_link_finder2("vk.com","https://pdfcave.com/business-line-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://images.squarespace-cdn.com/content/v1/5d59c0bdfff8290001f869d1/1596028113824-4Q20UEPTS9EXB3KEDXQ2/Logo-Hindu-Business-Line-600-400.jpg?format=200w" alt="" width="100%" height="100px" loading="lazy"></br></br> Business Line </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/economic-times-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://img.etimg.com/thumb/msid-74161826,width-300,imgsize-97879,,resizemode-4,quality-100/etlogo.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> Economic Times </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/hindustan-times-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.hindustantimes.com/res/images/ht-logo.svg" alt="" width="100%" height="100px" loading="lazy"></br></br> Hindustan Times </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/hans-india-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.thehansindia.com/images/logo.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Hans India </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/the-telegraph-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://toppng.com/uploads/preview/telegraph-logo-11550710797ouszim79ub.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Telegraph </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/business-standard-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://bsmedia.business-standard.com/include/_mod/site/html5/images/business-standard-logo.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Business Standard </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/mint-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Mint_%28newspaper%29_logo.svg/512px-Mint_%28newspaper%29_logo.svg.png?20210703032633" alt="" width="100%" height="100px" loading="lazy"></br></br> Mint </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/telangana-today-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://epaper.telanganatoday.com//img/logo.png" alt="" width="100%" height="100px" loading="lazy"></br></br> TeLangana Today </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/mumbai-mirror-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://static.wikia.nocookie.net/logopedia/images/5/53/Mumbai_Mirror.png/revision/latest/scale-to-width-down/320?cb=20200720081135" alt="" width="100%" height="100px" loading="lazy"></br></br> Mumbai Mirror </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/the-financial-express-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://thefutureorganization.com/wp-content/uploads/2018/05/financial-express-logo-300x162.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> The Financial Express </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/deccan-chronicle-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.deccanchronicle.com/images/DeccanChronicle_Logo.webp" alt="" width="100%" height="100px" loading="lazy"></br></br> Decan Chronical </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/the-pioneer-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.dailypioneer.com/images/logo.png" alt="" width="100%" height="100px" loading="lazy"></br></br> The Pioneer </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/the-statesman-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://image3.mouthshut.com/images/imagesp/925042679s.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> The Statements </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/the-tribune-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.ranklogos.com/wp-content/uploads/2012/08/the-tribune-ldh-shakti-500x87.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> The Tribune </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/the-asian-age-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.asianage.com/images/logo.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> The Asian Age </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/lokmat-times-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://tma-live.s3.ap-south-1.amazonaws.com/medias/57e501d5cf4ee1f3665c0192/1565806882187/0d0dc3687b92ce6123fbdb5e40d8860d.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> Lokmat Times </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/the-greater-kashmir-epaper-download-newspaper-pdf.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://gumlet.assettype.com/greaterkashmir/2021-05/c34229b4-703a-4b01-a0c0-7d418d5d3a8e/PrimaryLogo.png?w=1366&dpr=1.0" alt="" width="100%" height="100px" loading="lazy"></br></br> The Great Kashmir </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/deccan-herald-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.deccanherald.com/mobile/dh/img/logo/amp-logo.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Deccan Herald </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/kashmir-times-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="http://www.kashmirtimes.com/images/kashmir-times-logo.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Kashmir Times </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/oheraldo-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://cjss.enewspapr.com/heraldgoa/includes/images/logo.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br>Oheraldo </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/nagaland-post-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.nagalandpost.com/wp-content/uploads/2021/08/Logo123xx.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> Nagaland Post </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/state-times-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://epaper.statetimes.in/images/logo.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> State Times </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/assam-tribune-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://assamtribune.com/images/logo.svg" alt="" width="100%" height="100px" loading="lazy"></br></br> Assam Tribune </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/arunachal-times-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://arunachaltimes.in/wp-content/uploads/2017/09/bannerlogo.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> Arunachal Times </div>'+
	'</div>'+
'<!-- horizontal contdiner end -->';

app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> हिन्दी समाचार पत्र </div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/amar-ujala-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://spiderimg.amarujala.com/cdn-cgi/image/width=674,height=379.25,fit=cover,f=auto/assets/images/2018/01/19/750x506/amar-ujala-logo_1516333530.jpeg" alt="" width="100%" height="100px" loading="lazy"></br></br> अमर उजाला</div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/dainik-jagran-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Dainik_Jagran_newspaper_logo.jp" alt="" width="100%" height="100px" loading="lazy"></br></br> दैनिक जागरण</div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/hindustan-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.ranklogos.com/wp-content/uploads/2012/08/hindustan.bmp" alt="" width="100%" height="100px" loading="lazy"></br></br> हिंदुस्तान</div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/the-pioneer-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.dailypioneer.com/images/logo.png" alt="" width="100%" height="100px" loading="lazy"></br></br>पायनियर </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/prabhat-khabar-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://fea.assettype.com/prabhatkhabar/assets/logo-bb49fe5acb23c689ef43.svg" alt="" width="100%" height="100px" loading="lazy"></br></br> प्रभात खबर </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/jansatta-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.jansatta.com/wp-content/themes/ie-network-theme/assets/src/img/logo/jansatta.svg" alt="" width="100%" height="100px" loading="lazy"></br></br> जनसत्ता</div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/navbharat-times-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://seeklogo.com/images/N/nbt-nav-bharat-times-logo-25D9D9A9C3-seeklogo.com.png" alt="" width="100%" height="100px" loading="lazy"></br></br> नव भारत टाइम्स </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/rajasthan-patrika-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.papertownsindia.com/wp-content/uploads/2019/09/rajastan-patrika-logo-300x90.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> राजस्थान पत्रिका </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/dainik-navajyoti-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://pdfcave.com/wp-content/uploads/2021/03/Dainik-Navajyoti-ePaper.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> दैनिक नवज्योति </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/punjab-kesari-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/df/DainikNavajyotiLogo.png/460px-DainikNavajyotiLogo.png" alt="" width="100%" height="100px" loading="lazy"></br></br> पंजाब केसरी </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/dainik-bhaskar-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://seeklogo.com/images/D/dainik-bhaskar-logo-2F6C96AFB3-seeklogo.com.png" alt="" width="100%" height="100px" loading="lazy"></br></br> दैनिक भास्कर </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/business-standard-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.akamai.com/site/en/images/logo/2021/business-standard-logo.svg" alt="" width="100%" height="100px" loading="lazy"></br></br> बिजनेस स्टैंडर्ड </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/hari-bhoomi-epaperhari-bhoomi-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.haribhoomi.com/images/logo.png" alt="" width="100%" height="100px" loading="lazy"></br></br> हरि भूमि </div>'+
'<div  onclick= '+'Website2APK.openExternal("https://docs.google.com/viewer?url=https://www.nationalduniya.org/public/E-Paper/'+ t('d1')+'.pdf&embedded=true")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow: ;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://jionewsweb.cdn.jio.com/jiomags.cdn.jio.com/content/entry/jiomags/content/publication_images/National_Duniya_1595496335101.jpeg" alt="" width="100%" height="100px" loading="lazy"></br></br>नेशन दुनिया</div>'+ 
	'</div>'+
'<!-- horizontal contdiner end -->';

app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Telgu NewsPaper</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/eenadu-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://store-images.s-microsoft.com/image/apps.59775.9007199266362776.a4e996f5-a7c1-4fea-9dfb-7a115d1495a1.4f800694-3c30-4702-83c1-f754251fe920?mode=scale&q=90&h=300&w=300" alt="" width="100%" height="100px" loading="lazy"></br></br> Eeadu </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/sakshi-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://m.sakshi.com/images/mobile_logo.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Sakshi </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/andhra-jyothi-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://epaper.andhrajyothy.com//img/logo/logo.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Andhra Jyot </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/namasthe-telangana-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="http://1.bp.blogspot.com/-H6AI_Dkd6Ek/VkXOQT5LMMI/AAAAAAAACp4/lDV8h54lLG4/s320/Namasthe-Telangana-Paper-Logo.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> Namasthe TeLangana </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/nava-telangana-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://pdfcave.com/wp-content/uploads/2021/03/Nava-Telangana-epaper.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> Nava Telangana </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/mana-telangana-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.careerswave.in/wp-content/uploads/2021/03/Mana-Telangana-epaper.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> Mana TeLangana </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/vaartha-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="http://www.indianenews.com/wp-content/uploads/2017/11/16e12fa.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Vaartha </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/surya-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Surya_Telugu_Newspaper_Logo.png/800px-Surya_Telugu_Newspaper_Logo.png?20210312074653" alt="" width="100%" height="100px" loading="lazy"></br></br> surya </div>'+

	'</div>'+
'<!-- horizontal contdiner end -->';

app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Marathi NewsPaper </div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/loksatta-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://pdfcave.com/wp-content/uploads/2021/07/Loksatta-epaper.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> Loksatta </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/saamana-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://static.sanatanprabhat.org/wp-content/uploads/sites/5/2020/08/09082223/saamana-logo-mobile.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Saamana </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/lokmat-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.childvisionfoundation.org/wp-content/uploads/2016/02/lokmat-logo-300x225.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> Lokmat </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/sakal-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="http://epaper.sakaalmedia.com/images/Logo.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> Sakal </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/divya-marathi-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://epaperdivyamarathi.bhaskar.com/images/divyamarathi-logo_new.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> Divya Mar </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/maharashtra-times-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://bestmediainfo.com/uploads/2020/11/MT-LOGO_8.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> Maharashtra Times </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/tarun-bharat-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://epaper.tarunbharat.com/theme/tarunbharat_paid/image/logo.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Tarun Bharat </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/pudhari-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://pudhari.news/wp-content/uploads/2021/04/logo-1.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Pudhari </div>'+

	'</div>'+
'<!-- horizontal contdiner end -->';

app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Bangala  NewsPaper</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/sangbad-pratidin-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.sangbadpratidin.in/wp-content/themes/SANGBADPRATIDIN/assets/images/sangbadpratidin.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> Sangbad Pratidin </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/uttarbanga-sambad-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.fresherwave.com/wp-content/uploads/2021/03/Uttarbanga-Sambad-epaper-logo.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> UttarBanga Sambad </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://www.fresherwave.com/bartaman-patrika-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://bartamanpatrika.com/images/logo.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Bartaman Patrika </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://www.fresherwave.com/dainik-statesman-epaper-pdf/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.dainikstatesmannews.com/wp-content/themes/dainikstatesman/images/logo.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Danik Statements </div>'+
'<div  onclick='+' udpf_link_finder2(".pdf","https://www.ekdin-epaper.com/")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.ekdin-epaper.com/media/2020-09/logo.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> Ekdin </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/ganashakti-epaper-pdf.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="http://bangla.ganashakti.co.in/images/logo.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Ganashakti </div>'+
'<div  onclick='+' Website2APK.openExternal("https://docs.google.com/gview?url=https://aajkaal.in/images/nabc.pdf&embedded=true")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://aajkaal.in/images/aajkaal_logo.png" alt="" width="100%" height="100px" loading="lazy"></br></br>Aajkal </div>'+

	'</div>'+
'<!-- horizontal contdiner end -->';

app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Gujrati NewsPaper </div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/gujarat-samachar-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://epaper.gujaratsamachar.com/assets/images/logo.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Gujrat Samachar </div>'+
	'</div>'+
'<!-- horizontal contdiner end -->';

app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white ">Tamil NewsPaper </div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/the-hindu-tamil-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://static.hindutamil.in/hindu/static/store/images/logo.png" alt="" width="100%" height="100px" loading="lazy"></br></br> The Hindu Tamil </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/dinakaran-epaper-pdf.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://cache.epapr.in/applogos/masthead_5acc95742cad0.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Dinakaran </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/dinamani-epaper-pdf.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://images.dinamani.com/images/FrontEnd/images/dinamani-logo2.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Dinamani </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/daily-thanthi-epaper-pdf.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.dailythanthi.com/images/logo.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Daily Thanthi </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/dinamalar.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://stat.dinamalar.com/new/images/dmrenglishlogonew.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Dinamalar </div>'+

	'</div>'+
'<!-- horizontal contdiner end -->';

app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> malayalam NewsPaper </div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/malayala-manorama-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;over-flow:wrap;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://img-mm.manoramaonline.com/content/dam/mm/mo/logos/logo-main-2022.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Malayalam Manorama </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/mathrubhumi-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://images.mathrubhumi.com/images/mathrubhumi-letter.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Mathrubhumi </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/madhyamam-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.madhyamam.com/images/mad-text.svg" alt="" width="100%" height="100px" loading="lazy"></br></br> Madhyamam </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/chandrika-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.chandrikadaily.com/wp-content/uploads/2020/04/chandrika-1.png" alt="" width="100%" height="100px" loading="lazy"></br></br>Chandrika </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/deshabhimani-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.deshabhimani.com/images/deshabhimani-logo.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Deshabhimani </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/suprabhaatham-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://suprabhaatham.com/wp-content/themes/suprabhaatham/img/logo.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Suprabhaatham </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/deepika-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.deepika.com/home_icon/deepika_main_logo_12_10_18.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Deepika </div>'+

	'</div>'+
'<!-- horizontal contdiner end -->';

app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Kannada NewsPaper </div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/vijayavani-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://vijayavani.net/wp-content/uploads/2018/01/vijayavani-web-logo-11.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Vijayavani </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/sanjevani-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.sanjevani.com/wp-content/uploads/2022/07/Sanjevani-Resized-title.png" alt="" width="100%" height="100px" loading="lazy"></br></br>Sanjevani </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/udayavani-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.udayavani.com/wp-content/uploads/2020/01/UD-50yrs-logo-web.png" alt="" width="100%" height="100px" loading="lazy"></br></br> UdayaVani </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/prajavani-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.prajavani.net/sites/prajavani.net/themes/prajavani/images/prajavani-logo.svg" alt="" width="100%" height="100px" loading="lazy"></br></br> Prajavani </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/vijaya-karnataka-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://static.langimg.com/thumb/msid-76439930,width-274,resizemode-4/vijaykarnataka.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> Vijay  Karnathaka </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/suddimoola-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://epaper.suddimoola.in/uploads/620b8a229ae7e.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> Suddimoola </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/vishwavani-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://epaper.vishwavani.news/img/vishwavani.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Vishwavani </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/vartha-bharathi-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://www.varthabharati.in/sites/default/files/VB%20web%20header%20411x90.jpg" alt="" width="100%" height="100px" loading="lazy"></br></br> Vartha Bharathi </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/kannada-prabha-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://media.kannadaprabha.com/images/FrontEnd/images/NIE-logo21.webp?w=640&dpr=1.0" alt="" width="100%" height="100px" loading="lazy"></br></br> Kannada Prabha </div>'+

	'</div>'+
'<!-- horizontal contdiner end -->';

app_paper+='<div class="w3-bar-items w3-padding w3-left w3-margin mycss-tr-gray-white "> Odiya NewsPaper</div>'+
'<!-- horizontal contdiner items start--->'+
'<!-- horizontal contdiner start--->'+
'<div class="mycss-horizontal-container" style="width:100%;">'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/dharitri-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="http://dharitriepaper.in/uploads/5b15063fc4c75.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Dharitri  </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/sambad-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://sambadepaper.com/images/logo2.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Sambad </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/samaja-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://samajaepaper.in/images/logo2.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Samaja </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://www.careerswave.in/dharitri-epaper/ ")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="http://dharitriepaper.in/uploads/5b15063fc4c75.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Dharitri </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/orissapost-epaper-pdf.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="http://odishapostepaper.com/uploads/5cda4ae6ac95b.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Orissa Post </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/pragativadi-epaper-pdf.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://pragativadi.com/wp-content/uploads/2021/12/Pragadivadi-LOGO_WHITE.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Pragativadi </div>'+
'<div  onclick='+' udpf_link_finder2("file/d/","https://pdfcave.com/prameya-epaper.php")'+' style="width:32.333333333%;height:180px; margin-bottom:2px;margin-right:2px;text-overflow:;" class="w3-bar-items  w3-padding mycss-slide mycss-tr-gray-white w3-center"> <img src="https://prameyaepaper.com/themes/press/assets/coreassets/logo.png" alt="" width="100%" height="100px" loading="lazy"></br></br> Prameya  </div>'+

	'</div>'+
'<!-- horizontal contdiner end -->';
