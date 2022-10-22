// == Import
import { Grid } from '@mui/material';
import theme from '../../../selectors/Theme';
// == Composant
import LastArticle from './LastArticle'
function LastArticles() {
  return (
    <Grid container spacing={2} sx={{marginBottom: '2rem'}} >
      <LastArticle />
      <LastArticle />
      <LastArticle />
      <LastArticle />
    </Grid>

  );
}

// == Export
export default LastArticles;
