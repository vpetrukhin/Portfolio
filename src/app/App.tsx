import { useState } from 'react';
import { About } from 'sections/About';
import { Footer } from 'sections/Footer';
import { Main } from 'sections/Main';
import { Project } from 'sections/Projects';
import { Skills } from 'sections/Skills';
import { Modal } from 'shared/ui/Modal/Modal';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  }

  return (
    <div className="app">
      <Main />
      <About />
      <Skills />
      <Project />
      <Footer />
      <Modal isOpen={isOpen} onClose={onClose}>
        Modal
      </Modal>
    </div>
  );
}

export default App;
