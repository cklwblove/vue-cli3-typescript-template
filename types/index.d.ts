interface Window {
  LOCAL_CONFIG?: any;
  $eventBus?: any;
}

declare var window: Window;

// @liwb/cloud-utils -> webpack alias utils
declare module 'utils';

declare module '*.png';

declare module '*.gif';
