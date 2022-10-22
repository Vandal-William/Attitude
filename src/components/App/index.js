// == Import

// == Composant
import { ThemeProvider} from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import theme from '../../selectors/Theme';
import Header from '../Header';
import Home from '../Home';
import Publication from '../Publication'

function App() {

  return (
    <ThemeProvider theme={theme}>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/publication' element={<Publication />} />
        <Route path='/publication/:category' element={<Publication />} />
        <Route path='/publication/:category' element={<Publication />} />
        <Route path='/publication/:category' element={<Publication />} />
        <Route path='/publication/:category' element={<Publication />} />
        <Route path='/publication/:category' element={<Publication />} />
      </Routes>
      

    </ThemeProvider>

  );
}

// == Export
export default App;
