import React, {useMemo} from 'react';
import Comment from "./Comment";
import {
    formatDateOnlyHours,
    formatDateWithDateAndYear,
    formatDateWithoutHours,
    formatHours
} from "../../../../../../utils/formate.date"
import styles from './CommentList.module.sass'
import {sortByDate} from "../../../../../../utils/sort";

const CommentsList = ({comments}) => {
    const sortedArray = useMemo(() => Object.entries(comments ?? {})
        .sort((a, b) => sortByDate(a[1]?.date, b[1]?.date)),
        [comments])


    return (
        <div>
            {sortedArray.map(([key, value]) => (
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