import React from 'react';
import "./Styles/Styles.scss";
import Banner from './Jsx/Banner';
import Formulario from './Jsx/Formulario';
import CourseGrid from './Jsx/CourseGrid';
import Course from './Jsx/Course';
import { BrowserRouter as Router , Route, Switch} from "react-router-dom"
import MainMenu from './Jsx/MainMenu';
import Historial from './Jsx/Historial';

const App = () => (

    <Router>
          {/** ----------- Clase 6.4 - Declarando Router y Rutas-------- * 
           * Pasos para crear la aplicacion de 0:
           *     1) npx create-react-app continuacion-primer-proyecto
           *     2) crear proyecto en GitHUB
           *     3)	cd ir a la carpeta del proyecto 
           *             git remote add origin https://github.com/sangello/continuacion-primer-proyecto.git
           *     4) npm add ed-grid edteam-style-guides node-sass
           *     5) npm add react-router-dom  
           */}
        <MainMenu />   
        <Switch>
          <Route path="/" exact  component={Banner}/>
          <Route path="/cursos/:id" exact  component={Course}/>
          <Route path="/cursos" exact  component={CourseGrid}/>
          <Route path="/historial" exact  component={Historial}/>
          <Route path="/historial/:valor" exact  component={Historial}/>
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
