import React, {useMemo} from 'react';
import Card from "../../../../../shared/Card";
import CommentsList from "./CommentsList";
import CommentsInput from "./CommentsInput";
import useUser from "../../../../../hooks/useUser";

const ClientComments = ({comments,onChange}) => {
    const commentsLength= useMemo(()=>Object.keys(comments??{}).length,[comments])
    const user = useUser()
    return (
        <Card>
            <CommentsInput commentsLength={commentsLength} onSendMessage={(val)=>onChange(`comments.${commentsLength}`,val)} currentUser={user}/>
            <CommentsList comments={comments}/>
        </Card>
    );
};

export default ClientComments;