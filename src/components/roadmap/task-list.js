import PropTypes from 'prop-types'

import * as spacings from '../../theme/spacings'
import * as colors from '../../theme/colors'

const TaskList = ({ children }) => (
  <>
    <table>
      <colgroup>
        <col className="status" />
        <col className="title" />
        <col className="progress" />
        <col className="priority" />
      </colgroup>

      <tbody>{children}</tbody>
    </table>

    <style jsx>{`
      table {
        position: relative;
        table-layout: fixed;
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        border-style: hidden;
        box-shadow: 0 0 0 1px ${colors.accent};

        &::after {
          content: '';
          position: absolute;
          top: -4px;
          right: -4px;
          bottom: -4px;
          left: -4px;
          border: 1px solid ${colors.accent};
        }
      }

      .status {
        width: calc(1em + ${spacings.normal});
      }

      .progress {
        min-width: 30%;
      }

      .priority {
        width: 100px;
      }
    `}</style>
  </>
)

TaskList.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TaskList
