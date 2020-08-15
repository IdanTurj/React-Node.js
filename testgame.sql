-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2020 at 06:15 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testgame`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL,
  `comment` varchar(256) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `time` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
) ;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `game_id`, `comment`, `time`) VALUES
(60, 1, 'Bad game', '2020-02-26 16:51:04.501657'),
(61, 1, '', '2020-02-26 16:51:44.641665'),
(62, 1, 's', '2020-02-26 16:53:39.662683'),
(63, 2, 'gas', '2020-02-26 16:54:06.968680'),
(64, 2, 's', '2020-02-26 16:55:17.753647'),
(65, 2, 'fa', '2020-02-26 16:56:08.417645'),
(66, 2, '', '2020-02-26 16:56:25.043648'),
(67, 2, 'fs', '2020-02-26 16:56:28.461682'),
(68, 2, 's', '2020-02-26 16:56:48.513647'),
(69, 1, 'fa', '2020-02-26 16:57:36.814648'),
(70, 1, 'zr', '2020-02-26 16:58:20.001647'),
(71, 1, 'fs', '2020-02-26 16:59:54.944664'),
(72, 3, 'sa', '2020-02-26 17:00:02.623666'),
(73, 1, 's', '2020-02-26 17:03:33.218357'),
(74, 2, 'ss', '2020-02-26 17:09:24.916324');

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `team_a` varchar(256) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `team_b` varchar(256) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `score_a` int(11) NOT NULL,
  `score_b` int(11) NOT NULL,
  `time` date NOT NULL,
  `category` varchar(256) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `team_a`, `team_b`, `score_a`, `score_b`, `time`, `category`) VALUES
(1, 'FC\r\nBarcelona', 'Real-Madrid', 3, 1, '2020-02-27', 'football'),
(2, 'Chelsea', 'Man United', 2, 0, '2020-02-29', 'football'),
(3, 'Maccabi\r\nTel-Aviv', 'Maccabi\r\nHaifa', 2, 0, '2020-02-24', 'football'),
(4, 'Maccabi\r\nTel-Aviv', 'cska\r\nMoscow', 82, 61, '2020-02-23', 'basketball'),
(5, 'Maccabi\r\nTel-Aviv', 'Real-Madrid', 88, 91, '2020-02-23', 'basketball'),
(6, 'FC\r\nBarcelona', 'Real-Madrid', 80, 81, '2020-02-16', 'basketball');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
