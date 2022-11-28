import './Task.css';
import { AddCardBtn } from './AddCardBtn';
import { Heart } from './Heart';
const Task = (props) => {/* o (var1, name, oldTask,...) */
  return (
    <div className='task'>
      <Heart/>
        <img className='task__img'src='https://picsum.photos/180' alt='task'/>
        <h2 className='task__name'> {props.name}</h2>
        <div className='task__details'>
            <p className='task__oldTask' >{props.oldTask}</p>
            <p className='task__newTask' >{props.newTask}</p>            
            <AddCardBtn name={props.name}/>
        </div>
    </div>
  )
}
export {Task}