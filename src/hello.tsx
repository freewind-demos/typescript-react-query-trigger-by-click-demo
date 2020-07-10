import React from 'react';
import {useQuery} from 'react-query';
import fetchRemoteMessage from './fetchRemoteMessage';

export default function Hello() {
  const {isLoading, refetch, data, error} = useQuery('fetchRemoteMesage', () => fetchRemoteMessage('RemoteHello1'), {
    retry: false,
    enabled: false
  })

  return <div>
    {
      isLoading
        ? <div>Loading...</div>
        : <button onClick={() => refetch()}>Fetch remote message</button>
    }
    {error && <div>Error: {error?.message}</div>}
    {data !== undefined && <div>Hello, {data}</div>}
  </div>;
};
