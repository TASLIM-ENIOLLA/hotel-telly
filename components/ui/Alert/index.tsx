import { createRoot } from 'react-dom/client';

import Alert from "./Alert";

type ShowProps = {
  theme: string,
  message: string,
  duration?: number,
}

export function show(props: ShowProps): void {
  const container = document.querySelector("#popups");
  
  const root = createRoot(container!);
  const component = <Alert onClose={() => hide()} {...props} />;
  
  if(root) {
    root.render(component);
  }
}

export function hide(): void {
  const container = document.querySelector("#popups");

  const root = createRoot(container!);

  root.unmount();
}