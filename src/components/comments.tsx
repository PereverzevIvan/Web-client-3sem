import styled from "styled-components";
import Flex from "./Flex";

interface CommentListProps {
    comments: {
        commentTitle: string;
        commentText: string;
    }[];
}

const StyledCommentList = styled.div`
    background-color: var(--four-color);
    border-radius: 10px;
    padding: 15px;
    border: 1px solid var(--black);

    .comment {
        background-color: var(--secondary-color);
        border: 1px solid var(--black);
        border-radius: 10px;
        padding: 10px;
    
    &__title {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 5px;
    }
    }
    
`


export function CommentList(props: CommentListProps) {
    return ( 
        <StyledCommentList>
            <Flex direction="column" gap="10px">
                {props.comments.map((comment) => {
                    return (
                        <div className="comment">
                            <p className="comment__title">{comment.commentTitle}</p>
                            <p className="comment__text">{comment.commentText}</p>
                        </div>
                    )
                })}
            </Flex>
        </StyledCommentList>
     );
}

