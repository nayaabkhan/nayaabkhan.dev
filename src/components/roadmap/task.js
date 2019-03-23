import PropTypes from 'prop-types'

import * as spacings from '../../theme/spacings'
import * as colors from '../../theme/colors'
import * as typography from '../../theme/typography'

const status = ['NOT_STARTED', 'IN_PROGRESS', 'DONE']
const priorities = ['LOW', 'MEDIUM', 'HIGH']

const priorityLabels = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: 'High',
}

const priorityColors = {
  LOW: 'hsl(0, 0%, 44%)',
  MEDIUM: 'hsl(26, 100%, 38%)',
  HIGH: 'hsl(0, 80%, 44%)',
}

const Task = ({ title, status, progress, priority }) => (
  <>
    <tr>
      <td className="status-column">
        <span className="status" />
      </td>
      <td className="title-column">
        <label>{title}</label>
      </td>
      <td className="progress-column">
        <progress max="100" value={status === 'DONE' ? 100 : progress} />
      </td>
      <td className="priority-column">
        <small className="priority">{priorityLabels[priority]}</small>
      </td>
    </tr>

    <style jsx>{`
      @import 'responsive.css';

      tr {
        border-bottom: 1px solid ${colors.accent};

        &:last-of-type {
          border-bottom: 0;
        }
      }

      td {
        padding: ${spacings.small};

        &:not(:last-child) {
          padding-right: 0;
        }

        @media (--viewport-medium) {
          padding: ${spacings.normal};
        }
      }

      .title-column {
        text-align: left;
        line-height: 1.2;
      }

      .priority-column {
        text-align: right;
      }

      .status-column {
        padding-right: 0;
      }

      .status {
        position: relative;
        display: block;
        width: 1em;
        height: 1em;
        border-radius: 1em;

        border: 1px solid ${status === 'DONE' ? colors.accent : colors.muted};
        background-color: ${status === 'DONE' ? colors.accent : 'transparent'};

        &::after {
          content: ${status === 'DONE' ? '""' : 'none'};

          position: absolute;
          left: 3px;
          top: 3px;

          display: inline-block;
          height: 6px;
          width: 8px;
          border-left: 2px solid white;
          border-bottom: 2px solid white;
          transform: rotate(-45deg);
        }
      }

      progress {
        width: 100%;
        vertical-align: middle;
      }

      .priority {
        display: inline-block;
        padding: ${spacings.xSmall} ${spacings.small};
        color: white;
        background-color: ${priorityColors[priority]};
        border-radius: 1rem;
        font-family: ${typography.harmanRetro};
      }
    `}</style>
  </>
)

Task.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.oneOf(status),
  progress: PropTypes.number,
  priority: PropTypes.oneOf(priorities),
}

Task.defaultProps = {
  status: 'NOT_STARTED',
  progress: 0,
  priority: 'MEDIUM',
}

export default Task
