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
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

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
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Encryption() {
  const [actualCode, setActualCode] = React.useState("");
  const [encCode, setencCode] = React.useState(['1234']);
  const [encrypteds, setEncrypteds] = React.useState(['1234'])
  const encryptCode = (e) => {
    e.preventDefault();
    var x = document.getElementById("Hola");
    var z = document.getElementById("Chau");
    document.getElementById("digitos").value = "";
    if (x.style.display === "none") {
      z.style.display = "block";
    } else {        
      x.style.display = "none";
      z.style.display = "block"
    }
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
      var cifrado = document.getElementById('cifrado');
      cifrado.innerHTML = new_code.join('');
    };
   
    setencCode(encCode[i] = new_code.slice());
    // console.log(encCode[i]+'numeros'); 

    //setencCode(new_code.join(''))
    // pusheo al array encrypteds el valor de new code
    setEncrypteds(encrypteds.push(new_code.join('')));
    console.log((new_code) + 'numero: ')
    new_code = [];
    return (
      encCode
    );

  }
  const desencryptCode = (e, setencCode) => {
    e.preventDefault();
    var x = document.getElementById("Hola");
    var z = document.getElementById("Chau")
    if (z.style.display === "none") {
      z.style.display = "none";
      x.style.display = "block"
    } else {
        z.style.display = "none";
        x.style.display = "block"
    }
    let new_code = Array.from(encCode); //En el momento que se toca el boton, almaceno el valor de lo que haya
    let aux = new_code[0]; //Reemplazo los lugares 1 y 3 con ayuda de una variable auxiliar
    new_code[0] = new_code[2];
    new_code[2] = aux;
    let auxx = new_code[1];
    new_code[1] = new_code[3];
    new_code[3] = auxx;
    console.log(new_code);
    for (var i = 0; i < new_code.length; i++) {
      let n = parseFloat(new_code[i]); //Convierto el elemento a float
      n = (n % 10) - 7; //hago los calculos
      if (0 > n) {
        n = n + 10
      }
      new_code[i] = n.toString();  //Lo vuelvo a pasar a string
      var cifrado = document.getElementById('decifrar');
      cifrado.innerHTML = new_code.join('');
    }
    setEncrypteds(encCode.push(new_code.join('')));
    console.log("desencriptado: " + new_code);
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={require('./encryption.png')} height={300} width={300} alt="Encryption"/>
          <Typography component="h1" variant="h5">
            Encryption
          </Typography>
          <Box sx={{ width: '100%', mt: 4,textAlign:'center'}} >
            <Grid className="cielo" container >
                <Grid item xs={6} >
                    Encriptados
                </Grid>
                <Grid item xs={6}>
                    Desencriptados
                </Grid>
                <Grid item xs={6} sx={{mt:2}}>
                <Item id="cifrado"><b>- SIN DATOS -</b></Item>
                </Grid>
                <Grid item xs={6} sx={{mt:2}}>
                <Item id="decifrar"><b>- SIN DATOS -</b></Item>
                </Grid>
            </Grid>
          </Box>
          <Box component="form" noValidate sx={{ mt: 8 }}>
            <TextField
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 4)
              }}
              margin="normal"
              required
              fullWidth
              type="number"
              id="digitos"
              label="Digitos"
              name="digitos"
              onChange={handleInput}
            />
            <Box>
              <Grid container spacing={2} sx={{ mt: 2 }}  >
                <Grid item xs={12} sx={{ ml: 16, mt:3 }}>
                  <button className="encryptado" id="Hola" onClick={encryptCode} >Encriptar</button>
                </Grid>
                <Grid item xs={12} sx={{ ml: 15}}>
                  <button className="desencryptado" id="Chau" onClick={desencryptCode}>Desencriptar</button>
                </Grid>
                <Grid item xs={12} sx={{ mt: 2, ml: 13 }} >
                  <button className="mostrando"> <a href="https://github.com/GermanDobler/Encryption/blob/master/src/UI/components/PrincipalScreen.js">Mostar Codigo</a></button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </Fragment >
  );
}

