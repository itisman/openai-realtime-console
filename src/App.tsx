import { ConsolePage } from './pages/ConsolePage';
import VConsole from 'vconsole';
import './App.scss';

function App() {
  console.log('app init');
  // 初始化 vConsole
  new VConsole();

  return (
    <div data-component="App">
      <ConsolePage />
    </div>
  );
}

export default App;
