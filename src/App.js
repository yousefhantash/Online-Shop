import './App.css';
import GreetingClass from './components/GreetingClass';
import GreetingFunctional from './components/GreetingFunctional';
function App() {
  return (
    <div>
      <GreetingClass name="Yousef" message="Hello" />
      <GreetingFunctional name="Hantash" message="Welcome" />
    </div>
  );
}

export default App;