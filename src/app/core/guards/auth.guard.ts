import { CanActivateFn, Router } from "@angular/router";

import { UserService } from "../services/root/user.service";
import { inject } from "@angular/core";
import { map } from "rxjs";

export const NotAuthorizedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject(UserService);

  return userService.userLoginData$.pipe(
    map((user) => {
      const notAuthorized = !!user;
      if(notAuthorized){
        return true
      }
      return router.createUrlTree(['auth'])
    })
  )
}


