--- db: tag-tracker
CREATE TABLE `User` ( 
    CREATE TABLE `User` ( `User_id` BIGINT NOT NULL AUTO_INCREMENT , 
    `email` VARCHAR(255) NOT NULL , 
    `password` VARCHAR(32) NOT NULL , 
    PRIMARY KEY (`User_id`), 
    UNIQUE `user_email` (`email`)
    ) ENGINE = InnoDB COMMENT = 'Holds user info';