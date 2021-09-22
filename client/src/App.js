
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from './Pages/Landing';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './Pages/User-Profile-Page/helpers/index';
import './App.css';
//Import Pages
import Footer from "./Components/Footer/Footer.jsx";
import Foro from "../src/Pages/Foro";
import Conocenos from "../src/Pages/Conocenos/Conocenos.jsx"
import IniciaSesion from "./Pages/IniciaSesion";
import RegistrateLugarSeguro from "./Pages/RegistrateLugarSeguro";
// import LugaresSeguros from "./Pages/LugaresSeguros";
import MainProfile from "./Pages/User-Profile-Page/MainProfile";
import Registrate from "./Pages/Registro-Usuario/Registrate";
import Nav from "./Components/NavBar/NavBar";
import Panel from "./Pages/Panel-Admin/Panel";
// import Sities from "./Pages/Sities/Sitie";
import LugaresSeguros from "./Pages/LugaresSeguros";
import ProyectoInfo from "./Pages/Proyecto-info/Proyecto-info";
import ForoNoticias from './Pages/ForoNoticias/ForoNoticias';
import Usuarios from "./Pages/Usuarios/Usuarios";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import FailedSearch from './Components/ForoNoticias/FailedSearch';
import CargarNoticia from "./Pages/CargarNoticia";
import MujeresEnSaludd from './Pages/Salud/MujeresEnSalud';
import FormularioSalud from './Pages/Salud/FormularioSalud';



function App() {

  return (
    <BrowserRouter>
     <ChakraProvider theme={theme}>
    <div className="App">
      <Nav/>
      <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/elproyecto" component={ProyectoInfo}/> 
      <Route exact path="/lugaresseguros" component={LugaresSeguros}/>
      <Route exact path="/registratelugarseguro" component={RegistrateLugarSeguro}/>
      <Route exact path="/iniciasesion" component={IniciaSesion}/>
      <Route exact path="/profile" component={MainProfile} />
      <Route exact path="/registrate" component={Registrate}/>
      <Route exact path="/foro" component={Foro}/>
      <Route exact path="/foroNoticias/:id" component={ForoNoticias}/>
      <Route exact path="/foroerror" component={FailedSearch}/>
      <PrivateRoute exact path="/panel" component={Panel}/>
      <Route exact path="/conocenos" component={Conocenos}/>
      <Route exact path="/users" component={Usuarios}/>
      <Route exact path="/cargarNoticia" component={CargarNoticia}/>
      <Route exact path="/salud" component={MujeresEnSaludd}/>
      <Route exact path="/formsalud" component={FormularioSalud}/>

      </Switch>
      <Footer/>
    </div>
    </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;