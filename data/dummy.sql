/*
SQLyog Ultimate v9.51 
MySQL - 5.6.21-log : Database - jd
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `application` */

CREATE TABLE `application` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Data for the table `application` */

insert  into `application`(`id`,`name`,`link`,`created_at`,`updated_at`) values (9,'Jack Daniel\'s Embassies','http://www.embajadasjack.com','2015-07-21 04:43:41','2015-07-21 04:43:41');

/*Table structure for table `category` */

CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `slug` varchar(150) DEFAULT NULL,
  `name` varchar(45) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

/*Data for the table `category` */

insert  into `category`(`id`,`slug`,`name`,`created_at`,`updated_at`) values (2,'todos','Todos','2015-01-13 06:46:41','2015-02-03 03:24:04');
insert  into `category`(`id`,`slug`,`name`,`created_at`,`updated_at`) values (3,'novedades','Novedades','2015-01-13 06:46:57','2015-01-13 06:46:57');
insert  into `category`(`id`,`slug`,`name`,`created_at`,`updated_at`) values (4,'eventos','Eventos','2015-01-13 06:47:09','2015-01-13 06:47:09');
insert  into `category`(`id`,`slug`,`name`,`created_at`,`updated_at`) values (5,'Promociones','promociones','2015-01-13 06:52:58','2015-01-13 06:52:58');
insert  into `category`(`id`,`slug`,`name`,`created_at`,`updated_at`) values (6,'sorteos','Sorteos','2015-01-13 06:53:14','2015-01-13 06:53:14');

/*Table structure for table `post` */

CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `publication_date` date NOT NULL,
  `slug` varchar(150) DEFAULT NULL,
  `type` enum('post','banner') DEFAULT NULL,
  `title_home` varchar(150) DEFAULT NULL,
  `description_home` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `title` varchar(150) DEFAULT NULL,
  `subtitle` text,
  `description` text,
  `quote` varchar(255) DEFAULT NULL,
  `quote_author` varchar(255) DEFAULT NULL,
  `is_promo` enum('yes','no') DEFAULT NULL,
  `promo_type` enum('link','form') DEFAULT NULL,
  `promo_link` varchar(255) DEFAULT NULL,
  `promo_start_date` date DEFAULT NULL,
  `promo_end_date` date DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

/*Data for the table `post` */

