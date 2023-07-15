const printBtn = document.getElementById('print-btn');
  const khachHangInput = document.getElementById('kh-input');
  const SDTKhachHangInput = document.getElementById('sdt-input');
  const DiaChiKhachHangInput = document.getElementById('diachi-input');
  const SoLuongInput = document.getElementById('soluong-input');
  const ShipInput = document.getElementById('ship-input');
  const ThuHoInput = document.getElementById('thuho-input');

  printBtn.addEventListener('click', function() {
    const khachHang = khachHangInput.value;
    const SDTKhachHang = SDTKhachHangInput.value;
    const DiaChiKhachHang = DiaChiKhachHangInput.value;
    const SoLuong = SoLuongInput.value;
    const Ship = ShipInput.value;
    const ThuHo = ThuHoInput.value;

    const docDefinition = {
      pageOrientation: 'landscape',
      pageMargins: [0, 0, 0, 0],
      content: [
        { text: 'Người gửi: Gốm Nhật Yến Vân',bold:true, fontSize: 63 },
        { text: 'Địa chỉ: 271 An Dương Vương Phường An Lạc Quận Bình Tân TpHCM', widths: '100%', fontSize: 27 },
        { text: 'SĐT/Zalo: 0918095223 & 0919696242', fontSize: 45 },
        { text: `Người nhận: ${khachHang}`, widths: '100%', fontSize: 40 },
        { text: `Địa chỉ: ${DiaChiKhachHang}` || '\n\n\n', fontSize: 45, marginBottom: 10},
      
        {
            columns: [
                { text: `Sđt: ${SDTKhachHang}`, width: '50%', fontSize: 45 },
                { text: 'Hàng gốm sứ dễ vỡ', width: '50%', style: 'header', fontSize: 45 },
              ],
        },
        {
            columns: [
              { text: `Số lượng: ${SoLuong}`, width: '50%', fontSize: 45 },
              { text: 'Xin nhẹ tay', width: '50%', style: 'header', fontSize: 45 },
            ],
        },
        {
            columns: [
              { text: `Ship: ${Ship}`, width: '50%', fontSize: 45 },
              { text: 'Cảm ơn', width: '50%', style: 'header', fontSize: 45 },
            ],
        },
        { text: `Thu hộ: ${ThuHo}`,fontSize: 45,rowSpan:3,colSpan: 2},
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
