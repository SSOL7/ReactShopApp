import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/router';

  

function App() {
  return (
    <div className="Ap">
      <header className="App-heade">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
