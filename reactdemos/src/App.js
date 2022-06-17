import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Welcomes from './components/Welcomes';
import Hello from './components/Hello';
import Messasge from './components/Messasge';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
import Form from './components/Form';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import PostList from './components/PostList';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import UseEffectDemo from './components/useEffectDemo';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <Welcome/>
        <Welcomes/> */}

        {/* <Hello name="Bruce" heroName="Batman">
          <p>This is a cildern prop</p>
          <p><input type="button" value="CLICK"/></p>
        </Hello>
        <Hello name="Clark" heroName="Superman"/>
        <Hello name="Diana" heroName="Wonder Women"/> */}

        {/* <Messasge/> */}

        {/* <Counter name="Bruce" heroName="Batman"/> */}

        {/* <ParentComponent/> */}

        {/* <Form/> */}
        {/* <ParentComp/> */}

        {/* <RefsDemo/> */}

       {/* <ErrorBoundary>
        <Hero heroName="batman"/>
       </ErrorBoundary>

       <ErrorBoundary>
        <Hero heroName="Superman"/>
       </ErrorBoundary>

       <ErrorBoundary>
        <Hero heroName="Joker"/>
       </ErrorBoundary> */}

       {/* <ClickCounter />
       <HoverCounter /> */}

       {/* <PostList /> */}
       {/* <HookCounter/> */}
       {/* <HookCounterTwo/> */}
       {/* <HookCounterThree/> */}

       {/* <UseEffectDemo/> */}

       {/* <HookMouse /> */}

       {/* <MouseContainer/> */}
       <UserProvider value="John Smith">
        <ComponentC />
       </UserProvider>
      
      </header>
    </div>
  );
}

export default App;
