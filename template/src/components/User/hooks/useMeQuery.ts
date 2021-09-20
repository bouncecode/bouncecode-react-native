import {useQuery, gql, QueryHookOptions} from '@apollo/client';

interface Me {
  id: string;
}

interface MeData {
  me: Me;
}

const ME = gql`
  query me {
    me {
      id
    }
  }
`;

const useMeQuery = (queryHookOptions?: QueryHookOptions) => {
  return useQuery<MeData>(ME, queryHookOptions);
};

export default useMeQuery;
