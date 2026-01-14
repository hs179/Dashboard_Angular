import { CanDeactivateFn } from '@angular/router';


export interface HasUnsavedChanges {
  hasUnsavedChanges: () => boolean;
}

export const pendingChangesGuardGuard: CanDeactivateFn<HasUnsavedChanges> = (component, currentRoute, currentState, nextState) => {
  if (component.hasUnsavedChanges()) {
    console.log('CanDeactivate triggered');
    return confirm('You have unsaved changes! Do you really want to leave?');
  }
  return true;
};
