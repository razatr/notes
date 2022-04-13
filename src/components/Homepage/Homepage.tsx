import { useStyles } from "./style";
import AddButton from "../AddButton/AddButton";

export interface HomepageProps {
  hello ?: string
}

const Homepage = () => {
  const classes = useStyles();
    return (
      <>
      <div className={classes.home}>
        <div><h1>Hello world</h1></div>
        <div><h1>Hello world</h1></div>
        <div><h1>Hello world</h1></div>
        <div><h1>Hello world</h1></div>
        <div><h1>Hello world</h1></div>
      </div>
      <AddButton />
      </>
    );
}

export default Homepage