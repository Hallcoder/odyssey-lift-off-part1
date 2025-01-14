import React from 'react';
import { Layout, QueryResult } from '../components';
import {gql,useQuery} from '@apollo/client';
import TrackCard from '../containers/track-card';

const TRACKS = gql`
query GetTracks{
  tracksForHome{
  id
  length
  modulesCount
    thumbnail
    title
    author {
      id
      name
      photo
    }
  }
}
`
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const {loading,error, data} = useQuery(TRACKS);

  return <Layout grid={data}>{
    <QueryResult loading={loading} data={data} error={error}>
    {data?.tracksForHome?.map((track) => {
      return <TrackCard track={track} key={track.id} />
    })}
    </QueryResult>
  }</Layout>;
};

export default Tracks;
