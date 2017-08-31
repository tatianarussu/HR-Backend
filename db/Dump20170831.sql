CREATE DATABASE  IF NOT EXISTS `mydb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `mydb`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	5.7.19-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `job_apply`
--

DROP TABLE IF EXISTS `job_apply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `job_apply` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `USER_ID` int(11) NOT NULL,
  `JOB_ID` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_USER_ID_idx` (`USER_ID`),
  KEY `fk_JOB_ID_idx` (`JOB_ID`),
  CONSTRAINT `fk_JOB_ID` FOREIGN KEY (`JOB_ID`) REFERENCES `jobs` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_USER_ID` FOREIGN KEY (`USER_ID`) REFERENCES `users` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_apply`
--

LOCK TABLES `job_apply` WRITE;
/*!40000 ALTER TABLE `job_apply` DISABLE KEYS */;
INSERT INTO `job_apply` VALUES (12,20,84),(14,22,84),(15,24,84),(18,20,84),(19,20,84);
/*!40000 ALTER TABLE `job_apply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_requirements`
--

DROP TABLE IF EXISTS `job_requirements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `job_requirements` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `JOB_ID` int(11) NOT NULL,
  `SKILL_ID` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_JOB_REQUIREMENTS_JOBS1_idx` (`JOB_ID`),
  KEY `fk_JOB_REQUIREMENTS_SKILLS1_idx` (`SKILL_ID`),
  CONSTRAINT `fk_JOB_REQUIREMENTS_JOBS1` FOREIGN KEY (`JOB_ID`) REFERENCES `jobs` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_JOB_REQUIREMENTS_SKILLS1` FOREIGN KEY (`SKILL_ID`) REFERENCES `skills` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_requirements`
--

LOCK TABLES `job_requirements` WRITE;
/*!40000 ALTER TABLE `job_requirements` DISABLE KEYS */;
INSERT INTO `job_requirements` VALUES (38,84,1),(39,84,2),(40,84,3);
/*!40000 ALTER TABLE `job_requirements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jobs` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(45) NOT NULL,
  `DESCRIPTION` varchar(45) NOT NULL,
  `BENEFITS` varchar(45) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
INSERT INTO `jobs` VALUES (84,'JavaScript','Javascript blabla','Is relatively easy to learn.');
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_info`
--

DROP TABLE IF EXISTS `personal_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_info` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `USERS_ID` int(11) NOT NULL,
  `FIRST_NAME` varchar(45) NOT NULL,
  `LAST_NAME` varchar(45) CHARACTER SET big5 NOT NULL,
  `DESCRIPTION` varchar(45) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_PERSONAL_INFO_USERS1_idx` (`USERS_ID`),
  CONSTRAINT `fk_PERSONAL_INFO_USERS1` FOREIGN KEY (`USERS_ID`) REFERENCES `users` (`ID`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_info`
--

LOCK TABLES `personal_info` WRITE;
/*!40000 ALTER TABLE `personal_info` DISABLE KEYS */;
INSERT INTO `personal_info` VALUES (2,20,'Tatiana','Russu','blabla'),(3,17,'Vladdddd','Tomsa','My description');
/*!40000 ALTER TABLE `personal_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `skills` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(45) NOT NULL,
  `Description` varchar(45) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
INSERT INTO `skills` VALUES (1,'HTML','sfsdf'),(2,'CSS','ef'),(3,'JS','dgdg'),(4,'JAVA','rgfg'),(5,'C++','fgfg'),(6,'PHP','dfdf'),(7,'Angular','dfdf');
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_educations`
--

DROP TABLE IF EXISTS `user_educations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_educations` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SCHOOL_NAME` varchar(45) NOT NULL,
  `GRADUATED_YEAR` int(11) NOT NULL,
  `DESCRIPTION` varchar(45) NOT NULL,
  `PERSON_ID` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_UE_PERSONAL_INFO_idx` (`PERSON_ID`),
  CONSTRAINT `fk_UE_PERSON_INFO` FOREIGN KEY (`PERSON_ID`) REFERENCES `personal_info` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_educations`
--

LOCK TABLES `user_educations` WRITE;
/*!40000 ALTER TABLE `user_educations` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_educations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_roles` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `CODE` varchar(45) NOT NULL,
  `DESCRIPTION` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (1,'ADMIN','Admin'),(2,'HR','Hr'),(3,'USERS','Users');
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_skills`
--

DROP TABLE IF EXISTS `user_skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_skills` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SKILLS_ID` int(11) NOT NULL,
  `PERSON_ID` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_USER_SKILLS_SKILLS1_idx` (`SKILLS_ID`),
  KEY `fk_USER_SKILL_PERSONAL_INFO_idx` (`PERSON_ID`),
  CONSTRAINT `fk_USER_SKILLS_SKILLS1` FOREIGN KEY (`SKILLS_ID`) REFERENCES `skills` (`ID`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_USER_SKILL_PERSONAL_INFO` FOREIGN KEY (`PERSON_ID`) REFERENCES `personal_info` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_skills`
--

LOCK TABLES `user_skills` WRITE;
/*!40000 ALTER TABLE `user_skills` DISABLE KEYS */;
INSERT INTO `user_skills` VALUES (2,1,3),(3,2,3),(4,3,3);
/*!40000 ALTER TABLE `user_skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_work_experiences`
--

DROP TABLE IF EXISTS `user_work_experiences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_work_experiences` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `COMPANY_NAME` varchar(45) NOT NULL,
  `POSITION` varchar(45) NOT NULL,
  `START_DATA` datetime NOT NULL,
  `END_DATA` datetime NOT NULL,
  `PERSON_ID` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_UWE_PERSONAL_INFO_idx` (`PERSON_ID`),
  CONSTRAINT `fk_UWE_PERS_INFO` FOREIGN KEY (`PERSON_ID`) REFERENCES `personal_info` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_work_experiences`
--

LOCK TABLES `user_work_experiences` WRITE;
/*!40000 ALTER TABLE `user_work_experiences` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_work_experiences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `USER_ROLE_ID` int(11) NOT NULL,
  `USERNAME` varchar(45) NOT NULL,
  `PASSWORD` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_USERS_USER_ROLE_idx` (`USER_ROLE_ID`),
  CONSTRAINT `fk_USERS_USER_ROLE` FOREIGN KEY (`USER_ROLE_ID`) REFERENCES `user_roles` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (17,1,'admin','admin'),(20,3,'user','user'),(22,3,'tatiana.russu','1111'),(23,3,'pap.vasile','1234'),(24,2,'hr','hr');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-31 16:06:52
