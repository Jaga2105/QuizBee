import './App.css';
import { QuizProvider } from './context/quiz';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <QuizProvider>
    <Outlet/>
    </QuizProvider>
  );
}

export default App;
