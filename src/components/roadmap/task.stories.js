import React from 'react'
import { storiesOf } from '@storybook/react'

import TaskList from './task-list'
import Task from './task'

export const task = {
  title: 'Test Task',
}

storiesOf('Roadmap/Task', module)
  .addParameters({
    chromatic: { viewports: [375, 768] },
  })
  .addDecorator(story => (
    <div style={{ padding: '3rem' }}>
      <TaskList>{story()}</TaskList>
    </div>
  ))
  .add('Not started', () => <Task {...task} />)
  .add('In progress', () => (
    <Task {...task} status="IN_PROGRESS" progress={40} />
  ))
  .add('Done', () => <Task {...task} status="DONE" />)
  .add('Low Priority', () => <Task {...task} priority="LOW" />)
  .add('Medium Priority', () => <Task {...task} priority="MEDIUM" />)
  .add('High Priority', () => <Task {...task} priority="HIGH" />)
