<template>
  <a-row>
    <a-col :span="7"></a-col>
    <a-col :span="10">
      <a-divider>
        {{ $lang.auth.signIn.title }}
      </a-divider>
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
              { rules: [{ required: true, message: $lang.auth.signIn.inputs.email.validation }] }
            ]"
            :placeholder="$lang.auth.signIn.inputs.email.placeholder"
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
              { rules: [{ required: true, message: $lang.auth.signIn.inputs.password.validation }] }
            ]"
            type="password"
            :placeholder="$lang.auth.signIn.inputs.password.placeholder"
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
              {{ $lang.auth.signIn.btnSignIn }}
            </a-button>
          </a-row>
          <a-row>
            {{ $lang.auth.signIn.or }}
            <router-link to="/sign-up">
              {{ $lang.auth.signIn.signUpText }}
            </router-link>
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
            this.$notify({
              group: 'user-notifications',
              type: 'success',
              title: 'Successfully signed in!',
            });
            this.$router.push({ path: `/devices` });
          });
        }
      });
    },
  },
};
</script>