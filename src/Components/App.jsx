import React from 'react';
import "../Styles/Styles.scss";
import Formulario from './Pages/Formulario';
import Courses from './Pages/Courses';
import Course from './Pages/Course';
import CoursePasadoAClass from './Pages/CoursePasadoAClass';
import { BrowserRouter as Router , Route, Switch} from "react-router-dom"
import MainMenu from './Organisms/MainMenu';
import Historial from './Pages/Historial';
import Home from './Pages/Home';
import Users from './Pages/Users';
import CourseHooks from './Pages/CourseHooks';

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
           * utilizacion de fech
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
           * /** --------- Clase 7.3 - Eliminando incosistencias en el proyect ---------
           * High order component, para Escribir funciones que hagan cierta logica
           * por nosotros
           * hay 3 componentes vistos hasta el momento (Funcionales, de Clase y High order component)
           * modified:   src/Components/App.jsx
           * modified:   src/Components/Organisms/CourseGrid.jsx
           * new file:   src/Components/Organisms/UsersGrid.jsx
           * new file:   src/Components/Pages/Courses.jsx
           * modified:   src/Components/Pages/Users.jsx
           * 
           * /** --------- Clase 7.4 - Escribiendo un componente de order superior ---------------
           * Se va a escribir un componente de Orden superior
           * Teoria: Un componente de Orden superior nos permite reutilizar logica a lo largo de la
           * aplicacion en diversos componentes.
           * HOC (High Order Copmponent) : es una funcion que recibe un componente, lo procesa y devuelve otro
           * componente luego de ser procesado.
           * 
           * standard de nomenclatura: Se recomienda que empiezen con la paltabra with...
           * 
           * modified:   src/Components/App.jsx
           * new file:   src/Components/HOC/withLoader.js
           * modified:   src/Components/Organisms/CourseGrid.jsx
           * 
           * /**  ----- Clase 7.5  -  Agregando logica reutilizable al HOC ----- *
           * 
           * Se agrego la funcionalidad en withLoader.js
           *  --> return this.props[propValue].length === 0
           *          ? <h3>Cargando...</h3>
           *          : <WrapperComponent {...this.props} />
           * modified:   src/Components/App.jsx
           * modified:   src/Components/HOC/withLoader.js
           * modified:   src/Components/Organisms/CourseGrid.jsx
           * modified:   src/Components/Organisms/UsersGrid.jsx
           * 
           *  /**  ----- Clase 8.1  - Hooks - Reescribiendo componentes para utilizar el estado ----- *
           *  Reescribiendo Courses a Class
           *    - ver https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings
           *      donde explica Template Script de ECMA Script 6
           *    - Agregue en la carpeta Internet documentacion de lo que es --> Template Strings (´)
           *    - Hooks: Son funcionalidades que nos permiten utilizar el estado y ciclo de vida
           *            de los componentes funcionales. Ya no hay que reescribir los componentes
           *            funcionales a componente de Clase.
           * 
           * /**  ----- Clase 8.2  - Utilizando el hook useState ----- *
           *  git checkout -f --> retornas los cambios
           *  se crea nueva clase Componente CourseHooks para que queden los 3
           * Course --> Componente funcional
           * CoursePasadoAClass --> Componente de Clase. (Se lo tuvo que pasar para poner el metodo componentDidMount )
           * CourseHook --> Componente pasado a Hook
           * Hay 2 Hooks en react que podemos utilizar:
           *            - useState (Disponible desde la version 16.8 de react en adelante)
           *            - useEfect
           * 
           * 
           * /**  ----- Clase 8.3 Actualizando el estado con hooks ----- *
           * hook useState, 
           *  - const changeTitle = (text) => {
           *          setState ({
           *            ...estado,
           *            title: text
           *            })
           *          }
           * - No olvidarse de poner el bind --> onClick={changeTitle.bind(this, "TituloNuevo AAA")}
           * 
           * 
           * /**  ----- Clase 8.4 - Utilizando el hook useEffect ----- *
           * 
           *    //Inicio un estado con un objeto vacio
           *    //Useeffect, hook que simula el ciclo de vida del componente 
           *      const [estado, setState] = useState({ })
           * 
           *    //useEffect se ejecuta cada vez que el componete se renderiza
           *    //Se vuelve a renderizar un componente cuando recibe nuevas propiedades o su estado cambia
           *    //por lo que se hace recursivo 
           *    //la primera vez que corre se renderiza que llama a useEffect que renderiza y vuelve a llamar a useEffect
           *    // para evitar eso se agrega un segundo parametro de entrada [] --> Emula el componentDidmount que corre una sola vez
           *      useEffect ( () => {
           *        axios.get('https://my-json-server.typicode.com/sangello/json-db/Cursos/4')
           *          .then(responseAxios => setState(responseAxios.data))//setState(responseAxios.data)--> actualiza el estado
           *       }, [])
           * 
           * /**  ----- Clase 8.5 - Componentes con multiples estados ---* 
           * 
           *  const [commentario, setCommentario] = useState("Sin comentarios")
           *
           *  const setMyCommentario = (e) => {
           *     setCommentario (e.target.value)
           *   }
           *  <input type="text" placeholder="Escribe..." onChange={setMyCommentario.bind(this)}/>
           *
           * /**------ Clase 8.6  - Mi primer custom hook ---- *
           * 
           * - Existen muchos Hooks en internet ademas de useEffect y useState creados por gente
           * - Vamos a crear nuestro propio Hook
           * - los cutomsHooks por convencion se escriben con la palabra hook+frase o palabra que describa 
           * lo que hace el hook
           * - los Custome Hook = Es una funcion que nosotros podemos utilizar dentro de componentes
           *                      funcionales que a su vez pueden utilizar otros hooks.
           * 
           * - se creo el jsx useCourse.jsx
           * 
           * 
           * 
           */
           }
        <MainMenu />   
        <Switch>
          <Route path="/" exact  component={Home}/>
          <Route path="/cursos/:id" exact  component={CourseHooks}/>
          <Route path="/cursos" exact  component={Courses}/>
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
