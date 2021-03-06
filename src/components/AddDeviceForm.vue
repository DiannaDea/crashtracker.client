<template>
  <div>
    <a-divider>
      <h2>{{ $lang.addDevice.device.title }}</h2>
    </a-divider>
    <div class="device-form-container">
      <a-form :form="form">
      <a-row :gutter="64" type="flex" justify="center">
        <a-col :span="10">
          <!-- Name -->
          <a-form-item
            :label="$lang.addDevice.device.inputs.name.name"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 18 }">
            <a-input
              :disabled="checkInputDisabled"
              :placeholder="$lang.addDevice.device.inputs.name.placeholder"
              v-decorator="[
                'name',
                {rules: [{ required: true, message: $lang.addDevice.device.inputs.name.validation }]}
              ]"
            />
          </a-form-item>
          <!--    -->

          <!-- Device type -->
          <a-form-item
            :label="$lang.addDevice.device.inputs.type.name"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 18 }">
            <a-select
              :disabled="checkInputDisabled"
              :placeholder="$lang.addDevice.device.inputs.type.placeholder"
              v-decorator="[
                'type',
                {rules: [{ required: true, message: $lang.addDevice.device.inputs.type.validation }]}
              ]">
                <a-select-option value="fridge">
                  {{ $lang.addDevice.device.inputs.type.fridgeType }}
                </a-select-option>
                <a-select-option value="oven">
                  {{ $lang.addDevice.device.inputs.type.ovenType }}
                </a-select-option>
            </a-select>
          </a-form-item>
          <!--    -->

          <!-- Model -->
          <a-form-item
            :label="$lang.addDevice.device.inputs.model.name"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 18 }">
            <a-input
              :disabled="checkInputDisabled"
              :placeholder="$lang.addDevice.device.inputs.model.placeholder"
              v-decorator="[
                'model',
                {rules: [{ required: true, message: $lang.addDevice.device.inputs.model.validation }]}
              ]"
            />
          </a-form-item>
          <!--    -->

          <!-- Description -->
          <a-form-item
            :label="$lang.addDevice.device.inputs.description.name"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 18 }">
            <a-textarea
              :disabled="checkInputDisabled"
              :placeholder="$lang.addDevice.device.inputs.description.placeholder" :rows="4"
              v-decorator="[
                'description'
              ]"/>
          </a-form-item>
          <!--    -->
        </a-col>
        <a-col :span="10">
          <!-- Service interval (hours)-->
          <a-form-item
            :label="$lang.addDevice.device.inputs.serviceInterval.name"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }">
            <a-input-number
              class="form-extra-fields"
              size='large'
              :min="1"
              :disabled="checkInputDisabled"
              :initialValue="this.serviceInterval"
              :formatter="value => `${value || this.serviceInterval}${$lang.addDevice.device.inputs.serviceInterval.hours}`"
              :parser="value => value.replace(lang.addDevice.inputs.serviceInterval.hours, '')"
              v-decorator="[
                'serviceInterval',
                { rules: [{ required: true, message: $lang.addDevice.device.inputs.serviceInterval.validation }]}
              ]"/>
          </a-form-item>
          <!--    -->

          <!-- Notify before service (percent of serviceInterval) -->
          <a-form-item
            :label="$lang.addDevice.device.inputs.notifyBeforeService.name"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }">
            <a-input-number
              class="form-extra-fields"
              size='large'
              :min="1"
              :max="100"
              :disabled="checkInputDisabled"
              :formatter="value => `${value || this.notifyBeforeService}%`"
              :parser="value => value.replace('%', '')"
              :initialValue="this.notifyBeforeService"
              v-decorator="[
                'notifyBeforeService',
                { rules: [{ required: true, message: $lang.addDevice.device.inputs.notifyBeforeService.validation }]}
              ]"/>
          </a-form-item>
          <!--    -->

          <!-- Date last service -->
          <a-form-item
            :label="$lang.addDevice.device.inputs.dateLastService.name"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }"
            :placeholder="$lang.addDevice.device.inputs.dateLastService.placeholder">
            <a-date-picker
              :placeholder="$lang.addDevice.device.inputs.dateLastService.placeholder"
              :disabled="checkInputDisabled"
              :initialValue="this.dateLastService"
              class="form-extra-fields-data"
              v-decorator="[
                'dateLastService',
                { rules: [{ required: true, message: $lang.addDevice.device.inputs.dateLastService.validation }]}
              ]"
            />
          </a-form-item>
          <!--    -->

          <a-form-item :wrapper-col="{ span: 4 }">
            <a-button
              :disabled="checkInputDisabled"
              @click="submitDeviceInfo"
              type="primary">{{ $lang.addDevice.device.btnSave }}</a-button>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { mapState, mapActions } from 'vuex';
import * as actionTypes from '../store/action-types';

export default {
  name: 'AddDeviceForm',
  data() {
    return {
      notifyBeforeService: 15,
      serviceInterval: 30,
      dateLastService: moment.now(),
      clickedSave: false,
    };
  },
  computed: {
    ...mapState({
      createdDevice: state => state.devices.lastCreated.device,
      user: state => state.auth.user,
    }),
    checkInputDisabled() {
      return (this.clickedSave && this.createdDevice && Object.keys(this.createdDevice).length) 
        ? true 
        : false;
    }
  },
  methods: {
    ...mapActions('devices', {
      createDevice: actionTypes.CREATE_DEVICE,
    }),
    submitDeviceInfo() {
      const modalFields = this.form.getFieldsValue();
      const device = {
        ...modalFields,
        notifyBeforeService: modalFields.notifyBeforeService || this.notifyBeforeService,
        serviceInterval: modalFields.serviceInterval || this.serviceInterval,
        dateLastService: (modalFields.dateLastService || this.dateLastService).format('YYYY-MM-DD')
      };
      this.clickedSave = true;

      this.createDevice({
        ...device,
        userId: this.user.id,
      });
      this.$notify({
        group: 'user-notifications',
        type: 'success',
        title: 'Successfully created device!',
      });
    },
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
};
</script>

<style>
  .ant-form-item-label {
    text-align: left;
  }
  .form-extra-fields {
    display: flex;
    flex-direction: row;
  }
  .form-extra-fields-data {
    display: flex;
  }
</style>
