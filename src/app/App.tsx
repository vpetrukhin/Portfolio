import { About } from 'sections/About';
import { Main } from 'sections/Main';
import { Project } from 'sections/Projects';
import { Skills } from 'sections/Skills';


function App() {
  return (
    <div className="app">
      <Main />
      <About />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
