import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette :{
        primary:{
            main: '#0eb59d',
            light: '#5de8ce',
            dark : '#00846f',
             contrastText: '#ffffff'
        },
        secondary: {
            main: '#ECFEFB'
        }
    },
   
    components: {
        MuiAppBar: {
            defaultProps: {

            },
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    boxShadow: 'none',
                    display: 'flex',
                    flexDirection: 'row',
                    paddingTop: '1rem',
                    paddingLeft: '3rem',
                    paddingRight: '3rem',
                    position: 'relative'
                }
            }
        },
        MuiContainer: {
            defaultProps: {

            },
            styleOverrides: {
                root: {
                    marginTop: '8rem'
                }
            }
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained'
            },
            styleOverrides: {
                root: {
                    
                }
            }
        }
    }
});

export default theme
