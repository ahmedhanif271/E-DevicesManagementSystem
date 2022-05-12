-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2022 at 12:53 PM
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
  `dob` date(11) NOT NULL,
  `gender` text NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `username`, `password`, `cnic`, `phone`, `address`, `dob`, `gender`, `userId`) VALUES
(8, 'testing', '12345', '', '', '', '0000-00-00', '', 0),
(9, 'Ahmedhanif271', '12345', '', '', '', '0000-00-00', '', 0);

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
  `serial` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `devicetype`
--

INSERT INTO `devicetype` (`ID`, `network`, `entity`, `serial`) VALUES
(1, 'PTCL', 'tvsi4', '1233788eqdffs'),
(2, 'Fiberlink', '12456dcvdf', '1425dvddgg:3232'),
(3, 'szabist', '12456dcvdf', '1425dvddgg:3232'),
(4, 'testing', '12456dcvdf', '3301'),
(5, 'kakda', '121', '1233456'),
(6, 'dadavsvw', '32daaca', '1345956'),
(7, 'a12dd', 'd321', '1233456');

-- --------------------------------------------------------

--
-- Table structure for table `networktype`
--

CREATE TABLE `networktype` (
  `id` int(10) NOT NULL,
  `name` varchar(25) NOT NULL,
  `ip_address` varchar(25) NOT NULL,
  `port` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `networktype`
--

INSERT INTO `networktype` (`id`, `name`, `ip_address`, `port`) VALUES
(1, 'Optix', '192.168.0.105', '3100'),
(2, 'testing123', '123testing', 'test'),
(3, 'testing123', '123testing', 'test'),
(4, 'testing123', '123testing', 'test'),
(5, 'testing123', '123testing', 'test'),
(6, 'fiberlink', '192.168.0.105', '3320'),
(7, 'fiberlink', '192.168.0.105', '3320');

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
(6, 'Test', 'Technical support');

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
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

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
-- AUTO_INCREMENT for table `countersequence`
--
ALTER TABLE `countersequence`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `customersdetails`
--
ALTER TABLE `customersdetails`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `devicetype`
--
ALTER TABLE `devicetype`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `networktype`
--
ALTER TABLE `networktype`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
