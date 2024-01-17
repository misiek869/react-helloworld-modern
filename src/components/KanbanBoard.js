import React, { useState, useEffect } from 'react';
import KanbanForm from './KanbanForm';
import BoardColumn from './BoardColumn';

function KanbanBoard() {
    const [inputValue, setInputValue] = useState('');

    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // eslint-disable-next-line
        console.log('submitted');
    };

    useEffect(() => {
        // eslint-disable-next-line
        console.log(inputValue);
    });

    return (
        <div className="flex justify-center">
            <div className=" w-4/5 ">
                <h1 className="text-center text-4xl 	uppercase mt-10">Kanban</h1>
                <KanbanForm onSubmit={onSubmit} onChange={handleInput} value={inputValue} />
                <BoardColumn />
            </div>
        </div>
    );
}

export default KanbanBoard;
