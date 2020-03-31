import React from "react";
import {Card, CardContent, Typography} from "@material-ui/core";
import ISubscription from "../../entities/Subscription";
import {makeStyles} from "@material-ui/core/styles";

interface Props {
    subscription: ISubscription
}

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginBottom: 20,
        display: "flex",
        justifyContent: 'center',
        alignContent: "center"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


const Subscription: React.FC<Props> = ({subscription}) => {

    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {subscription.siteName}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {subscription ? subscription.dueDate : '-'}
                </Typography>
                <Typography variant="body2" component="p">
                    {subscription.price}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Subscription;
