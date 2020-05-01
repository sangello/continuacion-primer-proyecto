import React from 'react';
import "../Styles/Styles.scss";
import Formulario from './Pages/Formulario';
import CourseGrid from './Organisms/CourseGrid';
import Course from './Pages/Course';
import { BrowserRouter as Router , Route, Switch} from "react-router-dom"
import MainMenu from './Organisms/MainMenu';
import Historial from './Pages/Historial';
import Home from './Pages/Home';
import Users from './Pages/Users';

const App = () => (

    <Router>
          {/** ----------- Clase 6.4 - Metodología Atomic Design -------- * 
           * Pasos para crear la aplicacion de 0:
           *     1) npx create-react-app continuacion-primer-proyecto
           *     2) crear proyecto en GitHUB
           *     3)	cd ir a la carpeta del proyecto 
           *             git remote add origin https://github.com/sangello/continuacion-primer-proyecto.git
           *     4) npm add ed-grid edteam-style-guides node-sass
           *     5) npm add react-router-dom  
           * 
           * /** ----------- Clase 6.5 - Peticiones API REST -------- * 
           * Al front no le importa la tecnologia del backend sino que importa los
           *  endpoint que vamos a ir a consultar.
           * - Postman  --> https://www.postman.com/
           *    + permite hacer peticiones a APIs para que podamos probar si las URL estan funcionando
           *      correctamente
           *    + vamos a probar con un API llamado JsonPlaceholder que permite hacer testeos Fake Online 
           *      https://jsonplaceholder.typicode.com/
           * 
           * /** ----------- Clase 6.6 - Peticiones con fetch -------- * 
           * Llamar al Endpoint para obtener una lista de usuarios.
           * 
           *  modified: src/Components/App.jsx
           *  new file: src/Components/Molecules/UserCard.jsx
           *  modified: src/Components/Organisms/MainMenu.jsx
           *  new file: src/Components/Pages/Users.jsx
           * 
           * /**----------- Clase 6.7 - Actualizando el estado con la respuesta -------- *
           * Llama al endopoint y muestra la lista de usuarios.
           * 
           * modified:   src/Components/App.jsx
           * modified:   src/Components/Pages/Users.jsx
           * 
           * 
           *  /**----------- Clase 6.8 Reescribiendo peticiones con axios ------- *
           *  - otro curso en la plataforma para conocer mas fetch y sus utilitarios --> https://ed.team/cursos/ajax-ws
           *  - En muchos proyectos podemos utilizar fetch, pero existe otra libreria
           *  que se llama Axios.
           * - Se instala la libreria haciendo npm add axios
           * 
           * modified:   package-lock.json
           * modified:   package.json
           * modified:   src/Components/App.jsx
           * modified:   src/Components/Pages/Users.jsx
           * 
           *  /** ---------- Clase 6.9 - API's para practicar ------------- *
           *  - Tu propio server json https://my-json-server.typicode.com/
           *  - https://any-api.com/
           * 
           *  /** --------- Clase 7.1 - Creando tu propio servidor JSON ---------*
           * -- Seguir los pasos de la pagina: https://my-json-server.typicode.com/
           *  1) creamos una carpeta Json-db donde ponemos un json. C:\Users\sangello\OneDrive - Capgemini\Proyectos_Seba\EdTeam\curso_react
           *  2) Me ubico en la carpeta json-db e inicio un curso en git --> git init
           *  3) git add db.json
           *  4) vamos a github.com y creamos el proyecto que se llama json-db
           *  5) git remote add origin https://github.com/sangello/json-db.git
           *  6) git push origin master
           *  7) pongo esto (http://my-json-server.typicode.com/sangello/json-db/Cursos) en la url y tengo el json
           * 
           * Notamos que tuvimos que reescribir un componente funcional en componente de clase. Para no hacer
           * eso tenemos la ayuda de los hooks (Nos permite evitar la re-escritura de codigo)
           * gi
           *  modified:   src/Components/App.jsx
           *  modified:   src/Components/Organisms/CourseGrid.jsx
           * 
           * /** --------- Clase 7.2 - Agregando loader a nuestras peticiones ---------
           * Se hace esta logica en varios lados por ende necesitamos hacer algo generico para no tener que 
           * repetirlo.
           *         users.length === 0
           *            ? <h1 className="t3">Cargando...</h1> 
           *            : <Se renderiza los usuarios>
           * 
           * Para ello existe el High order component, para Escribir funciones que hagan cierta logica
           * por nosotros. Se verá la clase que viene. 
           * modified:   src/Components/App.jsx
           * modified:   src/Components/Organisms/CourseGrid.jsx
           * modified:   src/Components/Pages/Users.jsx
           * 
           * 
           */}
        <MainMenu />   
        <Switch>
          <Route path="/" exact  component={Home}/>
          <Route path="/cursos/:id" exact  component={Course}/>
          <Route path="/cursos" exact  component={CourseGrid}/>
          <Route path="/historial" exact  component={Historial}/>
          <Route path="/historial/:valor" exact  component={Historial}/>
          <Route path="/usuarios" exact  component={Users}/>
          <Route path="/formulario" exact  component={ () => <Formulario name="Pagina de contacto"/> } />
          <Route component = { () => (
              <div className="ed-grid">Q
                <h1>Error 404</h1>
                <span>Página no encontrada</span>
              </div>
            )} 
          />
        </Switch>
    </Router>

)

//const App = () => <h1>Hola mundo desde mi archivo App.js</h1>

export default App;
