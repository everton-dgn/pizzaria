import styled from 'styled-components'
import { s } from 'theme'
import {
  WarningRounded as WarningRoundedIcon,
  CheckCircleRounded as CheckCircleRoundedIcon
} from '@material-ui/icons'
import { ToastContainer } from 'react-toastify'

export const ToastAlertContainer = styled(ToastContainer)`
  .Toastify__toast--error {
    background-color: #fff;
    //border-left: 5px solid ${s.bgError};

    b {
      color: ${s.textErrorColor};
    }

    .Toastify__progress-bar {
      background: ${s.bgError};
    }
  }

  .Toastify__toast--success {
    background-color: #fff;
    //border-left: 5px solid ${s.bgSuccess};

    b {
      color: ${s.textSecondary};
    }

    .Toastify__progress-bar {
      background: ${s.bgSuccess};
    }
  }

  .Toastify__progress-bar {
    //background: ${s.bgProgressBar};
    height: 4px;
  }

  .Toastify__toast-body {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    color: #374151;

    b {
      margin-right: 5px;
      font-weight: 600;
      font-size: 18px;
      text-transform: uppercase;
    }
  }
`

export const IconError = styled(WarningRoundedIcon)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-top: 2px;
  color: ${s.errorColor};
`

export const IconSuccess = styled(CheckCircleRoundedIcon)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-top: 2px;
  color: ${s.textSecondary};
`
