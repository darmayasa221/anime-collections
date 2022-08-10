import DispatcherError from '../../../Applications/dispatcher/DispatcherError';
import { dispatchersObject } from '../../../Interface/web/dispatcherAdapter/DispatcherAdapter';

export default class DispatcherErrorSetState extends DispatcherError {
  private dispatch: dispatchersObject;

  constructor(dispatch: dispatchersObject) {
    super();
    this.dispatch = dispatch;
  }

  setError(error: any): void {
    if (error) {
      setTimeout(() => {
        this.dispatch.setError((prev) => ({
          ...prev,
          isError: false,
          errorMessage: '',
        }));
      }, 3000);
      this.dispatch.setError((prev) => ({
        ...prev,
        isError: false,
        errorMessage: error.message,
      }));
    }
  }
}
