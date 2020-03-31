import Subscription from "../entities/Subscription";

const subscriptionComperator = (a: Subscription, b: Subscription) => {
    if (a.daysLeft > b.daysLeft) {
        return -1;
    } else if (a.daysLeft < b.daysLeft) {
        return 1;
    }
    return 0;
};

export default subscriptionComperator;
