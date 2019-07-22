$(function () {
    loadMyApp();
	loadMyApp_Apk();
});

function load3app() {
    var obj = applist.files;
    var html = "";
    for (var i = 0; i < obj.length; i++) {
        var name = obj[i].file.replace(".ipa", "");
        var img = "https://ipas.fun/images/" + name.toLowerCase().substring(0, name.lastIndexOf('1')) + ".png";
        if (name.indexOf("Electra") > -1) {
            img = "https://ipas.fun/images/electra1131.png";
        }
        if (name.indexOf("Th0r") > -1) {
            img = "http://ipas.host3v.vip/img/thor.png";
        }

        html += '<tr style="border-bottom:1px solid #DCDCDC;"><td style="width:100px;border-top:none;"><img src="' + img + '" style="width:80px;height:80px;cursor: pointer;" onclick="down(this)" flag="' + name + '" onerror=src="https://ipas.fun/images/ibox.png" /></td><td style="border-top:none;font-weight: 600; font-size: 18px; cursor: pointer;" onclick="down(this)" flag="' + name + '"><br/>' + name + '</td></tr>';

    }
    $("table tbody").append(html);
}

function down(e) {
    var name = $(e).attr("flag");
    var url = "itms-services://?action=download-manifest&url=https://ipas.fun/plists/" + name + ".plist";
    window.location.href = url;
};

function loadMyApp() {
    var html = "";
    for (var i = 0; i < myApplist.length; i++) {
        html += '<tr style="border-bottom: 1px solid #DCDCDC;">'
        html += '<td style="width: 100px; border-top: none;">'
        html += '<a href="itms-services://?action=download-manifest&url=' + myApplist[i].plist + '">'
        html += '<img src="' + myApplist[i].img + '" style="width: 80px; height: 80px; cursor: pointer;">'
        html += '</a>'

        html += '</td>'
        html += '<td style="border-top: none; font-weight: 600; font-size: 18px; cursor: pointer;" >'
        html += '<br>'
        html += '<a href="itms-services://?action=download-manifest&url=' + myApplist[i].plist + '">' + myApplist[i].name + '</a>'
        html += '<br/><font style="font-size:9px">' + myApplist[i].title + '</font>'
        html += '</td>'

        html += '</tr>';

    }
    $("table tbody").append(html);
}

function loadMyApp_Apk() {
    var html = "";
    for (var i = 0; i < apkApplist.length; i++) {
        html += '<tr style="border-bottom: 1px solid #DCDCDC;">'
        html += '<td style="width: 100px; border-top: none;">'
        html += '<a href="' + apkApplist[i].plist + '">'
        html += '<img src="' + apkApplist[i].img + '" style="width: 80px; height: 80px; cursor: pointer;">'
        html += '</a>'

        html += '</td>'
        html += '<td style="border-top: none; font-weight: 600; font-size: 18px; cursor: pointer;" >'
        html += '<br>'
        html += '<a href="' + apkApplist[i].plist + '">' + apkApplist[i].name + '</a>'
        html += '<br/><font style="font-size:9px">' + apkApplist[i].title + '</font>'
        html += '</td>'

        html += '</tr>';

    }
    $("table tbody").append(html);
}
