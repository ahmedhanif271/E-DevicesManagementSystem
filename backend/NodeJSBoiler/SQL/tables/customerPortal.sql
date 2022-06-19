-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 12, 2022 at 10:01 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `edms`
--

-- --------------------------------------------------------

--
-- Table structure for table `bills`
--

CREATE TABLE `bills` (
  `ID` int(15) NOT NULL,
  `meterID` varchar(15) NOT NULL,
  `month` date NOT NULL,
  `bill` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `connecteddevices`
--

CREATE TABLE `connecteddevices` (
  `ID` int(15) NOT NULL,
  `devices` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `meterdetails`
--

CREATE TABLE `meterdetails` (
  `ID` int(15) NOT NULL,
  `units` int(9) NOT NULL,
  `voltage` int(9) NOT NULL,
  `current` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `unit`
--

CREATE TABLE `unit` (
  `ID` int(15) NOT NULL,
  `meterID` varchar(15) NOT NULL,
  `networkID` int(15) NOT NULL,
  `units` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bill`
--
ALTER TABLE `bills`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `connecteddevices`
--
ALTER TABLE `connecteddevices`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `meterdetails`
--
ALTER TABLE `meterdetails`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `unit`
--
ALTER TABLE `unit`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bill`
--
ALTER TABLE `bills`
  MODIFY `ID` int(15) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `connecteddevices`
--
ALTER TABLE `connecteddevices`
  MODIFY `ID` int(15) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `meterdetails`
--
ALTER TABLE `meterdetails`
  MODIFY `ID` int(15) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `unit`
--
ALTER TABLE `unit`
  MODIFY `ID` int(15) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
