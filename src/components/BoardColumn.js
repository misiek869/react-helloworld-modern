import React from 'react';
import KanbanTask from './KanbanTask';

const BoardColumn = function () {
    return (
        <div className="grid grid-cols-4 gap-4 justify-evenly">
            <div className="min-h-44 rounded-lg border-solid border-2 border-stone-500">
                <div className="flex rounded-sm flex-col items-center justify-center text-center bg-red-400">
                    <h2>Backlog</h2>
                    <p>Max tasks: </p>
                </div>
                <KanbanTask />
            </div>

            <div className="min-h-44 rounded-lg border-solid border-2 border-stone-500">
                <div className="flex rounded-sm flex-cols items-center justify-center text-center bg-amber-200">
                    <div>
                        <h2>Doing</h2>
                        <p>Max tasks: </p>
                    </div>
                </div>
            </div>

            <div className="min-h-44 rounded-lg border-solid border-2 border-stone-500">
                <div className="flex rounded-sm flex-cols items-center justify-center text-center bg-green-400">
                    <div>
                        <h2>Review</h2>
                        <p>Max tasks: </p>
                    </div>
                </div>
            </div>

            <div className="min-h-44 rounded-lg border-solid border-2 border-stone-500">
                <div className="flex rounded-sm flex-cols items-center justify-center text-center bg-sky-300">
                    <div>
                        <h2>Done</h2>
                        <p>Max tasks: </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoardColumn;
