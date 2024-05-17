import React from 'react';
import Comment from "./Comment";
import {
    formatDateOnlyHours,
    formatDateWithDateAndYear,
    formatDateWithoutHours,
    formatHours
} from "../../../../../../utils/formate.date"
import styles from './CommentList.module.sass'
const CommentsList = ({comments}) => {
    // const groupCommentsByDate = (messages) => {
    //     const groupedComment = {};
    //     Object.entries(messages??{})?.forEach(([key,value]) => {
    //         const date = formatDateWithDateAndYear(value.date);
    //         if (!groupedComment[date]) {
    //             groupedComment[date] = [];
    //         }
    //         groupedComment[date].push(value);
    //     });
    //
    //     return groupedComment;
    // };
    // const groupedComments = groupCommentsByDate(comments);

    return (
        <div>
            {Object.entries(comments??{}).map(([key, value]) => (
                <div className={styles.container} key={key}>
                    <p>{formatDateWithDateAndYear(value?.date)}</p>
                        <Comment
                            hours={formatDateOnlyHours(value?.date)}
                            key={value.id}
                            sender={value.sender}
                            text={value.value.text}
                            files={value.value.files}
                        />
                </div>
            ))}
        </div>
    );
};

export default CommentsList;