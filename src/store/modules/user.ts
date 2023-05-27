import { defineStore } from 'pinia';
import { login, getInfo, logout } from '@/api/login';
import type { LoginData } from '@/api/login';
import { setStorageData, removeStorageData } from '@/utils/storage';
import { ACCESS_TOKEN } from '@/store/mutation-types';
import defAva from '@/assets/images/profile.jpg';

export interface UserState {
  roles: string[];
  permissions: string[];
}
const useUserStore = defineStore('user', {
  state: () => ({
    userName: '',
    userAvatar: '',
    roles: [],
    permissions: []
  }),
  actions: {
    async userLogin(params: LoginData) {
      const { data: res } = await login(params);
      await setStorageData(ACCESS_TOKEN, res.token);
    },
    async userInfo() {
      const { data: res } = await getInfo();
      const { roles, permissions, user } = res;
      this.roles = roles;
      this.permissions = permissions;
      const userAvatar = !user.avatar ? defAva : `${API_BASE_URL}${user.avatar}`;
      this.userAvatar = userAvatar;
      this.userName = user.userName;
    },
    async userLogout() {
      await logout();
      await removeStorageData(ACCESS_TOKEN);
      this.$reset();
    }
  }
});

export default useUserStore;
