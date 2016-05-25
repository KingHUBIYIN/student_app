
/* 
author: Tony 
create: 2014-02 
description: ʡ��������(����)���� 
*/ 
$(function () {  
var citySelector = function () { 
var province = $("#province"); 
var city = $("#city"); 
var district = $("#district"); 
var preProvince = $("#pre_province"); 
var preCity = $("#pre_city"); 
var preDistrict = $("#pre_district"); 
var jsonProvince = "content/json-array-of-province.js"; 
var jsonCity = "content/json-array-of-city.js"; 
var jsonDistrict = "content/json-array-of-district.js"; 
var hasDistrict = true; 
var initProvince = "<option value='0'>��ѡ��ʡ��</option>"; 
var initCity = "<option value='0'>��ѡ�����</option>"; 
var initDistrict = "<option value='0'>��ѡ������</option>"; 
return { 
Init: function () { 
var that = this; 
that._LoadOptions(jsonProvince, preProvince, province, null, 0, initProvince); 
province.change(function () { 
that._LoadOptions(jsonCity, preCity, city, province, 2, initCity); 
}); 
if (hasDistrict) { 
city.change(function () { 
that._LoadOptions(jsonDistrict, preDistrict, district, city, 4, initDistrict); 
}); 
province.change(function () { 
city.change(); 
}); 
} 
province.change(); 
}, 
_LoadOptions: function (datapath, preobj, targetobj, parentobj, comparelen, initoption) { 
 
$.get( 
datapath, 
function (r) { 
var t = ''; // t: html���� 
var s; // s: ѡ�б�ʶ 
var pre; // pre: ��ʼֵ 
if (preobj === undefined) { 
pre = 0; 
} else { 
pre = preobj.val(); 
} 
for (var i = 0; i < r.length; i++) { 
s = ''; 
if (comparelen === 0) { 
if (pre !== "" && pre !== 0 && r[i].code === pre) { 
s = ' selected=\"selected\" '; 
pre = ''; 
} 
t += '<option value=' + r[i].code + s + '>' + r[i].name + '</option>'; 
} 
else { 
var p = parentobj.val(); 
if (p.substring(0, comparelen) === r[i].code.substring(0, comparelen)) { 
if (pre !== "" && pre !== 0 && r[i].code === pre) { 
s = ' selected=\"selected\" '; 
pre = ''; 
} 
t += '<option value=' + r[i].code + s + '>' + r[i].name + '</option>'; 
} 
} 

} 
if (initoption !== '') { 
targetobj.html(initoption + t); 
} else { 
targetobj.html(t); 
} 
}, 
"json" 
); 
} 
}; 
} (); 
citySelector.Init(); 
}); 