import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

import './Styles/theme.css';
import './Styles/global.css';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessagesContainerProps } from './components/MessagesContainer';
import { BrowserRouter, Route, Routes } from 'react-router';
import { AboutPomodoro } from './pages/AboutPomodoro';

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainerProps>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about-pomodoro' element={<AboutPomodoro />}></Route>

            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </MessagesContainerProps>
    </TaskContextProvider>
  );
}
