<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

### `Se hizo el deploy con herokuapp, desde un clon del en otro repositorio`


Puedes ver el proyecto en el siguiente link : [TiendaVirtual](https://tiendavirtualapp.herokuapp.com/)



# Algunas Capturas del proyecto realizado


### `Se hizo el filtrado por condición, precio y paginación por cada 15 productos`

### `-->`
![](https://scontent.faep14-2.fna.fbcdn.net/v/t1.0-0/p180x540/138796875_231685888482867_9125119503483297354_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=0BDGxt4tilcAX-Zt2bY&_nc_ht=scontent.faep14-2.fna&tp=6&oh=7d99cf8c17d78086a560ad2ceb9c0884&oe=6025DA57)

### `-->`

![](https://scontent.faep14-2.fna.fbcdn.net/v/t1.0-0/p180x540/138794822_231683508483105_1592861225814615687_o.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_ohc=sEb9zuwIVvcAX8z_j2q&_nc_ht=scontent.faep14-2.fna&tp=6&oh=f56f0decb75b93afcb1efef6ea10dc05&oe=60247969)


### `se ajusto a diseño responsivo-->`


![](https://scontent.faep24-1.fna.fbcdn.net/v/t1.0-9/139504442_232105148440941_4345287256914133085_n.jpg?_nc_cat=109&ccb=2&_nc_sid=730e14&_nc_ohc=AU_Jcl6doFMAX925c6V&_nc_ht=scontent.faep24-1.fna&oh=7b6088bc2b9bb4d17141d83e4d47aeec&oe=60255C5C)


![](https://scontent.faep14-2.fna.fbcdn.net/v/t1.0-9/138741208_231702428481213_4822194916446817530_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_ohc=3aG4qpQgW9MAX-GdBfa&_nc_ht=scontent.faep14-2.fna&oh=f051ed9c7bd7ee3d3121b89b0e77621c&oe=602535A9)

<p align='center'>
    <img src='https://media3.giphy.com/media/ZZGwSLGlt7prkbV2Fi/200w.webp?cid=ecf05e479dwim8xxkb2p3ozqlex66yz8vtti34hmyjerf2g8&rid=200w.webp' </img>
</p>

# Labs Challenge

El objetivo del challenge es construir un Front-End y un Back-End que interactuen con una API externa.

Vamos a usar la API pública de **Mercado Libre**. De ella vamos a extraer publicaciones que luego vamos a guardar en nuestro propio back-end usando un caché. Para el Fron-end vamos a desarrollar una serie de Componentes de React para poder mostrar e interactuar con las publicaciones antes mencionadas.

## Back-End

Usaremos el siguiente endpoint de Mercado Libre `https://api.mercadolibre.com/sites/MLA/search?q={query}`.
Recibe un queryString con el parámetro `q` con un string que indica el keyword a buscar.
La API retorna un JSON con la siguiente forma:
```json
{
  "site_id": "MLA",
  "query": "iphone",
  "paging": {},
  "results": [{
  	"id": "MLA851931164",
    "site_id": "MLA",
    "title": "iPhone 11 128 Gb Morado 4 Gb Ram",
    "seller": {},
    "price": 182240,
    ...
  }],
  "secondary_results": [
    ...
  ],
  "related_results": [
  	...
  ],
  "sort": {
    "id": "relevance",
    "name": "More relevant"
  },
  "available_sorts": [],
  "filters": [],
  "available_filters": []
}
```

Podemos ver la documentación completa del endpoint en [este link](https://api.mercadolibre.com/sites/MLA/search?q=iphone).

Nuestro Back-End va a tener la ruta:
- `/api/search`


### `/api/search`

Esta ruta recibe un queryString con un término de búsqueda. Por ejemplo: `/api/search?query=zapatillas`. Y debe retornar un arreglo de items de Mercado Libre con la forma:

```json
[
  {
      "id": "MLA785937833",
      "title": "Zapatillas Marca Rcn Ultraliviana Negra",
      "price": 1769,
      "currency_id": "ARS",
      "available_quantity": 200,
      "thumbnail": "http://http2.mlstatic.com/D_728833-MLA32445355209_102019-I.jpg",
      "condition": "new"
  },
  {
      "id": "MLA716347136",
      "title": "Zapatillas Ozono Skate Directo De Fábrica",
      "price": 1769,
      "currency_id": "ARS",
      "available_quantity": 200,
      "thumbnail": "http://http2.mlstatic.com/D_728833-MLA32445355209_102019-I.jpg",
      "condition": "new"
  }
]
```

Extra-Credit:
 En cada request de búsqueda, se deberá crear un caché, de tal manera que a la siguiente búsqueda no se use la API de Mercado Libre, si no que los datos se recuperen del caché. Tip: Usar un objeto (cada propiedad es al término de búsqueda y el valor de esa propiedad el arreglo de resultados.)

## Front-End

Deberás crear una App en React con los siguientes componentes:

### SearchBar

Un formulario **controlado** con un input de búsqueda, que dispare los requests a la API (a nuestro BACK-END, no a Mercado Libre).

### Product Card

En este componente se muestra un producto en particular, debemos mostrar:
- su imagen.
- su titulo.
- su precio (con la moneda).
- su condicion.
- si tiene stock o no.

### Catalogo

Este componente va mostrar un arreglo de productos (obtenidos de la API) usando Product Card. Tambien debe posibilitar:
* Poder ordenar los productos en base a su precio, de forma ascendete o descendente.
* Poder filtrar por condicion.
* Poder páginar los resultados de a 30 productos por página.



## Notas

Crear un repo nuevo en tu github (privado o público) y compartirlo con `Antonio Tralice <toni@soyhenry.com>` una vez que hayas terminado.

Podes usar cualquier librería extra para resolver el challenge ya sea de front-end o de back-end.
Recomendamos usar alguna librería de front-end (Boostrap, materialize, etc...).

Tenes cómo máximo dos semanas para completar el challenge.
