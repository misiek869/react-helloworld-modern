import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import KanbanTask from './KanbanTask';
import { DataContext } from '../context';

const BoardColumn = function ({ fields }) {
    const data = useContext(DataContext);

    const renderTask = (colNum) => {
        const tasksForColumn = data.filter((item) => item.idColumn === colNum);
        return tasksForColumn.map((item) => <KanbanTask key={item.id} task={item} />);
    };

    // const checkNumberOfTasks = (colNum) => {
    //     const tasks = data.filter((item) => item.idColumn === colNum);
    //     return tasks.length;
    // };

    const columns = fields.map((item) => (
        <div
            key={item.id}
            data-column-id={item.id}
            data-column-limit={item.limit}
            className="min-h-44 rounded-lg border-solid border-2 border-stone-500"
        >
            <div className={`flex rounded-sm flex-col items-center justify-center text-center ${item.color}`}>
                <h2>{item.name}</h2>
                <p>Max tasks: {item.limit}</p>
            </div>
            {/* {checkNumberOfTasks(item.id) <= item.limit && renderTask(item.id)} */}
            {renderTask(item.id)}
        </div>
    ));

    return <div className="mt-10 grid grid-cols-4 gap-4 justify-evenly">{columns}</div>;
};

BoardColumn.propTypes = {
    // data: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         id: PropTypes.number,
    //         name: PropTypes.string,
    //         idColumn: PropTypes.number,
    //         user: PropTypes.string,
    //     }),
    // ),
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            limit: PropTypes.number,
            color: PropTypes.string,
        }),
    ),
};

BoardColumn.defaultProps = {
    // data: [],
    fields: [],
};

export default BoardColumn;
