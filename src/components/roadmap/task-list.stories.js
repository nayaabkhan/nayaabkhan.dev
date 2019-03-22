import React from 'react'
import { storiesOf } from '@storybook/react'

import TaskList from './task-list'
import Task from './task'

export const defaultTasks = [
  { title: 'Task 1', priority: 'LOW' },
  { title: 'Task 2', progress: 45 },
  { title: 'Task 3', status: 'DONE', priority: 'HIGH' },
  { title: 'Task 4', status: 'DONE' },
  { title: 'Task 5' },
  { title: 'Task 6' },
]

storiesOf('Roadmap/TaskList', module)
  .addParameters({
    chromatic: { viewports: [375, 768] },
  })
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('Default', () => (
    <TaskList>
      {defaultTasks.map(task => (
        <Task key={task.title} {...task} />
      ))}
    </TaskList>
  ))
