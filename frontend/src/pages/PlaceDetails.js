import { Container, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import data from '../data';

const PlaceDetails = () => {
    const { id } = useParams();

    return (
        <div style={{ paddingTop: '100px' }}>
            <Container>
                <h4
                    style={{
                        color: '#000',
                        marginBottom: '20px'
                    }}
                >Places of {id}</h4>
                {data.map(place => {
                    return place.title.toLowerCase() === id.toLowerCase() && (
                        place.places.map((p, i) => (
                            <ListGroup key={i}>
                                <ListGroup.Item style={{ padding: '20px', margin: '3px 0' }}>{p}</ListGroup.Item>
                            </ListGroup>
                        ))
                    )
                })}
            </Container>
        </div>
    )
}

export default PlaceDetails;