export interface IElectronAPI {
  send: (channel: string, data?: unknown) => void;
  on: (channel: string, callback: (...args: unknown[]) => void) => void;
}

declare global {
  interface Window {
    api: IElectronAPI;
  }
}