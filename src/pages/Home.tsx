import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React, {useState} from 'react';
import './Home.css';
import ISubscription from "../entities/Subscription";
import {Container, Fab} from '@material-ui/core';
import Subscription from '../components/Subscription/Subscription';
import AddIcon from '@material-ui/icons/Add';
import NewSubscription from "../components/NewSubscription/NewSubscription";

const subscriptions: ISubscription[] = [
    {
        id: 1,
        dueDate: new Date().toLocaleDateString(),
        siteName: "www.google.pl",
        price: 9.99
    }, {
        id: 2,
        dueDate: new Date().toLocaleDateString(),
        siteName: "www.google.pl",
        price: 9.99
    }, {
        id: 3,
        dueDate: new Date().toLocaleDateString(),
        siteName: "www.google.pl",
        price: 9.99
    }
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
                        subscriptions.map((sub) => <Subscription subscription={sub} key={sub.id}/>)
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
