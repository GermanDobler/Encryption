import './App.css';
import { Fragment } from 'react';
import PrincipalScreen from './UI/components/PrincipalScreen'
import Buttons from './UI/components/Buttons'
export default function App() {
  return (
    <Fragment>
      <PrincipalScreen></PrincipalScreen>
      {/* <Buttons></Buttons> */}
    </Fragment>
  );
}
