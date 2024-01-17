import React from 'react';
import PropTypes from 'prop-types';

const KanbanForm = function ({ onSubmit, onChange, value }) {
    return (
        <div>
            <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <input
                    className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="addTask"
                    placeholder="Wpisz zadanie..."
                    type="text"
                    name="addTask"
                    required
                    onChange={onChange}
                    value={value}
                />
                <button
                    type="submit"
                    className="flex items-center justify-cente mt-4 mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Dodaj Zadanie
                </button>
            </form>
        </div>
    );
};

KanbanForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};
export default KanbanForm;
