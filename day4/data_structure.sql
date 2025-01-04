USE hocdb;
CREATE TABLE KHACH_HANG (
	id INT,
	`MaKH` VARCHAR(10),
	`TenKH` VARCHAR(100),
	`DiaChi` VARCHAR(256),
	`SoDT` VARCHAR(15)
);

USE hocdb;
CREATE TABLE PHONG (
	`MaPhong` VARCHAR(10),
	`LoaiPhong` VARCHAR(10),
	`SoKhachToiDa` INT,
	`GiaPhong_1gio` DECIMAL(15,3),
	`MoTa` TEXT
);

USE hocdb;
CREATE TABLE DICH_VU_DI_KEM (
	`MaDV` VARCHAR(10),
	`TenDV` VARCHAR(100),
	`DonViTinh` CHAR(10),
	`DonGia` DECIMAL(10,2)
)

USE hocdb;
CREATE TABLE DAT_PHONG (
	`MaDatPhong` VARCHAR(10),
	`MaPhong` VARCHAR(10),
	`MaKH` VARCHAR(10),
	`NgayDat` DATE,
	`GioBatDau` TIME,
	`GioKetThuc` TIME,
	`TienDatCoc` DECIMAL(10,2),
	`GhiChu` TEXT,
	`TrangThaiDat` VARCHAR(20)
)

USE hocdb;
CREATE TABLE chi_tiet_su_dung_dv (
	`MaDatPhong` VARCHAR(10),
	`MaDV` VARCHAR(10),
	`SoLuong` INT,
	PRIMARY KEY (`MaDatPhong`, `MaDV`),
	FOREIGN KEY (`MaDatPhong`) REFERENCES dat_phong(MaDatPhong) ON DELETE CASCADE,
	FOREIGN KEY (`MaDV`) REFERENCES dich_vu_di_kem(MaDV) ON DELETE CASCADE
);

INSERT INTO phong (`MaPhong`, `LoaiPhong`, `SoKhachToiDa`, `GiaPhong_1gio`, `MoTa`) 
VALUES 
("P0001", "Loai 1", 20, 60000, ""), 
("P0002", "Loai 1", 25, 80000, ""), 
("P0003", "Loai 2", 15, 50000, ""), 
("P0004", "Loai 3", 20, 50000, "");

INSERT INTO khach_hang(`MaKH`, `TenKH`, `DiaChi`, `SoDT`) 
VALUES
("KH0001", "Nguyen Van A", "Hoa xuan", 111111111),
("KH0002", "Nguyen Van B", "Hoa hai", 111111112),
("KH0003", "Phan Van A", "Cam le", 11111113),
("KH0004", "Phan Van B", "Hoa xuan", 11111114);

INSERT INTO dich_vu_di_kem(`MaDV`, `TenDV`, `DonViTinh`, `DonGia`) 
VALUES 
("DV001", "Beer", "lon", 10000),
("DV002", "Nuoc ngot", "lon", 8000),
("DV003", "Trai cay", "dia", 35000),
("DV004", "Khan uot", "cai", 2000);

INSERT INTO dat_phong (`MaDatPhong`, `MaPhong`, `MaKH`, `NgayDat`, `GioBatDau`, `GioKetThuc`, `TienDatCoc`, `GhiChu`, `TrangThaiDat`) 
VALUES
("DP0001", "P0001", "KH0002", '2018-03-26', '11:00', '13:30', 100000, "", "Da dat"), 
("DP0002", "P0001", "KH0003", '2018-03-27', '17:15', '19:15', 50000, "", "Da huy"),
("DP0003", "P0002", "KH0002", '2018-03-26', '20:30', '22:15', 100000, "", "Da dat"),
("DP0004", "P0003", "KH0001", '2018-04-01', '19:30', '21:15', 200000, "", "Da dat"),

INSERT INTO chi_tiet_su_dung_dv (MaDatPhong, MaDV, SoLuong)
VALUES
("DP0003", "DV003", 2),
("DP0003", "DV004", 10);





