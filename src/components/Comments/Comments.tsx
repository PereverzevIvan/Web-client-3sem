import styles from "./comments.module.scss";

interface Comment {
  commentTitle: string;
  commentText: string;
}

interface CommentListProps {
  comments: Comment[];
}

export function CommentList(props: CommentListProps) {
  return (
    <>
      <div className={`${styles["comment-list"]}`}>
        <h2 className="title title_medium">Комментарии</h2>
        {props.comments.map((comment, index) => {
          return (
            <div key={`comment-${index}`} className={`${styles.comment}`}>
              <p className={`${styles.comment__title}`}>
                {comment.commentTitle}
              </p>
              <p className={`${styles.comment__text}`}>{comment.commentText}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
