const addBtn = document.getElementById('add-btn');
const printBtn = document.getElementById('print-btn');
const khachHangInput = document.getElementById('kh-input');
let stt = 0;
let totalAmount = 0;
let khachHang = '';

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
  for (let i = 1; i < inputFields.length; i++) {
    const cell = document.createElement('td');
    if (i === 1) {
      cell.textContent = inputFields[i].value;
    } else if (i === 3) {
      const formattedAmount = parseFloat(inputFields[i].value.replace('.', '').replace(',', ''));
      amount = formattedAmount;
      cell.textContent = formattedAmount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.000';
    } else {
      cell.textContent = inputFields[i].value;
    }
    newRow.appendChild(cell);
  }

  // Thêm hàng mới vào tbody
  tbody.appendChild(newRow);

  // Xóa dữ liệu đã nhập
  for (let i = 1; i < inputFields.length; i++) {
    inputFields[i].value = '';
  }

  // Cập nhật tổng tiền
  totalAmount += amount;
  const totalCell = document.getElementById('total-amount');
  totalCell.textContent = totalAmount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.000';
});

printBtn.addEventListener('click', function() {
  khachHang = khachHangInput.value;

  const table = document.getElementById('report-table');
  const tableData = [];

  for (let i = 1; i < table.rows.length - 1; i++) {
    const rowData = [];
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      rowData.push(table.rows[i].cells[j].textContent);
    }
    tableData.push(rowData);
  }

  const docDefinition = {
    content: [
      { text: `${khachHang}`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['5%', '60%', '15%', '20%'],
          body: [
            ['STT', 'Tên món hàng', 'Số lượng', 'Thành tiền'],
            ...tableData,
            [{ text: 'Tổng tiền:', colSpan: 3, bold: true, alignment: 'right' }, '', '', { text: `${totalAmount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.000`, bold: true }]
          ]
        }
      }
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        alignment: 'center',
        margin: [0, 0, 0, 10]
      }
    }
  };

  const pdfDocGenerator = pdfMake.createPdf(docDefinition);
  pdfDocGenerator.download('phieu_bao_cao.pdf');

  // Reset ô nhập liệu cho tên khách hàng
  khachHangInput.value = '';
});
