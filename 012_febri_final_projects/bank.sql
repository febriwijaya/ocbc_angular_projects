-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 03 Nov 2021 pada 19.50
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 7.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bank`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `paymentdetails`
--

CREATE TABLE `paymentdetails` (
  `paymentDetailId` int(11) NOT NULL,
  `cardOwnerName` varchar(100) DEFAULT NULL,
  `cardNumber` varchar(50) DEFAULT NULL,
  `expirationDate` varchar(100) DEFAULT NULL,
  `securityCode` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `paymentdetails`
--

INSERT INTO `paymentdetails` (`paymentDetailId`, `cardOwnerName`, `cardNumber`, `expirationDate`, `securityCode`) VALUES
(1, 'Febri', '123456789098', '09/98', '123456');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_payment_detail`
--

CREATE TABLE `tb_payment_detail` (
  `paymentDetailId` int(11) NOT NULL,
  `cardOwnerName` varchar(100) NOT NULL,
  `cardNumber` varchar(100) NOT NULL,
  `expirationDate` varchar(100) NOT NULL,
  `securityCode` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_payment_detail`
--

INSERT INTO `tb_payment_detail` (`paymentDetailId`, `cardOwnerName`, `cardNumber`, `expirationDate`, `securityCode`) VALUES
(2, 'febri wijaya galung', '1234564895644905', '24/20', '098'),
(3, 'raja indra', '1658989909090034', '24/20', '123');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `paymentdetails`
--
ALTER TABLE `paymentdetails`
  ADD PRIMARY KEY (`paymentDetailId`);

--
-- Indeks untuk tabel `tb_payment_detail`
--
ALTER TABLE `tb_payment_detail`
  ADD PRIMARY KEY (`paymentDetailId`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `paymentdetails`
--
ALTER TABLE `paymentdetails`
  MODIFY `paymentDetailId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `tb_payment_detail`
--
ALTER TABLE `tb_payment_detail`
  MODIFY `paymentDetailId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
