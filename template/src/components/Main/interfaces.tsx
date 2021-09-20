import {ScreenState} from './states/screenState';

interface IComponentProps {
  View?: IView;
}

interface IViewProps {
  screenState: ScreenState;
}

export type IComponent = (props: IComponentProps) => JSX.Element;

export type IView = (props: IViewProps) => JSX.Element;
