import AddLotteryButton from './components/AddLotteryButton';
import AddLotteryModal from './components/AddLotteryModal';
import AddLotterySnackbar from './components/AddLotterySnackbar';
import ModalContextProvider from './contexts/ModalContext';
import SnackbarContextProvider from './contexts/SnackbarContext';

function App() {

  return (
    <>
      <SnackbarContextProvider>
        <ModalContextProvider>
          <AddLotteryButton/>
          <AddLotteryModal />
        </ModalContextProvider>
        <AddLotterySnackbar />
      </SnackbarContextProvider>
    </>
  )
}

export default App
