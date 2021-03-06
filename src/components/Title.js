import React from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

const styles = {
  header: css({
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingBottom: 30,
    textAlign: 'left',
  }),
  title: css({
    color: Globals.colors.white,
    margin: 0,
    textTransform: 'uppercase',
    letterSpacing: 3,
    marginLeft: 30,
    lineHeight: '1em',
    fontSize: ' 2.827em ',
  }),
  titleSpan: css({
    color: Globals.colors.main,
  }),
  hrContainer: css({
    width: 25,
    marginLeft: 30,
  }),
  hr: css({
    borderColor: Globals.colors.primaryLight,
  }),
  subtitle: css({
    color: Globals.colors.white,
    fontSize: ' 1.414em ',
    margin: 0,
    lineHeight: '1em',
    marginLeft: 30,
  }),
  iconflagbr: css({
    marginRight: 10,
    width: 30,
  }),
};

const Title = () =>
  <div {...styles.header}>
    <h1 {...styles.title}>
      React
      <span {...styles.titleSpan}>Conf</span>
    </h1>

    <span {...styles.subtitle}>
      {Globals.location.country} {Globals.date.year}
    </span>
  </div>;

export default Title;
