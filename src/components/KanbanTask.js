import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MoveTaskContext } from '../context';

const KanbanTask = function ({ task }) {
    const moveTask = useContext(MoveTaskContext);

    const handleMoveForward = () => {
        moveTask(1, task.id);
    };

    const handleMoveBackward = () => {
        moveTask(-1, task.id);
    };

    return (
        <div className="relative shadow-md rounded-md mt-3 mb-3 flex items-center justify-center min-h-36 bg-orange-400 w-4/5 mx-auto">
            <p className="text-2xl">{task.name}</p>

            {task.idColumn > 1 && (
                <button
                    id={task.id}
                    onClick={handleMoveBackward}
                    type="button"
                    className="absolute bottom-0 left-0 mb-2 ml-6 text-white bg-red-700 hover:bg-red-800 focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                    Back
                </button>
            )}

            {task.idColumn < 4 && (
                <button
                    id={task.id}
                    onClick={handleMoveForward}
                    type="button"
                    className="absolute bottom-0 right-0 mb-2 mr-6 text-white bg-green-700 hover:bg-green-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                    Forward
                </button>
            )}
        </div>
    );
};
KanbanTask.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        limit: PropTypes.number,
        color: PropTypes.string,
        idColumn: PropTypes.number,
    }),
};

KanbanTask.defaultProps = {
    task: {},
};

export default KanbanTask;
