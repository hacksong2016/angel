import LivePage from '../components/live';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, postId}, onData) => {};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(LivePage);
