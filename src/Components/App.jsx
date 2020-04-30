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
