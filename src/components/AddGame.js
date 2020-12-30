import React, {useState} from 'react';
import {useMutation} from '@apollo/react-hooks';
import  gql from 'graphql-tag';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ADD_GAME_MUTATION =gql`
    
        mutation addGame($title: String! $dateReleased: String! $publisher: String! $tradeFor: String! $phoneNumber: String!){
            addGame(title: $title, dateReleased : $dateReleased, publisher: $publisher, tradeFor: $tradeFor, phoneNumber: $phoneNumber ){
                title
                dateReleased
                tradeFor
                phoneNumber
            }
        }`


function AddGame() {

    const [formState, setFormState] = useState({
        title:'',
        dateReleased:'',
        publisher:'',
        tradeFor:'',
        phoneNumber:''
    });

    const [addGame] = useMutation(ADD_GAME_MUTATION,{
        variables:{
            title: formState.title,
            dateReleased: formState.dateReleased,
            publisher: formState.publisher,
            tradeFor: formState.tradeFor,
            phoneNumber: formState.phoneNumber
        }
    });

    return(
        <>
        <Form onSubmit ={(e) =>{e.preventDefault(); addGame()}}>
            <Form.Group controlId ="formBasicTextarea">
                <Form.Label>Game Name</Form.Label>
                <Form.Control 
                value ={formState.title}
                onChange ={(e)=> setFormState({...formState, title: e.target.value})}
                type= "text"
                placeholder="Enter the name of the game"/>
            </Form.Group>

            <Form.Group controlId ="formBasicTextarea">
                <Form.Label>Release Date</Form.Label>
                <Form.Control 
                value ={formState.dateReleased}
                onChange ={(e)=> setFormState({...formState, dateReleased: e.target.value})}
                type= "text"
                placeholder="Enter the date the game was released"/>
            </Form.Group> 

            <Form.Group controlId ="formBasicTextarea">
                <Form.Label>Game Publisher </Form.Label>
                <Form.Control 
                value ={formState.publisher}
                onChange ={(e)=> setFormState({...formState, publisher: e.target.value})}
                type= "text"
                placeholder="Enter the publisher name"/>
            </Form.Group> 

            <Form.Group controlId ="formBasicTextarea">
                <Form.Label>Game to be trade for</Form.Label>
                <Form.Control 
                value ={formState.tradeFor}
                onChange ={(e)=> setFormState({...formState, tradeFor: e.target.value})}
                type= "text"
                placeholder="What game are you willing to trade for?"/>
            </Form.Group>  

            <Form.Group controlId ="formBasicTextarea">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control 
                value ={formState.phoneNumber}
                onChange ={(e)=> setFormState({...formState, phoneNumber: e.target.value})}
                type= "text"
                placeholder="please enter you contact Number"/>
            </Form.Group>  
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </>
        
    )

}

export default AddGame;


    //addGame( title: String!,dateReleased: String!, publisher: String!, tradeFor: String!)
   /* <div>
            <form onSubmit ={(e) =>{e.preventDefault(); addGame()}}>
                <input 
                value ={formState.title}
                onChange ={(e)=> setFormState({...formState, title: e.target.value})}
                type= "text"
                placeholder="Enter the name of the game"
                />
                <input 
                value ={formState.dateReleased}
                onChange ={(e)=> setFormState({...formState, dateReleased: e.target.value})}
                type= "text"
                placeholder="Enter the date of the game"
                />
                <input 
                value ={formState.publisher}
                onChange ={(e)=> setFormState({...formState, publisher: e.target.value})}
                type= "text"
                placeholder="Enter the publisher name"
                />
                <input 
                value ={formState.tradeFor}
                onChange ={(e)=> setFormState({...formState, tradeFor: e.target.value})}
                type= "text"
                placeholder="What game are you willing to trade for?"
                />
                <input 
                value ={formState.phoneNumber}
                onChange ={(e)=> setFormState({...formState, phoneNumber: e.target.value})}
                type= "text"
                placeholder="please enter you contact Number"
                />
            <button type ="submit">submit</button>
            </form>
            
        </div>*/
