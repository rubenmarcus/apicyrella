-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: us-cdbr-east-03.cleardb.com    Database: heroku_7bcceb62a555e5a
-- ------------------------------------------------------
-- Server version	5.6.50-log

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
-- Table structure for table `assistance`
--

DROP TABLE IF EXISTS `assistance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assistance` (
  `actualstart` datetime NOT NULL,
  `actualend` datetime DEFAULT NULL,
  `pjo_tipodeatividade` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `subject` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pjo_empreendimentoid` int(11) DEFAULT NULL,
  `pjo_blocoid` int(11) NOT NULL,
  `pjo_unidadeid` varchar(45) COLLATE utf8_bin NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `pjo_blocoid_UNIQUE` (`pjo_blocoid`),
  UNIQUE KEY `pjo_unidadeid_UNIQUE` (`pjo_unidadeid`),
  UNIQUE KEY `pjo_empreendimentoid_UNIQUE` (`pjo_empreendimentoid`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assistance`
--

LOCK TABLES `assistance` WRITE;
/*!40000 ALTER TABLE `assistance` DISABLE KEYS */;
INSERT INTO `assistance` VALUES ('1998-01-02 00:00:00','1998-01-02 00:00:00','visita de imóvel','visita',64,3434,8989,'5656','2021-04-14 23:37:50','2021-04-14 23:37:50'),('1992-01-02 00:00:00','1991-01-02 00:00:00','visita de imóvel no Jaçanã','visita',74,3444234,8942489,'5642356','2021-04-16 20:20:04','2021-04-16 20:20:04'),('1995-01-02 00:00:00','1993-01-02 00:00:00','visita de imóvel no Jardins','visita',84,12314,333,'331','2021-04-16 20:20:42','2021-04-16 20:21:15');
/*!40000 ALTER TABLE `assistance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ocurrence`
--

DROP TABLE IF EXISTS `ocurrence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ocurrence` (
  `pjo_bloco` int(11) NOT NULL,
  `pjo_unidade` varchar(255) COLLATE utf8_bin NOT NULL,
  `description` varchar(255) COLLATE utf8_bin NOT NULL,
  `pjo_bandeira` varchar(255) COLLATE utf8_bin NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ticketnumber` int(11) NOT NULL,
  `pjo_empreendimentoid` int(11) NOT NULL,
  `pjo_clientedaunidade` varchar(255) COLLATE utf8_bin NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `ticketnumber` (`ticketnumber`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ocurrence`
--

LOCK TABLES `ocurrence` WRITE;
/*!40000 ALTER TABLE `ocurrence` DISABLE KEYS */;
INSERT INTO `ocurrence` VALUES (1,'1','AAAA','MasterCard',1,12,12,'12','1998-01-02 00:00:00','1998-01-02 00:00:00'),(333,'Granja Viana','Abc de ef','ELO',8,97421450,333,'Martins Souza','2021-04-12 23:45:50','2021-04-13 00:08:43'),(1111,'Granja Viana','Abc de ef','ELO',9,51404282,333,'Ruben Paschoarelli','2021-04-12 23:46:37','2021-04-16 20:15:33'),(116,'Interlagos','roubo','VISA',14,1665650,91,'Diego Morais','2021-04-14 23:32:53','2021-04-14 23:32:53');
/*!40000 ALTER TABLE `ocurrence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
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

-- Dump completed on 2021-04-16 17:36:16
