import './navBarStyled.css'
import CartWidget from './CartWidget';

function Navbar() {
  return (
    
    
    <div className='navBar'>      
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>

    <CartWidget number ={7}/>

    </div>
  )
}

export default Navbar;
