// == Import
import { AppBar, Box, Typography } from '@mui/material';
import theme from '../../selectors/Theme'
// == Composant
import './style.scss'
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <AppBar component='header'>
      <Box component='img'  src={logo} alt='logo' sx={{width: '6rem'}}/>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'end'}}>
        <Typography variant='h4' color={theme.palette.primary.main} sx={{fontWeight: 'bold'}}> Changer d'attitude </Typography>
        <Box component='nav' sx={{ display: 'flex', fontSize: '1.3rem', gap: '1.5rem', alignSelf: 'baseline', marginTop: '4.8rem', color: 'black'}}>
          <NavLink to='/'> Accueil </NavLink>
          <NavLink to='/publication'> Publications</NavLink>
          <NavLink to='/login'>Connexion</NavLink>
          <NavLink to='/signup'>Inscription</NavLink>
        </Box>
      </Box>
    </AppBar>


    

  );
}

// == Export
export default Header;
