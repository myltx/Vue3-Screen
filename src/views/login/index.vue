<script setup lang="ts">
  interface FormState {
    account: string;
    password: string;
  }

  const formState = reactive<FormState>({
    account: '',
    password: '',
  });
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
</script>
<template>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    class="w-50% mt-50px"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item label="账号" name="username" :rules="[{ required: true, message: '请输入账号' }]">
      <a-input v-model:value="formState.account" />
    </a-form-item>

    <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入密码' }]">
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit" block>登录</a-button>
    </a-form-item>
  </a-form>
</template>

<style scoped lang="scss">
  @import '@/styles/common.scss';
</style>
