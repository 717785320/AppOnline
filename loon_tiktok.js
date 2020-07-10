console.log("tiktok脚本开始执行");
let url=$request.url;
if(url.indexOf("CN")>=0){
	console.log("替换前"+url);
	url.replace(/CN/g,"JP")
	console.log("替换后"+url);
}

$done({url});
