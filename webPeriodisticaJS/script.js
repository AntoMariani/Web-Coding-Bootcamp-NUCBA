class noticia {
    constructor(titulo, copete, seccion,  leerMas, href, fecha, imgSrc) {
        this.titulo = titulo;
        this.copete = copete;
        this.seccion = seccion;
        this.leerMas = leerMas;
        this.href = href; //link a la noticia
        this.fecha = fecha;
        this.imgSrc = imgSrc;
    }

}

let noticia1 = new noticia (
    "The Last of Us II llegará a PS4 a mediados de año",
    "El lanzamiento será el 19 de junio, después de demoras provocadas por el brote del nuevo coronavirus. En el título participa Gustavo Santaolalla, que ya había compuesto la música para la primera parte.",
    "Videojuegos",
    "Leer mas",
    "theLastOfUsII.html",
    "20/4/20",
    "thelastofus.png"
)

let noticia2 = new noticia (
    "La clave del éxito en empresas modernas",
    "Los hubs tecnológicos son la base del desarrollo de los proyectos más destacados. Los ejemplos en nuestro país.",
    "Emprendedurismo",
    "Leer mas",
    "hubsTecnologicos.html",
    "05/08/20",
    "hubsTecnologicos.jpg"
)

let noticia3 = new noticia (
    "China acusó a EEUU de \"intimidación\" por la venta forzada de TikTok",
    "Las autoridades de ese país declararon que no aceptarán el \"robo\" de la empresa tecnológica.",
    "Aplicaciones",
    "Leer mas",
    "roboTikTok.html",
    "05/08/20",
    "roboTikTok.jfif"
)

let listaNoticias = [noticia1, noticia2, noticia3]


/*{ <div class="card">
        <div class="imgcard">
          <img src="./Noticias/img/thelastofus.png" alt="" />
        </div>
        <div class="contenidocard">
          <p class="fechacard">20/4/20</p>
          <h2>The Last of Us II llegará a PS4 a mediados de año</h2>
          <p class="seccioncard">Videojuegos</p>
          <p class="copetecard">
            El lanzamiento será el 19 de junio, después de demoras provocadas
            por el brote del nuevo coronavirus. En el título participa Gustavo
            Santaolalla, que ya había compuesto la música para la primera parte.
          </p>
          <a class="linkcard"
            href="./Noticias/theLastOfUsII.html"
            target="_blank"
            rel=""
            >Leer mas</a
          >
        </div>
</div> }*/



function crearCard(noticia) {

    let contenedorNoticias = document.getElementById("contenedor-noticias") //agarrra la direccion de contenedorNoticias

    //CREACION DE CARD
    let div_card = document.createElement("div"); //crea el elemento div que contiene TODA la noticia
    div_card.classList.add("card") //agrega la clase card
    
    //DIV IMAGEN
    let divImg = document.createElement("div") //crea div de la imagen de la noticia
    divImg.classList.add("imgcard") //agrega la clase a la div de imagen
    div_card.appendChild(divImg) //appendea la div imagen a la div card
    
    // //IMAGEN DENTRO DE LA DIV
    // let imgNoticia = document.createElement("img") //crea el elemento imagen
    // imgNoticia.src = "./Noticias/img/" + noticia.imgSrc //crea el link imagen y lo coloca
    // divImg.appendChild(imgNoticia) //coloca la imagen dentro de div imagen

    //IMAGEN DENTRO DE LA DIV DESDE UNA API RANDOM

    fetch('https://source.unsplash.com/user/erondu/353x200', {}) //LLAMADO A UN SERVICIO O API QUE NOS TRAE UNA IMAGEN RANDOM
    .then(function (response) {
        let contenedorNoticias = document.getElementById("contenedor-noticias")
        let imgNoticia = document.createElement("img") //crea el elemento imagen
        imgNoticia.src = response.url //crea el link imagen y lo coloca
        divImg.appendChild(imgNoticia) //coloca la imagen dentro de div imagen
    })

    //AGREGAR EL CONTENIDO DE LA CARD
    let divContenido = document.createElement("div")
    divContenido.classList.add("contenidocard")
    div_card.appendChild(divContenido)

    //AGREGAR FECHA
    let fechaNoticia = document.createElement("p");
    fechaNoticia.classList.add("fechacard");
    fechaNoticia.innerHTML = noticia.fecha;
    divContenido.appendChild(fechaNoticia);

    //AGREGAR TITULO
    let tituloNoticia = document.createElement("h2");
    tituloNoticia.innerHTML = noticia.titulo;
    divContenido.appendChild(tituloNoticia);

    //AGREGAR SECCION DE LA NOTICIA
    let seccionNoticia = document.createElement("p");
    seccionNoticia.classList.add("seccioncard");
    seccionNoticia.innerHTML = noticia.seccion;
    divContenido.appendChild(seccionNoticia);

    //AGREGAR COPETE DE LA NOTICIA
    let copeteNoticia = document.createElement("p");
    copeteNoticia.classList.add("copetecard");
    copeteNoticia.innerHTML = noticia.copete;
    divContenido.appendChild(copeteNoticia);

    //AGREGAR LINK LEER MÁS

    let anchorNoticia = document.createElement("a");
        //crear el nodo de texto y appendearlo 
    let textAnchorNoticia = document.createTextNode("Leer mas")
    anchorNoticia.appendChild(textAnchorNoticia)

    anchorNoticia.href = './Noticias' + noticia.href
    anchorNoticia.target = '_blank'
    divContenido.appendChild(anchorNoticia)

    //AGREGAMOS CADA CARD A LA PAGINA
    contenedorNoticias.appendChild(div_card) //appendea la div card al contenedor noticias
}

function recorrerListaNoticias(){

    listaNoticias.forEach(x=>{
        crearCard(x)
    })
}

recorrerListaNoticias()