import type { Router } from 'vue-router';
import { getStorageData } from '@/utils/storage';
import { useUserStore } from '@/store';
import { ACCESS_TOKEN } from '@/store/mutation-types';

const setupUserInfoGuard = (router: Router) => {
  router.beforeEach(async (to, _from, next) => {
    const userStore = useUserStore();
    const token = await getStorageData(ACCESS_TOKEN);
    if (token) {
      if (!userStore.roles.length) {
        try {
          await userStore.userInfo();
          next();
        } catch (error) {
          await userStore.userLogout();
          next(`/login`);
        }
      } else {
        next();
      }
    } else {
      const { auth } = to.meta;
      if (auth) next('/login');
      else next();
    }
  });
};

const createRouteGuard = (router: Router) => {
  setupUserInfoGuard(router);
};

export default createRouteGuard;
