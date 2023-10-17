const express = require('express')

//crear el objeto de la aplicación
const app =express()

//url de prueba
app.get('/prueba' , (req , res )=>{
    //ejemplo de response basico
    res.send("Hola")
} )


//url de bootcamps
//1. seleccionar todos los bootcamps
app.get(('/bootcamps'), (req, res) =>{return res.json({succes: true, msg: "seleccionando todos los bootcamps"}) })
//2. seleccionar el  bootcamp cuyo id se pase por parametro
app.get('/bootcamp/:id' , (req, res )=>{bootcampId = req.params.id; return res.json({succes: true, msg:`Seleccionando bootcamp cuyo id es ${bootcampId}`})})
//3. 
app.post(('/bootcamp'), (req, res) =>{return res.json({succes: true, msg: "crear bootcamp"}) })
//4. seleccionar el  bootcamp cuyo id se pase por parametro
app.put('/bootcamp/:id' , (req, res )=>{bootcampId = req.params.id; return res.json({succes: true, msg:`actualizando bootcamp cuyo id es ${bootcampId}`})})
//5. eliminar el  bootcamp cuyo id se pase por parametro
app.delete('/bootcamp/:id' , (req, res )=>{bootcampId = req.params.id; return res.json({succes: true, msg:`eliminar bootcamp cuyo id es ${bootcampId}`})})

//COURSERS
//url de bootcamps
//Listar todos los cursos de un bootcamp
app.get(('/coursers'), (req, res) =>{return res.json({succes: true, msg: "Listando todos los cursos de un bootcamp"}) })
//Listar todos los cursos en general
app.get(('/courser'), (req, res) =>{return res.json({succes: true, msg: "Listando todos los cursos en general"}) })
//Obtener un solo curso
app.get('/courser/:id' , (req, res )=>{bootcampId = req.params.id; return res.json({succes: true, msg:`Obteniendo un solo curso por su id ${bootcampId}`})})
// Crear un nuevo curso
app.post(('/courser'), (req, res) =>{return res.json({succes: true, msg: "crear nuevo curso"}) })
//Actualizar el curso 
app.put('/courser/:id' , (req, res )=>{bootcampId = req.params.id; return res.json({succes: true, msg:`actualizando curso cuyo id es ${bootcampId}`})})
//Eliminar el curso
app.delete('/courser/:id' , (req, res )=>{bootcampId = req.params.id; return res.json({succes: true, msg:`eliminar el curso cuyo id es ${bootcampId}`})})

//REVIEWS
//url de bootcamps
//Listar todas las reseñas de un bootcamp
app.get(('/reviews'), (req, res) =>{return res.json({succes: true, msg: "Listando todas las reseñas de un bootcamp"}) })
//Listar todos las reseñas en general
app.get(('/review'), (req, res) =>{return res.json({succes: true, msg: "Listando todas las reseñas en general"}) })
//Obtener una sola reseña
app.get('/review/:id' , (req, res )=>{bootcampId = req.params.id; return res.json({succes: true, msg:`Obteniendo una sola reseña por su id ${bootcampId}`})})
// Crear una nueva reseña
app.post(('/review'), (req, res) =>{return res.json({succes: true, msg: "crear una nueva reseña"}) })
//Actualizar la reseña 
app.put('/review/:id' , (req, res )=>{bootcampId = req.params.id; return res.json({succes: true, msg:`actualizando reseña cuyo id es ${bootcampId}`})})
//Eliminar la reseña
app.delete('/review/:id' , (req, res )=>{bootcampId = req.params.id; return res.json({succes: true, msg:`eliminar la reseña cuyo id es ${bootcampId}`})})

//USERS
//url de bootcamps
//Listar todos los usuarios de un bootcamp
app.get(('/users'), (req, res) =>{return res.json({succes: true, msg: "Listando todos los usuarios de un bootcamp"}) })
//Listar todos los usuarios en general
app.get(('/user'), (req, res) =>{return res.json({succes: true, msg: "Listando todos los usuarios en general"}) })
//Obtener un solo usuario
app.get('/user/:id' , (req, res )=>{bootcampId = req.params.id; return res.json({succes: true, msg:`Obteniendo un solo usuario por su id ${bootcampId}`})})
// Crear un solo usuario
app.post(('/user'), (req, res) =>{return res.json({succes: true, msg: "crear un nuevo usuario"}) })
//Actualizar el usuario 
app.put('/user/:id' , (req, res )=>{bootcampId = req.params.id; return res.json({succes: true, msg:`actualizando usuario cuyo id es ${bootcampId}`})})
//Eliminar el usuario
app.delete('/user/:id' , (req, res )=>{bootcampId = req.params.id; return res.json({succes: true, msg:`eliminar el usuario cuyo id es ${bootcampId}`})})

//Definir puerto de servidor
const puerto = 4500

//Definir el servidor 
app.listen(puerto , console.log(`sseervidor ejecutando en ${puerto}`) ) 