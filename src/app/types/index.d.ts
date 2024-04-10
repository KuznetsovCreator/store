export = {}

declare global {
  interface Window {
    App: typeof import('../../main.tsx').AppInitializer;
  }
  type RootState = ReturnType<typeof import('./store.ts').store.getState>
  type AppDispatch = typeof import('./store.ts').store.dispatch
}