/**
 * @author BounceCode, Inc.
 * @packageDocumentation
 * @module client.components.Test.hooks
 */

import {useQuery} from '@apollo/client';
import gql from 'graphql-tag';

const TEST_QUERY = gql`
  query ($message: String!) {
    test(message: $message) {
      message
    }
  }
`;

function useTestQuery() {
  return useQuery(TEST_QUERY, {
    variables: {message: 'test'},
  });
}

export default useTestQuery;
