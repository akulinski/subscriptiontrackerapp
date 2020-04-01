import React, {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";
import DateFnsUtils from "@date-io/date-fns";
import ISubscription from "../../entities/Subscription";
import Subscription from "../../entities/Subscription";

interface Props {
    isOpen: boolean,
    handleClose: () => void,
    addNewSubscription: (subscription: ISubscription) => void;
}

const NewSubscription: React.FC<Props> = ({isOpen, handleClose, addNewSubscription}) => {

    const [selectedDate, setSelectedDate] = useState<MaterialUiPickersDate>(new Date());

    const [website, setWebsite] = useState('');

    const [price, setPrice] = useState(0.0);

    const addNewSubscriptionWrapper = () => {
        handleClose();
        addNewSubscription(new Subscription(selectedDate?.toLocaleDateString(), 1, price, website, 1));
    };

    return (
        <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title"> Add new subscription</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    onChange={data => setWebsite(data.target.value)}
                    margin="dense"
                    id="name"
                    label="Website"
                    type="text"
                    fullWidth
                />

                <TextField
                    autoFocus
                    onChange={data => setPrice(Number.parseFloat(data.target.value))}
                    margin="dense"
                    id="name"
                    label="Price"
                    type="number"
                    fullWidth
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>

                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Due Date"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={setSelectedDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={addNewSubscriptionWrapper} color="primary">
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default NewSubscription;
