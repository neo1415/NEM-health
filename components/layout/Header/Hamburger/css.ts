import { createUseStyles } from 'react-jss';
import { base } from '../../../../css/base';
import colors from '../../../../css/colors';

const generateLineStyles = (styles) => ({
  transition: 'all 400ms',
  transformOrigin: 'center',
  stroke: colors.antique,
  strokeWidth: '2px',
  vectorEffect: 'non-scaling-stroke',
  ...styles,
});

export default createUseStyles({
  hamburger: {
    overflow: 'visible',
    width: base(),
    height: base(),
  },
  line1: generateLineStyles({
    opacity: 1,
    transform: undefined,
  }),
  line2: generateLineStyles({
    opacity: 1,
    transform: undefined,
  }),
  line3: generateLineStyles({
    opacity: 1,
    transform: undefined,
  }),
  line4: generateLineStyles({
    opacity: 1,
    transform: undefined,
  }),
  active: {
    opacity: 0,
    transform: `translate(0, ${base(-0.5)})`,
  },
});
