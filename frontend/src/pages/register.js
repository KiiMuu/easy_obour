import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../state/actions/user';
import { Alert, Col, Container, Row } from 'react-bootstrap';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    // * user state
    const user = useSelector(state => state.user);
    const { loading, error } = user;

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(register(name, email, password));
    }

    useEffect(() => {
        if (user?.userInfo) {
            history.push('/');
        }
    }, [user?.userInfo, history]);

    return (
        <div className='loginPage'>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <div className='formContainer'>
                        <h3>Register</h3>
                        <p>Create a new account.</p>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        <form 
                            className='formContent'
                            onSubmit={handleSubmit}>
                            <input
                                type='text'
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder='Type your name' 
                            />
                            <input
                                type='email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder='Type your email' 
                            />
                            <input
                                type='password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder='Type your password' 
                            />
                            <div className='authAction'>
                                <button type='submit'>
                                    {loading ? 'Loading...': 'Register'}
                                </button>
                                <Link to='/login'>Have an account? Login</Link>
                            </div>
                        </form>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Register;