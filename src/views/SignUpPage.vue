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
          label="Email"
        >
          <a-input
            v-decorator="[
              'email',
              {
                rules: [{
                  type: 'email', message: 'The input is not valid E-mail!',
                }, {
                  required: true, message: 'Please input your E-mail!',
                }]
              }
            ]"
          />
        </a-form-item>
                <a-form-item
          v-bind="formItemLayout"
          label="First name"
        >
          <a-input
            v-decorator="[
              'firstName',
              {
                rules: [{
                  required: true, message: 'Please input your first name!',
                }]
              }
            ]"
          />
        </a-form-item>
                <a-form-item
          v-bind="formItemLayout"
          label="Last name"
        >
          <a-input
            v-decorator="[
              'lastName',
              {
                rules: [{
                  required: true, message: 'Please input your last name!',
                }]
              }
            ]"
          />
        </a-form-item>
        <a-form-item
          v-bind="formItemLayout"
          label="Password"
        >
          <a-input
            v-decorator="[
              'password',
              {
                rules: [{
                  required: true, message: 'Please input your password!',
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
          label="Confirm Password"
        >
          <a-input
            v-decorator="[
              'confirm',
              {
                rules: [{
                  required: true, message: 'Please confirm your password!',
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
              Sign up
            </a-button>
          </a-row>
          <a-row>
            Or <router-link to="/sign-in">sign in now!</router-link>
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
        callback('Two passwords that you enter is inconsistent!');
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