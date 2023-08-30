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
            TongTien: tien,
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
ExcelBtn.addEventListener('click', () => {
    const sheetName = "Danh Sách Mua Hàng";
    const fileName = "Danh Sách Mua Hàng.xlsx";
    NhapHangRef.once('value')
    .then(snapshot => {
      const allItems = snapshot.val();
      // Tạo một mảng chứa dữ liệu xuất với tiêu đề các cột
      const exportData = [["STT", "SDT người bán hàng", "Tên người bán hàng","Ngày mua","Địa chỉ người bán hàng", "Số lượng", "Tổng tiền", "Ghi chú"]];
      // Thêm dữ liệu từng hàng từ firebase vào mảng
      Object.keys(allItems).forEach((key, index) => {
        exportData.push([
          index + 1,
          allItems[key].SDTNguoiBanHang,
          allItems[key].TenNguoiBanHang,
          allItems[key].Ngay,
          allItems[key].DiaChiNguoiBanHang,
          allItems[key].SoLuong,
          allItems[key].TongTien,
          allItems[key].GhiChu 
        ]);
      });
  
      // Tạo một sổ làm việc mới
      const workbook = XLSX.utils.book_new();
  
      // Tạo một trang tính từ dữ liệu xuất
      const worksheet = XLSX.utils.aoa_to_sheet(exportData);
  
      // Thêm trang tính vào sổ làm việc
      XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
  
      // Xuất sổ làm việc sang định dạng XLSX
      const wbout = XLSX.write(workbook, {bookType:'xlsx', type:'binary'});
  
      // Tạo một hàm để chuyển đổi dữ liệu sang dạng nhị phân
      function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
      }
  
      // Tải xuống tệp XLSX
      saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), fileName);
    });
  });
