import styles from './chatbot.module.css';

const Message = ({ message }) => {
    return (
        <div className={styles.messageContainer}>
            {message.who === 'bot' && (
                <div className={styles.botMessage}>
                    <img src='/images/bot.png' alt={message.who} />
                    <span>{message.content.text.text}</span>
                </div>
            )}
            {message.who === 'user' && (
                <div className={styles.userMessage}>
                    <img src='/images/user.png' alt={message.who} />
                    <span>{message.content.text.text}</span>
                </div>
            )}
        </div>
    )
}

export default Message;