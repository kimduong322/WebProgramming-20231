document.addEventListener("DOMContentLoaded", function () {
    let hoTen = "Đào Kim Dương";
    let MSSV = "20205075";
    let namVaoTruong = 2020;
    let bacDaoTao = "KSCLC-TN-TT-VN-ICT";
    let chuongTrinh = "Công nghệ thông tin Việt-Nhật 2020";
    let khoaVienQuanLy = "Trường Công nghệ Thông tin và Truyền thông";
    let tinhTrangHocTap = "Học";
    let gioiTinh = "Nam";
    let lop = "Việt Nhật 02-K65";
    let khoaHoc = 65;
    let email = "duong.dk205075@sis.hust.edu.vn";
    let tongKetHocKy = 20222;
    let trungBinhTichLuy = 3.5;
    let soTCNoDangKy = 4;
    let soTCTichLuy = 98;
    let trinhDoSinhVien = 4;
    let mucCanhBao = "M0";
    let danToc = "KINH";
    let namTNCap3 = "Không có dữ liệu";
    let diaChi = "XÃ QUẢNG BỊ, HUYỆN CHƯƠNG MỸ, THÀNH PHỐ HÀ NỘI";
    let soCMTND = "001***44";
    let noiCap = "THÀNH PHỐ HÀ NỘI";
    let hoTenBo = "ĐÀO KIM HẢI";
    let namSinhBo = "20-08-1976";
    let ngheNghiepBo = "CÔNG NHÂN";
    let dienThoaiBo = "096***00";
    let emailBo = "DA*@*IL.COM";
    let tonGiao = "KHÔNG";
    let truongTHPT = "THPT CHƯƠNG MỸ A, HUYỆN CHƯƠNG MỸ, THÀNH PHỐ HÀ NỘI";
    let hoKhau = "XÃ QUẢNG BỊ, HUYỆN CHƯƠNG MỸ, THÀNH PHỐ HÀ NỘI";
    let soDienThoaiKhau = "038***76";
    let hoTenMe = "TRỊNH THỊ QUỲNH";
    let namSinhMe = "18-08-1980";
    let ngheNghiepMe = "BUÔN BÁN";
    let dienThoaiMe = "038***46";
    let emailMe = "DA*@*IL.COM";
    
    // Lấy thẻ span dựa trên ID
    let lbTextInfo1 = document.getElementById("ctl00_ctl00_contentPane_MainPanel_MainContent_lbTextInfo1");
    // Cập nhật nội dung của thẻ span dựa trên biến thông tin
    lbTextInfo1.innerHTML = `<strong>Họ và tên : </strong><span>${hoTen}</span><br>
                            <strong>Năm vào trường : </strong><span>${namVaoTruong}</span><br>
                            <strong>Bậc đào tạo : </strong><span>${bacDaoTao}</span><br>
                            <strong>Chương trình : </strong><span>${chuongTrinh}</span><br>
                            <strong>Khoa/Viện quản lý : </strong><span>${khoaVienQuanLy}</span><br>
                            <strong>Tình trạng học tập : </strong><span>${tinhTrangHocTap}</span><br>`;
    let lbTextInfo2 = document.getElementById("ctl00_ctl00_contentPane_MainPanel_MainContent_lbTextInfo2");
    lbTextInfo2.innerHTML = `<strong>Giới tính : </strong><span>${gioiTinh}</span><br>
                            <strong>Lớp : </strong><span>${lop}</span><br>
                            <strong>Khóa học : </strong><span>${khoaHoc}</span><br>
                            <strong>Email : </strong><span>${email}</span><br>`;
    let lbTextInfo3 = document.getElementById("ctl00_ctl00_contentPane_MainPanel_MainContent_lbTextInfo3");
    lbTextInfo3.innerHTML = `<strong>Tổng kết học kỳ : </strong><span>${tongKetHocKy}</span><br>
                            <strong>Trung bình tích lũy : </strong><span>${trungBinhTichLuy}</span><br>
                            <strong>Số TC nợ đăng ký : </strong><span>${soTCNoDangKy}</span><br>`;
    let lbTextInfo4 = document.getElementById("ctl00_ctl00_contentPane_MainPanel_MainContent_lbTextInfo4");
    lbTextInfo4.innerHTML = `<strong>Số TC tích lũy : </strong><span>${soTCTichLuy}</span><br>
                            <strong>Trình độ sinh viên : </strong><span>${trinhDoSinhVien}</span><br>
                            <strong>Mức cảnh báo : </strong><span>${mucCanhBao}</span><br>`;
    let lbTextInfo5 = document.getElementById("ctl00_ctl00_contentPane_MainPanel_MainContent_lbTextInfo5");
    lbTextInfo5.innerHTML = `<strong>Dân tộc : </strong><span>${danToc}</span><br>
                            <strong>Năm TN cấp 3 : </strong><span>${namTNCap3}</span><br>
                            <strong>Địa chỉ : </strong><span>${diaChi}</span><br>
                            <strong>Số CMTND : </strong><span>${soCMTND}</span><br>
                            <strong>Nơi cấp : </strong><span>${noiCap}</span><br>
                            <strong>Họ tên bố : </strong><span>${hoTenBo}</span><br>
                            <strong>Năm sinh : </strong><span>${namSinhBo}</span><br>
                            <strong>Nghề nghiệp : </strong><span>${ngheNghiepBo}</span><br>
                            <strong>Điện thoại : </strong><span>${dienThoaiBo}</span><br>
                            <strong>Email : </strong><span>${emailBo}</span><br>`;
    let lbTextInfo6 = document.getElementById("ctl00_ctl00_contentPane_MainPanel_MainContent_lbTextInfo6");
    lbTextInfo6.innerHTML = `<strong>Tôn giáo : </strong><span>${tonGiao}</span><br>
                            <strong>Trường THPT : </strong><span>${truongTHPT}</span><br>
                            <strong>Hộ khẩu : </strong><span>${hoKhau}</span><br>
                            <strong>Số Điện thoại : </strong><span>${soDienThoaiKhau}</span><br>
                            <strong>Họ tên mẹ : </strong><span>${hoTenMe}</span><br>
                            <strong>Năm sinh : </strong><span>${namSinhMe}</span><br>
                            <strong>Nghề nghiệp : </strong><span>${ngheNghiepMe}</span><br>
                            <strong>Điện thoại : </strong><span>${dienThoaiMe}</span><br>
                            <strong>Email : </strong><span>${emailMe}</span><br>`;

    // Lấy các trường thông tin ban đầu từ script.js
    document.getElementById("hoTen").value = hoTen;
    // Thêm các trường thông tin khác ở đây
    // Lấy các trường thông tin bằng ID và đặt giá trị cho chúng
    document.getElementById("hoTen").value = hoTen;
    document.getElementById("namVaoTruong").value = namVaoTruong;
    document.getElementById("bacDaoTao").value = bacDaoTao;
    document.getElementById("chuongTrinh").value = chuongTrinh;
    document.getElementById("khoaVienQuanLy").value = khoaVienQuanLy;
    document.getElementById("tinhTrangHocTap").value = tinhTrangHocTap;
    document.getElementById("gioiTinh").value = gioiTinh;
    document.getElementById("lop").value = lop;
    document.getElementById("khoaHoc").value = khoaHoc;
    document.getElementById("email").value = email;


    // Hiển thị form chỉnh sửa khi nút "Chỉnh sửa" được nhấn
    document.getElementById("editButton").addEventListener("click", function() {
        document.getElementById("editForm").style.display = "block";
    });

    // Xử lý sự kiện khi nút "Cancel" được nhấn
    document.getElementById("cancelButton").addEventListener("click", function() {
        document.getElementById("editForm").style.display = "none";
    });

    // Xử lý sự kiện khi form được gửi (OK)
    document.getElementById("updateForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn form gửi lại trang
        // Lấy dữ liệu từ form và cập nhật các biến (hoTen, namVaoTruong, ...)
        hoTen = document.getElementById("hoTen").value;
        // Cập nhật các biến khác ở đây
        // Lấy dữ liệu từ form và cập nhật các biến
        namVaoTruong = document.getElementById("namVaoTruong").value;
        bacDaoTao = document.getElementById("bacDaoTao").value;
        chuongTrinh = document.getElementById("chuongTrinh").value;
        khoaVienQuanLy = document.getElementById("khoaVienQuanLy").value;
        tinhTrangHocTap = document.getElementById("tinhTrangHocTap").value;
        gioiTinh = document.getElementById("gioiTinh").value;
        lop = document.getElementById("lop").value;
        khoaHoc = document.getElementById("khoaHoc").value;
        email = document.getElementById("email").value;

        // Cập nhật các giá trị mới lên trang
        lbTextInfo1.innerHTML = `<strong>Họ và tên : </strong><span>${hoTen}</span><br>
                            <strong>Năm vào trường : </strong><span>${namVaoTruong}</span><br>
                            <strong>Bậc đào tạo : </strong><span>${bacDaoTao}</span><br>
                            <strong>Chương trình : </strong><span>${chuongTrinh}</span><br>
                            <strong>Khoa/Viện quản lý : </strong><span>${khoaVienQuanLy}</span><br>
                            <strong>Tình trạng học tập : </strong><span>${tinhTrangHocTap}</span><br>`;

        // Ẩn form sau khi cập nhật
        document.getElementById("editForm").style.display = "none";
});

    
});
