-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 31, 2020 at 05:25 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library`
--

-- --------------------------------------------------------

--
-- Table structure for table `alinks`
--

CREATE TABLE `alinks` (
  `id` int(11) NOT NULL,
  `alinks_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `href` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `alinks`
--

INSERT INTO `alinks` (`id`, `alinks_id`, `name`, `href`) VALUES
(1, NULL, 'one', '/one'),
(2, NULL, 'two', '/two'),
(3, 2, 'a', '/a'),
(4, 2, 'b', '/b');

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `content` longtext NOT NULL,
  `authors` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `published` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `list_id` int(11) NOT NULL,
  `groupist_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `title`, `description`, `content`, `authors`, `price`, `image`, `published`, `created_at`, `updated_at`, `list_id`, `groupist_id`) VALUES
(1, 'Learning javascript', 'learning javascript from scratch for beginer and create 2 project', 'learning javascript from scratch for beginer and create 2 projectlearning laravel from scratch for beginer and create 2 projectlearning laravel from scratch for beginer and create 2 projectlearning laravel from scratch for beginer and create 2 projectlearning laravel from scratch for beginer and create 2 projectlearning laravel from scratch for beginer and create 2 projectlearning laravel from scratch for beginer and create 2 projectlearning laravel from scratch for beginer and create 2 projectlearning laravel from scratch for beginer and create 2 project', '', 63, 'https://www.amazon.com/Head-First-JavaScript-Programming-Brain-Friendly-ebook/dp/B00J9TMSDU/ref=sr_1_4?keywords=javascript&qid=1585581093&sr=8-4', '2020-03-30 15:11:52', '2020-03-30 15:11:52', '2020-03-30 15:11:52', 3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `grouplist`
--

CREATE TABLE `grouplist` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `grouplist`
--

INSERT INTO `grouplist` (`id`, `name`) VALUES
(1, 'web programing'),
(2, 'mobile programing');

-- --------------------------------------------------------

--
-- Table structure for table `list`
--

CREATE TABLE `list` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `list`
--

INSERT INTO `list` (`id`, `name`, `group_id`) VALUES
(1, 'html', 1),
(2, 'css', 1),
(3, 'js', 1),
(4, 'xml', 1),
(5, 'java', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alinks`
--
ALTER TABLE `alinks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `alinks_id` (`alinks_id`);

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`),
  ADD KEY `list_id` (`list_id`),
  ADD KEY `groupist_id` (`groupist_id`);

--
-- Indexes for table `grouplist`
--
ALTER TABLE `grouplist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `list`
--
ALTER TABLE `list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `group_id` (`group_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alinks`
--
ALTER TABLE `alinks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `grouplist`
--
ALTER TABLE `grouplist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `list`
--
ALTER TABLE `list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `alinks`
--
ALTER TABLE `alinks`
  ADD CONSTRAINT `alinks_ibfk_1` FOREIGN KEY (`alinks_id`) REFERENCES `alinks` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `book_ibfk_1` FOREIGN KEY (`list_id`) REFERENCES `list` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `book_ibfk_2` FOREIGN KEY (`groupist_id`) REFERENCES `grouplist` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `list`
--
ALTER TABLE `list`
  ADD CONSTRAINT `list_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `grouplist` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
