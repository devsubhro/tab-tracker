--- db: tag-tracker
CREATE TABLE `User` ( 
    `User_id` BIGINT NOT NULL AUTO_INCREMENT , 
    `email` VARCHAR(255) NOT NULL , 
    `password` VARCHAR(32) NOT NULL , 
    PRIMARY KEY (`User_id`), 
    UNIQUE `user_email` (`email`)
) ENGINE = InnoDB COMMENT = 'Holds user info';

--
-- Table structure for table `Song`
--

CREATE TABLE `Song` (
  `Song_id` bigint(20) NOT NULL,
  `title` varchar(255) COLLATE utf16_unicode_ci NOT NULL,
  `artist` varchar(255) COLLATE utf16_unicode_ci NOT NULL,
  `album` varchar(255) COLLATE utf16_unicode_ci NOT NULL,
  `genre` varchar(255) COLLATE utf16_unicode_ci NOT NULL,
  `album_image_url` varchar(255) COLLATE utf16_unicode_ci NOT NULL,
  `youtube_id` varchar(255) COLLATE utf16_unicode_ci NOT NULL,
  `lyrics` text COLLATE utf16_unicode_ci NOT NULL,
  `tab` text COLLATE utf16_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_unicode_ci COMMENT='Holds song info';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Song`
--
ALTER TABLE `Song`
  ADD PRIMARY KEY (`Song_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Song`
--
ALTER TABLE `Song`
  MODIFY `Song_id` bigint(20) NOT NULL AUTO_INCREMENT;