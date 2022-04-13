import { createUseStyles } from "react-jss";
import { unit } from "../../common/metriсs";

export const useStyles = createUseStyles({
  addButton: {
    position: 'sticky',
    bottom: unit(10),
    right: unit(10),
    width: unit(10),
    height: unit(10),
    margin: 0
  }
})
