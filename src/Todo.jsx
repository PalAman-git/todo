import { List, ListItem, ListItemText } from "@mui/material"
import db from "./firebase"
import { DeleteForever } from "@mui/icons-material"

const Todo = (props) => {
  return (
    <List>
        <ListItem >
            <ListItemText secondary="dummy deadline" primary={ props.todo.todo }/>
        </ListItem>
        <DeleteForever variant="contained" color='error' onClick={() => {db.collection('todos').doc(props.todo.id).delete()}}/>
    </List>
  )
}
export default Todo