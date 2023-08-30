const addBtn = document.getElementById('add-btn');
const insertBtn = document.getElementById('insert-btn');
const tenInput = document.getElementById('kh-input');
const SDTInput = document.getElementById('sdt-input');
const DiaChiInput = document.getElementById('diachi-input');
const SoLuongInput = document.getElementById('soluong-input');
const TienInput = document.getElementById('tien-input');
const GhiChuInput = document.getElementById('ghichu-input');
const DateInput = document.getElementById('date-input');
const ExcelBtn =  document.getElementById('Excel');
const firebaseConfig = {
  apiKey: "AIzaSyAL2kP_r7MofPUadyxQZytIpF0CgQxcUMI",
  authDomain: "gomnhatyenvan.firebaseapp.com",
  databaseURL: "https://gomnhatyenvan-default-rtdb.firebaseio.com",
  projectId: "gomnhatyenvan",
  storageBucket: "gomnhatyenvan.appspot.com",
  messagingSenderId: "106663547032",
  appId: "1:106663547032:web:5f27df39c877728a71c0ed",
  measurementId: "G-ZV70FXJ02J"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const NhapHangRef = database.ref("/NhapHang");
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('#navbarNav');
let searchSdt = SDTInput.value;
// Xử lý sự kiện khi nhấp vào nút toggle navbar
navbarToggle.addEventListener('click', function () {
  navbarNav.classList.toggle('show');
});

// Xử lý sự kiện khi chọn một liên kết trong navbar
const navLinks = navbarNav.getElementsByTagName('a');
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    // Chuyển trang khi nhấp vào liên kết
    window.location.href = this.getAttribute('href');
  });
}
insertBtn.addEventListener('click', () => {
    const searchSdt = SDTInput.value;
    const tenNguoiBanHang = tenInput.value;
    const diaChiNguoiBanHang = DiaChiInput.value;
    const soLuong = SoLuongInput.value;
    const tien = TienInput.value;
    const ngay = DateInput.value;
    const ghiChu = GhiChuInput.value;
    let formattedThuHo = tien;
    if (!isNaN(tien)){
      const thuHoNumber = parseFloat(tien);
      if (thuHoNumber >= 1000) {
        formattedThuHo = (thuHoNumber / 1000).toFixed(3).replace('.', '.') + '.000Đ';
      }else if(thuHoNumber == 0){
        formattedThuHo = thuHoNumber.toFixed(0) + ' Đồng';
      }
      else {
        formattedThuHo = thuHoNumber.toFixed(0) + '.000Đ';
      }
    }
    // Check if the data with the specified phone number already exists
    NhapHangRef.once('value')
      .then(snapshot => {
          // Add new data to the NhapHang node
          const newItemRef = database.ref("/NhapHang/").push();
          newItemRef.set({
            SDTNguoiBanHang: searchSdt,
            TenNguoiBanHang: tenNguoiBanHang,
            DiaChiNguoiBanHang: diaChiNguoiBanHang,
            SoLuong: soLuong,
            TongTien: formattedThuHo,
            Ngay: ngay,
            GhiChu: ghiChu
          })
          .then(() => {
            console.log("New data added successfully!");
          })
          .catch(error => {
            console.error("Error adding new data:", error);
          });
        
      })
      .catch(error => {
        console.error("Error checking for existing data:", error);
      });
});
ExcelBtn.addEventListener('click', function() {
  NhapHangRef.once('value')
  .then(snapshot => {
    const allItems = snapshot.val();
    const exportData = [
      ["STT", "SDT người bán hàng", "Tên người bán hàng", "Địa chỉ", "Ngày mua", "Số lượng", "Tổng tiền"]
    ];
    
    let totalAmount = 0; // Biến để tích lũy tổng
    
    Object.keys(allItems).forEach((key, index) => {
      const item = allItems[key];
      
      // Kiểm tra xem các trường dữ liệu có tồn tại và không phải undefined
      const sdt = item.SDTNguoiBanHang || "";
      const ten = item.TenNguoiBanHang || "";
      const diaChi = item.DiaChiNguoiBanHang || "";
      const ngay = item.Ngay || "";
      const soLuong = item.SoLuong || "";
      const tongTien = item.TongTien || "";

      // Trích xuất giá trị số từ chuỗi tổng tiền (VD: "350.000.000Đ" => 350000000)
      const numericTongTien = parseFloat(tongTien.replace(/[^\d]/g, ""));
      
      // Cộng tổng tiền vào biến totalAmount
      if (!isNaN(numericTongTien)) {
        totalAmount += numericTongTien;
      }

      exportData.push([
        index + 1,
        sdt,
        ten,
        diaChi,
        ngay,
        soLuong,
        tongTien,
      ]);
    });

    // Định dạng lại giá trị tổng tiền để hiển thị trong bảng PDF
    const formattedTotalAmount = totalAmount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Thêm dòng tổng vào mảng exportData
    exportData.push([
      { text: 'Tổng tiền:', colSpan: 6, bold: true, alignment: 'right' },
      '',
      '',
      '',
      '',
      '',
      { text: formattedTotalAmount, bold: true }
    ]);

    const docDefinition = {
      content: [
        { text: 'Danh Sách Mua Hàng', style: 'header', fontSize: 25 },
        {
          table: {
            headerRows: 1,
            widths: ['5%', '15%', '15%', '15%', '15%', '15%', '20%'],
            body: exportData
          }
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 10, 0]
        }
      }
    };

    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.download('Danh Sách Mua Hàng.pdf');
  })
  .catch(error => {
    console.error("Error retrieving data:", error);
  });
});

