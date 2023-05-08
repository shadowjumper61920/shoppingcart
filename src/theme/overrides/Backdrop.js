import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Backdrop(theme) {
  return {
    MuiBackdrop: {
      styleOverrides: {
        invisible: {
          background: 'transparent',
        },
        root: {
          backgroundColor: alpha(theme.palette.grey[800], 0.8),
        },
      },
    },
  };
}
