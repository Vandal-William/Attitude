// == Import
import { Box, Button, Container, Typography } from '@mui/material';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import DeleteIcon from '@mui/icons-material/Delete';
import theme from '../../selectors/Theme';
import HomeRubrics from './HomeRubrics';
import LastArticles from '../Articles/LastArticles'
// == Composant

function Home() {

  const handleUpdate = (e) => {
    console.log('je veux modifier')
   }
   const handleDelete = (e) => {
     console.log('je veux supprimer')
    }

  return (
    <Container>
    
      <HomeRubrics />
      <Box sx={{ bgcolor: '#eaeaea', padding: '5rem', marginTop: '3rem'}} >
        <Typography 
          variant='h4'  
          color={theme.palette.primary.main} 
          sx={{
            textAlign: 'center', 
            fontWeight: 'bold', 
            position: 'relative'
          }}
          >
          
          Publications
          
          <SpeedDial
                  ariaLabel="SpeedDial basic example"
                  sx={{ position: 'absolute', bottom: -6, right: 320 }}
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

        <Typography 
          variant='body1'
          sx={{
            textAlign: 'center', 
            fontSize: '1.3rem', 
            marginTop: '2rem'
          }}
          > 

            Vivre en chrétient dans un monde ou la chrétièneté est oublié 

        </Typography>

        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', position: 'relative'}}>
          <Button sx={{margin: '2rem'}}> VOIR TOUTE LES PUBLICATIONS </Button>
        </Box>

          <LastArticles />

      </Box>

    </Container>


    

  );
}

// == Export
export default Home;
