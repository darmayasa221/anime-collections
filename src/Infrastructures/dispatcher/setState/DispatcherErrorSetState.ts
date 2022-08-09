import DispatcherError from '../../../Applications/dispatcher/DispatcherError';
import { dispatchersObject } from '../../../Interface/web/dispatcherAdapter/DispatcherAdapter';

export default class DispatcherErrorSetState extends DispatcherError {
  private dispatch: dispatchersObject;

  constructor(dispatch: dispatchersObject) {
    super();
    this.dispatch = dispatch;
  }

  setError(error: string): void {
    console.log('error');
  }
}
