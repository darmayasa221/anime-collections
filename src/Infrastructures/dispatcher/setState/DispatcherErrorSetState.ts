import DispatcherError from '../../../Applications/dispatcher/DispatcherError';

export default class DispatcherErrorSetState extends DispatcherError {
  private dispatch: any;

  constructor(dispatch: any) {
    super();
    this.dispatch = dispatch;
  }

  setError(error: string): Error {
    console.log('error');
  }
}
