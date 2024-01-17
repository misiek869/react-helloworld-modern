import React from 'react';
import { createRoot } from 'react-dom/client';
import './app.css';
import KanbanBoard from './components/KanbanBoard';

const root = createRoot(document.querySelector('#root'));
root.render(<KanbanBoard />);