insert  into `post`(`id`,`publication_date`,`slug`,`type`,`title_home`,`description_home`,`link`,`title`,`subtitle`,`description`,`quote`,`quote_author`,`is_promo`,`promo_type`,`promo_link`,`promo_start_date`,`promo_end_date`,`created_at`,`updated_at`) values (22,'2015-07-09','sobrejackdaniels','post','EL AUTÉNTICO TENNESSEE WHISKEY','','','JACK DANIEL’S OLD Nº7: EL AUTÉNTICO TENNESSEE WHISKEY','','<p>Jack\r\nDaniel\'s se elabora en la destilería americana más antigua en Lynchburg,\r\nTennessee (EEUU) desde 1866. Su carácter independiente y genuino, unido a su\r\nsabor inconfundible, lo han convertido en el whiskey más vendido del mundo. Hecho\r\ncon agua de manantial pura y filtrado a través de 3 metros de carbón de arce,\r\nesta elaboración única lo diferencia de otros whiskeys americanos y bourbons.\r\nEl auténtico Tennessee Whiskey madura en barriles nuevos de roble americano\r\nfabricados por nuestros artesanos.</p>\r\n\r\n<p>A\r\ntravés de la historia, Jack Daniel’s se ha convertido en un símbolo de calidad,\r\nconsiguiendo 7 medallas de oro y convirtiendo su botella en todo un icono. Su\r\ncaracterística etiqueta y su famoso logotipo “Old Nº 7”, cuyo significado sigue\r\nsiendo hoy en día un misterio, son reconocidos mundialmente.</p>','','','no','link','','0000-00-00','0000-00-00','2015-07-13 06:48:40','2015-07-22 11:03:39');
insert  into `post`(`id`,`publication_date`,`slug`,`type`,`title_home`,`description_home`,`link`,`title`,`subtitle`,`description`,`quote`,`quote_author`,`is_promo`,`promo_type`,`promo_link`,`promo_start_date`,`promo_end_date`,`created_at`,`updated_at`) values (23,'2015-07-01','julio-2015','banner','','','','','','','','','no','link','','0000-00-00','0000-00-00','2015-07-13 07:04:26','2015-07-13 08:03:59');
insert  into `post`(`id`,`publication_date`,`slug`,`type`,`title_home`,`description_home`,`link`,`title`,`subtitle`,`description`,`quote`,`quote_author`,`is_promo`,`promo_type`,`promo_link`,`promo_start_date`,`promo_end_date`,`created_at`,`updated_at`) values (24,'2015-07-15','jack-honey','post','JACK HONEY: LO ÚLTIMO DE JACK','','','JACK HONEY: LO ÚLTIMO DE JACK','Jack Honey es la sorprendente unión de Jack Daniel’s Tennessee Whiskey con un toque de miel. <br>El resultado es una combinación que mantiene el auténtico carácter Jack Daniel’s con un final inesperadamente suave. <br><br>Fácil de tomar, es perfecto para compartir en forma de chupito helado.&nbsp;','','','','no','link','','0000-00-00','0000-00-00','2015-07-13 07:08:23','2015-07-22 10:35:24');
insert  into `post`(`id`,`publication_date`,`slug`,`type`,`title_home`,`description_home`,`link`,`title`,`subtitle`,`description`,`quote`,`quote_author`,`is_promo`,`promo_type`,`promo_link`,`promo_start_date`,`promo_end_date`,`created_at`,`updated_at`) values (25,'2015-07-04','gentleman-jack','post','GENTLEMAN JACK','','','GENTLEMAN JACK: EL WHISKEY DE LOS CABALLEROS','','<p>Al igual que Jack Daniel Tennessee Whiskey y Jack Daniel Single Barrel,\r\nGentleman Jack es suavizado al carbón antes de reposar en los barriles.\r\nGentleman Jack, sin embargo, recibe un “blessing” adicional al llegar a la\r\nmadurez que le aporta la máxima suavidad. Cuando sirvas Gentleman Jack, hazlo\r\ncon orgullo, porque este es el whiskey que toman los caballeros.</p>','','','no','link','','0000-00-00','0000-00-00','2015-07-13 07:18:05','2015-07-14 03:10:12');
insert  into `post`(`id`,`publication_date`,`slug`,`type`,`title_home`,`description_home`,`link`,`title`,`subtitle`,`description`,`quote`,`quote_author`,`is_promo`,`promo_type`,`promo_link`,`promo_start_date`,`promo_end_date`,`created_at`,`updated_at`) values (26,'2015-07-05','single-barrel','post','SINGLE BARREL','','','SINGLE BARREL: UN BARRIL, UN SABOR SINGULAR','','<p>Hay detalles que convierten a la\r\nvariedad Single Barrel en algo muy especial. Cada botella procede de un único\r\nbarril situado en las plantas superiores del almacén llamado “Angel Roost”,\r\ndonde se obtiene un proceso de maduración más intenso.</p>\r\n\r\n<p>De cada barril se obtiene un número\r\nlimitado de botellas que poseen características singulares en cuanto a\r\nintensidad de color, sabor y aroma: un barril, un sabor único.</p>\r\n\r\n<p>El programa “Buy the Barrel”, permite\r\ncomprar un barril entero (+/- 240 botellas), todo un lujo.</p>\r\n\r\n<p>Single Barrel se elabora desde 1977 y\r\ncada botella se etiqueta a mano con el número de barril y la fecha de embotellamiento.\r\nPor algo es el whiskey más exclusivo de la destilería.<br></p>','','','no','link','','0000-00-00','0000-00-00','2015-07-13 07:22:31','2015-07-14 03:10:34');
insert  into `post`(`id`,`publication_date`,`slug`,`type`,`title_home`,`description_home`,`link`,`title`,`subtitle`,`description`,`quote`,`quote_author`,`is_promo`,`promo_type`,`promo_link`,`promo_start_date`,`promo_end_date`,`created_at`,`updated_at`) values (27,'2015-07-14','sinatra-select','post','JACK DANIEL’S SINATRA SELECT: DE MITO A MITO','','','JACK DANIEL’S SINATRA SELECT: DE MITO A MITO','','<p>Desde que Frank Sinatra\r\nprobó Jack Daniel’s por primera vez en un cocktail bar del corazón de\r\nManhattan, no se separó de él en toda su carrera. Ya fuera en la década de los\r\n50 o en los 90, en cada actuación ofrecía un brindis al público con un vaso de\r\nJack Daniel’s en la mano. Incluso pidió ser enterrado con una de sus botellas,\r\ny así fue. Con un embajador de tal categoría, lo justo era que Jack Daniel’s le\r\nhomenajeara como se merece.</p>\r\n\r\n<p><b>DESCUBRE ‘JACK DANIEL’S SINATRA SELECT’</b></p>\r\n\r\nEsta variedad de Jack Daniel’s\r\nes embotellada a 90 grados y reposada en los \"barriles Sinatra\", que\r\ncuentan con surcos profundos en el interior de sus duelas, exponiendo el whiskey\r\na capas adicionales de roble. Esto imparte un rico color ámbar, un carácter\r\ndorado y un ahumado agradable, seguido de un toque final a vainilla\r\nincreíblemente suave. Al igual que el propio Frank, este whiskey es único en su\r\ncategoría.<br><br><img alt=\"\" src=\"http://devel.berepublic.es/alberto/jd/600x600sinatra.png\">','','','no','link','','0000-00-00','0000-00-00','2015-07-13 07:24:47','2015-07-22 10:36:10');
insert  into `post`(`id`,`publication_date`,`slug`,`type`,`title_home`,`description_home`,`link`,`title`,`subtitle`,`description`,`quote`,`quote_author`,`is_promo`,`promo_type`,`promo_link`,`promo_start_date`,`promo_end_date`,`created_at`,`updated_at`) values (28,'2015-07-17','jack-ginger','post','UNA MANERA DIFERENTE DE DISFRUTAR DE JACK','','','UNA MANERA DIFERENTE DE DISFRUTAR DE JACK','','<p><span>Para el <i>perfect\r\nserve</i> de JACK &amp; GINGER contaremos con un <i>garnish</i> de naranja cálido y envolvente que trabajaremos bajo el\r\nconcepto <i>zest</i>, es decir, con la piel\r\ndel cítrico en lugar de la pulpa. Esto da un aroma extra a la bebida que\r\ndespierta nuevos matices que muchas veces la pulpa no consigue.</span></p>\r\n\r\n<p>Finalmente para balancear el contenido de azúcar se\r\nha pensado en el “Orange Bitter”, un pequeño desconocido para el consumidor\r\nfinal que siempre sorprende por su sabor.</p>\r\n\r\n<p><b>PREPARACIÓN:</b></p>\r\n\r\n<p>Servir los 60 ml de Jack\r\nDaniel’s y el Dash de Orange Bitter, completar la copa con hielo a su capacidad\r\nmáxima y servir el Ginger Ale. Finalmente hacer un <i>twist</i> con la piel de naranja, aplicar los aceites en la copa y\r\nsumergir. Como decoración, añadir un <i>zest</i>\r\nde naranja.</p>','','','no','link','','0000-00-00','0000-00-00','2015-07-13 07:29:17','2015-07-22 11:02:45');
insert  into `post`(`id`,`publication_date`,`slug`,`type`,`title_home`,`description_home`,`link`,`title`,`subtitle`,`description`,`quote`,`quote_author`,`is_promo`,`promo_type`,`promo_link`,`promo_start_date`,`promo_end_date`,`created_at`,`updated_at`) values (29,'2015-07-12','jarras-oficiales','post','CONSIGUE LAS JARRAS OFICIALES','','','CONSIGUE LAS JARRAS OFICIALES','','<p>Lynchburg Lemonade es el cocktail\r\nmás refrescante de Jack Daniel’s para este verano. Fácil de preparar,\r\nsorprenderás a tus clientes con una nueva forma de tomar Jack. Si además lo\r\npreparas en la jarra oficial, el resultado será perfecto.</p>\r\n\r\n<p><b>INGREDIENTES: </b></p>\r\n\r\n<p>&nbsp;. 1 parte de Jack Daniel’s</p>\r\n\r\n<p>. 1 parte de triple seco</p>\r\n\r\n<p>. 1 parte de jarabe</p>\r\n\r\n<p>. 4 partes de Sprite o soda con\r\nlima limón.</p>\r\n\r\n<p>&nbsp;Descubre en este vídeo lo sencillo\r\nque es prepararlo: <a target=\"_blank\" rel=\"nofollow\" href=\"https://www.facebook.com/jackdanielsspain/videos/vb.114336695243893/927389113938643/?type=2&amp;theater\">https://www.facebook.com/jackdanielsspain/videos/vb.114336695243893/927389113938643/?type=2&amp;theater</a></p>','','','yes','form','','2015-07-01','2015-07-31','2015-07-13 07:37:20','2015-07-22 10:36:58');
insert  into `post`(`id`,`publication_date`,`slug`,`type`,`title_home`,`description_home`,`link`,`title`,`subtitle`,`description`,`quote`,`quote_author`,`is_promo`,`promo_type`,`promo_link`,`promo_start_date`,`promo_end_date`,`created_at`,`updated_at`) values (30,'2015-07-05','detras-n7','post','¿Qué se esconde detrás del nº7?','','','¿Qué se esconde detrás del nº7?','','<p>La leyenda de Jack Daniel’s\r\nestá llena de secretos todavía desconocidos. Unos dicen que era la séptima receta, otros que era su\r\nnúmero de la suerte o tal vez las novias que tuvo… Pero amigos, todos\r\ncoincidimos en una cosa: sólo Jack sabía el significado del número 7 y no se lo\r\ncontó a nadie.<b></b></p>\r\n\r\n<p>Descubre la historia de Jack y más curiosidades en:\r\n<a target=\"_blank\" rel=\"nofollow\" href=\"http://www.jackdaniels.com/\">http://www.jackdaniels.com/</a></p><p><img alt=\"\" src=\"http://devel.berepublic.es/alberto/jd/DETALLE_JDN7.png\"><br></p>','','','no','link','','0000-00-00','0000-00-00','2015-07-13 07:40:00','2015-07-22 10:38:49');
insert  into `post`(`id`,`publication_date`,`slug`,`type`,`title_home`,`description_home`,`link`,`title`,`subtitle`,`description`,`quote`,`quote_author`,`is_promo`,`promo_type`,`promo_link`,`promo_start_date`,`promo_end_date`,`created_at`,`updated_at`) values (32,'2015-07-11','jackdaniels-vs-bourbon','post','JACK DANIEL’S vs. BOURBON: DESCUBRE LAS DIFERENCIAS','','','JACK DANIEL’S vs. BOURBON: DESCUBRE LAS DIFERENCIAS','','<p>A pesar de\r\nque parte del proceso de elaboración de Jack es similar al del bourbon, hay\r\ncaracterísticas especiales que lo hacen único:</p>\r\n\r\n<p>1.&nbsp;&nbsp;&nbsp;&nbsp; Jack\r\nDaniel’s Tennessee whiskey es filtrado en carbón de arce sacarino, que le\r\nproporciona un sabor y aroma distintivos.</p>\r\n\r\n<p>2.&nbsp;&nbsp;&nbsp;&nbsp; El proceso\r\nconsiste en hacer pasar el whiskey recién elaborado a través de grandes\r\nrecipientes llenos de unos 3 metros de este tipo de carbón.</p>\r\n\r\n<p>3.&nbsp;&nbsp;&nbsp;&nbsp; Durante 10\r\ndías, el whiskey absorbe la esencia del carbón, que refina la bebida y le\r\nproporciona un sabor y unos matices muy especiales.</p>\r\n\r\n<p><b>4.&nbsp;&nbsp;&nbsp;&nbsp; </b>Los barriles\r\nde Jack se fabrican con roble blanco americano ya que solo esta madera tiene la\r\ncombinación necesaria de compuestos para lograr el producto final.&nbsp;</p><p><img alt=\"\" src=\"http://devel.berepublic.es/alberto/jd/453x310px_historia3.png\"><br></p><p><b></b></p>','','','no','link','','0000-00-00','0000-00-00','2015-07-13 07:44:34','2015-07-14 03:59:10');
insert  into `post`(`id`,`publication_date`,`slug`,`type`,`title_home`,`description_home`,`link`,`title`,`subtitle`,`description`,`quote`,`quote_author`,`is_promo`,`promo_type`,`promo_link`,`promo_start_date`,`promo_end_date`,`created_at`,`updated_at`) values (34,'2015-07-06','165-aniversario-jack','post','165 ANIVERSARIO DE JACK DANIEL','','','165 ANIVERSARIO DE JACK DANIEL','<div>Este año se cumplen 165 años del nacimiento de Mr. Jack. En 1950 nacía el fundador de Jack Daniel’s, un marca icónica que, a pesar del paso de los años, sigue más viva que nunca. Se sabe que nació en septiembre, pero no el día exacto, así que tenemos la excusa perfecta para celebrarlo durante todo el mes. Eventos, acciones especiales y diversión en un homenaje a este creador visionario que siguió su propio camino y vivió según sus reglas.</div><div><br>Atento porque en septiembre van a pasar muchas cosas. ¡Larga vida a Jack Daniel!<br></div>','','','','no','link','','0000-00-00','0000-00-00','2015-07-13 07:51:55','2015-07-29 03:24:09');
insert  into `post`(`id`,`publication_date`,`slug`,`type`,`title_home`,`description_home`,`link`,`title`,`subtitle`,`description`,`quote`,`quote_author`,`is_promo`,`promo_type`,`promo_link`,`promo_start_date`,`promo_end_date`,`created_at`,`updated_at`) values (35,'2015-07-16','proceso-elaboracion','post','UN PROCESO DE ELABORACIÓN EXCEPCIONAL','','','UN PROCESO DE ELABORACIÓN EXCEPCIONAL PARA UN RESULTADO EXCEPCIONAL','<p>El proceso de elaboración de Jack Daniel’s es único y exclusivo, cuidado desde el inicio hasta el final. Cada detalle, cada ingrediente y cada una de las modificaciones en su proceso de creación dará lugar a una u otra variedad. Una de las características que lo hacen tan especial es su exclusiva técnica de filtrado en carbón de arce sacarino, que le proporciona una suavidad incomparable.&nbsp;</p><p>Un proceso lento y apasionante, que solo está listo cuando el&nbsp;<i>master distiller</i>&nbsp;cata el resultado y dice que está perfecto.&nbsp;Todas las variedades de Jack están elaboradas con agua extraída del manantial de Lynchburg, y es la única destilería del mundo que fabrica sus propios barriles de roble. En esta web podrás descubrir, una a una, las diferentes variedades y sus características.&nbsp;</p>','','','','no','link','','0000-00-00','0000-00-00','2015-07-13 07:53:36','2015-07-22 10:34:58');
insert  into `post`(`id`,`publication_date`,`slug`,`type`,`title_home`,`description_home`,`link`,`title`,`subtitle`,`description`,`quote`,`quote_author`,`is_promo`,`promo_type`,`promo_link`,`promo_start_date`,`promo_end_date`,`created_at`,`updated_at`) values (36,'2015-07-10','historia-jack-daniel','post','DESCUBRE LA HISTORIA DE JACK','','','DESCUBRE LA HISTORIA DE JACK','<p>Conoce cómo\r\nfue la vida del fundador de Jack Daniel’s. Un hombre pionero, tenaz y\r\nauténtico.</p>\r\n\r\n<p><b>1950:</b> Jasper\r\nNewton “Jack” Daniel nació en Tennessee (Estados Unidos) en el núcleo de una\r\nfamilia descendiente de Gales.</p>\r\n\r\n<p><b>1957:</b> A los 7 años pasó a ser criado\r\npor Dan Call, un amigo de la familia que poseía una destilería de whiskey en\r\nLouse River, de quien adquirió todo su conocimiento sobre la materia.</p>\r\n\r\n<p><b>1863:</b> Call le\r\nvendió la destilería a Jack, cuando apenas tenía 13 años de edad. </p>\r\n\r\n<p><b>1866:</b> Jack\r\nDaniel estaba convencido de que el proceso de suavización del whiskey fresco\r\ncon carbón de arce duro era algo esencial, así que en trabajó para perfeccionar\r\nsu técnica.<b>1904:</b> Mr. Jack\r\ninscribió su whiskey Tennessee Old No.7 en la Feria Mundial celebrada en San\r\nLuis, Missouri. Recibió la Medalla de Oro que acreditaba a su producto como el\r\nmejor whiskey del mundo.</p>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<p><b>1907:</b> Jack\r\nhabía tomado a su sobrino favorito, Lem Motlow, bajo su protección, y en este\r\naño le cedió la destilaría debido a sus problemas de salud. </p>\r\n\r\n<p><b>1911:</b> Jack\r\nmurió por envenenamiento de sangre. Se dice que a causa de una infección que\r\ncontrajo al darle patadas a una caja fuerte cuya contraseña había olvidado.</p>\r\n\r\n<p><b>Actualidad:</b> A pesar\r\ndel paso de los años, la leyenda de Jack sigue viva como marca y como icono del\r\nespíritu independiente.&nbsp;</p>','','','','no','link','','0000-00-00','0000-00-00','2015-07-14 03:45:45','2015-07-14 03:45:45');

