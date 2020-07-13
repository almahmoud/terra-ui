import { Fragment } from 'react'
import { div, h } from 'react-hyperscript-helpers'
import { ButtonPrimary } from 'src/components/common'
import { icon } from 'src/components/icons'
import Modal from 'src/components/Modal'
import colors from 'src/libs/colors'


const bioDataCatalystPolicyReminder = "You are transferring data through the BioData Catalyst security boundary. Downloading controlled-access, individual-level  data through BioData Catalyst in prohibited and downloading other types of data is strongly discouraged, due to the sensitive nature of the data hosted on the platform. Please see the Permissible and Prohibited Data Download section of the Data Upload and Download Policy  for more information. Additionally, transferring data may or may not be supported by your Data Use Agreement(s), Limitation(s), or your Institutional Review Board policies and guidelines. As a BioData Catalyst user, you are solely responsible for adhering to the terms of these policies."

const PolicyReminderModal = ({ onDismiss, onSuccess }) => {
  return h(Modal, {
    title: h(Fragment, ['Policy Reminder', icon('error-standard', { size: 16, style: { color: colors.warning(), marginLeft: '0.5rem' } })]),
    showCancel: true,
    onDismiss,
    okButton: h(ButtonPrimary, {
      onClick: () => {
        onSuccess()
        onDismiss()
      }
    }, 'Download')
  }, [
    div({ style: {  } }, [
      bioDataCatalystPolicyReminder
    ])
  ])
}

export { PolicyReminderModal }
