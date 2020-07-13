import { div, h } from 'react-hyperscript-helpers'
import { ButtonPrimary } from 'src/components/common'
import { icon } from 'src/components/icons'
import Modal from 'src/components/Modal'
import colors from 'src/libs/colors'


const PolicyReminderModal = ({ onDismiss, onSuccess }) => {
  return h(Modal, {
    title: 'Policy Reminder',
    showCancel: true,
    onDismiss,
    okButton: h(ButtonPrimary, {
      onClick: () => {
        onSuccess()
        onDismiss()
      }
    }, 'Download')
  }, [
    div({ style: { color: colors.warning() } }, [
      icon('error-standard', { size: 16, style: { marginRight: '0.5rem' } }),
      'This is the NEW modal text.'
    ])
  ])
}

export { PolicyReminderModal }
