import { makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Home from "./components/HomeSection";

const useStyles = makeStyles({
  button: {
    position: 'fixed',
    justifyContent: 'center',
  },
})

function App() {

  const classes = useStyles();

  return (
    <div>
      <div position = 'fixed' ><Navbar id='home' /></div>
      <Home/>
      {/*<Button className={classes.button} color="default" text="press my titties daddy" variant="outlined"/>*/}
    </div>
  );
}

export default App;
