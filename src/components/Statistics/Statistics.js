import PropTypes from 'prop-types';
import { RandomColor } from 'utils/RandomColor';
import { Card, Title, List, ListlItem } from './StatisticsStyle';
export const Statistics = ({ stats }) => {
  return (
    <Card>
      <Title>Upload stats</Title>
      <List>
        {stats.map(stat => (
          <ListlItem key={stat.id} color={RandomColor()}>
            <span>{stat.label}</span>
            <span>{stat.percentage}</span>
          </ListlItem>
        ))}
      </List>
    </Card>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
};
