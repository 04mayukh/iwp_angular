import { Comment } from '../shared/comment';

class details{
    eventId: String;
    eventName: String;
    category: String;
    organiser: {
        name: String;
        photo: String;
    };
    price: Number;
    tagLine: String;
    description: String;
    eventDate: Date;
    venue: String;
    popularity: Number;
    _id: String;
}

export class UserEvent{
    success: boolean;
    events: details[];
}