De antemano les aviso que este es un repositorio en donde estoy haciendo una
serie de pruebas basadas en tutoriales de youtube sobre el uso de NodeJS y
PostgreSQL. Por lo tanto, no utilicen este repositorio para hacer trabajos
prácticos porque es un repositorio que uso de referencia para no sólo aprender
de desarrollo backend, sino también el tener mantener un poco más viva mi
cuenta de github.

## Lo que se debe hacer

Primero, instala las dependencias del proyecto con `npm i`.

Segundo, monta la bsae de datos de PostgreSQL con tus credenciales dentro de
`src/db.js`

Por último, corre el proyecto usando `npm run dev`

## Dudas existenciales

* ¿Cuál es la diferencia entre "require()" e "import" y cómo es que este último
se relaciona con la variable "type" de `package.json`?
* ¿Por qué se menciona [CommonJS](https://nodejs.org/api/modules.html) para las
importaciones?
* ¿Qué ocurre con las APIs?
* ¿Hay una forma de seguir haciendo pruebas con métodos HTTP sin usar un REST
client?
* ¿Por qué en PostgreSQL se tiene una secuencia antes?
* ¿Por qué en el get de los usuarios cada que hay una consulta que no retorna
nada, tengo que añadir un return si ya de por sí, la respuesta se da?
* ¿Por qué por un momento me salio timeout error (osea, que se tardó mucho en
responder que no ha encontrado na')?
* ¿Por qué hacer un `config.js` en el que se colóquen las variables y no
simplemente montar lo que se haya en el .env?
* ¿Es necesario meter esta cosa dentro de los archivos HTML?
```html
<meta http-equiv="X-UA-Compatible" content="ie=edge">
```

## Enlaces pendientes de lectura
 * [A qué viene eso de REST](https://blog.dreamfactory.com/7-simple-rest-client-examples-for-retrieving-api-data)
 * [import export](https://javascript.info/import-export)
 * [CommonJS](https://javascript.info/modules-intro)
 * [pg](https://node-postgres.com/)
 * [Asyncronous stuff on javascript](https://javascript.info/async)
 * [PostgreSQL and the network](https://linuxcapable.com/how-to-install-postgresql-on-arch-linux/)
 * [What are those things in HTML](https://www.freecodecamp.org/news/basic-html5-template-boilerplate-code-example/)
