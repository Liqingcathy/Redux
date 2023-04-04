interface Button {
  id: number;
  name: string;
  class: string;
}

interface ButtonState {
  buttons: Button[];
}

interface ButtonAction {
  type: string;
  button: Button;
}

type DispatchType = (args: ButtonAction) => ButtonAction;
