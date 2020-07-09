import { useState } from 'react'
import { div, h } from 'react-hyperscript-helpers'
import { ButtonPrimary } from 'src/components/common'
import { icon } from 'src/components/icons'
import Modal from 'src/components/Modal'
import colors from 'src/libs/colors'


const PolicyReminder = () => {
  const { modalVisible, setModalVisible } = useState(false)
}

const PolicyReminderModal = ({ closeModal, action }) => {
  const { onConfirmPolicyReminder, setOnConfirmPolicyReminder } = useState()
  const { onDismissPolicyReminder, setOnDismissPolicyReminder } = useState()

  const promise = new Promise(
    (resolve, reject) => {
      setOnConfirmPolicyReminder(() => {
        resolve()
        action()
      })
      setOnDismissPolicyReminder(reject)
    }).catch(() => {})
  console.log(promise)

  return h(Modal, {
    title: 'Policy Reminder',
    showCancel: true,
    onDismiss: () => {
      onDismissPolicyReminder()
      closeModal()
    },
    okButton: h(ButtonPrimary, {
      onClick: () => {
        onConfirmPolicyReminder()
        closeModal()
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
