# Tennis Warehouse

## Tareas a realizar 

    -Realitza la maquetació o layer design del projecte. Entrega un breu document amb l'anàlisi i la planificació al README.md (valen fotos d'esquemes del quadern) (Completado)
    -Presenta news.html, la portada, amb 3 notícies (ja escrites al html)  (Completado)
    
    -Emmagatzema 6 noticies més en dos fitxers, data/1.json data/2.json per ser carregades amb js. (Completado)
    
    -Codifica news.js en jQuery per fer: "botó carregar més notícies" i l'event "scroll bottom" que, en ser activat qualsevol d'ells, faci una càrrega i presentació de més dades (fins a dues vegades 1.json, 2.json) (Completado)
    
    -Inclou rss.xml (especificat al tema 7) (Completado)
    
    -Codifica news1.html i news2.html, pàgines que corresponen a les dues primeres noticies (darreres publicades). Quan feim clic a la notícia 1 de news.html ens va a news1.html, quan feim clic a la notícia 2 de news.html ens va a news2.html (no és necessari fer-ne més, aquesta tasca es pot automatitzar amb codi de servidor que es veurà a segon curs). (Completado)
    
    -La plantilla o pàgina de veure una sola notícia news1.html (news2.html és idèntica) ha de contenir una imatge i un vídeo de Youtube responsive. (Completado)
    
    -Cada pàgina ha de contenir les etiquetes meta (amb open graph) per compartir a Facebook el títol, descripció, imatge (gran), nom de l'aplicació i url de la pàgina.  (Completado)



## Errores encontrados en el proyecto
* __No esta el texto justificado en las noticias y no estaba la etiqueta "p" en los párrafos de las noticias (Se ha corregido agregando la etiqueta "p" en los párrafos y poniendo la clase text-justify)__
 
 * __La descripcion de la página en la etiqueta meta es corta (Se ha arreglado alargando más la descripción).__
    
  * __En la página de noticia1.html no estaba la imagen redimensionada (Se ha arreglado agregando la clase image-responsive)__
  
  * __Los anuncios no se cambian de posición al cambiar de pantallo la pantalla(Se ha arreglado agregando una mediaquery)__
    
  * __No hay un boton de activar y desactivar el scroll (Se ha arreglado haciendo una variable booleana en la cual cuando le das click se cambia a false y viceversa)__
     Para entenderlo mejor voy a poner una imagen
   ![Link imagen](https://github.com/Soontrax/WEB_Boostrap-JQuery/blob/master/img/false-true.PNG)

----------------------------------------------------------
## Primera ideal principal
La primera visión de la Web es crear un página versátil y con modalidades para que el usuario puede acceder a todas las noticias de forma rápida y fácil.

Para poder hacer esto he implemetado una pagina principal donde será la pagina de presentación con un video de presentación las ultimas noticias con un resumen y un calendario y luego al final 3 videos con las caras de los aspirantes y un hipervinculo a un partido de los aspirantes.

## Ranking
Después hacer un ranking para individuales y otro de dobles que incluirá la puntuación la posición el pais del jugador y el nombre y al final pondé un video resumen de la ultima semana la actualización del ranking

## Noticias
Y en las noticias haré una composición de de 12 noticias de las cuales las 6 primeras irán a un json y las últimas 6 a otro json
y tendrán una composición de cada 2 noticias

-------------------------------------------------------------------------------------------------------

# Versiones(Actualizaciones)
## 1.7
Versiones Minify :
* __CSS  Minify:__
* __HTML Minify:__
* __JSON :__
* __RSS :__
Y agregar animaciones en los col md-4 cuando pasas encima de ellos
Añadir un widget de twitter en las noticias debajo del anuncio que personalizado

## 1.6
Poner un boton en el cual carguen solo las noticias al darle al boton cargar noticias y cuando se descative el boton que carguen las notícias al hacer scroll

Arreglar los anuncios cuando llegan a un mínimo de porcentaje de pantalla y que se pongan arriba del todo

## 1.5
Cambiar el video por un carrousel porque no funcionaba el video en rawgit y cambiar la el nav por uno que se adapte mejor al móvil

## 1.4
Que carguen las notícias con un evento scroll y hacer el documento rss

## 1.3
En la página de noticias y en la de presentación agregar un anuncio en el cual son 3 imagenes que se van rotando cada 2 segundos

## 1.2
En los rankings poner la clase .table-bordere para las tablas

## 1.1
Implementación de un scroll bar indicator que consiste en una barra horizontal en cual te indica a que altura de la pagina estás

## 1.0
Video de Presentación en la página de inicio



----------------------------------------------------------------------------------------------------------

# Imagen de muestra
![WEB](https://github.com/Soontrax/WEB_Boostrap-JQuery/blob/master/img/WEB.jpg)

## Link de la página [aquí](https://rawgit.com/Soontrax/WEB_Boostrap-JQuery/master/index.html)
Como podemos ver en la imagen tenia ya una idea de donde estarian los elementos como la barra de navegacion que opciones tendrían, el contenido y su posicionamiento y al final unos videos de los aspirantes.
