import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../data';

const Places = () => {
    return (
        <div className='placesPage'>
            <Container>
                <h4
                    style={{
                        color: '#000',
                        marginBottom: '20px'
                    }}
                >Find Places</h4>
                <Row xs={1} md={2} lg={4}>    
                    {data.map(place => (
                        <Col key={place.id} style={{ padding: '5px' }}>
                            <Link 
                                style={{ textDecoration: 'none' }}
                                to={`/find-places/${place.id}`}
                            >
                                <div className='place'>
                                    {place.title}
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Places;