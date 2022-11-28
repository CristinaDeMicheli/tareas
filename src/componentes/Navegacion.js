export default function Navegacion(props) {
      return (
      
        <nav className="navbar navbar-dark bg-dark">
        <a href='http://localhost:3000/' className='text-white m-2 disenio'>
        { props.titulo }    
        </a>
        </nav>
       
    );
}