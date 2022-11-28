import './AddCardBtn.css';
const AddCardBtn = (props) => {
  return (
    <button onClick={()=>{alert(`Has agregado ${props.name}`)}}>Agregar</button>
  )
}
export {AddCardBtn}
