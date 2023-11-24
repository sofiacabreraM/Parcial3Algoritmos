export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  formulario: {};
};

export enum SomeActions {
  "Formulario" = "Formulario",
}

export interface FormularioAction {
  action: SomeActions.Formulario;
  payload: Pick<AppState, "formulario">;
}

export type Actions = FormularioAction;
