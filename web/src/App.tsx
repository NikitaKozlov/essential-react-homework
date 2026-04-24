import AddLotteryButton from './components/AddLotteryButton';
import AddLotteryModal from './components/AddLotteryModal';
import AddLotterySnackbar from './components/AddLotterySnackbar';
import ModalContextProvider from './contexts/ModalContext';
import SnackbarContextProvider from './contexts/SnackbarContext';
import LotteriesContextProvider from './contexts/LotteriesContext';
import { LotteryList } from './components/LotteryList';

function App() {

  return (
    <>
      <SnackbarContextProvider>
        <LotteriesContextProvider>
          <ModalContextProvider>
            <AddLotteryButton/>
            <AddLotteryModal />
            <LotteryList />
          </ModalContextProvider>
          <AddLotterySnackbar />
        </LotteriesContextProvider>
      </SnackbarContextProvider>
    </>
  )
}

export default App
