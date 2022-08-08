-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 08, 2022 at 09:00 PM
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
  `lastlogId` int(11) DEFAULT NULL,
  `currentcounter` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `createdon` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bills`
--

INSERT INTO `bills` (`ID`, `meterID`, `lastlogId`, `currentcounter`, `amount`, `createdon`) VALUES
(1, '3', NULL, 456, 8930, '2022-01-01'),
(2, '3', 456, 1002, 19000, '2022-02-01');

-- --------------------------------------------------------

--
-- Table structure for table `centers`
--

CREATE TABLE `centers` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `address` varchar(30) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `city` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `centers`
--

INSERT INTO `centers` (`id`, `name`, `address`, `phone`, `city`) VALUES
(1, 'Johare', 'adasd', '12312321', 'Karachi');

-- --------------------------------------------------------

--
-- Table structure for table `channels`
--

CREATE TABLE `channels` (
  `channelId` int(11) NOT NULL,
  `channelname` varchar(100) NOT NULL,
  `Abbr` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `channels`
--

INSERT INTO `channels` (`channelId`, `channelname`, `Abbr`) VALUES
(5, 'Web', 'WEB'),
(6, 'Backoffice', 'BO');

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
-- Table structure for table `countersequence`
--

CREATE TABLE `countersequence` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `value` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `countersequence`
--

INSERT INTO `countersequence` (`id`, `name`, `value`) VALUES
(1, 'orderid', 150),
(2, 'student_reg_id', 1231239),
(3, 'donor_reg_id', 213134);

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `username` varchar(25) NOT NULL,
  `password` varchar(25) NOT NULL,
  `cnic` varchar(15) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` varchar(25) NOT NULL,
  `dob` date NOT NULL,
  `gender` text NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `username`, `password`, `cnic`, `phone`, `address`, `dob`, `gender`, `userId`) VALUES
(13, 'Ahmedhanif271', '123456', '4230112975', '(341) 291-7634', '16 comm', '2005-11-11', 'M', 225682),
(14, 'Babar', '12369', '423011111233359', '(341) 291-7634', 'ffsl55few', '1999-08-11', 'M', 235122),
(15, 'Hunzala', '12345', '42302669899', '03566699889', '4er 232ggd', '0000-00-00', 'Male', 42301),
(16, 'Ahmedhanif271', 'Hunzala123', '4230112295345', '03156979999', '16 comm', '1999-08-11', 'F', 455221),
(17, 'Kashif', '38523', '4230112295345', '03156979999', '16 comm', '1999-08-11', 'M', 455221),
(18, 'Ashar Ali', 'ewrr1344', '4230112295345', '03156979999', '16 comm', '1995-11-02', 'M', 95547),
(19, 'Haroon', 'Hariin42312', '42301-1129519-7', '03156979999', '16 comm', '1999-08-22', 'M', 95547),
(20, 'Ahmedhanif271', 'Hunzala123', '42301-1129519-7', '03102305711', '16 comm', '1999-08-11', 'M', 455221),
(21, 'Ahmedhanif271', 'Hunzala123', '4230111295197', '03412917634', '16 comm', '1999-11-08', 'M', 455221),
(22, 'salman', 'Hunzala123', '4230311295197', '03128410045', '16 comm', '1999-08-11', 'M', 455221),
(23, 'Ahmedhanif271', 'Hunzala123', '4230111295197', '03332493389', '16 comm', '1999-11-11', 'M', 455221);

-- --------------------------------------------------------

--
-- Table structure for table `customersdetails`
--

