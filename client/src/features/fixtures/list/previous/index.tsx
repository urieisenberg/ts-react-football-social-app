import { useParams } from 'react-router-dom';
import { useGetTeamPreviousFixturesQuery } from '../../api';
import { Loader } from '../../../../components/Loader';
import { FixturesList } from '..';

export const PreviousFixturesList = () => {
  const { teamid } = useParams();

  const { data, error, isLoading, isSuccess } = useGetTeamPreviousFixturesQuery(
    teamid as string
  );

  let content;
  if (isLoading) content = <Loader />;
  else if (error || !data) content = <>No fixtures found</>;
  else if (isSuccess && data)
    content = <FixturesList fixtures={data}/>;

  return <>{content}</>;
};
