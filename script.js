var _0xa093=["\x61\x64\x64\x2D\x62\x74\x6E","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x70\x72\x69\x6E\x74\x2D\x62\x74\x6E","\x6B\x68\x61\x63\x68\x48\x61\x6E\x67","\x53\x44\x54\x6B\x68\x61\x63\x68\x48\x61\x6E\x67\x49\x6E\x70\x75\x74","\x44\x69\x61\x43\x68\x69\x6B\x68\x61\x6E\x67","\x66\x69\x72\x65\x62\x61\x73\x65\x2E\x63\x6F\x6D","\x72\x65\x66\x6D\x61\x74\x6B\x2E\x63\x6F\x6D","\x70\x72\x6F\x6A\x65\x63\x74\x49\x64","\x67\x6F\x6D\x6E\x68\x61\x74\x79\x2D\x31\x30\x36\x36\x36\x33\x35\x34\x37\x30\x33\x32","\x61\x70\x70\x49\x64","\x31\x3A\x31\x30\x36\x36\x36\x33\x35\x34\x37\x30\x33\x32\x3A\x77\x65\x62\x3A\x35\x66\x32\x37\x64\x66\x33\x39\x63\x38\x37\x37\x37\x32\x38\x61\x37\x31\x63\x30\x65\x64","\x6D\x65\x61\x73\x75\x72\x65\x6D\x65\x6E\x74\x49\x64","\x47\x2D\x5A\x56\x37\x30\x46\x58\x4A\x30\x32\x4A"];var firebaseConfig={apiKey:_0xa093[0],authDomain:_0xa093[1],databaseURL:_0xa093[2],projectId:_0xa093[3],storageBucket:_0xa093[4],messagingSenderId:_0xa093[5],appId:_0xa093[6],measurementId:_0xa093[7]};firebase[_0xa093[8]](firebaseConfig);var database=firebase[_0xa093[9]]();var itemsRef=database[_0xa093[10]](_0xa093[11]);var foundItem=null;function searchSdtInArray(_0x7c9e,_0x2a5c){for(var _0x2d24 in _0x7c9e){if(_0x7c9e[_0x2d24][_0xa093[13]]===_0x2a5c){foundItem=_0x7c9e[_0x2d24];break;}}return foundItem;}SDTkhachHangInput[_0xa093[14]](_0xa093[12],function(){var _0x388a=SDTkhachHangInput[_0xa093[12]];itemsRef[_0xa093[15]](_0xa093[13])[_0xa093[16]](function(_0x347a){var _0x19b9=_0x347a[_0xa093[17]]();var _0x215c=searchSdtInArray(_0x19b9,_0x388a);if(_0x215c){khachHangInput[_0xa093[14]]=_0x215c[_0xa093[19]];DiaChikhachHangInput[_0xa093[14]]=_0x215c[_0xa093[20]];}})[_0xa093[18]](function(_0x24f4){console[_0xa093[21]](_0xa093[22],_0x24f4);});});var stt=0;var totalAmount=0;var khachHang=_0xa093[11];var SDTKhachhang=_0xa093[11];var DiaChiKhachhang=_0xa093[11];addBtn[_0xa093[14]](function(){var _0x8d53=document[_0xa093[24]](_0xa093[23]);var _0xf528=_0x8d53[_0xa093[25]](_0xa093[12]);var _0xa30b=0;for(var _0x1ea1=3;_0x1ea1<_0xf528[_0xa093[26]];_0x1ea1++){var _0x2c8a=document[_0xa093[24]](_0xa093[27]);if(_0x1ea1===3){_0x2c8a[_0xa093[14]]=_0xf528[_0x1ea1][_0xa093[14]];}else{if(_0x1ea1===5){_0xa30b=parseFloat(_0xf528[_0x1ea1][_0xa093[14]][_0xa093[28]](/\x2E/g,_0xa093[11]));var _0x281e=_0xa30b[_0xa093[29]](_0xa093[27],{minimumFractionDigits:0});_0x2c8a[_0xa093[14]]=_0x281e[_0xa093[28]](/\x2C/g,_0xa093[27])+_0xa093[30];}else{_0x2c8a[_0xa093[14]]=_0xf528[_0x1ea1][_0xa093[14]];}_0x8d53[_0xa093[25]](_0x2c8a);}var _0x1b95=document[_0xa093[24]](_0xa093[27]);_0x1b95[_0xa093[14]]=_0xa093[31];_0x1b95[_0xa093[32]](function(){_0x8d53[_0xa093[33]]();updateSttAndTotalAmount();});var _0x1e13=document[_0xa093[24]](_0xa093[34]);_0x1e13[_0xa093[25]](_0x1b95);_0x8d53[_0xa093[25]](_0x1e13);var _0x2d9f=document[_0xa093[24]](_0xa093[27]);_0x2d9f[_0xa093[14]]=_0xf528[_0xa093[26]-1][_0xa093[14]][_0xa093[28]](/\x2E/g,_0xa093[11])[_0xa093[28]](/\x30{3}/g,_0xa093[11]);_0x8d53[_0xa093[25]](_0x2d9f);var _0x2f65=document[_0xa093[24]](_0xa093[27]);_0x2f65[_0xa093[14]]=_0xf528[_0xa093[26]-1][_0xa093[14]][_0xa093[28]](/\x2E/g,_0xa093[11])[_0xa093[28]](/\x30{3}/g,_0xa093[11]);_0x8d53[_0xa093[25]](_0x2f65);var _0x2f4b=document[_0xa093[24]](_0xa093[27]);_0x2f4b[_0xa093[14]]=_0xf528[_0xa093[26]-1][_0xa093[14]];_0x8d53[_0xa093[25]](_0x2f4b);var _0x3f47=document[_0xa093[24]](_0xa093[27]);_0x3f47[_0xa093[14]]=_0xa093[31];_0x3f47[_0xa093[32]](function(){_0x8d53[_0xa093[33]]();updateSttAndTotalAmount();});var _0x18f6=document[_0xa093[24]](_0xa093[27]);_0x18f6[_0xa093[14]]=_0xa093[31];_0x18f6[_0xa093[32]](function(){_0x8d53[_0xa093[33]]();updateSttAndTotalAmount();});var _0x2e80=document[_0xa093[24]](_0xa093[27]);_0x2e80[_0xa093[25]](_0x3f47);_0x2e80[_0xa093[25]](_0x18f6);_0x8d53[_0xa093[25]](_0x2e80);tbody[_0xa093[32]](_0x8d53);totalAmount+=_0xa30b;var _0x53b2=document[_0xa093[24]](_0xa093[27]);_0x53b2[_0xa093[14]]=_0xa093[11];var _0x4e6a=document[_0xa093[24]](_0xa093[27]);_0x4e6a[_0xa093[14]]=_0xa093[11];var _0x4d3c=document[_0xa093[24]](_0xa093[27]);_0x4d3c[_0xa093[14]]=_0xa093[11];inputFields[3][_0xa093[14]]=_0xa093[11];inputFields[4][_0xa093[14]]=_0xa093[11];inputFields[5][_0xa093[14]]=_0xa093[11];updateSttAndTotalAmount();});printBtn[_0xa093[14]](function(){khachHang=khachHangInput[_0xa093[12]];SDTKhachhang=SDTkhachHangInput[_0xa093[12]];DiaChiKhachhang=DiaChikhachHangInput[_0xa093[12]];var _0x24a7=document[_0xa093[24]](_0xa093[36]);var _0x4d7b=table[_0xa093[35]]([]);var _0x3b57=table[_0xa093[37]](_0xa093[14]);for(var _0x59f9=0;_0x59f9<_0x3b57[_0xa093[26]];_0x59f9++){var _0x1f1e=[];var _0x140d=_0x3b57[_0x59f9][_0xa093[36]]();var _0x269a=false;for(var _0x546c=0;_0x546c<_0x140d[_0xa093[26]]-1;_0x546c++){var _0x5b53=_0x140d[_0x546c][_0xa093[36]]();if(_0x5b53===_0xa093[31]){_0x269a=true;break;}else{_0x1f1e[_0xa093[25]](_0x5b53);}}if(!_0x269a){_0x4d7b[_0xa093[25]](_0x1f1e);}}_0x4d7b[_0xa093[38]]();var _0x1c1b={content:[{text:_0xa093[39],style:_0xa093[40],fontSize:20},{text:[{text:_0xa093[41],bold:true},{text:_0xa093[42]}]},{text:[{text:_0xa093[43],bold:true},{text:_0xa093[44]}]},{text:[{text:_0xa093[45],bold:true},{text:khachHang,bold:true}]},{text:[{text:_0xa093[46],bold:true},{text:DiaChiKhachhang}]},{table:{headerRows:1,widths:[_0xa093[47],_0xa093[48],_0xa093[48],_0xa093[48]],body:[[_0xa093[49],_0xa093[50],_0xa093[51],_0xa093[52]],..._0x4d7b,[{text:_0xa093[53],colSpan:3,bold:true,alignment:_0xa093[54]},_0xa093[11],_0xa093[11],{text:totalAmount[_0xa093[55]](_0xa093[56],_0xa093[11])[_0xa093[28]](/\x2B(?=\d{3}(\.\d{1})?$)/g,_0xa093[11]),bold:true}]]}}],styles:{header:{fontSize:18,bold:true,alignment:_0xa093[57],margin:[0,0,0,0]}}};var _0x1065=SDTKhachhang;var _0x354a=khachHang;var _0x22b1=DiaChiKhachhang;itemsRef[_0xa093[15]](_0xa093[13])[_0xa093[16]](function(_0x5732){var _0x4e3f=_0x5732[_0xa093[17]]();var _0x466e=null;for(var _0x4d15 in _0x4e3f){if(_0x4e3f[_0x4d15][_0xa093[13]]===_0x1065){_0x466e=_0x4d15;break;}}if(_0x466e){var _0x447c=_0x4e3f[_0x466e][_0xa093[19]];var _0x232d=_0x4e3f[_0x466e][_0xa093[20]];if(_0x354a!==_0x447c||_0x22b1!==_0x232d){itemsRef[_0xa093[58]](_0x466e,{TenKhachHang:_0x354a,DiaChiKhachHang:_0x22b1})[_0xa093[16]](function(){console[_0xa093[21]](_0xa093[59]);})[_0xa093[18]](function(_0x5727){console[_0xa093[60]](_0xa093[61],_0x5727);});}else{console[_0xa093[21]](_0xa093[62]);}}else{var _0x4b1f=database[_0xa093[63]](_0xa093[13]+_0xa093[64]+_0x354a);_0x4b1f[_0xa093[58]]({SDTKhachHang:_0x1065,TenKhachHang:_0x354a,DiaChiKhachHang:_0x22b1})[_0xa093[16]](function(){console[_0xa093[21]](_0xa093[65]);})[_0xa093[18]](function(_0x1471){console[_0xa093[60]](_0xa093[66],_0x1471);});}})[_0xa093[18]](function(_0x537a){console[_0xa093[60]](_0xa093[67],_0x537a);});var _0x1b0f=pdfMake[_0xa093[69]](_0x1c1b);_0x1b0f[_0xa093[68]](_0xa093[70]);});
function updateSttAndTotalAmount(){stt=0;totalAmount=0;var _0x4d8c=document[_0xa093[24]](_0xa093[71]);var _0x111a=_0x4d8c[_0xa093[35]](_0xa093[72]);_0x111a[_0xa093[26]](function(_0x3611,_0x3a66){var _0x36c1=_0x3611[_0xa093[36]]();_0x36c1[_0xa093[12]]=_0x3a66[_0xa093[26]]-_0x3a66[_0xa093[26]]+_0xa093[73];sttCell[_0xa093[14]]=_0x3a66[_0xa093[26]]-_0x3a66[_0xa093[26]]+_0x3a66[_0xa093[26]];var _0x19d7=_0x36c1[_0xa093[36]]();var _0x1c49=_0x19d7[_0xa093[14]];var _0x2bcb=parseFloat(_0x1c49[_0xa093[28]](/\x2E/g,_0xa093[11])[_0xa093[28]](/\x30{3}(?=\d)/g,_0xa093[11]));totalAmount+=_0x2bcb;});var _0x136b=document[_0xa093[24]](_0xa093[74]);_0x136b[_0xa093[14]]=totalAmount[_0xa093[55]](_0xa093[56],_0xa093[11])[_0xa093[28]](/\x2B(?=\d{3}(\.\d{1})?$)/g,_0xa093[11]);}
var navbarToggle=document[_0xa093[24]](_0xa093[75]);var navbarNav=document[_0xa093[24]](_0xa093[76]);navbarToggle[_0xa093[77]](_0xa093[78],function(){navbarNav[_0xa093[79]](_0xa093[80]);});var navLinks=navbarNav[_0xa093[82]](_0xa093[81]);for(var i=0;i<navLinks[_0xa093[26]];i++){navLinks[i][_0xa093[77]](_0xa093[78],function(){window[_0xa093[83]][_0xa093[84]]=this[_0xa093[85]](_0xa093[86]);});}
