interface ISubscription {

    id: number,

    dueDate: string | undefined,

    siteName: string,

    price: number,

    daysLeft: number;
}

class Subscription implements ISubscription {

    private static MS_PER_DAY = 1000 * 60 * 60 * 24;

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
        const diffTime = Math.abs(new Date(dueDate ? dueDate : '').getDate() - new Date().getDate());
        this.daysLeft = Math.ceil(diffTime / Subscription.MS_PER_DAY);
    }
}

export default Subscription;


