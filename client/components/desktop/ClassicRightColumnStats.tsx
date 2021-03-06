/** @jsx jsx */

import * as React from 'react';
import { jsx } from '@emotion/core';
import StatTable from 'components/common/StatTable';
import { Stat } from '__generated__/globalTypes';
import { getStatsFromCustomSet } from 'common/utils';
import { mq } from 'common/constants';
import { CustomSet } from 'common/type-aliases';

interface Props {
  customSet: CustomSet | null;
}

const margin = { marginBottom: 12, [mq[4]]: { marginBottom: 20 } };

const ClassicRightColumnStats: React.FC<Props> = ({ customSet }) => {
  const statsFromCustomSet = React.useMemo(
    () => getStatsFromCustomSet(customSet),
    [customSet],
  );

  return (
    <div
      css={{
        flex: '0 2 260px',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 12,
        [mq[4]]: { marginLeft: 20 },
      }}
    >
      <StatTable
        group={[
          Stat.VITALITY,
          Stat.WISDOM,
          Stat.AGILITY,
          Stat.CHANCE,
          Stat.STRENGTH,
          Stat.INTELLIGENCE,
          Stat.POWER,
        ]}
        statsFromCustomSet={statsFromCustomSet}
        customSet={customSet}
        css={margin}
      />
      <StatTable
        group={[
          Stat.NEUTRAL_DAMAGE,
          Stat.EARTH_DAMAGE,
          Stat.FIRE_DAMAGE,
          Stat.WATER_DAMAGE,
          Stat.AIR_DAMAGE,
        ]}
        statsFromCustomSet={statsFromCustomSet}
        customSet={customSet}
        css={margin}
      />
      <StatTable
        group={[
          Stat.CRITICAL_DAMAGE,
          Stat.PUSHBACK_DAMAGE,
          Stat.PCT_MELEE_DAMAGE,
          Stat.PCT_RANGED_DAMAGE,
          Stat.PCT_WEAPON_DAMAGE,
          Stat.PCT_SPELL_DAMAGE,
        ]}
        statsFromCustomSet={statsFromCustomSet}
        customSet={customSet}
        css={margin}
      />
      <StatTable
        group={[Stat.TRAP_DAMAGE, Stat.TRAP_POWER, Stat.REFLECT]}
        statsFromCustomSet={statsFromCustomSet}
        customSet={customSet}
        css={margin}
      />
    </div>
  );
};

export default ClassicRightColumnStats;
