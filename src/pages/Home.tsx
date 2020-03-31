import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React, {useState} from 'react';
import './Home.css';
import {Container, Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import NewSubscription from "../components/NewSubscription/NewSubscription";
import Subscription from "../entities/Subscription";
import SubscriptionCard from "../components/Subscription/SubscriptionCard";
import moment from "moment";

const subscriptions: Subscription[] = [
    new Subscription(new Date(moment('17-06-2000', 'DD-MM-YYYY').date()).toLocaleDateString(), 1, 9.99, "www.google.pl"),
    new Subscription(new Date().toLocaleDateString(), 2, 9.99, "www.google.pl"),
    new Subscription(new Date().toLocaleDateString(), 3, 9.99, "www.google.pl")
];

const Home: React.FC = () => {
    const [dialogVisible, setDialogVisible] = useState(false);

    const compare = (a: Subscription, b: Subscription) => {
        if (a.daysLeft > b.daysLeft) {
            return -1;
        } else if (a.daysLeft < b.daysLeft) {
            return 1;
        }
        return 0;
    };


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Subscription Tracker</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Subscription Tracker</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <Container className={'subscription-list'}>
                    {
                        subscriptions.sort(compare).map((sub) => <SubscriptionCard
                            subscription={sub} key={sub.id}/>)
                    }
                </Container>
                <NewSubscription isOpen={dialogVisible} handleClose={() => setDialogVisible(false)}
                                 addNewSubscription={subscription => subscriptions.push(subscription)}/>
                <Fab color="primary" aria-label="add" className="floating-add" onClick={() => setDialogVisible(true)}>
                    <AddIcon/>
                </Fab>
            </IonContent>
        </IonPage>
    );
};

export default Home;
