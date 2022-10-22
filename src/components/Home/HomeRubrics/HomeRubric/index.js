// == Import
import { Box, Button, Container, Typography } from '@mui/material';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import DeleteIcon from '@mui/icons-material/Delete';
import theme from '../../../../selectors/Theme';
// == Composant
import qui from '../../../../assets/images/qui.jpeg'
function HomeRubric() {


  const handleUpdate = (e) => {
   console.log('je veux modifier')
  }
  const handleDelete = (e) => {
    console.log('je veux supprimer')
   }

  return (

    <Box sx={{display: 'flex', width: '100%', position: 'relative'}}>
    
      <Box 
        component='img' 
        src={qui} 
        alt='qui' 
        sx={{
          width: '35rem', 
          height: '33rem', 
          padding: '1rem'
        }} 
      />

        <Box 
          sx={{
            padding: '1rem', 
            display: 'flex', 
            flexDirection: 'column'
          }} 
          >
          <Typography 
            variant='h4' 
            color={theme.palette.primary.main} 
            sx={{
              textAlign: 'center', 
              fontWeight: 'bold', 
              marginBottom: '2rem',
              position: 'relative'
              }}
            > 
              Qui somme nous ? 

              <SpeedDial
                  ariaLabel="SpeedDial basic example"
                  sx={{ position: 'absolute', bottom: -6, right: 50, color: 'white' }}
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

          <Typography variant='body1' sx={{textAlign: 'justify', fontSize: '1.2rem'}} > 
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, possimus iusto autem sed 
            totam maiores, soluta voluptatibus iste culpa quia voluptas esse iure harum voluptatum odit 
            vitae ut dolor cupiditate?
            At aspernatur laboriosam nulla minus dolorum iusto, eius aliquid tempore, asperiores earum provident 
            consequuntur voluptatibus obcaecati sint quisquam deleniti minima sed quae corporis fugiat doloremque 
            dignissimos ab in ipsa. Dolorum?
            Debitis quisquam eos praesentium, iusto cumque rem rerum eum porro, suscipit sunt ducimus? Corrupti ducimus 
            voluptate quisquam voluptas provident nobis fuga atque similique expedita iure saepe pariatur dolore, 
            dicta esse!
          </Typography>
          <Button sx={{marginTop: '4rem', alignSelf: 'flex-end'}}> EN SAVOIR PLUS </Button>

        </Box>

    </Box>   

  );
}

// == Export
export default HomeRubric;
