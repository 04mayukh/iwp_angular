import { Comment } from './comment'

export class Event{
    id: number;
    org_id: number;
    event_name: string;
    image: string;
    category: string;
    organiser: string;
    organiser_img: string;
    price: string;
    description: string;
    detail_desc: string;
    comments: Comment[]
}