import React from 'react';
import PetsIcon from '@material-ui/icons/Pets';
import { Rating as Rate } from '@material-ui/lab';
import { Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const Rating = (props) => {
    const StyledRating = withStyles({
        iconFilled: {
          color: props.color,
        },
        iconHover: {
          color: '#ff3d47',
        },
      })(Rate);
   return(
    <Box component="fieldset" mb={3} borderColor="transparent">
    <StyledRating
      name="customized-color"
      value={props.score}
      max={props.maxScore}
      icon={<PetsIcon fontSize="inherit" />}
      readOnly
    />
  </Box>
   )
}

export default Rating