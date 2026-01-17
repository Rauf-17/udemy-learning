import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Empire_State_Building_%28HDR%29.jpg/960px-Empire_State_Building_%28HDR%29.jpg?20130630040906',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: { 
            lat: 40.7484405, 
            lng: -73.9878584 
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Statue of Liberty',
        description: 'Famous colossal neoclassical sculpture on Liberty Island.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/800px-Statue_of_Liberty_7.jpg',
        address: 'Liberty Island, New York, NY 10004, United States',
        location: {
            lat: 40.6892494,
            lng: -74.0445004
        },
        creator: 'u2'
    }
];

const Userplaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />;
};

export default Userplaces;