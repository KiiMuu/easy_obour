import { useEffect, useRef } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeftIcon, XIcon } from '@heroicons/react/outline';
import useToggle from '../../hooks/useToggle';
import Message from './Message';
import { saveMessage } from '../../state/actions/message';
import styles from './chatbot.module.css';

const Chatbot = () => {
    const { isOpen, handleToggle } = useToggle();

    const messagesEnd = useRef(null);
    const dispatch = useDispatch();
    const messagesFromRedux = useSelector(state => state.message.messages)

    const textQuery = async text => {
        let conversation = {
            who: 'user',
            content: {
                text: {
                    text,
                },
            },
        }

        dispatch(saveMessage(conversation));

        const textQueryVars = {
            text,
        }

        try {
            const { data } = await axios.post('/dialogflow/textQuery', textQueryVars);

            for (let content of data.fulfillmentMessages) {
                conversation = {
                    who: 'bot',
                    content,
                }
    
                dispatch(saveMessage(conversation));
            }
        } catch (error) {
            conversation = {
                who: 'bot',
                content: {
                    text: {
                        text: 'Error has occured',
                    },
                },
            }

            dispatch(saveMessage(conversation));
        }
    }
    
    const eventQuery = async event => {
        const eventQueryVars = {
            event,
        }

        try {
            const { data } = await axios.post('/dialogflow/eventQuery', eventQueryVars);

            for (let content of data.fulfillmentMessages) {
                let conversation = {
                    who: 'bot',
                    content,
                }
    
                dispatch(saveMessage(conversation));
            }
        } catch (error) {
            let conversation = {
                who: 'bot',
                content: {
                    text: {
                        text: 'Error has occured',
                    },
                },
            }

            dispatch(saveMessage(conversation));
        }
    }

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            if (!e.target.value) alert('Please type something!');

            textQuery(e.target.value);

            e.target.value = '';
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    const scrollToBottom = () => {
        messagesEnd.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const renderMessages = messages => {
        if (messages) {
            return messages.map((message, i) => (
                <Message key={i} message={message} />
            ));
        } else {
            return null;
        }
    }

    useEffect(() => {
        eventQuery('welcomeToMyApp');
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        scrollToBottom();
    });

    return (
        <div className={styles.chatbotContainer}>
            <div className={isOpen ? styles.botWindow : styles.hideBot}>
                <div className={styles.botHeader}>
                    <span>
                        <ArrowLeftIcon 
                            onClick={handleToggle} 
                            width={20} 
                            height={20} 
                        />
                    </span>
                    <span>Bot</span>
                </div>
                <div className={styles.messages}>
                    {renderMessages(messagesFromRedux)}
                    <div ref={messagesEnd} />
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        className={styles.messageInput}
                        type='text'
                        inputMode='text'
                        placeholder='Type a message' 
                        onKeyPress={handleKeyPress}
                    />
                </form>
            </div>
            <div className={styles.botIcon} onClick={handleToggle}>
                {isOpen ? (
                    <span><XIcon width={20} height={20} /></span>
                ) : (
                    <img src='/images/bot.png' alt='Bot' />
                )}
            </div>
        </div>
    )
}

export default Chatbot;