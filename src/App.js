import './App.css';
import image from './planner.png';
import imageThree from './plannerThree.png';
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div>
      <div className='container'>
        <h1>Daily Planner</h1>
      </div>
      <div className='container'>
        <img src={ image } alt="planner" width="250px" className='im'/>
      </div>
      
      <div>
        <ToDoList />
      </div>
      
      <div className='container prize'>
      <img src={ imageThree } alt="planner" width="150px"/>
      <h1 className='choco'>Good! Take your chocolate!!!</h1>
      </div>
      



    </div>
  );
}

export default App;
