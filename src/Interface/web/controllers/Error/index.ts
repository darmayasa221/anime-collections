/* eslint-disable no-unused-vars */
import { setDispathcerType } from '../../dispatcherAdapter/DispatcherAdapter';
import { setErrorDispatchType } from '../../models/Error';

export default function ErrorAction(
  dispatch: setErrorDispatchType,
  dispactAdapter: setDispathcerType
) {
  dispactAdapter({ setError: dispatch });
}
