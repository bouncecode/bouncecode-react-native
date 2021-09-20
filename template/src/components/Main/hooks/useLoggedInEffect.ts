import {useQuery, gql} from '@apollo/client';
import {useEffect} from 'react';

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

type ICallback = (me: Me | undefined) => void;

const useLoggedInEffect = (callback: ICallback) => {
  const {data, loading} = useQuery<MeData>(ME);

  useEffect(() => {
    if (!loading) {
      callback(data?.me);
    }
  }, [loading, data?.me]);
};

export default useLoggedInEffect;
