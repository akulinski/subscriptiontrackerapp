interface ISubscription {
    id: number,
    dueDate: string | undefined,
    siteName: string,
    price: number
}

class Subscription implements ISubscription {
    dueDate: string | undefined;
    id: number;
    price: number;
    siteName: string;

    constructor(dueDate: string | undefined, id: number, price: number, siteName: string) {
        this.dueDate = dueDate;
        this.id = id;
        this.price = price;
        this.siteName = siteName;
    }
}

export default Subscription;


