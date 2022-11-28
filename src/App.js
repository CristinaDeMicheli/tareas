//import Navegacion from './componentes/Navegacion';
import TaskContainer from './componentes/TaskContainer';
import { Task } from './componentes/Task';
//import './App.css';
import data from './json/task.json';
 console.log(data);  
function App() {
  
  return (
   
       <TaskContainer>
        {data.map( tarjetas=>
         <Task 
         key={tarjetas.name}
         name={tarjetas.name}
         oldTask={tarjetas.oldTask}
         newTask={tarjetas.newTask}
         /> 
          )}
               
       </TaskContainer>
 
  );
}

export default App;
