const _0x4a56fd = _0x3d8e;
(function(_0x488ad8, _0x40a9a3) {
    const _0x3cc7af = _0x3d8e
      , _0x30192e = _0x488ad8();
    while (!![]) {
        try {
            const _0x108c19 = parseInt(_0x3cc7af(0x1f6)) / 0x1 + -parseInt(_0x3cc7af(0x1ee)) / 0x2 * (parseInt(_0x3cc7af(0x1fe)) / 0x3) + -parseInt(_0x3cc7af(0x1b6)) / 0x4 * (parseInt(_0x3cc7af(0x1be)) / 0x5) + parseInt(_0x3cc7af(0x1c1)) / 0x6 + parseInt(_0x3cc7af(0x1bb)) / 0x7 * (-parseInt(_0x3cc7af(0x1ce)) / 0x8) + -parseInt(_0x3cc7af(0x1db)) / 0x9 + -parseInt(_0x3cc7af(0x1ad)) / 0xa * (-parseInt(_0x3cc7af(0x1e0)) / 0xb);
            if (_0x108c19 === _0x40a9a3)
                break;
            else
                _0x30192e['push'](_0x30192e['shift']());
        } catch (_0x49beb1) {
            _0x30192e['push'](_0x30192e['shift']());
        }
    }
}(_0x4974, 0xe6e43));
const addBtn = document['getElementById'](_0x4a56fd(0x1cf))
  , printBtn = document[_0x4a56fd(0x1b7)](_0x4a56fd(0x1e4))
  , khachHangInput = document[_0x4a56fd(0x1b7)](_0x4a56fd(0x1f7))
  , SDTkhachHangInput = document[_0x4a56fd(0x1b7)](_0x4a56fd(0x1f4))
  , DiaChikhachHangInput = document[_0x4a56fd(0x1b7)]('diachi-input')
  , firebaseConfig = {
    'apiKey': 'AIzaSyAL2kP_r7MofPUadyxQZytIpF0CgQxcUMI',
    'authDomain': _0x4a56fd(0x202),
    'databaseURL': _0x4a56fd(0x1fb),
    'projectId': _0x4a56fd(0x1e7),
    'storageBucket': _0x4a56fd(0x1e9),
    'messagingSenderId': _0x4a56fd(0x1cb),
    'appId': _0x4a56fd(0x1b8),
    'measurementId': _0x4a56fd(0x1e5)
};
firebase[_0x4a56fd(0x1c2)](firebaseConfig);
const database = firebase['database']()
  , itemsRef = database[_0x4a56fd(0x1b2)](_0x4a56fd(0x1e8));
let foundItem = null;
function searchSdtInArray(_0x3dfd07, _0x2c2dbe) {
    const _0x2bd17c = _0x4a56fd;
    for (const _0x552c0d in _0x3dfd07)
        if (_0x3dfd07[_0x552c0d][_0x2bd17c(0x207)] === _0x2c2dbe) {
            foundItem = _0x3dfd07[_0x552c0d];
            break;
        }
    return foundItem;
}
SDTkhachHangInput[_0x4a56fd(0x1d0)](_0x4a56fd(0x1de), function() {
    const _0x4ca44e = _0x4a56fd
      , _0x300333 = SDTkhachHangInput[_0x4ca44e(0x1c8)];
    itemsRef['once'](_0x4ca44e(0x1c8))['then'](_0x5f2361=>{
        const _0x197379 = _0x4ca44e
          , _0x54a361 = searchSdtInArray(_0x5f2361[_0x197379(0x1c6)](), _0x300333);
        _0x54a361 && (khachHangInput[_0x197379(0x1c8)] = _0x54a361['KhachHang'],
        DiaChikhachHangInput[_0x197379(0x1c8)] = _0x54a361[_0x197379(0x1bd)]);
    }
    )[_0x4ca44e(0x1d4)](_0x339484=>{
        const _0x410104 = _0x4ca44e;
        console[_0x410104(0x1d1)](_0x410104(0x1d9), _0x339484);
    }
    );
});
function _0x3d8e(_0x36522a, _0x496aac) {
    const _0x4974e1 = _0x4974();
    return _0x3d8e = function(_0x3d8e70, _0x3da009) {
        _0x3d8e70 = _0x3d8e70 - 0x1ac;
        let _0x106a68 = _0x4974e1[_0x3d8e70];
        return _0x106a68;
    }
    ,
    _0x3d8e(_0x36522a, _0x496aac);
}
let stt = 0x0
  , totalAmount = 0x0
  , khachHang = ''
  , SDTKhachhang = ''
  , DiaChiKhachhang = '';
