class Libro {
  constructor(titulo, autor, portada, sinopsis, formato, precio, envio) {
    this.titulo = titulo;
    this.autor = autor;
    this.portada = portada;
    this.sinopsis = sinopsis;
    this.formato = formato;
    this.precio = precio;
    this.envio = envio;
  }
  comprar() {
    alert(
      `Has comprado el libro ${this.titulo} del autor ${
        this.autor
      } por un total de ${this.precio + this.envio}€`
    );
  }
}

let libros = [];

libros.push(
  new Libro(
    "Africanus, el fill del Cònsol",
    "Santiago Posteguillo",
    "https://imagessl5.casadellibro.com/a/l/t5/15/9788466645515.jpg",
    "A finals del segle III a. C., Roma es trobava a la vora de la destrucció total, a punt de ser aniquilada pels exèrcits cartaginesos al comandament d'un dels millors estrategs militars de tots els temps: Aníbal",
    "Llibre de la butxaca",
    15,
    4
  )
);

libros.push(
  new Libro(
    "Harry Potter y La Camara Secreta",
    "J.K. Rowling",
    "https://imagessl7.casadellibro.com/a/l/t7/57/9788478884957.jpg",
    "El verano de Harry Potter ha incluido el peor cumpleaños de su vida, las funestas advertencias de un elfo doméstico llamado Dobby y el rescate de casa de los Dursley protagonizado por su amigo Ron Weasley al volante de un coche mágico volador. De vuelta en el Colegio Hogwarts de Magia y Hechicería, donde va a empezar su segundo curso, Harry oye unos extraños susurros que resuenan por los pasillos vacíos. Y entonces empiezan los ataques y varios alumnos aparecen petrificados... Por lo visto, las siniestras predicciones de Dobby se están cumpliendo....",
    "Tapa dura",
    16,
    4
  )
);

libros.push(
  new Libro(
    "Star Wars the high republic luz de los jedi",
    "Charles Soule",
    "https://imagessl6.casadellibro.com/a/l/t7/66/9788413416366.jpg",
    "Vivimos una época dorada. Intrépidos exploradores hiperespaciales expanden los límites de la República hasta las estrellas más remotas, los mundos prosperan bajo el benévolo liderato del Senado y reina la paz en la galaxia, defendida por la sabiduría y fuerza de la célebre orden de usuarios de la Fuerza conocidos como Jedi. Con los Jedi en la cima de su poder, los ciudadanos libres de la galaxia confían en su habilidad para capear cualquier temporal. Pero incluso la luz más brillante proyecta alguna sombra y algunos temporales desafían cualquier preparación.",
    "Tapa blanda",
    22,
    5
  )
);

libros.push(
  new Libro(
    "La cupula",
    "Stephen King",
    "https://imagessl5.casadellibro.com/a/l/t7/95/9788499891095.jpg",
    "Es una soleada mañana de otoño en la pequeña ciudad de Chester's Mill. Claudette Sanders disfruta de su clase de vuelo y Dale Barbara, Barbie para los amigos, hace autostop en las afueras. Ninguno de los dos llegará a su destino...De repente, una barrera invisible cae sobre la ciudad como una burbuja cristalina e inquebrantable. Al descender corta por la mitad a una marmota y amputa la mano a un jardinero. El avión que pilotaba Claudette choca contra la cúpula y se precipita al suelo envuelto en llamas.",
    "Tapa blanda",
    12,
    3
  )
);
