<template>
  <div>
    <a-divider>
      <h2>Step 1: Create new device</h2>
    </a-divider>
    <div class="device-form-container">
      <a-form :form="form">
      <a-row :gutter="64" type="flex" justify="center">
        <a-col :span="10">
          <!-- Name -->
          <a-form-item
          label="Name"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 18 }">
            <a-input
              :disabled="checkInputDisabled"
              placeholder="Type your name here"
              v-decorator="[
                'name',
                {rules: [{ required: true, message: 'Please input device name here!' }]}
              ]"
            />
          </a-form-item>
          <!--    -->

          <!-- Device type -->
          <a-form-item
            label="Type"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 18 }">
            <a-select
              :disabled="checkInputDisabled"
              placeholder="Select a option and change input text above"
              v-decorator="[
                'type',
                {rules: [{ required: true, message: 'Please select device type!' }]}
              ]">
                <a-select-option value="fridge">fridge</a-select-option>
                <a-select-option value="oven">oven</a-select-option>
            </a-select>
          </a-form-item>
          <!--    -->

          <!-- Model -->
          <a-form-item
            label="Model"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 18 }">
            <a-input
              :disabled="checkInputDisabled"
              placeholder="Type device model here"
              v-decorator="[
                'model',
                {rules: [{ required: true, message: 'Please input device model!' }]}
              ]"
            />
          </a-form-item>
          <!--    -->

          <!-- Description -->
          <a-form-item
            label="Description"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 18 }">
            <a-textarea
              :disabled="checkInputDisabled"
              placeholder="Type device description here" :rows="4"
              v-decorator="[
                'description'
              ]"/>
          </a-form-item>
          <!--    -->
        </a-col>
        <a-col :span="10">
          <!-- Service interval (hours)-->
          <a-form-item
            label="Service interval"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }">
            <a-input-number
              class="form-extra-fields"
              size='large'
              :min="1"
              :disabled="checkInputDisabled"
              :initialValue="this.serviceInterval"
              :formatter="value => `${value || this.serviceInterval}h`"
              :parser="value => value.replace('h', '')"
              v-decorator="[
                'serviceInterval',
                { rules: [{ required: true, message: 'Please input service interval!' }]}
              ]"/>
          </a-form-item>
          <!--    -->

          <!-- Notify before service (percent of serviceInterval) -->
          <a-form-item
            label="Notify before service"
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
                { rules: [{ required: true, message: 'Please input notify before service time!' }]}
              ]"/>
          </a-form-item>
          <!--    -->

          <!-- Date last service -->
          <a-form-item
            label="Date last service"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }"
            placeholder="Select date">
            <a-date-picker
              :disabled="checkInputDisabled"
              :initialValue="this.dateLastService"
              class="form-extra-fields-data"
              v-decorator="[
                'dateLastService',
                { rules: [{ required: true, message: 'Please input last service date!' }]}
              ]"
            />
          </a-form-item>
          <!--    -->

          <a-form-item :wrapper-col="{ span: 4 }">
            <a-button
              :disabled="checkInputDisabled"
              @click="submitDeviceInfo"
              type="primary">SAVE</a-button>
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
        userId: "43954c12-552f-4f52-8523-4d38bb8f6389",
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
