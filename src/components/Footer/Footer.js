import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4">
                        <h5 className="mb-3">QuantumGadget</h5>
                        <p>Интернет магазин, 356000, г. Краснодар, ул. Красная 1, офис 1 <br/>ИНН 1234567890 ОГРН 123456789011
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="mb-3">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-1">
                                <a href="#">Корзина</a>
                            </li>
                            <li className="mb-1">
                                <Link className="nav-link hyiovaya-link" to="/ConUs">ContactUs</Link>
                            </li>
                            <li className="mb-1">
                                <a href="#">FAQ</a>
                            </li>
                            <hr/>
                            <li className="mb-1">
                                <a href="#">Terms and Conditions</a>
                            </li>
                            <li className="mb-1">
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li className="mb-1">
                                <a href="#">Disclaimer</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="mb-1">Join Us</h5>
                        <p>Присоединяйтесь к нашему Telegram-каналу, чтобы получить дополнительную информацию о QuantumGadget.</p>
                        <a href="#">
                            <button type='button' className='btn btn-primary'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-telegram" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path>
                                </svg>
                                Telegram
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center  under-footer">
                QuantumGadget © 2024. All rights reserved.
            </div>
        </footer>

    );
};

export default Footer;
