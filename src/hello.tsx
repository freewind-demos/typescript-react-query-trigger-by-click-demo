import React from 'react';
import {useAsyncCallback} from 'react-async-hook';
import fetchRemoteMessage from './fetchRemoteMessage';

export default function Hello() {
  const asyncCallback = useAsyncCallback(() => fetchRemoteMessage('RemoteHello1'))

  async function fetch() {
    await asyncCallback.execute();
  }

  return <div>
    {
      asyncCallback?.loading
        ? <div>Loading...</div>
        : <button onClick={fetch}>Fetch remote message</button>
    }
    {asyncCallback?.error && <div>Error: {asyncCallback?.error?.message}</div>}
    {asyncCallback?.result !== undefined && <div>Hello, {asyncCallback?.result}</div>}
  </div>;
};
