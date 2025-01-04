-- 1. Liệt kê MaDatPhong, MaDV, SoLuong của tất cả các dịch vụ có số lượng lớn hơn 3 và nhỏ hơn 10
SELECT * FROM chi_tiet_su_dung_dv WHERE SoLuong > 3 AND SoLuong < 10;

-- 2. Cập nhật dữ liệu trên trường GiaPhong thuộc bảng PHONG tăng lên 10,000 VNĐ so với giá phòng hiện tại, 
chỉ cập nhật giá phòng của những phòng có số khách tối đa lớn hơn 10.
UPDATE phong SET GiaPhong_1gio = GiaPhong_1gio + 10000 WHERE SoKhachToiDa > 10;

-- 3. Xóa tất cả những đơn đặt phòng (từ bảng DAT_PHONG) có trạng thái đặt (TrangThaiDat) là “Da huy”.
DELETE FROM dat_phong WHERE TrangThaiDat = 'Da huy';

-- 4. Hiển thị TenKH của những khách hàng có tên bắt đầu là một trong các ký tự “H”, “N”, “M” và có độ dài tối đa là 20 ký tự
SELECT TenKH FROM khach_hang WHERE (TenKH LIKE 'H%' OR TenKH LIKE 'N%' OR TenKH LIKE 'M%') AND LENGTH(khach_hang.TenKH) <= 20;
