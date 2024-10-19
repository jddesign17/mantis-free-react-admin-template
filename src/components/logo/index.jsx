import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import logo from "../../assets/images/logo.jpeg"
// project import
import Logo from './LogoMain';
import config from 'config';
import Avatar from 'components/@extended/Avatar';
import { width } from '@mui/system';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, to }) => {
  return (
    <ButtonBase disableRipple  sx={sx}>
      <Stack direction="row" spacing={1} alignItems="center" marginTop="30px" marginBottom="30px">
        {/* <Logo /> */}
        <img src={logo} width="40px" height="40px"/>
        <Typography variant='h5'>OAI SANGAM</Typography><br></br>
        

      </Stack>
    </ButtonBase>
  );
};

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string
};

export default LogoSection;