CREATE TABLE `customersdetails` (
  `ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `devicetype`
--

CREATE TABLE `devicetype` (
  `ID` int(10) NOT NULL,
  `network` varchar(25) NOT NULL,
  `entity` varchar(225) NOT NULL,
  `serial` varchar(225) NOT NULL,
  `userId` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `devicetype`
--

INSERT INTO `devicetype` (`ID`, `network`, `entity`, `serial`, `userId`) VALUES
(1, 'PTCL', 'tvsi4', '1233788eqdffs', 95547),
(2, 'Fiberlink', '12456dcvdf', '1425dvddgg:3232', 526879),
(3, 'szabist', '12456dcvdf', '1425dvddgg:3232', 23589),
(4, 'testing', '12456dcvdf', '3301', 24589),
(5, 'kakda', '121', '1233456', 64577),
(6, 'dadavsvw', '32daaca', '1345956', 11245),
(7, 'a12dd', 'd321', '1233456', 23578),
(8, 'dadavsvw', '32daaca', '1345956', 99782),
(9, 'dadavsvw', '32daaca', '1345956', 21694),
(10, 'new', '32daaca', '1345956', 23450),
(11, 'dadavsvw', '830pm', '1345956', 0),
(12, 'Ashfaque', '32daaca', '1345956', 0),
(13, 'dadavsvw', '32daaca', '1345956', 0),
(14, 'dadavsvw', '32daaca', '1345956', 0),
(15, 'dadavsvw', '32daaca', '1345956', 0),
(16, 'dadavsvw', '32daaca', '1345956', 0),
(17, 'dadavsvw', '32daaca', '1345956', 0);

-- --------------------------------------------------------

--
-- Table structure for table `meterdetails`
--

CREATE TABLE `meterdetails` (
  `ID` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `meterlogs`
--

CREATE TABLE `meterlogs` (
  `id` int(11) NOT NULL,
  `meterId` int(11) NOT NULL,
  `voltage` int(11) NOT NULL,
  `current` int(11) NOT NULL,
  `kwh` int(11) NOT NULL,
  `createdon` time NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `meterlogs`
--

INSERT INTO `meterlogs` (`id`, `meterId`, `voltage`, `current`, `kwh`, `createdon`, `amount`) VALUES
(1, 1, 568, 472, 893, '01:00:00', 8930),
(2, 1, 689, 423, 785, '02:00:00', 7850),
(44790, 8, 568, 472, 893, '00:20:22', 0),
(44799, 10, 568, 472, 893, '01:00:00', 0),
(44800, 9, 600, 500, 912, '02:00:00', 0),
(44801, 1, 510, 450, 852, '03:00:00', 8520),
(44802, 8, 700, 625, 1000, '04:00:00', 0),
(44803, 12, 235, 114, 198, '05:00:00', 0),
(44804, 3, 100, 150, 350, '00:00:01', 0),
(44805, 4, 510, 114, 198, '00:20:22', 0),
(44806, 3, 100, 150, 350, '00:00:01', 0),
(44807, 4, 510, 114, 198, '00:20:22', 0);

-- --------------------------------------------------------

--
-- Table structure for table `networktype`
--

CREATE TABLE `networktype` (
  `id` int(10) NOT NULL,
  `name` varchar(25) NOT NULL,
  `ip_address` varchar(25) NOT NULL,
  `port` varchar(25) NOT NULL,
  `userId` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `networktype`
--

INSERT INTO `networktype` (`id`, `name`, `ip_address`, `port`, `userId`) VALUES
(1, 'Optix', '192.168.0.105', '3100', 95547),
(2, 'testing123', '123testing', 'test', 11254),
(3, 'testing123', '123testing', 'test', 11254),
(4, 'testing123', '123testing', 'test', 11254),
(5, 'testing123', '123testing', 'test', 11254),
(6, 'fiberlink', '192.168.0.105', '3320', 95547),
(7, 'fiberlink', '192.168.0.105', '3320', 11254),
(8, 'Mern', '192.168.0.120', '120', 95547),
(9, 'samad', '192.168.0.111', '420', 95547),
(10, 'pern', '55.236.158.198', '21', 95547),
(11, 'samad', '123.147.200.300', '450', 455221);

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL,
  `permissionId` varchar(30) NOT NULL,
  `permissionName` varchar(30) NOT NULL,
  `ui` int(11) NOT NULL,
  `parentId` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `permissionId`, `permissionName`, `ui`, `parentId`) VALUES
(1, 'conf.Roles', 'Roles', 1, ''),
(2, 'conf.Centers', 'Centers', 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `rolemappermission`
--

CREATE TABLE `rolemappermission` (
  `id` int(11) NOT NULL,
  `RoleID` int(11) NOT NULL,
  `PermissionId` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rolemappermission`
--

INSERT INTO `rolemappermission` (`id`, `RoleID`, `PermissionId`) VALUES
(1, 1, 'conf.Roles'),
(2, 1, 'conf.areas'),
(3, 1, 'conf'),
(4, 1, 'conf.Areas'),
(5, 1, 'conf.Centers'),
(6, 1, 'conf.Channels'),
(7, 1, 'conf.Users'),
(8, 1, 'dashboard'),
(15, 1, 'requestcenter'),
(18, 1, 'donationmngt.ledger'),
(21, 1, 'requestcenter.agentsrequests');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `ID` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`ID`, `name`, `role`) VALUES
(1, 'Admin', ''),
(6, 'Test', 'Technical support'),
(7, 'admin', 'admin'),
(8, 'Muhammad Ahmed Hanif', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `unit`
--

CREATE TABLE `unit` (
  `ID` int(15) NOT NULL,
  `meterID` varchar(15) NOT NULL,
  `networkID` int(15) NOT NULL,
  `units` int(15) NOT NULL,
  `phone` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `unit`
--

INSERT INTO `unit` (`ID`, `meterID`, `networkID`, `units`, `phone`) VALUES
(44975, '952145', 7754334, 239, 2147483647),
(112356, '95547', 1154789, 100, 304),
(1812142, '556699422', 2336998, 50, 2147483647),
(112236789, '2334689', 223499266, 100, 2147483647);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `UserName` varchar(30) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Address` varchar(30) NOT NULL,
  `Phone` varchar(30) NOT NULL,
  `RoleId` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `channelId` int(11) NOT NULL,
  `Status` varchar(30) NOT NULL,
  `CenterId` int(11) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `createdby` varchar(30) DEFAULT NULL,
  `createdon` datetime NOT NULL DEFAULT current_timestamp(),
  `updateby` varchar(30) DEFAULT NULL,
  `updateon` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `UserName`, `Password`, `Address`, `Phone`, `RoleId`, `Name`, `channelId`, `Status`, `CenterId`, `Email`, `createdby`, `createdon`, `updateby`, `updateon`) VALUES
(1, 'admin', '41e5653fc7aeb894026d6bb7b2db7f65902b454945fa8fd65a', 'A-4,Madras Society ,Scheme 33', '3122428254', 1, 'Ashar Ali', 6, '1', 1, '', NULL, '2021-02-14 01:31:19', NULL, '2021-02-14 01:33:11'),
(2, 'ashar', '12345', '', '', 1, '', 0, '', 1, '', NULL, '2021-02-14 01:31:19', NULL, '2021-02-14 01:33:11'),
(3, 'asharali', '12345', 'A-4,Madras Society ,Scheme 33', '3122428254', 1, 'Ashar Ali', 6, '1', 1, '', NULL, '2021-02-14 01:31:19', NULL, '2021-02-14 01:33:11'),
(4, 'demo', '12345', 'A-4,Madras Society ,Scheme 33', '3122428254', 2, 'Ashar Ali', 6, '1', 1, '', NULL, '2021-02-14 01:31:19', NULL, '2021-02-14 01:33:11'),
(5, 'democo', '4e32624bca7accd146f119c15dbd8bcf2040fc4a54dba98328', 'A-4,Madras Society ,Scheme 33', '3122428254', 2, 'democo', 6, '1', 1, '', NULL, '2021-02-14 01:31:19', NULL, '2021-02-14 01:33:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bills`
--
ALTER TABLE `bills`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `centers`
--
ALTER TABLE `centers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `channels`
--
ALTER TABLE `channels`
  ADD PRIMARY KEY (`channelId`);

--
-- Indexes for table `connecteddevices`
--
ALTER TABLE `connecteddevices`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `countersequence`
--
ALTER TABLE `countersequence`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customersdetails`
--
ALTER TABLE `customersdetails`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `devicetype`
--
ALTER TABLE `devicetype`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `meterdetails`
--
ALTER TABLE `meterdetails`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `meterlogs`
--
ALTER TABLE `meterlogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `networktype`
--
ALTER TABLE `networktype`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rolemappermission`
--
ALTER TABLE `rolemappermission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `unit`
--
ALTER TABLE `unit`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bills`
--
ALTER TABLE `bills`
  MODIFY `ID` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=482;

--
-- AUTO_INCREMENT for table `centers`
--
ALTER TABLE `centers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `channels`
--
ALTER TABLE `channels`
  MODIFY `channelId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `connecteddevices`
--
ALTER TABLE `connecteddevices`
  MODIFY `ID` int(15) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `countersequence`
--
ALTER TABLE `countersequence`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `customersdetails`
--
ALTER TABLE `customersdetails`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `devicetype`
--
ALTER TABLE `devicetype`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `meterdetails`
--
ALTER TABLE `meterdetails`
  MODIFY `ID` int(15) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `meterlogs`
--
ALTER TABLE `meterlogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44808;

--
-- AUTO_INCREMENT for table `networktype`
--
ALTER TABLE `networktype`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `rolemappermission`
--
ALTER TABLE `rolemappermission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `unit`
--
ALTER TABLE `unit`
  MODIFY `ID` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112236790;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
