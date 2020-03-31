import moment from "moment";

interface ISubscription {

    id: number,

    dueDate: string | undefined,

    siteName: string,

    price: number,

    daysLeft: number;
}

class Subscription implements ISubscription {

    dueDate: string | undefined;

    id: number;

    price: number;

    siteName: string;

    daysLeft: number;

    constructor(dueDate: string | undefined, id: number, price: number, siteName: string) {
        this.dueDate = dueDate;
        this.id = id;
        this.price = price;
        this.siteName = siteName;
        this.daysLeft =  moment(dueDate, 'DD-MM-YYYY').diff(moment(), 'days')
    }
}

export default Subscription;


