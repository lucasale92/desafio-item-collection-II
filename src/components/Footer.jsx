import React from 'react'
import { Link } from 'react-router-dom'
import {BsWhatsapp,  BsInstagram, BsFillEnvelopeOpenFill }  from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-sm-4 col-edit'>
                            <h3 className='linea display-6'>Contactanos</h3>
                            <p className='mb-2 mx-5'>WhatsApp 
                            <BsWhatsapp size={"30"} className=" mx-2"/>                         
                             </p>
                             <a href="https://www.instagram.com/_pastaslau66/?hl=es">
                            <p className='mb-2'>Instagram <BsInstagram size={"30"} className="mx-2"/></p></a>
                            <p className='mb-2 mx-5'>Mail <BsFillEnvelopeOpenFill size={"30"} className="mx-1" /></p>
                        </div>

                        <div className='col-12 col-sm-4 col-edit'>                           
                            
                            <img src="../logo.png" alt="logo" className="App-logo "></img>
                           
                        </div>
                        <div className='col-12 col-sm-4 column'>
                            <h3 className='linea display-6'>Productos</h3>
                            <ul className='footer-ul'>
                                <li>
                                    Pastas
                                </li>
                                <li>
                                    Panificados
                                </li>                              
                                <li>
                                    Pizzas
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='text-center py-1 '>
                        <p className='text-footer'>© 2022 Pastas Lau • Todos los derechos reservados</p>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer