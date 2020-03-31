import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React, {useState} from 'react';
import './Home.css';
import {Container, Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import NewSubscription from "../components/NewSubscription/NewSubscription";
import Subscription from "../entities/Subscription";
import SubscriptionCard from "../components/Subscription/SubscriptionCard";
import moment from "moment";
import subscriptionComperator from "../utils/subscriptionComperator";

const subscriptions: Subscription[] = [
    new Subscription(moment("17-06-1995", 'DD-MM-YYYY').format('DD-MM-YYYY'), 1, 9.99, "www.google.pl"),
    new Subscription(moment().format('DD-MM-YYYY'), 2, 9.99, "www.google.pl"),
    new Subscription(moment().format('DD-MM-YYYY'), 3, 9.99, "www.google.pl")
];

const Home: React.FC = () => {
    const [dialogVisible, setDialogVisible] = useState(false);

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
                        subscriptions.sort(subscriptionComperator).map((sub) => <SubscriptionCard
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
