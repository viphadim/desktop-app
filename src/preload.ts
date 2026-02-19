import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  // Example: send a message to main process
  send: (channel: string, data?: unknown) => {
    ipcRenderer.send(channel, data);
  },
  // Example: receive a message from main process
  on: (channel: string, callback: (...args: unknown[]) => void) => {
    ipcRenderer.on(channel, (_event, ...args) => callback(...args));
  },
});