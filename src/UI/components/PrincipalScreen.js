import React, { Fragment} from "react";
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
import _ from 'lodash';

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
  const [actualCode, setActualCode] = React.useState("");
  const [encCode, setencCode] = React.useState(undefined)
  const [encrypteds, setEncrypteds] = React.useState(['1234'])
  const encryptCode = () => {

    let new_code = Array.from(actualCode); //En el momento que se toca el boton, almaceno el valor de lo que haya
                                          //en el input de texto en una variable
    //console.log(new_code)
    let aux = new_code[0]; //Reemplazo los lugares 1 y 3 con ayuda de una variable auxiliar
    new_code[0] = new_code[2];
    new_code[2] = aux;

    //Recorro cada elemento del array
    for(var i = 0; i < new_code.length; i++) {
        let n = parseFloat(new_code[i]); //Convierto el elemento a float
        n = (n + 7) % 10; //hago los calculos
        new_code[i] = n.toString();  //Lo vuelvo a pasar a string

     };

     
     //setencCode(new_code.join(''))
     //pusheo al array encrypteds el valor de new code
     setEncrypteds(encrypteds.push(new_code.join('')));
     //console.log(encCode)
     console.log(encrypteds)
     //console.log(new_code)
     new_code = undefined;
  }

  const handleInput = (e) => {
    setActualCode(e.target.value)
  }
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
              onChange={handleInput}
            />
            <Box>
              <Grid container spacing={2} sx={{ mt: 2, ml: 3 }}  >
                <Grid xs={1}>
                </Grid>
                <Grid xs={4}>
                  <Buttons estado="encryptado" nombre="Encryptar" onClick={encryptCode}></Buttons>
                </Grid>
                <Grid xs={4}>
                  <Buttons estado="desencryptado" nombre="Desencrytar"></Buttons>
                </Grid>
                <Grid xs={2}>
                </Grid>
                <Grid xs={12} sx={{ mt: 2, ml:5}} >
                  <Buttons estado="mostrando" nombre="Mostrar">
                  </Buttons>
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

