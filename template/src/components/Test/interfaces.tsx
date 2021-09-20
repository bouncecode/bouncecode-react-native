interface IComponentProps {
  View?: IView;
}

interface IViewProps {}

export type IComponent = (props: IComponentProps) => JSX.Element;

export type IView = (props: IViewProps) => JSX.Element;
