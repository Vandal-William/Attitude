// == Import
import { Box, Card, Grid, Typography } from '@mui/material';
import theme from '../../../../selectors/Theme';
import last from '../../../../assets/images/lastArticle.jpeg'
// == Composant
function LastArticle() {
  return (
    <Grid item sm={3}>
      <Card>
        <Box component='img' src={last} alt='last' sx={{height: '20rem', width: '100%'}} />
        <Typography variant='body1' sx={{fontSize: '1.3rem', textAlign: 'center'}}>L'important c'est de croire</Typography>
      </Card>
    </Grid>


    

  );
}

// == Export
export default LastArticle;
