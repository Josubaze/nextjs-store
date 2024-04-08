'use client';
 
import { useChat } from 'ai/react';
import styles from "./chat.module.sass";

export const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
 
  return (
    <div className={styles.chat_container}>
      {messages.map(m => (
        <div key={m.id} className={styles.chat_container__message}>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}
 
      <form onSubmit={handleSubmit} className={styles.chat_container__form}>
        <input
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}