<template>
  <a-row>
    <a-col :span="7"></a-col>
    <a-col :span="10">
      <h2>Sign in</h2>
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
            v-decorator="[
              'email',
              { rules: [{ required: true, message: 'Please input your email!' }] }
            ]"
            placeholder="Email"
          >
            <a-icon
              slot="prefix"
              type="mail"
              style="color: rgba(0,0,0,.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              { rules: [{ required: true, message: 'Please input your Password!' }] }
            ]"
            type="password"
            placeholder="Password"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0,0,0,.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-row>
            <a-button
              block
              type="primary"
              html-type="submit"
              class="login-form-button"
            >
              Log in
            </a-button>
          </a-row>
          <a-row>
            Or <a href="">
            register now!
            </a>
          </a-row>
        </a-form-item>
      </a-form>
    </a-col>
    <a-col :span="7"></a-col>
  </a-row>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import * as actionTypes from '../store/action-types';

export default {
  name: 'SignInPage',
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  computed: {
    ...mapState({
      token: state => state.auth.token,
    }),
  },
  methods: {
    ...mapActions('auth', {
      signIn: actionTypes.SING_IN,
    }),
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.signIn(values).then((token) => {
            this.$router.push({ path: `/devices` });
          });
        }
      });
    },
  },
};
</script>