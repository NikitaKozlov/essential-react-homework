import AddLotteryButton from './components/AddLotteryButton';
import AddLotteryModal from './components/AddLotteryModal';
import AddLotterySnackbar from './components/AddLotterySnackbar';
import ModalContextProvider from './contexts/ModalContext';
import SnackbarContextProvider from './contexts/SnackbarContext';
import LotteriesContextProvider from './contexts/LotteriesContext';
import { LotteryList } from './components/LotteryList';
import { RegisterButton } from './components/RegisterButton';
import RegisterForLotteryModal from './components/RegisterForLotteryModal';

function App() {

  return (
    <>
      <SnackbarContextProvider>
        <LotteriesContextProvider>
          <ModalContextProvider>
            <AddLotteryButton/>
            <AddLotteryModal />
          </ModalContextProvider>
          <LotteryList />
          <ModalContextProvider>
            <RegisterButton />
            <RegisterForLotteryModal />
          </ModalContextProvider>
          <AddLotterySnackbar />
        </LotteriesContextProvider>
      </SnackbarContextProvider>
    </>
  )
}

export default App
