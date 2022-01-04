import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class Cards extends Component {
    render() {

       const{poster_path,original_title,overview} = this.props.obj1;

        return (
            <div>
                <Card style={{width:'18rem'}}>
                    <Card.Img variant="top" src={poster_path}/>
                    <Card.Body>
                        <Card.Title>{original_title}</Card.Title>
                        <Card.Text>{overview}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
