import { AppContextProvider } from './context/appContext';
import Todo from './screens/Todo';
function App() {
  return (
    <AppContextProvider>
      <Todo />
    </AppContextProvider>
  );
}

export default App;
