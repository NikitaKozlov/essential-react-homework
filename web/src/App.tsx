import AddLotteryButton from './components/AddLotteryButton';
import AddLotteryModal from './components/AddLotteryModal';
import ModalContextProvider from './contexts/ModalContext';

function App() {

  return (
    <>
      <ModalContextProvider>
        <AddLotteryButton/>
        <AddLotteryModal />
      </ModalContextProvider>
      
    </>
  )
}

export default App
