import styled from "styled-components";

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
`

const StyledComment = styled.div`
    
`

export function CommentList(props: CommentListProps) {
    return ( 
        <StyledCommentList>
            <StyledComment></StyledComment>
        </StyledCommentList>
     );
}

export function Comment() {
    return ( 
        <StyledComment></StyledComment>
    );
}
