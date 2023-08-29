const addBtn = document.getElementById('add-btn');
const printBtn = document.getElementById('print-btn');
const khachHangInput = document.getElementById('kh-input');
const SDTkhachHangInput = document.getElementById('sdt-input');
const DiaChikhachHangInput = document.getElementById('diachi-input');
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
const thuHoRef = database.ref("/ThuHo");
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('#navbarNav');

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
function convertDateToSortableFormat(dateString) {
    const [day, month, year] = dateString.split("-");
    return `${year}-${month}-${day}`;
  }
// Function to display data as cards
function displayData(data) {
    data.sort((a, b) => {
        const dateA = convertDateToSortableFormat(a.Ngay);
        const dateB = convertDateToSortableFormat(b.Ngay);
        return dateB.localeCompare(dateA);
    });
  const dataContainer = document.getElementById("data-container");
  dataContainer.innerHTML = ""; // Clear previous data
  data.forEach((item) => {
    const { SDTKhachHang, TenKhachHang, DiaChiKhachHang, ThuHo, Ship, Ngay, TrangThai } = item;
    const statusText = TrangThai === "true" ? "Đã thu tiền" : "Chưa thu tiền";
    const bgColorClass = TrangThai === "true" ? "bg-success" : "bg-warning";
    const trangThaiTextColorClass = TrangThai === "true" ? "text-da-thu" : "text-chua-thu";

    const cardHtml = `
        <div class="col-md-4 my-2">
        <div class="card ${bgColorClass}">
        <div class="card-body">
            <h2 class="card-title" style="text-align: center;">${TenKhachHang}</h2>
            <p class="card-text label-bold"><strong>SĐT:</strong> <span class="sdt">${SDTKhachHang}</span></p>
            <p class="card-text label-bold"><strong>Địa Chỉ:</strong> ${DiaChiKhachHang}</p>
            <p class="card-text label-bold"><strong>Ngày:</strong> ${Ngay.replace("-","/").replace("-","/")}</p>
            <p class="card-text label-bold"><strong>Ship:</strong> ${Ship}</p>
            <p class="card-text label-bold"><strong>Thu Hộ:</strong> ${ThuHo}</p>
            <p class="card-text label-bold"><strong>Trạng thái:</strong> <span class="${trangThaiTextColorClass} trang-thai-text">${statusText}</span></p>
        </div>
        </div>
    </div>
    `;

    dataContainer.innerHTML += cardHtml;
  });
}

