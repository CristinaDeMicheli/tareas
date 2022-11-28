import './TaskContainer.css';
const TaskContainer = (props) => {
  return (
    <section className="tasks__section">
    <h1 className="tasks__title">Tareas: </h1>
    <div className="tasks__container">
        {props.children}
    </div>
    </section>
  )
}
export default TaskContainer;