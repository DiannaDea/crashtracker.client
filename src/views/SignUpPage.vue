<template>
  <a-row>
    <a-col :span="7"></a-col>
    <a-col :span="10">
      <a-divider>Sign up</a-divider>
      <a-form
        :form="form"
        @submit="handleSubmit"
      >
        <a-form-item
          v-bind="formItemLayout"
          :label="$lang.auth.signUp.inputs.email.name"
        >
          <a-input
            v-decorator="[
              'email',
              {
                rules: [{
                  type: 'email', message: $lang.auth.signUp.inputs.email.notValid,
                }, {
                  required: true, message: $lang.auth.signUp.inputs.email.validation,
                }]
              }
            ]"
          />
        </a-form-item>
                <a-form-item
          v-bind="formItemLayout"
          :label="$lang.auth.signUp.inputs.firstName.name"
        >
          <a-input
            v-decorator="[
              'firstName',
              {
                rules: [{
                  required: true, message: $lang.auth.signUp.inputs.email.validation,
                }]
              }
            ]"
          />
        </a-form-item>
                <a-form-item
          v-bind="formItemLayout"
          :label="$lang.auth.signUp.inputs.lastName.name"
        >
          <a-input
            v-decorator="[
              'lastName',
              {
                rules: [{
                  required: true, message: $lang.auth.signUp.inputs.lastName.validation,
                }]
              }
            ]"
          />
        </a-form-item>
        <a-form-item
          v-bind="formItemLayout"
          :label="$lang.auth.signUp.inputs.password.name"
        >
          <a-input
            v-decorator="[
              'password',
              {
                rules: [{
                  required: true, message: $lang.auth.signUp.inputs.password.validation,
                }, {
                  validator: validateToNextPassword,
                }],
              }
            ]"
            type="password"
          />
        </a-form-item>
        <a-form-item
          v-bind="formItemLayout"
          :label="$lang.auth.signUp.inputs.confirmPassword.name"
        >
          <a-input
            v-decorator="[
              'confirm',
              {
                rules: [{
                  required: true, message: $lang.auth.signUp.inputs.confirmPassword.validation,
                }, {
                  validator: compareToFirstPassword,
                }],
              }
            ]"
            type="password"
          />
        </a-form-item>
        <a-form-item>
          <a-row>
            <a-button
              block
              type="primary"
              html-type="submit"
              class="login-form-button"
            >
              {{ $lang.auth.signUp.btnSignUp }}
            </a-button>
          </a-row>
          <a-row>
            {{ $lang.auth.signUp.or }} 
            <router-link to="/sign-in">
              {{ $lang.auth.signUp.signInText }} 
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
import { omit } from 'lodash';
import * as actionTypes from '../store/action-types';

export default {
  name: 'SignUpPage',
  data () {
    return {
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
    };
  },
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  methods: {
    ...mapActions('auth', {
      signUp: actionTypes.SIGN_UP,
    }),
    handleSubmit  (e) {
      e.preventDefault();
      this.form.validateFields((err, userParams) => {
        if (!err) {
          this.signUp(omit(userParams, ['confirm'])).then((user) => {
            if (user && Object.keys(user).length && user.id) {
              this.$notify({
                group: 'user-notifications',
                type: 'success',
                title: 'Successfully signed up! Sign in to control your devices',
              });
              this.$router.push({ path: `/sign-in` });
            }
          });
        }
      });
    },
    compareToFirstPassword  (rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback($lang.auth.signUp.inputs.confirmPassword.notSame);
      } else {
        callback();
      }
    },
    validateToNextPassword  (rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
  },
};
</script>