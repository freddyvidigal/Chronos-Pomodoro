import './Styles/theme.css';
import './Styles/global.css';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessagesContainerProps } from './components/MessagesContainer';
import { MainRouter } from './routers/MainRouter';

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainerProps>
        <MainRouter />
      </MessagesContainerProps>
    </TaskContextProvider>
  );
}
