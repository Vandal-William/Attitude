// == Import

// == Composant
import { ThemeProvider} from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import theme from '../../selectors/Theme';
import Header from '../Header';
import Home from '../Home';

function App() {

  return (
    <ThemeProvider theme={theme}>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      

    </ThemeProvider>

  );
}

// == Export
export default App;
