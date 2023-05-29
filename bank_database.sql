-- MySQL dump 10.13  Distrib 8.0.27, for macos11 (x86_64)
--
-- Host: localhost    Database: bank_accounts
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account_operations`
--

DROP TABLE IF EXISTS `account_operations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_operations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `accountNumber` bigint NOT NULL,
  `type` varchar(45) NOT NULL,
  `date` varchar(45) NOT NULL,
  `amount` int NOT NULL,
  `interest` decimal(5,2) DEFAULT NULL,
  `payments` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_operations`
--

LOCK TABLES `account_operations` WRITE;
/*!40000 ALTER TABLE `account_operations` DISABLE KEYS */;
INSERT INTO `account_operations` VALUES (1,12345678,'withdraw','2023-05-29T13:07:10.925Z',9999,NULL,NULL),(2,12345678,'deposit','2023-05-29T13:07:18.562Z',213009,NULL,NULL),(3,12345678,'loan','2023-05-29T13:07:30.006Z',90000,4.30,7),(4,12345678,'loan','2023-05-29T13:07:40.195Z',7777,5.50,2),(5,111111,'withdraw','2023-05-29T13:08:01.840Z',1111110,NULL,NULL),(6,111111,'deposit','2023-05-29T13:08:06.420Z',111111,NULL,NULL),(7,111111,'loan','2023-05-29T13:08:20.704Z',1100000,9.90,99),(8,987654321,'deposit','2023-05-29T13:09:11.131Z',909,NULL,NULL),(9,987654321,'loan','2023-05-29T13:09:21.685Z',700,7.70,7),(10,987654321,'loan','2023-05-29T13:09:30.829Z',123456,6.70,3),(11,987654321,'deposit','2023-05-29T13:09:38.849Z',90087,NULL,NULL);
/*!40000 ALTER TABLE `account_operations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-29 16:12:18