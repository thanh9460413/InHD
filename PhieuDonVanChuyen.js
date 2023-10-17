const printBtn = document.getElementById('print-btn');
const khachHangInput = document.getElementById('kh-input');
const SDTKhachHangInput = document.getElementById('sdt-input');
const DiaChiKhachHangInput = document.getElementById('diachi-input');
const SoLuongInput = document.getElementById('soluong-input');
const ShipInput = document.getElementById('ship-option');
const ThuHoInput = document.getElementById('thuho-input');
const firebaseConfig = {
  apiKey: "AIzaSyDXXOikQd3P1qxodkApktjN-GznKHxMqbs",
  authDomain: "gomsuyenvan.firebaseapp.com",
  databaseURL: "https://gomsuyenvan-default-rtdb.firebaseio.com",
  projectId: "gomsuyenvan",
  storageBucket: "gomsuyenvan.appspot.com",
  messagingSenderId: "265332355511",
  appId: "1:265332355511:web:770a66afd2a81101afb832",
  measurementId: "G-6V4Y3X0WYT"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const itemsRef = database.ref("/KhachHang");
let foundItem = null;
let searchSdt;
// Hàm tìm kiếm số điện thoại trong mảng dữ liệu
function searchSdtInArray(allItems, searchSdt) {

  for (const key in allItems) {
    if (allItems[key].SDTKhachHang === searchSdt) {
      foundItem = allItems[key];
      break;
    }
  }
  return foundItem;
}
// Lắng nghe sự kiện "input" trên ô input số điện thoại
SDTKhachHangInput.addEventListener('input', function () {
  searchSdt = SDTKhachHangInput.value;

  // Lấy tất cả dữ liệu trong nút "Items"
  itemsRef.once('value')
    .then(snapshot => {
      const allItems = snapshot.val();
      const foundItem = searchSdtInArray(allItems, searchSdt);
      if (foundItem) {
        // Nếu tìm thấy số điện thoại, hiển thị thông tin tương ứng lên input
        khachHangInput.value = foundItem.TenKhachHang;
        DiaChiKhachHangInput.value = foundItem.DiaChiKhachHang;
      }
    })

    .catch(error => {
      console.error("Error getting all items:", error);
    });
});
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
      formattedThuHo = (thuHoNumber / 1000).toFixed(3).replace('.', '.') + '.000Đ';
    }else if(thuHoNumber == 0){
      formattedThuHo = thuHoNumber.toFixed(0) + ' Đồng';
    }
    else {
      formattedThuHo = thuHoNumber.toFixed(0) + '.000Đ';
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
        { text: `31/21/27/17 Đường số 1 Kp5 P.Tân Tạo A Quận Bình Tân`},
      ],fontSize:27},
      {
        text:[ 
        { text: `SĐT/Zalo: `, bold:true},
        { text: `0918095223 & 0919696242`},
      ],fontSize:47},
      {
        text:[ 
        { text: `Người nhận: `, bold:true},
        { text: `${khachHang.toUpperCase()}`,bold:true},
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
  if(ThuHoInput.value != 0){
    
  }
  itemsRef.once('value')
    .then(snapshot => {
      const allItems = snapshot.val();
      let foundItemId = null;

      for (const key in allItems) {
        if (allItems[key].SDTKhachHang === searchSdt) {
          foundItemId = key;
          break;
        }
      }

      if (foundItemId) {
        // Nếu đã tồn tại dữ liệu với số điện thoại đã nhập
        const currentDate = new Date();
        const date = currentDate.getDate();
        const month = currentDate.getMonth() + 1; // Month is zero-based, so add 1 to get the actual month
        const year = currentDate.getFullYear();
        const existingKh = allItems[foundItemId].TenKhachHang;
        const existingDiachi = allItems[foundItemId].DiaChiKhachHang;
        // Nếu không tồn tại dữ liệu với số điện thoại đã nhập, thực hiện thêm mới
        const newItemRef = database.ref("/ThuHo/").push();
        newItemRef.set({
          SDTKhachHang: searchSdt,
          TenKhachHang: khachHang,
          DiaChiKhachHang: DiaChiKhachHangInput.value,
          ThuHo:formattedThuHo,
          Ship:ShipInput.value,
          Ngay:`${date}-${month}-${year}`,
          TrangThai:"false"
        }).then(() => {
          console.log("Thêm mới thành công!");
        })
      }
    })
    .catch(error => {
      console.error("Error getting all items:", error);
    });
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
