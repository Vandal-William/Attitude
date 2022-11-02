// == Import
import {Button, Container, Divider, Typography} from '@mui/material';
import { Box } from '@mui/system';
import theme from '../../selectors/Theme';
// == Composant

function Home() {


  return (
    <>
      <Box 
        sx={{
          bgcolor: theme.palette.secondary.main,
          width: '100%',
          height: '20rem',
          marginTop: '5rem',
          padding: '1rem',
          display: 'flex',
          gap: '15rem'

        }}
        >
        <Box
          sx={{
            width: '50%',
            marginLeft: '5rem'
          }}
          >
          <Typography
            variant='h4'
            sx={{
              marginBottom: '1rem'
            }}
          > 
            Mon Ebook
          </Typography>

          <Typography
            sx={{
              textAlign: 'justify'
            }}
          > 
            Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour 
            calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que 
            la mise en page est achevée.Le lorem ipsum est, en imprimerie, une suite de mots sans signification 
            utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
            le faux-texte dès qu'il est prêt ou que la mise en page est achevée. 
          </Typography>
          
          <Box 
            sx={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
              gap: '2rem',
              marginTop: '2rem'
            }}
          >
            <Typography
              variant='h4'
            > 
              20.00 €
            </Typography>

            <Button
              sx={{
                bgcolor: theme.palette.primary.dark
              }}
            > 
              Acheter 

            </Button>

          </Box>  

        </Box>

        <Box 
          component='img'
          src='https://www.babelio.com/couv/CVT_Le-passeur-de-livres_4354.jpg'
          alt='livre'
          sx={{
            position: 'absolute',
            right: '10rem',
            top: '10rem'
          }}
        />

      </Box>

      <Container>
        <Typography
          variant='h4'
          sx={{
            color: theme.palette.primary.dark,
            marginBottom: '2rem'
          }}
        > 
          A propo de l'ebook 
        </Typography>

        <Typography 
          sx={{
            textAlign: 'justify'
          }}
        > 
          Contrary to popular belief, Lorem Ipsum is not simply random text. 
          It has roots in a piece of classical Latin literature from 45 BC, 
          making it over 2000 years old. Richard McClintock, a Latin professor 
          at Hampden-Sydney College in Virginia, looked up one of the more 
          obscure Latin words, consectetur, from a Lorem Ipsum passage, and 
          going through the cites of the word in classical literature, discovered 
          the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 
          of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, 
          written in 45 BC. This book is a treatise on the theory of ethics, very popular 
          during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
          comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
          Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced 
          in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </Typography>

        <Divider
          sx={{margin: '2rem'}}
        /> 

        <Typography
          sx={{
            textAlign: 'justify'
          }}
        > 
          Contrary to popular belief, Lorem Ipsum is not simply random text. 
          It has roots in a piece of classical Latin literature from 45 BC, 
          making it over 2000 years old. Richard McClintock, a Latin professor 
          at Hampden-Sydney College in Virginia, looked up one of the more 
          obscure Latin words, consectetur, from a Lorem Ipsum passage, and 
          going through the cites of the word in classical literature, discovered 
          the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 
          of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, 
          written in 45 BC. This book is a treatise on the theory of ethics, very popular 
          during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
          comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
          Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced 
          in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </Typography>

          <Box 
            sx={{
              marginTop: '3rem',
              bgcolor: '#eaeaea',
              width: '100%',
              minHeight: '20rem',
              padding: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              gap: '1rem',
            
            }}
            >
            <Box 
              component='img'
              src='https://www.programme-tv.net/imgre/fit/~2~program~92943e75e588e1d4.jpg/630x355/quality/80/mara-une-femme-unique.jpg'
              alt='livre'
              sx={{
                width: '40%',
                height: '20rem',
              
              }}
            />
            <Box 
              sx={{ 
              width: '60%'
              }}
              >
              <Typography
                variant='h4'
                sx={{
                  color: theme.palette.primary.dark,
                  marginBottom: '2rem',        
                }}
              > 
                A propo de moi 
              </Typography> 

              <Typography
                sx={{
                  textAlign: 'justify',
                  
                }}
                > 
                  Contrary to popular belief, Lorem Ipsum is not simply random text. 
                  It has roots in a piece of classical Latin literature from 45 BC, 
                  making it over 2000 years old. Richard McClintock, a Latin professor 
                  at Hampden-Sydney College in Virginia, looked up one of the more 
                  obscure Latin words, consectetur, from a Lorem Ipsum passage, and 
                  going through the cites of the word in classical literature, discovered 
                  the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 
                  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, 
                  written in 45 BC. This book is a treatise on the theory of ethics, very popular 
                  during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32.
              </Typography>

            </Box>

          </Box>
        
      </Container>

      <Box 
        sx={{
          bgcolor: theme.palette.secondary.main,
          width: '100%',
          height: '20rem',
          marginTop: '10rem',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'center',
          gap: '3rem',
          

        }}
        >
        <Box
          sx={{
            alignSelf: 'center'
          }}
          >
          <Typography
            variant='h4'
            sx={{
              marginBottom: '1rem',
              textAlign: 'center'
            }}
          > 
            Mon Ebook
          </Typography>
          
          <Box 
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              marginTop: '2rem'
            }}
          >
            <Typography
              variant='h4'
            > 
              20.00 €
            </Typography>

            <Button
              sx={{
                bgcolor: theme.palette.primary.dark
              }}
            > 
              Acheter 

            </Button>

          </Box>  

        </Box>

        <Box 
          component='img'
          src='https://www.babelio.com/couv/CVT_Le-passeur-de-livres_4354.jpg'
          alt='livre'
          sx={{
            
          
          }}
        />

      </Box>
    </>


    

  );
}

// == Export
export default Home;
