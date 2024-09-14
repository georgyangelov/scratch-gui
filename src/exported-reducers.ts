import {ScratchPaintReducer} from 'scratch-paint';
import LocalesReducer, {localesInitialState, initLocale} from './reducers/locales.js';
import GuiReducer, {guiInitialState, guiMiddleware, initEmbedded, initFullScreen, initPlayer} from './reducers/gui.js';
import {setFullScreen, setPlayer} from './reducers/mode.js';

export const guiReducers = {
  locales: LocalesReducer,
  scratchGui: GuiReducer,
  scratchPaint: ScratchPaintReducer
};

export {
  guiInitialState,
  guiMiddleware,
  initEmbedded,
  initPlayer,
  initFullScreen,
  initLocale,
  localesInitialState,
  setFullScreen,
  setPlayer
}