function updateSttAndTotalAmount() {
    const _0x18ac97 = _0x4a56fd;
    stt = 0x0,
    totalAmount = 0x0;
    const _0x3ba494 = document[_0x18ac97(0x1b7)](_0x18ac97(0x1bc))[_0x18ac97(0x1df)](_0x18ac97(0x205));
    _0x3ba494[_0x18ac97(0x1e6)]((_0x52901c,_0x135d46)=>{
        const _0x50f264 = _0x18ac97;
        _0x52901c[_0x50f264(0x1ec)][0x0][_0x50f264(0x1d3)] = _0x3ba494[_0x50f264(0x1ea)] - _0x135d46;
        const _0x59166d = _0x52901c[_0x50f264(0x1ec)][0x3][_0x50f264(0x1d3)]
          , _0x1efe8c = parseFloat(_0x59166d['replace'](/\./g, '')[_0x50f264(0x1b5)](_0x50f264(0x1c3), ''));
        totalAmount += _0x1efe8c;
    }
    ),
    document['getElementById'](_0x18ac97(0x1dc))[_0x18ac97(0x1d3)] = totalAmount[_0x18ac97(0x1da)]()[_0x18ac97(0x1b5)](/\B(?=(\d{3})+(?!\d))/g, '.');
}
function _0x4974() {
    const _0x1c60f3 = ['input-field', '15%', 'button', 'querySelector', 'SĐT/Zalo:\x200918095223\x20&\x200919696242', 'sdt-input', 'Địa\x20chỉ:\x20271\x20An\x20Dương\x20Vương\x20Phường\x20An\x20Lạc\x20Quận\x20Bình\x20Tân\x20TpHCM', '838751uzEaNx', 'kh-input', 'innerHTML', 'getAttribute', '.close', 'https://gomnhatyenvan-default-rtdb.firebaseio.com', 'getElementsByTagName', 'right', '18375RtSIoA', 'appendChild', 'tbody', 'then', 'gomnhatyenvan.firebaseapp.com', 'createElement', 'Số\x20lượng', 'tbody\x20tr', 'firstChild', 'SDTKhachHang', 'href', '370yEXVVQ', 'child', 'update', 'toFixed', 'center', 'ref', 'classList', '/Items/', 'replace', '1204QxjTWy', 'getElementById', '1:106663547032:web:5f27df39c877728a71c0ed', 'insertBefore', 'Update\x20thông\x20tin\x20thành\x20công!', '80213BFZOtO', 'report-table', 'DiaChiKhachHang', '3220ZsBcTE', 'KhachHang', 'push', '6852294kbVLos', 'initializeApp', '.000', 'phieu_bao_cao.pdf', 'show', 'val', 'Tổng\x20tiền:', 'value', 'click', 'download', '106663547032', 'createPdf', 'Dữ\x20liệu\x20giống\x20nhau,\x20không\x20cần\x20thay\x20đổi.', '456fitAeM', 'add-btn', 'addEventListener', 'error', 'add', 'textContent', 'catch', 'Địa\x20Chỉ\x20Khách\x20Hàng:\x20', 'log', 'toLocaleString', 'SĐT\x20Khách\x20Hàng:\x20', 'Error\x20getting\x20all\x20items:', 'toString', '8037360WcWfJz', 'total-amount', 'set', 'input', 'querySelectorAll', '211409bLIFDo', 'Thành\x20tiền', 'once', 'STT', 'print-btn', 'G-ZV70FXJ02J', 'forEach', 'gomnhatyenvan', '/Items', 'gomnhatyenvan.appspot.com', 'length', '.navbar-toggler', 'cells', 'Lỗi\x20khi\x20thêm\x20mới:', '2VGqRmR'];
    _0x4974 = function() {
        return _0x1c60f3;
    }
    ;
    return _0x4974();
}
addBtn['addEventListener']('click', function() {
    const _0x1a3376 = _0x4a56fd
      , _0x21d501 = document[_0x1a3376(0x1b7)](_0x1a3376(0x1bc))[_0x1a3376(0x1f2)](_0x1a3376(0x200))
      , _0x43f332 = document[_0x1a3376(0x203)]('tr')
      , _0x4a0c4f = document['getElementsByClassName'](_0x1a3376(0x1ef))
      , _0x43460b = document[_0x1a3376(0x203)]('td');
    _0x43460b[_0x1a3376(0x1d3)] = ++stt,
    _0x43f332[_0x1a3376(0x1ff)](_0x43460b);
    let _0x346e18 = 0x0;
    for (let _0x4d7237 = 0x3; _0x4d7237 < _0x4a0c4f[_0x1a3376(0x1ea)]; _0x4d7237++) {
        const _0x4598a1 = document[_0x1a3376(0x203)]('td');
        if (0x3 === _0x4d7237)
            _0x4598a1[_0x1a3376(0x1d3)] = _0x4a0c4f[_0x4d7237][_0x1a3376(0x1c8)];
        else {
            if (0x5 === _0x4d7237) {
                const _0x712ac5 = (_0x346e18 = parseFloat(_0x4a0c4f[_0x4d7237]['value'][_0x1a3376(0x1b5)](/\./g, '')))[_0x1a3376(0x1d7)]('en-US', {
                    'minimumFractionDigits': 0x0
                });
                _0x4598a1[_0x1a3376(0x1d3)] = _0x712ac5[_0x1a3376(0x1b5)](/,/g, '.') + _0x1a3376(0x1c3);
            } else
                _0x4598a1[_0x1a3376(0x1d3)] = _0x4a0c4f[_0x4d7237][_0x1a3376(0x1c8)];
        }
        _0x43f332[_0x1a3376(0x1ff)](_0x4598a1);
    }
    const _0x5746db = document[_0x1a3376(0x203)](_0x1a3376(0x1f1));
    _0x5746db[_0x1a3376(0x1f8)] = 'x',
    _0x5746db[_0x1a3376(0x1b3)][_0x1a3376(0x1d2)](_0x1a3376(0x1fa)),
    _0x5746db[_0x1a3376(0x1d0)](_0x1a3376(0x1c9), function() {
        _0x43f332['remove'](),
        updateSttAndTotalAmount();
    });
    const _0x27e370 = document[_0x1a3376(0x203)]('td');
    _0x27e370[_0x1a3376(0x1ff)](_0x5746db),
    _0x43f332[_0x1a3376(0x1ff)](_0x27e370),
    _0x21d501[_0x1a3376(0x1b9)](_0x43f332, _0x21d501[_0x1a3376(0x206)]),
    totalAmount += _0x346e18,
    document['getElementById'](_0x1a3376(0x1dc))['textContent'] = totalAmount['toFixed'](0x0)[_0x1a3376(0x1b5)](/\B(?=(\d{3})+(?!\d))/g, '.'),
    _0x4a0c4f[0x3]['value'] = '',
    _0x4a0c4f[0x4]['value'] = '',
    _0x4a0c4f[0x5][_0x1a3376(0x1c8)] = '',
    updateSttAndTotalAmount();
}),
printBtn[_0x4a56fd(0x1d0)](_0x4a56fd(0x1c9), function() {
    const _0x527a53 = _0x4a56fd;
    khachHang = khachHangInput[_0x527a53(0x1c8)],
    SDTKhachhang = SDTkhachHangInput[_0x527a53(0x1c8)],
    DiaChiKhachhang = DiaChikhachHangInput[_0x527a53(0x1c8)];
    const _0x30d166 = []
      , _0x1166e2 = document[_0x527a53(0x1b7)]('report-table')['querySelector'](_0x527a53(0x200))[_0x527a53(0x1fc)]('tr');
    for (let _0x45a785 = 0x0; _0x45a785 < _0x1166e2[_0x527a53(0x1ea)]; _0x45a785++) {
        const _0x5b364b = []
          , _0xfa57a3 = _0x1166e2[_0x45a785][_0x527a53(0x1fc)]('td');
        let _0x30cece = !0x1;
        for (let _0x2ba805 = 0x0; _0x2ba805 < _0xfa57a3[_0x527a53(0x1ea)] - 0x1; _0x2ba805++) {
            const _0x1c8c71 = _0xfa57a3[_0x2ba805][_0x527a53(0x1d3)];
            if ('x' === _0x1c8c71) {
                _0x30cece = !0x0;
                break;
            }
            _0x5b364b[_0x527a53(0x1c0)](_0x1c8c71);
        }
        _0x30cece || _0x30d166[_0x527a53(0x1c0)](_0x5b364b);
    }
    _0x30d166['reverse']();
    const _0x4ffc57 = {
        'content': [{
            'text': 'Gốm\x20Nhật\x20Yến\x20Vân',
            'style': 'header',
            'fontSize': 0x14
        }, {
            'text': _0x527a53(0x1f3)
        }, {
            'text': _0x527a53(0x1f5)
        }, {
            'text': 'Tên\x20Khách\x20Hàng:\x20' + khachHang
        }, {
            'text': _0x527a53(0x1d8) + SDTKhachhang
        }, {
            'text': _0x527a53(0x1d5) + DiaChiKhachhang
        }, {
            'table': {
                'headerRows': 0x1,
                'widths': ['5%', '60%', _0x527a53(0x1f0), '20%'],
                'body': [[_0x527a53(0x1e3), 'Tên\x20món\x20hàng', _0x527a53(0x204), _0x527a53(0x1e1)], ..._0x30d166, [{
                    'text': _0x527a53(0x1c7),
                    'colSpan': 0x3,
                    'bold': !0x0,
                    'alignment': _0x527a53(0x1fd)
                }, '', '', {
                    'text': '' + totalAmount[_0x527a53(0x1b0)](0x0)[_0x527a53(0x1b5)](/\B(?=(\d{3})+(?!\d))/g, '.'),
                    'bold': !0x0
                }]]
            }
        }],
        'styles': {
            'header': {
                'fontSize': 0x12,
                'bold': !0x0,
                'alignment': _0x527a53(0x1b1),
                'margin': [0x0, 0x0, 0x0, 0x0]
            }
        }
    }
      , _0x2f0de2 = SDTKhachhang
      , _0x27ca6f = khachHang
      , _0x1cda9c = DiaChiKhachhang;
    itemsRef[_0x527a53(0x1e2)](_0x527a53(0x1c8))[_0x527a53(0x201)](_0x185279=>{
        const _0x1d380b = _0x527a53
          , _0x4aa9cf = _0x185279[_0x1d380b(0x1c6)]();
        let _0x2df650 = null;
        for (const _0x54a7e8 in _0x4aa9cf)
            if (_0x4aa9cf[_0x54a7e8][_0x1d380b(0x207)] === _0x2f0de2) {
                _0x2df650 = _0x54a7e8;
                break;
            }
        if (_0x2df650) {
            const _0x45b2bf = _0x4aa9cf[_0x2df650][_0x1d380b(0x1bf)]
              , _0x28511e = _0x4aa9cf[_0x2df650][_0x1d380b(0x1bd)];
            _0x27ca6f !== _0x45b2bf || _0x1cda9c !== _0x28511e ? itemsRef[_0x1d380b(0x1ae)](_0x2df650)[_0x1d380b(0x1af)]({
                'KhachHang': _0x27ca6f,
                'DiaChiKhachHang': _0x1cda9c
            })[_0x1d380b(0x201)](()=>{
                const _0x55df7e = _0x1d380b;
                console[_0x55df7e(0x1d6)](_0x55df7e(0x1ba));
            }
            )['catch'](_0x164d01=>{
                console['error']('Lỗi\x20khi\x20update\x20thông\x20tin:', _0x164d01);
            }
            ) : console['log'](_0x1d380b(0x1cd));
        } else
            database[_0x1d380b(0x1b2)](_0x1d380b(0x1b4))['child'](_0x2f0de2)[_0x1d380b(0x1dd)]({
                'SDTKhachHang': _0x2f0de2,
                'KhachHang': _0x27ca6f,
                'DiaChiKhachHang': _0x1cda9c
            })[_0x1d380b(0x201)](()=>{
                console['log']('Thêm\x20mới\x20thành\x20công!');
            }
            )['catch'](_0x3bedca=>{
                const _0x2549dc = _0x1d380b;
                console[_0x2549dc(0x1d1)](_0x2549dc(0x1ed), _0x3bedca);
            }
            );
    }
    )[_0x527a53(0x1d4)](_0x1e1033=>{
        const _0x4cc70a = _0x527a53;
        console['error'](_0x4cc70a(0x1d9), _0x1e1033);
    }
    ),
    pdfMake[_0x527a53(0x1cc)](_0x4ffc57)[_0x527a53(0x1ca)](_0x527a53(0x1c4));
});
const navbarToggle = document[_0x4a56fd(0x1f2)](_0x4a56fd(0x1eb))
  , navbarNav = document[_0x4a56fd(0x1f2)]('#navbarNav');
navbarToggle[_0x4a56fd(0x1d0)]('click', function() {
    const _0x470d73 = _0x4a56fd;
    navbarNav['classList']['toggle'](_0x470d73(0x1c5));
});
const navLinks = navbarNav[_0x4a56fd(0x1fc)]('a');
for (let t = 0x0; t < navLinks['length']; t++)
    navLinks[t][_0x4a56fd(0x1d0)](_0x4a56fd(0x1c9), function() {
        const _0x58324e = _0x4a56fd;
        window['location']['href'] = this[_0x58324e(0x1f9)](_0x58324e(0x1ac));
    });
