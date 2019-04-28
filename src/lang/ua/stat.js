module.exports = {
  service: {
    title: 'Service statistics of',
    model: 'model',
    columns: {
      dateStart: 'Service start',
      dateEnd: 'Service end',
      serviceInterval: 'Service interval',
      workHoursAfterService: 'Worked (h) after last service',
      workHoursGeneral: 'General work (h)',
      criticalCount: 'Critical situations count',
      sectorsAvgTemp: 'Avg T°C sectors',
    },
  },
  work: {
    title: 'Works statistics of device sectors since the last service',
    columns: {
      name: 'Sector name',
      uuid: 'UUID',
      minTemperature: 'Min T°C',
      maxTemperature: 'Max T°C',
      currentTemp: 'Current T°C',
      avgTemperature: 'Avg T°C',
      maxAccessTemp: 'Max access T°C',
      minAccessTemp: 'Min access T°C',
      criticalCount: 'Critical situations',
      lastTimeExcess: 'Last time overdue',
      trackerSetupDate: 'Setup date',
    },
  },
};
