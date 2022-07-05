import React, { Fragment } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import './style/Buttons.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './encryption.png';
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


export default function Encryption() {
  // function Encriptar(){
  // getElementById()
  // }
  const [actualCode, setActualCode] = React.useState("");
  const [encCode, setencCode] = React.useState(undefined);
  const [encrypteds, setEncrypteds] = React.useState(['1234'])
  const encryptCode = (e) => {
    e.preventDefault();
    let new_code = Array.from(actualCode); //En el momento que se toca el boton, almaceno el valor de lo que haya
    //en el input de texto en una variable                                                                      
    //console.log(new_code)
    let aux = new_code[0]; //Reemplazo los lugares 1 y 3 con ayuda de una variable auxiliar
    new_code[0] = new_code[2];
    new_code[2] = aux;
    let auxx = new_code[1];
    new_code[1] = new_code[3];
    new_code[3] = auxx;    
    //Recorro cada elemento del array
    for (var i = 0; i < new_code.length; i++) {
      let n = parseFloat(new_code[i]); //Convierto el elemento a float
      n = (n + 7) % 10; //hago los calculos
      new_code[i] = n.toString();  //Lo vuelvo a pasar a string
      console.log((new_code[i]) + 'numero: '+ n)
      var cifrado = document.getElementById('container');
      cifrado.innerHTML = new_code;
    };

    //setencCode(new_code.join(''))
    // pusheo al array encrypteds el valor de new code
    setEncrypteds(encrypteds.push(new_code.join('')));
    new_code = [];
  }

  const handleInput = (e) => {
    console.log(e.target.value);
    setActualCode(e.target.value)
  }
  return (
    <Fragment >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 7,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={require('./encryption.png')} height={300} width={300} />
          <Typography component="h1" variant="h5">
            Encryption
            <span id="container"></span>
          </Typography>
          <Box component="form" noValidate sx={{ mt: 14 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="digitos"
              label="Digitos"
              name="Digitos"
              autoComplete="Ingrese un numero de 4 digitos"
              autoFocus
              onChange={handleInput}
            />
            <Box>
              <Grid container spacing={2} sx={{ mt: 2, ml: 2 }}  >
                <Grid xs={6}>
                  <button className="btn encryptado" onClick={encryptCode} >Encriptar</button>
                </Grid>
                <Grid xs={6}>
                  <button className="btn desencryptado" >Des-encriptar</button>
                </Grid>
                <Grid xs={12} sx={{ mt: 2, ml: 10 }} >
                  <button className="btn mostrando" > Mostrar codigo</button>
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

