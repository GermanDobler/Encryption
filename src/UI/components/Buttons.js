import { Fragment } from 'react';
import Button from '@mui/material/Button';
import './style/Buttons.css';
export default function Buttons(props) {

    return(
        <Fragment>
          <Button className={props.estado} variant="contained" color="success" onClick={props.onClick}>
            <span>{props.nombre}</span>
          </Button>
        </Fragment>
  );
}

