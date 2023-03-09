import {React} from 'react';
import './loginStyle.scss';

function Login(){
    return (
        <div className='container'>
            <div className='titulo'>
                <p>Inicia sesión</p>
            </div>
            <form className='formulario'>
                <div className='interior'>
                    <div className='correo'>
                        <label for="email">
                            <span>Correo Electrónico:</span> 
                        </label>
                        <div >
                            <input className='input' type="email" id="email" name="email"/>
                        </div>
                    </div >
                    <div className='contraseña'>
                        <label for="password">
                            <span>Contraseña:</span> 
                        </label>
                        <div > 
                            <input className='input' type="password" id="password" name="password"/>
                        </div>
                    </div>
                    <button type="submit" className='confirmButton'>Iniciar sesión</button>
                    
                </div>          
            </form> 
            <div className='remember'>
                <p>¿Olvidaste tu contraseña?</p>   
            </div>
             
        </div>


    );
};

export default Login;


