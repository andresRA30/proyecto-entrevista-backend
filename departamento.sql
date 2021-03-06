USE [master]
GO
/****** Object:  Database [departamentos]    Script Date: 29/08/2021 16:53:25 ******/
CREATE DATABASE [departamentos]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'departamentos', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\departamentos.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'departamentos_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\departamentos_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [departamentos] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [departamentos].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [departamentos] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [departamentos] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [departamentos] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [departamentos] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [departamentos] SET ARITHABORT OFF 
GO
ALTER DATABASE [departamentos] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [departamentos] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [departamentos] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [departamentos] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [departamentos] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [departamentos] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [departamentos] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [departamentos] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [departamentos] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [departamentos] SET  DISABLE_BROKER 
GO
ALTER DATABASE [departamentos] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [departamentos] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [departamentos] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [departamentos] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [departamentos] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [departamentos] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [departamentos] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [departamentos] SET RECOVERY FULL 
GO
ALTER DATABASE [departamentos] SET  MULTI_USER 
GO
ALTER DATABASE [departamentos] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [departamentos] SET DB_CHAINING OFF 
GO
ALTER DATABASE [departamentos] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [departamentos] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [departamentos] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [departamentos] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'departamentos', N'ON'
GO
ALTER DATABASE [departamentos] SET QUERY_STORE = OFF
GO
USE [departamentos]
GO
/****** Object:  Table [dbo].[detalleEmpleado]    Script Date: 29/08/2021 16:53:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[detalleEmpleado](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_departamento] [int] NOT NULL,
	[nombre] [nchar](50) NOT NULL,
	[salario] [decimal](16, 2) NOT NULL,
 CONSTRAINT [PK_detalle-empleado] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[maestroDepartamentos]    Script Date: 29/08/2021 16:53:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[maestroDepartamentos](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
 CONSTRAINT [PK_maestro-departamentos] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[detalleEmpleado]  WITH CHECK ADD  CONSTRAINT [FK_detalle-empleado_maestro-departamentos] FOREIGN KEY([id_departamento])
REFERENCES [dbo].[maestroDepartamentos] ([id])
GO
ALTER TABLE [dbo].[detalleEmpleado] CHECK CONSTRAINT [FK_detalle-empleado_maestro-departamentos]
GO
/****** Object:  StoredProcedure [dbo].[eliminarEmpleado]    Script Date: 29/08/2021 16:53:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[eliminarEmpleado] @id int
AS
Delete from [departamentos].[dbo].detalleEmpleado where id = @id
GO
/****** Object:  StoredProcedure [dbo].[modificarMaestro]    Script Date: 29/08/2021 16:53:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[modificarMaestro] @nombre varchar(50), @id int
AS
  UPDATE maestroDepartamentos SET nombre=@nombre where id = @id
GO
USE [master]
GO
ALTER DATABASE [departamentos] SET  READ_WRITE 
GO
