import React from 'react';
import {contextTable} from './Grid';
import { ReactComponent as DeleteIcon } from '../svgs/deleteIcon.svg'

const DeleteButton = ({rowId}) => {
    const contextData = React.useContext(contextTable);

    const onClickHandler = (e) => {
       e.stopPropagation();
       contextData.deleteRow(rowId);
    }

    return (
        <div className="delete-btn" onClick={onClickHandler}>
            <DeleteIcon /> 
        </div>
    )
}

export default DeleteButton;