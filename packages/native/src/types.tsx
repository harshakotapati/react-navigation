import {
  getStateFromPath as getStateFromPathDefault,
  getPathFromState as getPathFromStateDefault,
  PathConfig,
} from '@react-navigation/core';

export type Theme = {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
  };
};

export type LinkingOptions = {
  /**
   * Whether deep link handling should be enabled.
   * Defaults to true.
   */
  enabled?: boolean;
  /**
   * The prefixes are stripped from the URL before parsing them.
   * Usually they are the `scheme` + `host` (e.g. `myapp://chat?user=jane`)
   * Only applicable on Android and iOS.
   */
  prefixes: string[];
  /**
   * Config to fine-tune how to parse the path.
   *
   * Example:
   * ```js
   * {
   *   Chat: {
   *     path: 'chat/:author/:id',
   *     parse: { id: Number }
   *   }
   * }
   * ```
   */
  config?: PathConfig;
  /**
   * Custom function to parse the URL to a valid navigation state (advanced).
   * Only applicable on Web.
   */
  getStateFromPath?: typeof getStateFromPathDefault;
  /**
   * Custom function to convert the state object to a valid URL (advanced).
   */
  getPathFromState?: typeof getPathFromStateDefault;
};

export type ServerContainerRef = {
  getCurrentOptions(): Record<string, any> | undefined;
};
