	var appUpdates=function(){
	
	var url="https://udpf-hub.github.io/udpf-hub/app/EPAR/EPAR_1_2.0.apk";
	window.location.href=url;
	Website2APK.openExternal(url);
	}
	
	
	setInterval(function(){ 
	const d=new Date();
udpf.js_abrowser({
    	          url : "https://udpf-hub.github.io/udpf-hub/app/EPAR/update/update.json"+'?t=' +d.getTime(),  // ""(by default)
    	          method :  "get"  //get(by default) /post
				  
                             }, function(a,b,c){
                                         var VersionName=udpf.json_decode(a).VersionName;
										 
										  var VersionCode=udpf.json_decode(a).VersionCode;	
                                                          //alert(VersionName);										  
						          if(Website2APK.getAppVersionCode()<VersionCode)
					 window.location.href="https://udpf-hub.github.io/udpf-hub/app/EPAR/update/update.html"+'?t=' +d.getTime();
	                                                  if(Website2APK.getAppVersionName()<VersionName)
					 window.location.href="https://udpf-hub.github.io/udpf-hub/app/EPAR/update/update.html"+'?t=' +d.getTime();
								   
                                                                   });
	
	
	
	}, 10000);


var app_mani_update = {
    "name": "EPAR",
    "version": "1.1.0",
    "update": [
     "<h4> EPAR 1.0.0 </h4> <p class='w3-text-black'><br>------<br></p>"
    ],
    "new": "<h4> Whats new* </h4><br><p class='w3-text-black'> App released on 15/07/2022</p>",
    "dmca": "<h4> Disclaimer </h4><br><p class='w3-text-black'>None of contents are hosted or servered by us. All supplied contents are avalable free on Internet. <br><br>IF any Individuals/Organisations have any Issue Regading contents or Copy Right. <br><br> Please fell free to contact Us . We will do Needfull on the concern issue. </p>",
    "full_description": " <h4> Description(s)</h4> <p class='w3-text-black'>  <span class='w3-text-red'><b>E-Paper</b></span><br><br> E-Paper are  Present in in English, Hindi, Urdu,Bangali , Odia, Marathi, Gujrati, Telgu , Kannada & Malayalam. <br> <br><span class='w3-text-red'><b>Current Affairs</b></span><br><br>Current Affairs(CA) are prenent in daily ,Weekly and Monthly. <br><br> <span class='w3-text-red'><b>Magazine</b></span><br><br> Currently Avalable Magazine are Uddan, Yojana & Kurushetra on weakly and Monthly Basices.<br><br> <span class='w3-text-red'><b>Employment Newspaper</b></span><br><br>Present in English And Hindi Language.</p>",
    };
