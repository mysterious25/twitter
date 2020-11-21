import { makeStyles } from '@material-ui/core';
import React from 'react';
import theme from '../theme';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100%'
  },
  blueSide: {
    backgroundColor: '#1DA1F2'
  },
  loginSide: {}
}))

export function SignIn() {
  const classes = useStyles()

  return 
    <div>
      SignIn
    </div>
}

