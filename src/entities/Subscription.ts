import moment from "moment";

interface ISubscription {

    id: number,

    dueDate: string | undefined,

    siteName: string,

    price: number,

    period: number,

    daysLeft: number;
}

class Subscription implements ISubscription {
    period: number;

    dueDate: string | undefined;

    id: number;

    price: number;

    siteName: string;

    daysLeft: number;

    constructor(dueDate: string | undefined, id: number, price: number, siteName: string, period: number) {
        this.dueDate = dueDate;
        this.id = id;
        this.price = price;
        this.siteName = siteName;
        this.daysLeft = moment(dueDate, 'DD-MM-YYYY').diff(moment(), 'days');
        this.period = period;
    }
}

export default Subscription;