/*Table structure for table `post_has_category` */

CREATE TABLE `post_has_category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `post_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_post_has_category_category1_idx` (`category_id`),
  KEY `fk_post_has_category_post1_idx` (`post_id`),
  CONSTRAINT `fk_post_has_category_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_post_has_category_post1` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=167 DEFAULT CHARSET=utf8;

/*Data for the table `post_has_category` */

insert  into `post_has_category`(`id`,`post_id`,`category_id`) values (86,23,2);
insert  into `post_has_category`(`id`,`post_id`,`category_id`) values (87,23,3);
insert  into `post_has_category`(`id`,`post_id`,`category_id`) values (88,23,4);
insert  into `post_has_category`(`id`,`post_id`,`category_id`) values (89,23,5);
insert  into `post_has_category`(`id`,`post_id`,`category_id`) values (90,23,6);
insert  into `post_has_category`(`id`,`post_id`,`category_id`) values (111,25,2);
insert  into `post_has_category`(`id`,`post_id`,`category_id`) values (112,26,2);
insert  into `post_has_category`(`id`,`post_id`,`category_id`) values (123,36,2);
insert  into `post_has_category`(`id`,`post_id`,`category_id`) values (126,32,2);
insert  into `post_has_category`(`id`,`post_id`,`category_id`) values (147,35,2);
insert  into `post_has_category`(`id`,`post_id`,`category_id`) values (148,24,2);
insert  into `post_has_category`(`id`,`post_id`,`category_id`) values (149,24,3);
insert  into `post_has_category`(`id`,`post_id`,`category_id`) values (150,27,2);
insert  into `post_has_category`(`id`,`post_id`,`category_id`) values (151,29,2);
insert  into `post_has_category`(`id`,`post_id`,`category_id`) values (152,29,3);
insert  into `post_has_category`(`id`,`post_id`,`category_id`) values (153,29,5);
insert  into `post_has_category`(`id`,`post_id`,`category_id`) values (154,29,6);
insert  into `post_has_category`(`id`,`post_id`,`category_id`) values (157,30,2);
insert  into `post_has_category`(`id`,`post_id`,`category_id`) values (160,28,2);
insert  into `post_has_category`(`id`,`post_id`,`category_id`) values (161,28,3);
insert  into `post_has_category`(`id`,`post_id`,`category_id`) values (162,22,2);
insert  into `post_has_category`(`id`,`post_id`,`category_id`) values (165,34,2);
insert  into `post_has_category`(`id`,`post_id`,`category_id`) values (166,34,3);

/*Table structure for table `post_has_tag` */

CREATE TABLE `post_has_tag` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `post_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_post_has_tag_tag1_idx` (`tag_id`),
  KEY `fk_post_has_tag_post1_idx` (`post_id`),
  CONSTRAINT `fk_post_has_tag_post1` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_post_has_tag_tag1` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `post_has_tag` */

