<template>
  <view class="login-page">
    <view class="login-form">
      <nut-form ref="refModelForm" :model-value="modelForm" :rules="modelRule">
        <nut-form-item prop="username">
          <nut-input v-model="modelForm.username" :border="false" placeholder="请输入用户名" />
        </nut-form-item>
        <nut-form-item prop="password">
          <nut-input v-model="modelForm.password" :border="false" placeholder="请输入密码" type="password" />
        </nut-form-item>
        <nut-form-item prop="code">
          <nut-input v-model="modelForm.code" :border="false" placeholder="请输入验证码">
            <template #right> </template>
          </nut-input>
          <view class="absolute top-[9Px] right-[16Px]">
            <img :src="codeUrl" @click="getCaptchaImage" class="h-[30Px]" />
          </view>
        </nut-form-item>
        <nut-cell>
          <nut-button block type="primary" @click="onSubmit">登录</nut-button>
        </nut-cell>
      </nut-form>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { captchaImage } from '@/api/login';
import { useUserStore } from '@/store';

const router = useRouter();
const userStore = useUserStore();

const refModelForm = ref();
const modelForm = reactive({
  username: 'admin',
  password: 'admin123',
  code: '',
  uuid: ''
});
const modelRule = {
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    }
  ]
};

const captchaEnabled = ref(false);
const codeUrl = ref('');

const onSubmit = async () => {
  const { valid } = await refModelForm.value.validate();
  if (!valid) return false;
  try {
    await userStore.userLogin(modelForm);
    router.replace('/');
  } catch (error) {
    console.error(error);
  }
};

const getCaptchaImage = async () => {
  const { data: res } = await captchaImage();
  captchaEnabled.value = res.captchaEnabled === undefined ? true : res.captchaEnabled;
  if (!captchaEnabled.value) return false;
  codeUrl.value = `data:image/gif;base64,${res.img}`;
  modelForm.uuid = res.uuid;
};

getCaptchaImage();
</script>

<style lang="scss" module>
.login-form {
  background-color: white;
  margin: 24px;
  border-radius: 16px;
  overflow: hidden;
}
</style>
