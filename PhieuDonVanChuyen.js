const printBtn = document.getElementById('print-btn');
const khachHangInput = document.getElementById('kh-input');
const SDTKhachHangInput = document.getElementById('sdt-input');
const DiaChiKhachHangInput = document.getElementById('diachi-input');
const SoLuongInput = document.getElementById('soluong-input');
const ShipInput = document.getElementById('ship-input');
const ThuHoInput = document.getElementById('thuho-input');

printBtn.addEventListener('click', function() {
  const khachHang = khachHangInput.value.toUpperCase();;
  const SDTKhachHang = SDTKhachHangInput.value;
  const DiaChiKhachHang = DiaChiKhachHangInput.value;
  const SoLuong = SoLuongInput.value;
  const Ship = ShipInput.value;
  const ThuHo = ThuHoInput.value;

  // Kiểm tra và định dạng số thu hộ
  let formattedThuHo = ThuHo;
  if (!isNaN(ThuHo)){
    const thuHoNumber = parseFloat(ThuHo);
    if (thuHoNumber >= 1000) {
      formattedThuHo = (thuHoNumber / 1000).toFixed(3).replace('.', '.') + '.000';
    } else {
      formattedThuHo = thuHoNumber.toFixed(0) + '.000';
    }
  }

  const docDefinition = {
    pageOrientation: 'landscape',
    pageMargins: [0, 0, 0, 0],
    content: [
      { text: 'Người gửi: Gốm Nhật Yến Vân', bold: true, fontSize: 63 },
      {
        text:[ 
        { text: `Địa chỉ: `, bold:true},
        { text: `271 An Dương Vương Phường An Lạc Quận Bình Tân TpHCM`},
      ],fontSize:27},
      {
        text:[ 
        { text: `SĐT/Zalo: `, bold:true},
        { text: `0918095223 & 0919696242`},
      ],fontSize:47},
      {
        text:[ 
        { text: `Người nhận: `, bold:true},
        { text: `${khachHang}`,bold:true},
      ],widths: '100%', fontSize: 48},
      {
        text:[ 
        { text: `Địa chỉ: `, bold:true},
        { text: `${DiaChiKhachHang}`},
      ]|| '\n\n\n', fontSize: 35, marginBottom: 10},
      {
          columns: [
              {
                text:[ 
                { text: `SĐT: `, bold:true},
                { text: `${SDTKhachHang}` },
              ],fontSize: 45},
            ],
      },
      {
          columns: [
            {
              text:[ 
              { text: `Số lượng: `, bold:true},
              { text: `${SoLuong}`,  },
            ],widths:'50%', fontSize: 47 },
            { text: 'Hàng gốm sứ dễ vỡ', width: '50%', style: 'header', fontSize: 45 },
          ],
      },
      {
          columns: [
            {
              text:[ 
              { text: `Ship: `, bold:true},
              { text: `${Ship}`,  },
            ],widths:'50%', fontSize: 45 },
            { text: 'Xin nhẹ tay', width: '50%', style: 'header', fontSize: 45 },
          ],
      },
      {
        columns: [
          {
            text:[ 
            { text: `Thu hộ: `, bold:true},
            { text: `${formattedThuHo}`,  },
          ],widths:'50%', fontSize: 45 },
          { text: 'Cảm ơn', width: '50%', style: 'header', fontSize: 45 },
        ],
    },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        alignment: 'center',
        margin: [0, 0, 0, 0],
      },
    },
  };

  const pdfDocGenerator = pdfMake.createPdf(docDefinition);
  pdfDocGenerator.download('phieu_bao_cao.pdf');
});

const navbarToggle = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('#navbarNav');

// Xử lý sự kiện khi nhấp vào nút toggle navbar
navbarToggle.addEventListener('click', function() {
  navbarNav.classList.toggle('show');
});

// Xử lý sự kiện khi chọn một liên kết trong navbar
const navLinks = navbarNav.getElementsByTagName('a');
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function() {
    // Chuyển trang khi nhấp vào liên kết
    window.location.href = this.getAttribute('href');
  });
}