/*Table structure for table `post_media` */

CREATE TABLE `post_media` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) NOT NULL,
  `source` varchar(255) NOT NULL,
  `image_source` varchar(255) DEFAULT NULL,
  `type` enum('video','image') DEFAULT NULL,
  `style` enum('home','banner','gallery','gallery-extended') DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_post_media_post_idx` (`post_id`),
  CONSTRAINT `fk_post_media_post` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8;

/*Data for the table `post_media` */

insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (33,22,'/admin/web/uploaded/COVER_jackdanieln7_55a35f48219fa.png','/admin/web/uploaded/COVER_jackdanieln7_55a35f48219fa.png','image','home','',NULL,'2015-07-13 06:48:40','2015-07-13 06:48:40');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (37,22,'/admin/web/uploaded/fichajd_7_55a361f11847f.png','/admin/web/uploaded/fichajd_7_55a361f11847f.png','image','gallery',NULL,NULL,'2015-07-13 06:48:40','2015-07-13 07:00:01');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (38,23,'/admin/web/uploaded/jul_jackdanield_55a362fa5168f.png','/admin/web/uploaded/jul_jackdanield_55a362fa5168f.png','image','banner','',NULL,'2015-07-13 07:04:26','2015-07-13 07:04:26');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (39,24,'/admin/web/uploaded/COVERHONEY_55a363e7b8b91.jpg','/admin/web/uploaded/COVERHONEY_55a363e7b8b91.jpg','image','home','',NULL,'2015-07-13 07:08:23','2015-07-13 07:08:23');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (40,24,'/admin/web/uploaded/header_jackandhoney_55a363e7b9839.png','/admin/web/uploaded/header_jackandhoney_55a363e7b9839.png','image','banner','',NULL,'2015-07-13 07:08:23','2015-07-13 07:08:23');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (45,24,'/admin/web/uploaded/honeysmall1_55a3651bb78c6.png','/admin/web/uploaded/honeysmall1_55a3651bb78c6.png','image','gallery','','<b>Aroma:</b> Notas de miel natural, melaza y frutos secos tostados que aportan un   acabado dulce al tradicional aroma de Jack Daniel’s.','2015-07-13 07:08:23','2015-07-13 07:13:31');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (46,24,'/admin/web/uploaded/honeysmall2_55a3651bb842c.png','/admin/web/uploaded/honeysmall2_55a3651bb842c.png','image','gallery','','<b>Sabor:</b> Jack Daniel’s Tennessee Whiskey con delicadas notas de miel, chocolate y praliné.','2015-07-13 07:08:23','2015-07-13 07:13:31');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (47,24,'/admin/web/uploaded/honeysmall3_55a3651bb8811.png','/admin/web/uploaded/honeysmall3_55a3651bb8811.png','image','gallery','','<b>Acabado:</b> Suave con trazos de miel y nueces.','2015-07-13 07:08:23','2015-07-13 07:13:31');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (48,24,'/admin/web/uploaded/honeysmall4_55a3651bb9447.png','/admin/web/uploaded/honeysmall4_55a3651bb9447.png','image','gallery','','<b>Graduación:</b> 35% Vol.','2015-07-13 07:08:23','2015-07-13 07:13:31');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (49,25,'/admin/web/uploaded/COVER_gentelman_55a3662d273cd.png','/admin/web/uploaded/COVER_gentelman_55a3662d273cd.png','image','home','',NULL,'2015-07-13 07:18:05','2015-07-13 07:18:05');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (50,25,'/admin/web/uploaded/gentelman_jd_15_55a3662d28011.png','/admin/web/uploaded/gentelman_jd_15_55a3662d28011.png','image','banner','',NULL,'2015-07-13 07:18:05','2015-07-13 07:18:05');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (51,25,'/admin/web/uploaded/453x310pxgentelman_55a3662d28bf1.png','/admin/web/uploaded/453x310pxgentelman_55a3662d28bf1.png','image','gallery',NULL,NULL,'2015-07-13 07:18:05','2015-07-13 07:18:05');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (52,25,'/admin/web/uploaded/ficha_GJ_55a3662d297cd.png','/admin/web/uploaded/ficha_GJ_55a3662d297cd.png','image','gallery',NULL,NULL,'2015-07-13 07:18:05','2015-07-13 07:18:05');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (53,26,'/admin/web/uploaded/COVER_singlebarrel_55a36737150ce.png','/admin/web/uploaded/COVER_singlebarrel_55a36737150ce.png','image','home','',NULL,'2015-07-13 07:22:31','2015-07-13 07:22:31');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (54,26,'/admin/web/uploaded/header_singlebarrel_55a36737157b7.png','/admin/web/uploaded/header_singlebarrel_55a36737157b7.png','image','banner','',NULL,'2015-07-13 07:22:31','2015-07-13 07:22:31');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (55,26,'/admin/web/uploaded/ficha_SINGLEBARREL_55a36737164b7.png','/admin/web/uploaded/ficha_SINGLEBARREL_55a36737164b7.png','image','gallery',NULL,NULL,'2015-07-13 07:22:31','2015-07-13 07:22:31');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (58,28,'/admin/web/uploaded/COVER_JACKANDGINGER_55a368cd63973.png','/admin/web/uploaded/COVER_JACKANDGINGER_55a368cd63973.png','image','home','',NULL,'2015-07-13 07:29:17','2015-07-13 07:29:17');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (60,28,'/admin/web/uploaded/receta_jd_andg_55a368cd65202.png','/admin/web/uploaded/receta_jd_andg_55a368cd65202.png','image','gallery',NULL,NULL,'2015-07-13 07:29:17','2015-07-13 07:29:17');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (62,29,'/admin/web/uploaded/COVER_lynchburglemnade_55a36ab0d9ae4.jpg','/admin/web/uploaded/COVER_lynchburglemnade_55a36ab0d9ae4.jpg','image','home','',NULL,'2015-07-13 07:37:20','2015-07-13 07:37:20');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (63,29,'/admin/web/uploaded/1300x423cabecera_JACKLEMONADE_55a36ab0da6cb.png','/admin/web/uploaded/1300x423cabecera_JACKLEMONADE_55a36ab0da6cb.png','image','banner','',NULL,'2015-07-13 07:37:20','2015-07-13 07:37:20');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (64,29,'/admin/web/uploaded/RECETALYNCHBURG_55a36ab0dab0f.png','/admin/web/uploaded/RECETALYNCHBURG_55a36ab0dab0f.png','image','gallery',NULL,NULL,'2015-07-13 07:37:20','2015-07-13 07:37:20');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (75,34,'/admin/web/uploaded/COVER_jackdanieln11_55a36e1b2e56d.png','/admin/web/uploaded/COVER_jackdanieln11_55a36e1b2e56d.png','image','home','',NULL,'2015-07-13 07:51:55','2015-07-13 07:51:55');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (76,34,'/admin/web/uploaded/1300x423cabecera_JACKTODOS_55a36e1b2e9a7.png','/admin/web/uploaded/1300x423cabecera_JACKTODOS_55a36e1b2e9a7.png','image','banner','',NULL,'2015-07-13 07:51:55','2015-07-13 07:51:55');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (77,35,'/admin/web/uploaded/COVER_birthay_55a36e80f10bb.png','/admin/web/uploaded/COVER_birthay_55a36e80f10bb.png','image','home','',NULL,'2015-07-13 07:53:36','2015-07-13 07:53:36');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (78,35,'/admin/web/uploaded/1300x423cabecera_FUEGO_55a36e80f30e8.png','/admin/web/uploaded/1300x423cabecera_FUEGO_55a36e80f30e8.png','image','banner','',NULL,'2015-07-13 07:53:36','2015-07-13 07:53:36');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (89,36,'/admin/web/uploaded/COVER_historia_new_55a52ea9e0532.png','/admin/web/uploaded/COVER_historia_new_55a52ea9e0532.png','image','home','',NULL,'2015-07-14 03:45:45','2015-07-14 03:45:45');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (90,36,'/admin/web/uploaded/1300x423cabecera_FAMIL_55a52ea9e108d.png','/admin/web/uploaded/1300x423cabecera_FAMIL_55a52ea9e108d.png','image','banner','',NULL,'2015-07-14 03:45:45','2015-07-14 03:45:45');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (91,36,'/admin/web/uploaded/IMAGEN_historia1_55a52ea9e14a1.png','/admin/web/uploaded/IMAGEN_historia1_55a52ea9e14a1.png','image','gallery','','','2015-07-14 03:45:45','2015-07-14 03:45:45');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (92,36,'/admin/web/uploaded/IMAGEN_historia2_55a52ea9e184d.png','/admin/web/uploaded/IMAGEN_historia2_55a52ea9e184d.png','image','gallery','','','2015-07-14 03:45:45','2015-07-14 03:45:45');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (93,32,'https://www.youtube.com/embed/MSiWCByV37k','http://img.youtube.com/vi/MSiWCByV37k/0.jpg','video','home','',NULL,'2015-07-13 07:44:34','2015-07-14 03:59:10');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (98,27,'https://www.youtube.com/embed/B3m1xMrqOlE','http://img.youtube.com/vi/B3m1xMrqOlE/0.jpg','video','home','',NULL,'2015-07-13 07:24:47','2015-07-22 10:36:10');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (99,30,'https://www.youtube.com/embed/YEm77vwz6-8','http://img.youtube.com/vi/YEm77vwz6-8/0.jpg','video','home','',NULL,'2015-07-13 07:40:00','2015-07-22 10:38:49');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (100,28,'/admin/web/uploaded/jackandginger_header_new_55af78554bd24.jpg','/admin/web/uploaded/jackandginger_header_new_55af78554bd24.jpg','image','banner','',NULL,'2015-07-13 07:29:17','2015-07-22 11:02:45');
insert  into `post_media`(`id`,`post_id`,`source`,`image_source`,`type`,`style`,`link`,`text`,`created_at`,`updated_at`) values (101,22,'/admin/web/uploaded/HEADER_jack7_new_55af788b2e6ca.jpg','/admin/web/uploaded/HEADER_jack7_new_55af788b2e6ca.jpg','image','banner','',NULL,'2015-07-13 06:48:40','2015-07-22 11:03:39');

/*Table structure for table `tag` */

CREATE TABLE `tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `slug` varchar(45) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `index_tag_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `tag` */

/*Table structure for table `user` */

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `surname` varchar(150) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` int(11) DEFAULT NULL,
  `bar` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `capacity` int(11) DEFAULT NULL,
  `message` text,
  `type` enum('contact','promo') DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_post1_idx` (`post_id`),
  CONSTRAINT `fk_user_post1` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (1,'tet','test',NULL,'a@a.es',NULL,NULL,NULL,NULL,NULL,NULL,'test','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (2,'ryrfkj','rtyu',NULL,'dfh@asd.com',NULL,NULL,NULL,NULL,NULL,NULL,'tyur','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (3,'Juan Marcos','Lopez',NULL,'juanmarcos.lopez@berepublic.es',NULL,NULL,NULL,NULL,NULL,NULL,'test y más test...','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (4,'Juan Marcos','Lopez Gonzalez',NULL,'juanmarcos.lopez@berepublic.es',NULL,NULL,NULL,NULL,NULL,NULL,'testeando y testeando :)','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (5,'Juan Marcos','Lopez Gonzalez',NULL,'sanjuanmarcos@me.com',NULL,NULL,NULL,NULL,NULL,NULL,'Para cualquier consulta, ponte en contacto con nosotros mandando un email a info@clubnumber7.es','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (6,'JM','Lopez',NULL,'sanjuanmarcos@me.com',NULL,NULL,NULL,NULL,NULL,NULL,'lo flipas con el JD','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (7,'Juan Marcos','Lopez',NULL,'sanjuanmarcos@me.com',NULL,NULL,NULL,NULL,NULL,NULL,'He leído y acepto los Términos y condiciones de uso, la Política de privacidad, la Política de cookies y la Política de links.\r\n\r\nPara cualquier consulta, ponte en contacto con nosotros mandando un email a info@clubnumber7.esHe leído y acepto los Términos y condiciones de uso, la Política de privacidad, la Política de cookies y la Política de links.\r\n\r\nPara cualquier consulta, ponte en contacto con nosotros mandando un email a info@clubnumber7.es','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (8,'Raul','Cruz',NULL,'raul.cruz@be2015.es',NULL,NULL,NULL,NULL,NULL,NULL,'Esto es un texto con tildes, como por ejemplo: \"España esta en caída libre\" €@','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (9,'Juan Marco','Lopez',NULL,'sanjuanmarcos@me.com',NULL,NULL,NULL,NULL,NULL,NULL,'test','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (10,'Juan Marco','Lopez',NULL,'sanjuanmarcos@me.com',NULL,NULL,NULL,NULL,NULL,NULL,'test','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (11,'Juan Marco','Lopez',NULL,'sanjuanmarcos@me.com',NULL,NULL,NULL,NULL,NULL,NULL,'test','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (12,'Raul','Cruz',NULL,'raul.cruz@be2015.es',NULL,NULL,NULL,NULL,NULL,NULL,'Testing sobre el email de info','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (13,'Raul','Cruz','0000-00-00','raul.cruz@be2015.es','barcelona',196,'Bar BE','Be2015','679629263',150,'Esto es un mensaje','promo',29,'2015-07-15 00:00:00',NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (14,'Juan Marcos','Lopez','0000-00-00','sanjuanmarcos@me.com','Barcelona',196,'VALMES','Balmes','628190167',100,'prueba de registro en PROMO','promo',29,'2015-07-15 00:00:00',NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (15,'Raul','Cruz','0000-00-00','rcruz@be.es','',196,'','','',0,'Texto','promo',29,'2015-07-15 00:00:00',NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (16,'Juan Marcos','Lopez',NULL,'juanmarcos.lopez@berepublic.es',NULL,NULL,NULL,NULL,NULL,NULL,'Test from BeRepublic','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (17,'Juan Marcos','Lopez',NULL,'juanmarcos.lopez@berepublic.es',NULL,NULL,NULL,NULL,NULL,NULL,'testing new environment','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (18,'Juan Marcos','Lopez Gonzalez',NULL,'juanmarcos.lopez@berepublic.es',NULL,NULL,NULL,NULL,NULL,NULL,'testing new environment.','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (19,'Juan Marcos','Lopez Gonzalez',NULL,'juanmarcos.lopez@berepublic.es',NULL,NULL,NULL,NULL,NULL,NULL,'testing new environment.','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (20,'Juan Marcos','Lopez Gonzalez',NULL,'juanmarcos.lopez@berepublic.es',NULL,NULL,NULL,NULL,NULL,NULL,'testing new environment.','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (21,'Juan Marcos','Lopez Gonzalez',NULL,'juanmarcos.lopez@berepublic.es',NULL,NULL,NULL,NULL,NULL,NULL,'testing new environment.','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (22,'Juan Marcos','Lopez Gonzalez',NULL,'juanmarcos.lopez@berepublic.es',NULL,NULL,NULL,NULL,NULL,NULL,'testing new environment.','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (23,'Juan marcos','Marcos',NULL,'juanmarcos.lopez@berepublic.es',NULL,NULL,NULL,NULL,NULL,NULL,'testing new environment','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (24,'Juan Marcos','Lopez',NULL,'juanmarcos.lopez@berepublic.es',NULL,NULL,NULL,NULL,NULL,NULL,'testing new environtment','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (25,'Juan Marcos','Lopez',NULL,'juanmarcos.lopez@berepublic.es',NULL,NULL,NULL,NULL,NULL,NULL,'testing new environtment','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (26,'Juan Marcos','Lopez',NULL,'juanmarcos.lopez@berepublic.es',NULL,NULL,NULL,NULL,NULL,NULL,'testing new environtment','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (27,'Juan Marcos','Lopez',NULL,'juanmarcos.lopez@berepublic.es',NULL,NULL,NULL,NULL,NULL,NULL,'Test','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (28,'aaa','glez',NULL,'sfgh@kutadfsfdosu.con',NULL,NULL,NULL,NULL,NULL,NULL,'uvoutc','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (29,'aaa','glez',NULL,'sfgh@kutadfsfdosu.con',NULL,NULL,NULL,NULL,NULL,NULL,'uvoutc','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (30,'aaa','glez',NULL,'sfgh@kutadfsfdosu.con',NULL,NULL,NULL,NULL,NULL,NULL,'uvoutc','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (31,'aaa','glez',NULL,'sfgh@kutadfsfdosu.con',NULL,NULL,NULL,NULL,NULL,NULL,'uvoutc','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (32,'aaa','glez',NULL,'sfgh@kutadfsfdosu.con',NULL,NULL,NULL,NULL,NULL,NULL,'uvoutc','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (33,'jlasdv','liyviopuv',NULL,'dfliug@lñkdhb.com',NULL,NULL,NULL,NULL,NULL,NULL,'sdfdsfdsf','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (34,'aliyfvakjgc','lisyavai',NULL,'ahahskd@google.com',NULL,NULL,NULL,NULL,NULL,NULL,'liydfgsiyv','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (35,'aliyfvakjgc','lisyavai',NULL,'ahahskd@google.com',NULL,NULL,NULL,NULL,NULL,NULL,'liydfgsiyv','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (36,'aliyfvakjgc','lisyavai',NULL,'ahahskd@google.com',NULL,NULL,NULL,NULL,NULL,NULL,'liydfgsiyv','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (37,'aliyfvakjgc','lisyavai',NULL,'ahahskd@google.com',NULL,NULL,NULL,NULL,NULL,NULL,'liydfgsiyv','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (38,'Juan Marcos','Lopez Gonzalez',NULL,'juanmarcos.lopez@berepublic.es',NULL,NULL,NULL,NULL,NULL,NULL,'Test -> responder al remitente.','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (39,'Juan Marcos','Lopez',NULL,'sanjuanmarcos@me.com',NULL,NULL,NULL,NULL,NULL,NULL,'testing new app','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (40,'Juan Marcos','Lopez',NULL,'sanjuanmarcos@me.com',NULL,NULL,NULL,NULL,NULL,NULL,'testing new app','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (41,'Juan Marcos','Lopez',NULL,'sanjuanmarcos@me.com',NULL,NULL,NULL,NULL,NULL,NULL,'testing new app','contact',NULL,NULL,NULL);
insert  into `user`(`id`,`name`,`surname`,`date_of_birth`,`email`,`city`,`country`,`bar`,`address`,`phone`,`capacity`,`message`,`type`,`post_id`,`created_at`,`updated_at`) values (42,'test-user','test-surname','1977-01-14','test@email.com','test-city',2,'test-bar','test-address','test-phone',100,'test-message','contact',NULL,'2016-07-11 18:00:18','2016-07-11 18:00:18');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
