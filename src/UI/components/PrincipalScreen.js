import React, { Fragment } from "react";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './encryption.png';
import Buttons from "./Buttons";
import { Grid } from "@mui/material";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Encryptation
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function SignIn() {
  // function Encriptar(){
  // getElementById()
  // }
  return (
    <Fragment >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={require('./encryption.png')} height={200} width={200} />
          <Typography component="h1" variant="h5">
            Encryption
          </Typography>
          <Box component="form" noValidate sx={{ mt: 14 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="digitos"
              label="Digitos"
              name="Digitos"
              autoComplete="Inserte un numero de 4 digitos"
              autoFocus
            />
            <Box>
              <Grid container spacing={2} sx={{ mt: 2, ml: 3 }}  >
                <Grid xs={1}>
                </Grid>
                <Grid xs={4}>
                  <Buttons estado="encryptado" nombre="Encryptar"></Buttons>
                </Grid>
                <Grid xs={4}>
                  <Buttons estado="desencryptado" nombre="Desencrytar"></Buttons>
                </Grid>
                <Grid xs={2}>
                </Grid>
                <Grid xs={12} sx={{ mt: 2, ml:5}} >
                  <Buttons estado="mostrando" nombre="Mostrar"></Buttons>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </Fragment>
  );
}

