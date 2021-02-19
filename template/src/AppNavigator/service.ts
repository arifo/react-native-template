import React from 'react';

import { NavigationContainerRef, ParamListBase } from '@react-navigation/native';

export const isReadyRef: React.MutableRefObject<boolean | null> = React.createRef();
export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate<RouteName extends keyof ParamListBase>(
  ...args: undefined extends ParamListBase[RouteName]
    ? [RouteName] | [RouteName, ParamListBase[RouteName]]
    : [RouteName, ParamListBase[RouteName]]
) {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(...args);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}
