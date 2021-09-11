import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const myStyles = makeStyles({
  textStyle: { color: "red" },
  buttonStyle: { color: "blue" }
});

export default function MakeStylesPractice() {
  const customStyles = myStyles();
  return (
    <div>
          <Button className={ customStyles.buttonStyle }>Button</Button>
          <h1 className={ customStyles.textStyle }>Hello</h1>
    </div>
  );
}