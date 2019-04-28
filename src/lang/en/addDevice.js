module.exports = {
  device: {
    title: 'Step 1: Create new device',
    inputs: {
      name: {
        name: 'Name',
        placeholder: 'Type your name here',
        validation: 'Please input device name here!',
      },
      type: {
        name: 'Device type',
        placeholder: 'Select a option and change input text above',
        validation: 'Please select device type!',
        fridgeType: 'fridge',
        ovenType: 'oven',
      },
      model: {
        name: 'Model',
        placeholder: 'Type device model here',
        validation: 'Please input device model!',
      },
      description: {
        name: 'Description: ',
        placeholder: 'Type device description here',
      },
      serviceInterval: {
        name: 'Service interval',
        validation: 'Please input service interval!',
        hours: 'h',
      },
      notifyBeforeService: {
        name: 'Notify before service',
        validation: 'Please input notify before service time!',
      },
      dateLastService: {
        name: 'Date last service',
        placeholder: 'Select date',
        validation: 'Please input last service date!',
      },
    },
    btnSave: 'SAVE',
  },
  sectors: {
    title: 'Step 2: Create device sectors',
    btnAddSector: 'ADD SECTOR',
    btnSaveSector: 'SAVE SECTORS',
    tableColumns: {
      name: 'Sector name',
      number: 'Number',
      location: 'Location',
      maxTemperature: 'Max T°C',
      minTemperature: 'Min T°C',
      trackerSetupDate: 'Sensor setup date',
      maxTimeExcess: 'Time norm access (h)',
    },
  },
  sectorModal: {
    sectorTitle: 'Sector information',
    sensorTitle: 'Sensor information',
    sectorInputs: {
      name: {
        name: 'Name',
        validation: 'Please input sector name here!',
      },
      number: {
        name: 'Number',
        validation: 'Please input sector number!',
      },
      location: {
        name: 'Location',
        validation: 'Please input sector location here!',
      },
      maxTemperature: {
        name: 'Max T',
        validation: 'Please input sensor max temperature!',
      },
      minTemperature: {
        name: 'Min T',
        validation: 'Please input sensor min temperature!',
      },
      setupDate: {
        name: 'Setup date',
        placeholder: 'Select date',
        validation: 'Please input sensor setup date!',
      },
      timeNormAccess: {
        name: 'Time norm access',
        validation: 'Please input sensor time norm access!',
        minutes: 'min',
      },
    },
  },
};