function fetchAndDisplayData() {
  thuHoRef.once('value')
    .then(snapshot => {
      const data = snapshot.val();
      if (data) {
        const dataArray = Object.entries(data).map(([key, value]) => ({ key, ...value }));
        displayData(dataArray);
        addClickEventListeners(dataArray);
      }
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

// Call the fetchAndDisplayData function when the page is initially loaded
fetchAndDisplayData();

function updateTrangThai(key, currentStatus) {
  const newTrangThai = currentStatus === "true" ? "false" : "true";
  const updates = {
    TrangThai: newTrangThai
  };

  thuHoRef.child(key).update(updates)
    .then(() => {
      console.log("Trạng thái đã được cập nhật!");
      fetchAndDisplayData(); // Reload the data to update the display and colors
    })
    .catch(error => {
      console.error("Error updating TrangThai:", error);
    });
}

// Function to update TrangThai based on SDT
function updateTrangThaiBySDT(sdt) {
  thuHoRef.once('value')
    .then(snapshot => {
      const data = snapshot.val();
      if (data) {
        const dataArray = Object.entries(data).map(([key, value]) => ({ key, ...value }));
        const item = dataArray.find(item => item.SDTKhachHang === sdt);
        if (item) {
          updateTrangThai(item.key, item.TrangThai);
        } else {
          console.error("SDT not found in the database!");
        }
      }
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

// Function to check TrangThai and apply appropriate colors
function applyColorsToCards(dataArray) {
  const cards = document.getElementsByClassName("card");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const item = dataArray[i];
    const bgColorClass = item.TrangThai === "true" ? "bg-success" : "bg-warning";
    const trangThaiTextColorClass = item.TrangThai === "true" ? "text-da-thu" : "text-chua-thu";
    card.classList.remove("bg-success", "bg-warning");
    card.classList.add(bgColorClass);
    card.querySelector(".trang-thai-text").textContent = item.TrangThai === "true" ? "Đã thu tiền" : "Chưa thu tiền";
    card.querySelector(".trang-thai-text").classList.remove("text-da-thu", "text-chua-thu");
    card.querySelector(".trang-thai-text").classList.add(trangThaiTextColorClass);
  }
}

// Add click event listener to each card to update the TrangThai

// Function to search data based on the query
function searchData() {
  const searchQuery = document.getElementById("search-input").value.toLowerCase();
  thuHoRef.once('value')
    .then(snapshot => {
      const data = snapshot.val();
      if (data) {
        const dataArray = Object.entries(data).map(([key, value]) => ({ key, ...value }));
        const searchDataArray = dataArray.filter(item => {
          const { TenKhachHang, SDTKhachHang, Ngay } = item;

          // Check if the properties exist and contain the search query
          const tenKhachHangMatch = TenKhachHang && TenKhachHang.toLowerCase().includes(searchQuery);
          const sdtKhachHangMatch = SDTKhachHang && SDTKhachHang.includes(searchQuery);
          const ngayMatch = Ngay && Ngay.includes(searchQuery);

          return tenKhachHangMatch || sdtKhachHangMatch || ngayMatch;
        });
        displayData(searchDataArray);
        applyColorsToCards(searchDataArray);
        addClickEventListeners(searchDataArray);
      }
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

// Add keyup event listener to the search input field
const searchInput = document.getElementById("search-input");
searchInput.addEventListener('keyup', searchData);

// Function to update card colors based on TrangThai
function updateCardColors(dataArray) {
  const cards = document.getElementsByClassName("card");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const item = dataArray[i];
    const bgColorClass = item.TrangThai === "true" ? "bg-success" : "bg-warning";
    const trangThaiTextColorClass = item.TrangThai === "true" ? "text-da-thu" : "text-chua-thu";
    card.classList.remove("bg-success", "bg-warning");
    card.classList.add(bgColorClass);
    card.querySelector(".trang-thai-text").textContent = item.TrangThai === "true" ? "Đã thu tiền" : "Chưa thu tiền";
    card.querySelector(".trang-thai-text").classList.remove("text-da-thu", "text-chua-thu");
    card.querySelector(".trang-thai-text").classList.add(trangThaiTextColorClass);
  }
}

// Function to update the displayed data and colors based on the search query
function updateDisplayAndColorsByQuery() {
  const searchQuery = searchInput.value.toLowerCase();
  thuHoRef.once('value')
    .then(snapshot => {
      const data = snapshot.val();
      if (data) {
        const dataArray = Object.entries(data).map(([key, value]) => ({ key, ...value }));
        const searchDataArray = dataArray.filter(item => {
          const { TenKhachHang, SDTKhachHang, Ngay } = item;
          const tenKhachHangMatch = TenKhachHang && TenKhachHang.toLowerCase().includes(searchQuery);
          const sdtKhachHangMatch = SDTKhachHang && SDTKhachHang.includes(searchQuery);
          const ngayMatch = Ngay && Ngay.includes(searchQuery);
          return tenKhachHangMatch || sdtKhachHangMatch || ngayMatch;
        });
        displayData(searchDataArray);
        updateCardColors(searchDataArray);
        addClickEventListeners(searchDataArray);
      }
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

// Fetch all data from Firebase and display it initially
fetchAndDisplayData();
// Add keyup event listener to the search input field
// Add click event listener to each card to update the TrangThai
function addClickEventListeners(dataArray) {
    const cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
  
      card.addEventListener('click', function () {
        const item = dataArray[i];
        updateTrangThai(item.key, item.TrangThai);
  
        // After updating TrangThai, fetch and update the displayed data based on the current search query
        const searchQuery = searchInput.value.toLowerCase();
        thuHoRef.once('value')
          .then(snapshot => {
            const data = snapshot.val();
            if (data) {
              const dataArray = Object.entries(data).map(([key, value]) => ({ key, ...value }));
              const searchDataArray = dataArray.filter(item => {
                const { TenKhachHang, SDTKhachHang, Ngay } = item;
                const tenKhachHangMatch = TenKhachHang && TenKhachHang.toLowerCase().includes(searchQuery);
                const sdtKhachHangMatch = SDTKhachHang && SDTKhachHang.includes(searchQuery);
                const ngayMatch = Ngay && Ngay.includes(searchQuery);
                return tenKhachHangMatch || sdtKhachHangMatch || ngayMatch;
              });
              displayData(searchDataArray);
              updateCardColors(searchDataArray);
              addClickEventListeners(searchDataArray);
            }
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      });
    }
}
ExcelBtn.addEventListener('click', () => {
  const sheetName = "Danh Sách Bán Hàng";
  const fileName = "Danh Sách Bán Hàng.xlsx";
  thuHoRef.once('value')
  .then(snapshot => {
    const allItems = snapshot.val();
    // Tạo một mảng chứa dữ liệu xuất với tiêu đề các cột
    const exportData = [["STT", "SDT", "Tên khách hàng","Ngày","Địa chỉ", "Ship", "Thu hộ", "Trạng thái"]];
    // Thêm dữ liệu từng hàng từ firebase vào mảng
    Object.keys(allItems).forEach((key, index) => {
      exportData.push([
        index + 1,
        allItems[key].SDTKhachHang,
        allItems[key].TenKhachHang,
        allItems[key].Ngay,
        allItems[key].DiaChiKhachHang,
        allItems[key].Ship,
        allItems[key].ThuHo,
        allItems[key].TrangThai === 'true'? 'Đã thu tiền':'Chưa thu tiền'
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