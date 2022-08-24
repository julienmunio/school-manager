import * as React from 'react';
import MuiLink from '@mui/material/Link';
import { Link as GatsbyLink } from 'gatsby';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const Link = React.forwardRef(function Link(props: Props, ref) {
  return <MuiLink component={GatsbyLink} ref={ref} {...props} />;
});

export default Link;
