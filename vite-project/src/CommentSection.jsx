import { useState, useActionState } from "react";
import { useFormStatus } from "react-dom";
import styles from "./CommentsSection.module.css";

const arrayOfComments = [
  { text: "Первый комментарий" },
  { text: "Второй комментарий" },
];

const sendData = async (_, formData) => {
  const data = { text: formData.get("text") };
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (Math.random() < 0.2) {
    // 20% шанс ошибки
    return { error: "Ошибка при добавлении комментария" };
  }
  console.log("Комментарий отправлен", data);
  return { data };
};

const SendButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={styles.button}>
      {pending ? "Отправка..." : "Отправить"}
    </button>
  );
};

export const CommentsSection = () => {
  const [message, submitAction, isPending] = useActionState(sendData, null);
  const [comments, setComments] = useState(arrayOfComments);

  // Добавляем новый комментарий, если пришли новые данные
  if (message && message.data && message.data.text) {
    const newComment = {
      text: message.data.text,
    };

    // Проверяем, чтобы не добавить дубликат при повторных рендерах
    const exists = comments.some((com) => com.text === newComment.text);
    if (!exists) {
      setComments((prev) => [...prev, newComment]);
    }
  }


  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Комментарии</h3>
      <ul className={styles.list}>
        {comments.map(({ text }) => (
          <li key={text} className={styles.listItem}>
            {text}
          </li>
        ))}
      </ul>

      <form action={submitAction} className={styles.form}>
        <textarea
          name="text"
          disabled={isPending}
          placeholder="Введите текст"
          className={styles.textarea}
        />
        <div className={styles["wrapper-button"]}>
          <SendButton />
          <button type="reset" className={styles.button}>
            Сброс
          </button>
        </div>
      </form>
      {message?.error && <p className={styles.errorText}>{message.error}</p>}
    </div>
  );
};


