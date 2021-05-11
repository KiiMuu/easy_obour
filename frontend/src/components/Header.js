import { Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../state/actions/user';
import { Container } from 'react-bootstrap';
import styles from './header.module.css';
import useToggle from '../hooks/useToggle';
import { MenuAlt1Icon } from '@heroicons/react/outline';

const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { isOpen, handleToggle } = useToggle();
    
    // * user state
    const user = useSelector(state => state.user);

    const handleLogout = () => {
        dispatch(logout());

        history.push('/login');
    }

    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.brand}>
                        <h3><Link to='/'>Easy Obour</Link></h3>
                    </div>
                    <ul className={styles.listItems}>
                        <li><Link to='/'>Home</Link></li>
                        {!user?.userInfo && (
                            <Fragment>
                                <li><Link to='/register'>Register</Link></li>
                                <li><Link to='/login'>Login</Link></li>
                            </Fragment>
                        )}
                        {user?.userInfo && (
                            <Fragment>
                                <li><Link to='/find-places'>Find Places</Link></li>
                                <li><span>Logged in as {user?.userInfo?.name}</span></li>
                                <li onClick={handleLogout}>
                                    <span style={{ cursor: 'pointer' }}>Logout</span>
                                </li>
                            </Fragment>
                        )}
                    </ul>
                    
                    <div className={styles.listItemsMob}>
                        <span onClick={handleToggle}>
                            <MenuAlt1Icon width={24} height={24} style={{ cursor: 'pointer' }} />
                        </span>
                        <ul className={isOpen ? `${styles.navOpen}` : `${styles.navHide}`}>
                            <li><Link to='/'>Home</Link></li>
                            {!user?.userInfo && (
                                <Fragment>
                                    <li><Link to='/register'>Register</Link></li>
                                    <li><Link to='/login'>Login</Link></li>
                                </Fragment>
                            )}
                            {user?.userInfo && (
                                <Fragment>
                                    <li><Link to='/find-places'>Find Places</Link></li>
                                    <li><span>Logged in as {user?.userInfo?.name}</span></li>
                                    <li onClick={handleLogout}>
                                        <span style={{ cursor: 'pointer' }}>Logout</span>
                                    </li>
                                </Fragment>
                            )}
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header;