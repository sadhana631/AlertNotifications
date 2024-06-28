import {GrFormClass} from 'react-icon/gr'

import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="notification">
      <div className="notification-content">{children}</div>
      <GrFormClass className="class-icon" />
    </div>
  )
}

export default Notification
