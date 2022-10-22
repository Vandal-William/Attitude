// == Import
import { Divider, Typography } from '@mui/material';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink, useParams } from 'react-router-dom';
import { Box, Container } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

// == Composant
import theme from '../../selectors/Theme';
import panel from '../../assets/images/panel.png'
import Input from '../Input'

function Publication() {

  const params = useParams()
  console.log(params)

  const handleUpdate = (e) => {
    console.log('je veux modifier')
   }
   const handleDelete = (e) => {
     console.log('je veux supprimer')
  }

  return (
    <>
      <Box 
        sx={{
          backgroundImage: `url(${panel})`, 
          backgroundSize: 'cover' , 
          width: '100%', 
          height: '35rem', 
          marginTop: '5rem', 
          display: 'flex',
          alignItems: 'center'
          }}
          > 

        <Box 
          sx={{
            width: '40%', 
            height: '25rem', 
            bgcolor: 'white', 
            marginLeft: '5rem', 
            padding: '3rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
            }}
            >
          <Typography 
            variant='h4' 
            color={theme.palette.primary.main} 
            sx={{
              fontWeight: 'bold', 
              textAlign: 'center', 
              marginBottom: '2rem',
              position: 'relative'
            }} 
              > 
              Publications

              <SpeedDial
              ariaLabel="SpeedDial basic example"
              sx={{ position: 'absolute', bottom: -6, right: 0 }}
              icon={<SpeedDialIcon />}
            >
              
              <SpeedDialAction
              icon={<UpgradeIcon />}
              tooltipTitle='Modifier'
              onClick={handleUpdate}
              />
                <SpeedDialAction
              icon={<DeleteIcon />}
              tooltipTitle='Supprimer'
              onClick={handleDelete}
              />
      
            </SpeedDial>

          </Typography>

          <Typography variant='body1' sx={{fontSize: '1.3rem', textAlign: 'justify'}} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo quam, finibus nec libero nec, ornare aliquet lorem. 
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </Typography>
        </Box>
      </Box>

      <Container>

      <Box component='Link' sx={{ display: 'flex', fontSize: '1.3rem', gap: '1.5rem', marginTop: '4.8rem', justifyContent: 'center', marginBottom: '4.8rem'}}>
          <NavLink active to='/publication/Professionel'> La Vie Profrssionel |</NavLink>
          <NavLink to='/publication/Sante'> La Santé |</NavLink>
          <NavLink to='/publication/Couple'> Le Coupe |</NavLink>
          <NavLink to='/publication/Famille'>La famille |</NavLink>
          <NavLink to='/publication/Jeunes'>Les Jeunes </NavLink>
        </Box>

        <Box sx={{marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center'}} >
          <SearchIcon sx={{fontSize: '2.5rem'}}/>
          <Input 
            sx={{width: '40%'}}
              label='Rechercher'
            />
        </Box>

        <Divider />

      </Container>

    </>

  );
}

// == Export
export default Publication;
