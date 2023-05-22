import { createUseStyles } from 'react-jss';
import colors from '../../../css/colors';
import { large, strokeWidth } from '../../../css/sizes';

export default createUseStyles({
  preview: () => ({
    // paddingTop: first ? undefined : large,
    paddingBottom: large,
    // borderBottom: last ? undefined : `${strokeWidth} solid ${colors.gray}`,
    overflow: 'hidden',
  }),
});
