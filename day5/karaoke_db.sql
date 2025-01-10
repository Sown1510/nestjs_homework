# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 11.6.2-MariaDB)
# Database: karaoke
# Generation Time: 2025-01-10 18:29:14 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table chi_tiet_su_dung_dv
# ------------------------------------------------------------

DROP TABLE IF EXISTS `chi_tiet_su_dung_dv`;

CREATE TABLE `chi_tiet_su_dung_dv` (
  `MaDatPhong` varchar(10) DEFAULT NULL,
  `MaDV` varchar(10) DEFAULT NULL,
  `SoLuong` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `MaDatPhong` (`MaDatPhong`),
  KEY `MaDV` (`MaDV`),
  CONSTRAINT `chi_tiet_su_dung_dv_ibfk_1` FOREIGN KEY (`MaDatPhong`) REFERENCES `dat_phong` (`MaDatPhong`),
  CONSTRAINT `chi_tiet_su_dung_dv_ibfk_2` FOREIGN KEY (`MaDV`) REFERENCES `dich_vu_di_kem` (`MaDV`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `chi_tiet_su_dung_dv` WRITE;
/*!40000 ALTER TABLE `chi_tiet_su_dung_dv` DISABLE KEYS */;

INSERT INTO `chi_tiet_su_dung_dv` (`MaDatPhong`, `MaDV`, `SoLuong`, `created_at`)
VALUES
	('DP001','DV001',2,'2025-01-09 23:56:28'),
	('DP001','DV002',1,'2025-01-09 23:56:28'),
	('DP002','DV003',1,'2025-01-09 23:56:28'),
	('DP003','DV001',3,'2025-01-09 23:56:28'),
	('DP003','DV002',2,'2025-01-09 23:56:28');

/*!40000 ALTER TABLE `chi_tiet_su_dung_dv` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table dat_phong
# ------------------------------------------------------------

DROP TABLE IF EXISTS `dat_phong`;

CREATE TABLE `dat_phong` (
  `MaDatPhong` varchar(10) NOT NULL,
  `MaPhong` varchar(10) DEFAULT NULL,
  `MaKH` varchar(10) DEFAULT NULL,
  `NgayDat` date NOT NULL,
  `GioBatDau` time NOT NULL,
  `GioKetThuc` time NOT NULL,
  `TienDatCoc` decimal(10,2) DEFAULT NULL,
  `GhiChu` text DEFAULT NULL,
  `TrangThaiDat` varchar(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`MaDatPhong`),
  KEY `MaPhong` (`MaPhong`),
  KEY `MaKH` (`MaKH`),
  CONSTRAINT `dat_phong_ibfk_1` FOREIGN KEY (`MaPhong`) REFERENCES `phong` (`MaPhong`),
  CONSTRAINT `dat_phong_ibfk_2` FOREIGN KEY (`MaKH`) REFERENCES `khach_hang` (`MaKH`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `dat_phong` WRITE;
/*!40000 ALTER TABLE `dat_phong` DISABLE KEYS */;

INSERT INTO `dat_phong` (`MaDatPhong`, `MaPhong`, `MaKH`, `NgayDat`, `GioBatDau`, `GioKetThuc`, `TienDatCoc`, `GhiChu`, `TrangThaiDat`, `created_at`, `updated_at`)
VALUES
	('DP001','P001','1','2016-01-08','14:00:00','16:00:00',100000.00,'Khách yêu cầu phòng yên tĩnh','Đã đặt','2025-01-09 23:50:05','2025-01-09 23:50:05'),
	('DP002','P002','2','2025-01-07','13:00:00','15:00:00',50000.00,'Không có yêu cầu đặc biệt','Đã thanh toán','2025-01-09 23:50:05','2025-01-09 23:50:05'),
	('DP003','P003','3','2025-01-06','12:00:00','14:00:00',80000.00,'Khách yêu cầu thêm dịch vụ','Chưa thanh toán','2025-01-09 23:50:05','2025-01-09 23:50:05'),
	('DP004','P001','4','2025-01-09','15:00:00','20:00:00',100000.00,'Không có gì\n','Đã đặt','2025-01-11 00:53:51','2025-01-11 00:53:58'),
	('DP005','P002','5','2025-01-12','12:00:00','20:00:00',80000.00,'Không có gì','Đã đặt','2025-01-11 01:16:07','2025-01-11 01:16:12');

/*!40000 ALTER TABLE `dat_phong` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table dich_vu_di_kem
# ------------------------------------------------------------

DROP TABLE IF EXISTS `dich_vu_di_kem`;

CREATE TABLE `dich_vu_di_kem` (
  `MaDV` varchar(10) NOT NULL,
  `TenDV` varchar(100) DEFAULT NULL,
  `DonViTinh` char(10) DEFAULT NULL,
  `DonGia` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`MaDV`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `dich_vu_di_kem` WRITE;
/*!40000 ALTER TABLE `dich_vu_di_kem` DISABLE KEYS */;

INSERT INTO `dich_vu_di_kem` (`MaDV`, `TenDV`, `DonViTinh`, `DonGia`, `created_at`, `updated_at`)
VALUES
	('DV001','Nước suối','Chai',10000.00,'2025-01-09 23:49:58','2025-01-09 23:49:58'),
	('DV002','Snack','Gói',20000.00,'2025-01-09 23:49:58','2025-01-09 23:49:58'),
	('DV003','Trái cây','Dĩa',50000.00,'2025-01-09 23:49:58','2025-01-09 23:49:58'),
	('DV004','Nước ngọt','lon',15000.00,'2025-01-09 23:49:58','2025-01-09 23:49:58'),
	('DV005','Bia','lon',20000.00,'2025-01-09 23:49:58','2025-01-09 23:49:58'),
	('DV006','Bánh quy','Cai',3000.00,'2025-01-09 23:49:58','2025-01-09 23:49:58'),
	('DV007','Kẹo','Cai',4000.00,'2025-01-09 23:49:58','2025-01-09 23:49:58');

/*!40000 ALTER TABLE `dich_vu_di_kem` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table khach_hang
# ------------------------------------------------------------

DROP TABLE IF EXISTS `khach_hang`;

CREATE TABLE `khach_hang` (
  `MaKH` varchar(10) NOT NULL,
  `TenKH` varchar(100) NOT NULL,
  `DiaChi` varchar(256) DEFAULT NULL,
  `SoDT` varchar(15) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`MaKH`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `khach_hang` WRITE;
/*!40000 ALTER TABLE `khach_hang` DISABLE KEYS */;

INSERT INTO `khach_hang` (`MaKH`, `TenKH`, `DiaChi`, `SoDT`, `created_at`, `updated_at`)
VALUES
	('1','Son','Hoa xuan','01234567891','2025-01-09 23:49:38','2025-01-09 23:49:38'),
	('2','Nguyen Van A','123 Nguyen Trai, Ha Noi','0912345678','2025-01-09 23:49:38','2025-01-09 23:49:38'),
	('3','Tran Thi B','456 Le Loi, Da Nang','0923456789','2025-01-09 23:49:38','2025-01-09 23:49:38'),
	('4','Le Van C','789 Tran Phu, Ho Chi Minh','0934567890','2025-01-09 23:49:38','2025-01-09 23:49:38'),
	('5','Son','Quang Ninh','0928499384','2025-01-09 23:49:38','2025-01-09 23:49:38');

/*!40000 ALTER TABLE `khach_hang` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table phong
# ------------------------------------------------------------

DROP TABLE IF EXISTS `phong`;

CREATE TABLE `phong` (
  `MaPhong` varchar(10) NOT NULL,
  `LoaiPhong` varchar(10) DEFAULT NULL,
  `SoKhachToiDa` int(11) DEFAULT NULL,
  `GiaPhong_1gio` decimal(15,3) DEFAULT NULL,
  `MoTa` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`MaPhong`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `phong` WRITE;
/*!40000 ALTER TABLE `phong` DISABLE KEYS */;

INSERT INTO `phong` (`MaPhong`, `LoaiPhong`, `SoKhachToiDa`, `GiaPhong_1gio`, `MoTa`, `created_at`, `updated_at`)
VALUES
	('P001','VIP',4,500000.000,'Phòng VIP với nội thất cao cấp','2025-01-09 23:49:49','2025-01-09 23:49:49'),
	('P002','Standard',2,300000.000,'Phòng tiêu chuẩn với tiện nghi cơ bản','2025-01-09 23:49:49','2025-01-09 23:49:49'),
	('P003','Deluxe',3,400000.000,'Phòng Deluxe có không gian rộng rãi','2025-01-09 23:49:49','2025-01-09 23:49:49');

/*!40000 ALTER TABLE `phong` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
