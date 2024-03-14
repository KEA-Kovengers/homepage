import React, { useState } from "react";
import { ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton } from '@mui/material';
import { DeleteOutline } from "@mui/icons-material";
const GuestBook = (props) => {
    const [item, setItem] = useState(props.item);
    const [readOnly, setReadOnly] = useState(true);
    const deletItem = props.deletItem;
    const editItem = props.editItem;

    const editItemHandler = (e) => {
        item.title = e.target.value;
        editItem();
    };

    const checkboxEventHander = (e) => {
        item.done = e.target.checked;
        editItem();
    };
    const deleteItemHandler = () => {
        deletItem(item);
    };

    const turnOffReadOnly = () => {
        setReadOnly(false);
    }
    const turnOnReadOnly = (e) => {
        if (e.key === "Enter") {
            setReadOnly(true);
        }
    }
    return (
        <ListItem>
            <Checkbox checked={item.done}
                onChange={checkboxEventHander} />
            <ListItemText>
                <InputBase
                    inputProps={{
                        "aria-label": "naked",
                        readOnly: readOnly
                    }}
                    onClick={turnOffReadOnly}
                    onKeyDown={turnOnReadOnly}
                    onChange={editItemHandler}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Guest"
                    onClick={deleteItemHandler}>
                    <DeleteOutline />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default GuestBook; 