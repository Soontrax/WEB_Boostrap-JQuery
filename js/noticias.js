var flagScroll = true;
//Función Para el scrool bar indicator
var progressBar = function () {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
//Funcion que sirve para cargar objetos JSON con el evento scroll
var myFunction = function () {
  if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    $($('.news')[$('.news:visible').length]).css('display', 'block');
  }

}
//Función de Preloader de Página
window.onload = function () {
  var contenedor = document.getElementById('contenedor_carga');

  $(contenedor).css("visibility", "hidden");
  $(contenedor).css("opacity", "0");

  $.ajax({
    datatype: "jsonp",
    type: "GET",
    data: {},
    url: "https://rawgit.com/Soontrax/WEB_Boostrap-JQuery/master/json/PrimerasNoticias.json",
    success: function (data) {
      console.log(data);
      var html = "";
      $.each(data.News, function (idx, item) {
        //Añadimos las etiquetas para cada 2 objetos que pasen
        if (idx % 2 == 0) {
          html += '</br><div style="display:none" class="news row">';
        }
        html += '<div class="col-md-4">' +
          '<div class="thumbnail">' +
          '<div class="caption">' +
          '<div class="ribbon">' +
          '<span>' +
          '<span>' + item.Title + '</span>' +
          '</span>' +
          '</div>' +
          '<h3 class="text-align: center">' +
          '<a href="pagina1.html?index=' + idx + '">' +
          '<b>' + item.Subtitle + '</b>' +
          '</a>' +
          '</h3>' +
          '<img src="' + item.Image + '" class="img-responsive">' +
          '</div>' +
          '<div class="caption">' +
          '<p class="text-justify">' + item.Description + '</p>' +
          '<p class="text-right">' +
          '<em>' + item.Date + '</em>' +
          '</p>' +
          '</div>' +
          '</div>' +
          '</div>';
        //Cerramos la etiqueta del div al final de cada 2 objetos en el JSON
        if (idx % 2 != 0) {
          html += '</div>';
        }
      });
      if (data.News.length % 2 != 0) {
        html += '</div>';
      }

      $('#container').append(html);
      for (var i = 0; i <= 2; i++) {
        $($('.news')[i]).css('display', 'block');
      }
      $.ajax({
        datatype: "jsonp",
        type: "GET",
        data: {},
        url: "https://rawgit.com/Soontrax/WEB_Boostrap-JQuery/master/json/SegundasNoticias.json",
        success: function (data) {
          console.log(data);
          var html = "";
          $.each(data.News, function (idx, item) {
            //Añadimos las etiquetas para cada 2 objetos que pasen
            if (idx % 2 == 0) {
              html += '</br><div style="display:none" class="news row">';
            }
            html += '<div class="col-md-4">' +
              '<div class="thumbnail">' +
              '<div class="caption">' +
              '<div class="ribbon">' +
              '<span>' +
              '<span>' + item.Title + '</span>' +
              '</span>' +
              '</div>' +
              '<h3 class="text-align: center">' +
              '<a href="pagina1.html?index=' + idx + '">' +
              '<b>' + item.Subtitle + '</b>' +
              '</a>' +
              '</h3>' +
              '<img src="' + item.Image + '" class="img-responsive">' +
              '</div>' +
              '<div class="caption">' +
              '<p class="text-justify">' + item.Description + '</p>' +
              '<p class="text-right">' +
              '<em>' + item.Date + '</em>' +
              '</p>' +
              '</div>' +
              '</div>' +
              '</div>';
            //Cerramos la etiqueta del div al final de cada 2 objetos en el JSON
            if (idx % 2 != 0) {
              html += '</div>';
            }
          });
          if (data.News.length % 2 != 0) {
            html += '</div>';
          }

          $('#container').append(html);

          for (var i = 0; i <= 2; i++) {
            $($('.news')[i]).css('display', 'block');
          }
        }
      });
    }
  });

  //Funcion para activar las noticias con un boton y descativar el boton para cargar las noticias con scroll
  $(function () {
    $("#Activar").on("click", function () {
      if (flagScroll) {
        $(window).off("scroll", myFunction);
        $("#mas").on("click", myFunction);
        flagScroll = false;
        $(this).text("Activar Scroll");
      } else {
        $(window).on("scroll", myFunction);
        $("#mas").off("click");
        flagScroll = true;
        $(this).text("Desactivar Scroll");
      }
    })
    $(window).on("scroll", progressBar);
    $(window).on("scroll", myFunction);
  });
  //Funcion Para cambiar de imagen cada 2s
  var timer = setInterval(Funcion, 2000)
  var counter = 0;
  var a = [];
  a[0] = "img/anuncio1.jpg";
  a[1] = "img/anuncio2.jpg"
  a[2] = "img/anuncio3.jpg"

  function Funcion() {
    $("#imagen2").attr("src" ,a[counter]);
    $("#imagen").attr("src", a[counter]);
    counter++;
    if (counter == 3) {
      counter = 0;
    }
  }
}