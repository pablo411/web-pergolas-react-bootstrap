import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Header() {
    return(
    <nav className="navbar">
        <div className="contenedor-header">
            <div className="logo-titulo">
                <img className="logo-pergolas" src="https://pergolascanor.es/wp-content/uploads/2024/05/cropped-logo-pergolas-canor-1.webp"></img>
                <h2 className="logo-pergolas">Pergolas Canor</h2>
            </div>
            <div className="links">
                <Link className="link" to={"/"}>Inicio</Link>
                <Link className="link" to={"/conciertos"}>Galeria</Link>
                <Link className="link" to={"/discordia"}>Nosotros</Link>
                <Link className="link" to={"/contactos"}>Contactos</Link>
            </div>    
            <div className="botones">
                <div className="iconos-sociales">
                    <img className="icono-social" src="https://th.bing.com/th/id/OIP.63DXNT7dro-XDctQsQE7VwHaHa?rs=1&pid=ImgDetMain"></img>
                    <img className="icono-social" src="https://lh4.googleusercontent.com/-qfFKsYZbyBQ/TYHwDPCeXgI/AAAAAAAAE9M/T0BTA6mZYDE/s1600/Facebook+icon+01.png"></img>
                    <img className="icono-social" src="https://toppng.com/uploads/preview/instagram-png-logo-11545512103yiiajkgr2i.png"></img>
                </div>
                <Button className="outline-light" variant="outline-light">Solicitar Presupuesto</Button>{' '}
                <Button variant="outline-light">Llamanos 614306304</Button>{' '}
            </div>
            
        </div>
    </nav> 
    

    );
}
export default Header;