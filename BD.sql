CREATE DATABASE  IF NOT EXISTS `bdsistema_tutoria` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bdsistema_tutoria`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: bdsistema_tutoria
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `sysdiagrams`
--

DROP TABLE IF EXISTS `sysdiagrams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sysdiagrams` (
  `name` varchar(160) NOT NULL,
  `principal_id` int NOT NULL,
  `diagram_id` int NOT NULL,
  `version` int DEFAULT NULL,
  `definition` longblob,
  PRIMARY KEY (`diagram_id`),
  UNIQUE KEY `UK_principal_name` (`principal_id`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sysdiagrams`
--

LOCK TABLES `sysdiagrams` WRITE;
/*!40000 ALTER TABLE `sysdiagrams` DISABLE KEYS */;
/*!40000 ALTER TABLE `sysdiagrams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tcasoespecial`
--

DROP TABLE IF EXISTS `tcasoespecial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tcasoespecial` (
  `IdCaso` varchar(10) NOT NULL,
  `IdInformeSemestral` varchar(10) NOT NULL,
  `CodEstudiante` varchar(6) NOT NULL,
  `IdTipoCaso` varchar(10) NOT NULL,
  PRIMARY KEY (`IdCaso`,`IdInformeSemestral`),
  KEY `FK__TCasoEspe__CodEs__47DBAE45` (`CodEstudiante`),
  KEY `FK__TCasoEspe__IdTip__48CFD27E` (`IdTipoCaso`),
  KEY `FK__TCasoEspe__IdInf__49C3F6B7` (`IdInformeSemestral`),
  CONSTRAINT `FK__TCasoEspe__CodEs__47DBAE45` FOREIGN KEY (`CodEstudiante`) REFERENCES `testudiante` (`CodEstudiante`),
  CONSTRAINT `FK__TCasoEspe__IdInf__49C3F6B7` FOREIGN KEY (`IdInformeSemestral`) REFERENCES `tinformesemestral` (`IdInformeSemestral`),
  CONSTRAINT `FK__TCasoEspe__IdTip__48CFD27E` FOREIGN KEY (`IdTipoCaso`) REFERENCES `ttipocaso` (`IdTipoCaso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tcasoespecial`
--

LOCK TABLES `tcasoespecial` WRITE;
/*!40000 ALTER TABLE `tcasoespecial` DISABLE KEYS */;
/*!40000 ALTER TABLE `tcasoespecial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tcoordinadortutoria`
--

DROP TABLE IF EXISTS `tcoordinadortutoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tcoordinadortutoria` (
  `CodCoordinadorTutoria` varchar(7) NOT NULL,
  `CodTutor` varchar(7) NOT NULL,
  PRIMARY KEY (`CodCoordinadorTutoria`),
  KEY `FK__TCoordina__CodTu__2B3F6F97` (`CodTutor`),
  CONSTRAINT `FK__TCoordina__CodTu__2B3F6F97` FOREIGN KEY (`CodTutor`) REFERENCES `ttutor` (`CodTutor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tcoordinadortutoria`
--

LOCK TABLES `tcoordinadortutoria` WRITE;
/*!40000 ALTER TABLE `tcoordinadortutoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `tcoordinadortutoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tdocente`
--

DROP TABLE IF EXISTS `tdocente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tdocente` (
  `CodDocente` varchar(7) NOT NULL,
  `Nombres` varchar(30) NOT NULL,
  `ApPaterno` varchar(15) NOT NULL,
  `ApMaterno` varchar(15) NOT NULL,
  `Categoria` varchar(15) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Direccion` varchar(50) NOT NULL,
  PRIMARY KEY (`CodDocente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tdocente`
--

LOCK TABLES `tdocente` WRITE;
/*!40000 ALTER TABLE `tdocente` DISABLE KEYS */;
/*!40000 ALTER TABLE `tdocente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `testudiante`
--

DROP TABLE IF EXISTS `testudiante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `testudiante` (
  `CodEstudiante` varchar(6) NOT NULL,
  `Nombres` varchar(30) NOT NULL,
  `ApPaterno` varchar(15) NOT NULL,
  `ApMaterno` varchar(15) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Direccion` varchar(50) NOT NULL,
  `Celular` varchar(9) NOT NULL,
  PRIMARY KEY (`CodEstudiante`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testudiante`
--

LOCK TABLES `testudiante` WRITE;
/*!40000 ALTER TABLE `testudiante` DISABLE KEYS */;
/*!40000 ALTER TABLE `testudiante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `testudianteayudante`
--

DROP TABLE IF EXISTS `testudianteayudante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `testudianteayudante` (
  `CodEstudianteAyudante` varchar(6) NOT NULL,
  `CodEstudiante` varchar(6) NOT NULL,
  `SemestreEleccion` varchar(10) NOT NULL,
  `Asignatura` varchar(15) NOT NULL,
  `NestudiantesaCargo` int DEFAULT NULL,
  PRIMARY KEY (`CodEstudianteAyudante`),
  KEY `FK__TEstudian__CodEs__2E1BDC42` (`CodEstudiante`),
  CONSTRAINT `FK__TEstudian__CodEs__2E1BDC42` FOREIGN KEY (`CodEstudiante`) REFERENCES `testudiante` (`CodEstudiante`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testudianteayudante`
--

LOCK TABLES `testudianteayudante` WRITE;
/*!40000 ALTER TABLE `testudianteayudante` DISABLE KEYS */;
/*!40000 ALTER TABLE `testudianteayudante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `testudiantera`
--

DROP TABLE IF EXISTS `testudiantera`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `testudiantera` (
  `CodEstudianteRA` varchar(6) NOT NULL,
  `CodEstudiante` varchar(6) NOT NULL,
  `Semestre_Observado` varchar(10) NOT NULL,
  `NroCursosDesaprobados` int DEFAULT NULL,
  `NroVecesDesaprobadoXCurso` int DEFAULT NULL,
  PRIMARY KEY (`CodEstudianteRA`),
  KEY `FK__TEstudian__CodEs__30F848ED` (`CodEstudiante`),
  CONSTRAINT `FK__TEstudian__CodEs__30F848ED` FOREIGN KEY (`CodEstudiante`) REFERENCES `testudiante` (`CodEstudiante`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testudiantera`
--

LOCK TABLES `testudiantera` WRITE;
/*!40000 ALTER TABLE `testudiantera` DISABLE KEYS */;
/*!40000 ALTER TABLE `testudiantera` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tfichatutoria`
--

DROP TABLE IF EXISTS `tfichatutoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tfichatutoria` (
  `CodTutor` varchar(7) NOT NULL,
  `CodEstudiante` varchar(6) NOT NULL,
  `CelularReferenciaTutorando` varchar(9) NOT NULL,
  `PersonaReferenciaTutorando` varchar(9) NOT NULL,
  `Fecha` date DEFAULT NULL,
  `TipoTutoria` varchar(15) NOT NULL,
  `Descripcion` varchar(50) NOT NULL,
  `Referencia` varchar(50) NOT NULL,
  `Observaciones` varchar(100) NOT NULL,
  PRIMARY KEY (`CodTutor`,`CodEstudiante`),
  KEY `FK__TFichaTut__CodEs__4222D4EF` (`CodEstudiante`),
  CONSTRAINT `FK__TFichaTut__CodEs__4222D4EF` FOREIGN KEY (`CodEstudiante`) REFERENCES `testudiante` (`CodEstudiante`),
  CONSTRAINT `FK__TFichaTut__CodTu__4316F928` FOREIGN KEY (`CodTutor`) REFERENCES `ttutor` (`CodTutor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tfichatutoria`
--

LOCK TABLES `tfichatutoria` WRITE;
/*!40000 ALTER TABLE `tfichatutoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `tfichatutoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tinforme`
--

DROP TABLE IF EXISTS `tinforme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tinforme` (
  `CodInforme` varchar(10) NOT NULL,
  `Semestre` varchar(10) NOT NULL,
  `Fecha` date DEFAULT NULL,
  PRIMARY KEY (`CodInforme`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tinforme`
--

LOCK TABLES `tinforme` WRITE;
/*!40000 ALTER TABLE `tinforme` DISABLE KEYS */;
/*!40000 ALTER TABLE `tinforme` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tinformequincenal`
--

DROP TABLE IF EXISTS `tinformequincenal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tinformequincenal` (
  `CodInformeQuincenal` varchar(10) NOT NULL,
  `CodInforme` varchar(10) NOT NULL,
  `CodTutor` varchar(7) NOT NULL,
  `CodEstudianteRA` varchar(6) NOT NULL,
  `FechasAsistencia` date DEFAULT NULL,
  `ConfirmacionAsistencia` varchar(10) DEFAULT NULL,
  `DescripcionesAsistencia` varchar(100) DEFAULT NULL,
  `ResumenReuniones` varchar(100) DEFAULT NULL,
  `Dificultades` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`CodInformeQuincenal`),
  KEY `FK__TInformeQ__CodIn__3D5E1FD2` (`CodInforme`),
  KEY `FK__TInformeQ__CodTu__3E52440B` (`CodTutor`),
  KEY `FK__TInformeQ__CodEs__3F466844` (`CodEstudianteRA`),
  CONSTRAINT `FK__TInformeQ__CodEs__3F466844` FOREIGN KEY (`CodEstudianteRA`) REFERENCES `testudiantera` (`CodEstudianteRA`),
  CONSTRAINT `FK__TInformeQ__CodIn__3D5E1FD2` FOREIGN KEY (`CodInforme`) REFERENCES `tinforme` (`CodInforme`),
  CONSTRAINT `FK__TInformeQ__CodTu__3E52440B` FOREIGN KEY (`CodTutor`) REFERENCES `ttutor` (`CodTutor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tinformequincenal`
--

LOCK TABLES `tinformequincenal` WRITE;
/*!40000 ALTER TABLE `tinformequincenal` DISABLE KEYS */;
/*!40000 ALTER TABLE `tinformequincenal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tinformesemestral`
--

DROP TABLE IF EXISTS `tinformesemestral`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tinformesemestral` (
  `CodInforme` varchar(10) NOT NULL,
  `IdInformeSemestral` varchar(10) NOT NULL,
  `CodTutor` varchar(7) NOT NULL,
  `NroTutorandos_TuroriasRealizadas_InicioSemestre` int NOT NULL,
  `NroTutorandos_TuroriasRealizadas_MedioSemestre` int NOT NULL,
  `NroTutorandos_TuroriasRealizadas_FinalSemestre` int NOT NULL,
  PRIMARY KEY (`IdInformeSemestral`),
  KEY `FK__TInformeS__CodIn__398D8EEE` (`CodInforme`),
  KEY `FK__TInformeS__CodTu__3A81B327` (`CodTutor`),
  CONSTRAINT `FK__TInformeS__CodIn__398D8EEE` FOREIGN KEY (`CodInforme`) REFERENCES `tinforme` (`CodInforme`),
  CONSTRAINT `FK__TInformeS__CodTu__3A81B327` FOREIGN KEY (`CodTutor`) REFERENCES `ttutor` (`CodTutor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tinformesemestral`
--

LOCK TABLES `tinformesemestral` WRITE;
/*!40000 ALTER TABLE `tinformesemestral` DISABLE KEYS */;
/*!40000 ALTER TABLE `tinformesemestral` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ttalleresreforzamiento`
--

DROP TABLE IF EXISTS `ttalleresreforzamiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ttalleresreforzamiento` (
  `CodTaller` varchar(10) NOT NULL,
  `CodEstudianteAyudante` varchar(6) NOT NULL,
  `CodEstudianteRA` varchar(6) NOT NULL,
  `FechaTaller` date DEFAULT NULL,
  `LugarTaller` varchar(50) NOT NULL,
  PRIMARY KEY (`CodTaller`),
  KEY `FK__TTalleres__CodEs__33D4B598` (`CodEstudianteRA`),
  KEY `FK__TTalleres__CodEs__34C8D9D1` (`CodEstudianteAyudante`),
  CONSTRAINT `FK__TTalleres__CodEs__33D4B598` FOREIGN KEY (`CodEstudianteRA`) REFERENCES `testudiantera` (`CodEstudianteRA`),
  CONSTRAINT `FK__TTalleres__CodEs__34C8D9D1` FOREIGN KEY (`CodEstudianteAyudante`) REFERENCES `testudianteayudante` (`CodEstudianteAyudante`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ttalleresreforzamiento`
--

LOCK TABLES `ttalleresreforzamiento` WRITE;
/*!40000 ALTER TABLE `ttalleresreforzamiento` DISABLE KEYS */;
/*!40000 ALTER TABLE `ttalleresreforzamiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ttipocaso`
--

DROP TABLE IF EXISTS `ttipocaso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ttipocaso` (
  `IdTipoCaso` varchar(10) NOT NULL,
  `TipoCaso` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`IdTipoCaso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ttipocaso`
--

LOCK TABLES `ttipocaso` WRITE;
/*!40000 ALTER TABLE `ttipocaso` DISABLE KEYS */;
/*!40000 ALTER TABLE `ttipocaso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ttutor`
--

DROP TABLE IF EXISTS `ttutor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ttutor` (
  `CodTutor` varchar(7) NOT NULL,
  `CodDocente` varchar(7) NOT NULL,
  `CantidadTutorandos` int DEFAULT NULL,
  `Semestre` varchar(10) NOT NULL,
  PRIMARY KEY (`CodTutor`),
  KEY `FK__TTutor__CodDocen__286302EC` (`CodDocente`),
  CONSTRAINT `FK__TTutor__CodDocen__286302EC` FOREIGN KEY (`CodDocente`) REFERENCES `tdocente` (`CodDocente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ttutor`
--

LOCK TABLES `ttutor` WRITE;
/*!40000 ALTER TABLE `ttutor` DISABLE KEYS */;
/*!40000 ALTER TABLE `ttutor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-15 13:02:07
