import {makeAutoObservable} from 'mobx';

enum VALUES {
  LOADING,
  AUTH_NAVIGATOR,
  TAB_NAVIGATOR,
}

export class ScreenState {
  options = VALUES;

  value: VALUES = VALUES.LOADING;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading() {
    this.value = VALUES.LOADING;
  }

  setAuthNavigator() {
    this.value = VALUES.AUTH_NAVIGATOR;
  }

  setTabNavigator() {
    this.value = VALUES.TAB_NAVIGATOR;
  }
}

const screenState = new ScreenState();

export default screenState;
