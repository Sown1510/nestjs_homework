-- 1 Hiển thị TenKH của tất cả các khách hàng có trong hệ thống, TenKH nào trùng nhau thì chỉ hiển thị một lần
select TenKH from khach_hang group by TenKH

-- 2 Hiển thị MaDV, TenDV, DonViTinh, DonGia của những dịch vụ đi kèm có DonViTinh là “lon” và có DonGia lớn hơn 10,000 VNĐ hoặc những dịch vụ đi kèm có DonViTinh là “Cai” và có DonGia nhỏ hơn 5,000 VNĐ
select dich_vu_di_kem.* from dich_vu_di_kem where (DonViTinh = 'lon' and DonGia > 10000) or (DonViTinh = 'Cai' and DonGia < 5000)

-- 3 Hiển thị MaDatPhong, MaPhong, LoaiPhong, SoKhachToiDa, GiaPhong, MaKH, TenKH, SoDT, NgayDat, GioBatDau, GioKetThuc, MaDichVu, SoLuong, DonGia của những đơn đặt phòng có năm đặt phòng là “2016”, “2017” và đặt những phòng có giá phòng > 50,000 VNĐ/ 1 gid

select 
dat_phong.MaDatPhong, dat_phong.MaPhong, phong.LoaiPhong, phong.SoKhachToiDa, phong.GiaPhong_1gio, khach_hang.MaKH, khach_hang.TenKH, khach_hang.SoDT, dat_phong.NgayDat, dat_phong.GioBatDau, dat_phong.GioKetThuc, chi_tiet_su_dung_dv.MaDV, chi_tiet_su_dung_dv.SoLuong, dich_vu_di_kem.DonGia 
from 
dat_phong
join khach_hang on dat_phong.MaKH = khach_hang.MaKH
join phong on dat_phong.MaPhong = phong.MaPhong
join chi_tiet_su_dung_dv on chi_tiet_su_dung_dv.MaDatPhong = dat_Phong.MaDatPhong
join dich_vu_di_kem on chi_tiet_su_dung_dv.MaDV = dich_vu_di_kem.MaDV
where (NgayDat >= '2016-01-01' AND NgayDat < '2018-01-01') AND GiaPhong_1gio > 50000

-- 4 Hiển thị MaDatPhong, MaPhong, LoaiPhong, GiaPhong, TenKH, NgayDat, TongTienHat, TongTienSuDungDichVu, TongTienThanhToan tương ứng với từng mã đặt phòng có trong bảng DAT_PHONG. Những đơn đặt phòng nào không sử dụng dịch vụ đi kèm thì cũng liệt kê thông tin của đơn đặt phòng đó ra
-- TongTienHat = GiaPhong * (GioKetThuc – GioBatDau)
-- TongTienSuDungDichVu = SoLuong * DonGia
-- TongTienThanhToan = TongTienHat + sum (TongTienSuDungDichVu)
select 
dat_phong.MaDatPhong, dat_phong.MaPhong, dat_phong.NgayDat,
phong.LoaiPhong, phong.GiaPhong_1gio,
khach_hang.TenKH,
phong.GiaPhong_1gio * (dat_phong.GioKetThuc - dat_phong.GioBatDau) as TongTienHat,
chi_tiet_su_dung_dv.SoLuong * dich_vu_di_kem.DonGia as TongTienSuDungDichVu,
(phong.GiaPhong_1gio * (dat_phong.GioKetThuc - dat_phong.GioBatDau)) + SUM(chi_tiet_su_dung_dv.SoLuong * dich_vu_di_kem.DonGia) as TongTienThanhToan
from dat_phong
join phong on dat_phong.MaPhong = phong.MaPhong
join khach_hang on dat_phong.MaKH = khach_hang.MaKH
join chi_tiet_su_dung_dv on chi_tiet_su_dung_dv.MaDatPhong = dat_phong.MaDatPhong
join dich_vu_di_kem on dich_vu_di_kem.MaDV = chi_tiet_su_dung_dv.MaDV
GROUP BY 
    dat_phong.MaDatPhong, dat_phong.MaPhong, phong.LoaiPhong, phong.GiaPhong_1gio, khach_hang.TenKH, dat_phong.NgayDat, dat_phong.GioKetThuc, dat_phong.GioBatDau;


-- 5 Hiển thị MaKH, TenKH, DiaChi, SoDT của những khách hàng đã từng đặt phòng karaoke có địa chỉ ở “Hoa xuan”
select 
khach_hang.*,
dat_phong.MaKH
from khach_hang
join dat_phong on dat_phong.MaKH = khach_hang.MaKH
where DiaChi = "Hoa xuan"

-- 6 Hiển thị MaPhong, LoaiPhong, SoKhachToiDa, GiaPhong, SoLanDat của những phòng được khách hàng đặt có số lần đặt lớn hơn 2 lần và trạng thái đặt là “Da dat”

select
    phong.*,
    COUNT(dat_phong.MaPhong) as SoLanDat
from 
    phong
join 
    dat_phong on phong.MaPhong = dat_phong.MaPhong
where 
    dat_phong.TrangThaiDat = 'Đã đặt'
group by 
    phong.MaPhong
having 
	COUNT(dat_phong.MaPhong) >= 2
