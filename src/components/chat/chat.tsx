'use client';
 
import { useChat } from 'ai/react';
import styles from "./chat.module.sass";

export const Chat = (props: { agent: string }) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [
      {
        id: '1',
        role: 'system',
        content: props.agent,
      }
    ],
  });
 
  return (
    <>
    <h1 className={styles.chat_title}>ChatBot</h1>
    <div className={styles.chat_container}>
      {
        messages
        .filter(m => m.role !== 'system')
        .map(m => (
        <div key={m.id} className={styles.chat_container__message}>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}
 
      <form onSubmit={handleSubmit} className={styles.chat_container__form}>
        <input
          value={input}
          placeholder="Escribe aqui..."
          onChange={handleInputChange}
        />
      </form>
    </div>
    </>
  );
}