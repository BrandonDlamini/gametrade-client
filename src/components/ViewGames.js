import {useQuery} from '@apollo/react-hooks';
import  gql from 'graphql-tag';
import { Link } from 'react-router-dom';

import {Game} from './Game';

const VIEW_GAMES_QUERY = gql`
    query {
            viewGames{
                title
                dateReleased
                id
                tradeFor
                phoneNumber
            }
    }
`;

function ViewGames(){
    const {loading, error, data} = useQuery(VIEW_GAMES_QUERY);

    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>
    
    
    return (
        <div>
            { data.viewGames.map( (games) => (<Game key ={games.id} game ={games}/>))}
        </div>
    )
}

export default ViewGames