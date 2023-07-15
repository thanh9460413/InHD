const addBtn = document.getElementById('add-btn');
const printBtn = document.getElementById('print-btn');
const khachHangInput = document.getElementById('kh-input');
const SDTkhachHangInput = document.getElementById('sdt-input');
const DiaChikhachHangInput = document.getElementById('diachi-input');

let stt = 0;
let totalAmount = 0;
let khachHang = '';
let SDTKhachhang = '';
let DiaChiKhachhang = '';
addBtn.addEventListener('click', function() {
  const table = document.getElementById('report-table');
  const tbody = table.querySelector('tbody');
  const newRow = document.createElement('tr');
  const inputFields = document.getElementsByClassName('input-field');

  // Tạo ô STT mới và tự động đếm
  const sttCell = document.createElement('td');
  sttCell.textContent = ++stt;
  newRow.appendChild(sttCell);
// Tạo các ô mới và thêm dữ liệu nhập vào
let amount = 0;
for (let i = 3; i < inputFields.length; i++) {
  const cell = document.createElement('td');
  if (i === 3) {
    cell.textContent = inputFields[i].value;
  } else if (i === 5) {
    amount = parseFloat(inputFields[i].value.replace(/\./g, ''));
    const formattedAmount = amount.toLocaleString('en-US', { minimumFractionDigits: 0 });
    cell.textContent = formattedAmount.replace(/,/g, '.') + '.000';
  } else {
    cell.textContent = inputFields[i].value;
  }
  newRow.appendChild(cell);
}



  // Tạo nút x và gắn sự kiện xóa item khi nhấp vào nút x
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'x';
  deleteBtn.classList.add(".close");
  deleteBtn.addEventListener('click', function() {
    newRow.remove();
    updateSttAndTotalAmount();
  });

  // Thêm ô nút x vào hàng mới
  const deleteCell = document.createElement('td');
  deleteCell.appendChild(deleteBtn);
  newRow.appendChild(deleteCell);

  // Thêm hàng mới vào tbody
  tbody.insertBefore(newRow, tbody.firstChild);

  // Cập nhật tổng tiền
  totalAmount += amount;
  const totalCell = document.getElementById('total-amount');
  totalCell.textContent = totalAmount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  inputFields[3].value = '';
  inputFields[4].value = '';
  inputFields[5].value = '';
  updateSttAndTotalAmount();
});


printBtn.addEventListener('click', function() {
  khachHang = khachHangInput.value;
  SDTKhachhang = SDTkhachHangInput.value;
  DiaChiKhachhang = DiaChikhachHangInput.value;

  const table = document.getElementById('report-table');
  const tableData = [];

  const tbody = table.querySelector('tbody');
  const rows = tbody.getElementsByTagName('tr');
  for (let i = 0; i < rows.length; i++) {
    const rowData = [];
    const cells = rows[i].getElementsByTagName('td');
    let skipRow = false;
    for (let j = 0; j < cells.length - 1; j++) {
      const cellContent = cells[j].textContent;
      if (cellContent === "x") {
        skipRow = true;
        break;
      } else {
        rowData.push(cellContent);
      }
    }
    if (!skipRow) {
      tableData.push(rowData);
    }
  }
// Sắp xếp lại các dòng trong mảng tableData
  tableData.reverse();
  const docDefinition = {
    // pageOrientation: 'landscape',
    content: [
      { text: `Gốm Nhật Yến Vân`, style: 'header' },
      { text: `SĐT/Zalo: 0918095223 & 0919696242` },
      { text: `Địa chỉ: 271 An Dương Vương Phường An Lạc Quận Bình Tân TpHCM` },
      { text: `Tên Khách Hàng: ${khachHang}` },
      { text: `SĐT Khách Hàng: ${SDTKhachhang}` },
      { text: `Địa Chỉ Khách Hàng: ${DiaChiKhachhang}` },
      {
        table: {
          headerRows: 1,
          widths: ['5%', '60%', '15%', '20%'],
          body: [
            ['STT', 'Tên món hàng', 'Số lượng', 'Thành tiền'],
            ...tableData,
            [
              { text: 'Tổng tiền:', colSpan: 3, bold: true, alignment: 'right' },
              '',
              '',
              { text: `${totalAmount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`, bold: true }
            ]
          ]
        }
      }
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        alignment: 'center',
        margin: [0, 0, 0, 0]
      }
    }
  };

  const pdfDocGenerator = pdfMake.createPdf(docDefinition);
  pdfDocGenerator.download('phieu_bao_cao.pdf');
});




// Hàm cập nhật số thứ tự và tổng tiền
function updateSttAndTotalAmount() {
  stt = 0;
  totalAmount = 0;
  const table = document.getElementById('report-table');
  const rows = table.querySelectorAll('tbody tr');
  rows.forEach((row, index) => {
    const sttCell = row.cells[0];
    sttCell.textContent = rows.length - index;

    const amountCell = row.cells[3];
    const amountText = amountCell.textContent;
    const amount = parseFloat(amountText.replace(/\./g, '').replace('.000', ''));
    totalAmount += amount;
  });

  const totalCell = document.getElementById('total-amount');
  totalCell.textContent = totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

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
