import './App.css';
import {ErrorBoundary} from './components/ErrorBoundary';
import {ErrorPage} from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <br/>
        <ErrorPage/>
        <br/>
        <ErrorPage/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
