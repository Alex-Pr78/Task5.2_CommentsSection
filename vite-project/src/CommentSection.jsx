
import styles from "./CommentsSection.module.css";

export const CommentsSection = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Комментарии</h3>
      <ul className={styles.list}>
        
      </ul>

      <form className={styles.form}>
        <textarea
          name="text"
          placeholder="Введите комментарий"

          className={styles.textarea}
        />
        <div className={styles["wrapper-button"]}>

          <button type="reset" className={styles.button}>
            Сброс
          </button>
        </div>
      </form>

    </div>
  );
};
