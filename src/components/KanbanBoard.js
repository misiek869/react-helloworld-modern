import React, { useState, useCallback } from 'react';
import KanbanForm from './KanbanForm';
import BoardColumn from './BoardColumn';
import { DataContext, MoveTaskContext } from '../context';

import useStorage from './LsHook';

function KanbanBoard() {
    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useStorage('tasks');

    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            id: value.length + 1,
            name: inputValue,
            idColumn: 1,
            user: 'Michal',
        };

        const updatedTasks = [...value, newTask];
        setValue(updatedTasks);

        setInputValue('');
    };

    // const moveTaskForward = useCallback(() => {
    //     const newState = value.map((item) => ({ ...item, idColumn: item.idColumn + 1 }));
    //     setValue(newState);
    // });

    // const moveTaskBack = useCallback(() => {
    //     const newState = value.map((item) => ({ ...item, idColumn: item.idColumn - 1 }));
    //     setValue(newState);
    // });

    const moveTask = useCallback((num, id) => {
        const newState = value.map((item) => {
            if (item.id === id) {
                return { ...item, idColumn: item.idColumn + num };
            }
            return item;
        });

        setValue(newState);
    });

    // const moveTaskMethods = useMemo(() => ({ moveTaskForward, moveTaskBack }), [moveTaskForward, moveTaskBack]);

    return (
        <div className="flex justify-center">
            <div className=" w-4/5 ">
                <h1 className="text-center text-4xl 	uppercase mt-10">Kanban</h1>
                <KanbanForm onSubmit={onSubmit} onChange={handleInput} value={inputValue} />

                <MoveTaskContext.Provider value={moveTask}>
                    <DataContext.Provider value={value}>
                        <BoardColumn
                            fields={[
                                {
                                    id: 1,
                                    name: 'Backlogs',
                                    limit: 4,
                                    color: 'bg-red-400',
                                },
                                {
                                    id: 2,
                                    name: 'Doing',
                                    limit: 2,
                                    color: 'bg-amber-200',
                                },
                                {
                                    id: 3,
                                    name: 'Review',
                                    limit: 3,
                                    color: 'bg-green-400',
                                },
                                {
                                    id: 4,
                                    name: 'Done',
                                    limit: 4,
                                    color: 'bg-sky-400',
                                },
                            ]}
                        />
                    </DataContext.Provider>
                </MoveTaskContext.Provider>
            </div>
        </div>
    );
}

export default KanbanBoard;
