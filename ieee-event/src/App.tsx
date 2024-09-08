
import './App.css'
import NavBar from "./components/header.tsx";
import PanelWithImg from "./components/panelWithImg.tsx";
import  Cardfirst from "./components/cardfirst.tsx";
import CardFirst from "./components/cardfirst.tsx";


function App() {


  return (
      <>
          <NavBar/>
          <div>
              <PanelWithImg
                  imageUrl="https://www.vipnet360.com/wp-content/uploads/2021/06/La-importancia-de-contar-con-un-desarrollador-o-programador-para-Wordpress_Vipnet360.png"
                  title="TALLER: INTRODUCCION A R"
                  description="De Funciones a Paquetes, de Paquetes a Papers"
                  buttonText="Registrarme"
                  buttonHref="https://www.gaaaaaaa.com"
              />
          </div>
              <CardFirst/>
          <div>
              <PanelWithImg
                  imageUrl="https://www.profesionalonline.com/blog/wp-content/uploads/2022/01/los-7-tipos-de-programador-explicados-header.jpg"
                  title="EVENTO VIRTUAL"
                  description="________________________________________________"
                  buttonText="Registrarme"
                  buttonHref="https://www.gaaaaaaa.com"
              />
          </div>

      </>
  )
}

export default App
