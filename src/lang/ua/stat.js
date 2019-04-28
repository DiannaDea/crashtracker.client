module.exports = {
  service: {
    title: 'Сервісна статистика',
    model: 'модель',
    columns: {
      dateStart: 'Початок ТО',
      dateEnd: 'Кінець ТО',
      serviceInterval: 'Інтервал ТО',
      workHoursAfterService: 'Працював (год) після останнього ТО',
      workHoursGeneral: 'Загальна робота (год)',
      criticalCount: 'Критичні ситуації',
      sectorsAvgTemp: 'Сер. T°C секторів',
    },
  },
  work: {
    title: 'Статистика роботи секторів з часу останнього ТО',
    columns: {
      name: 'Назва сектора',
      uuid: 'Ідентифікатор',
      minTemperature: 'Мін. T°C',
      maxTemperature: 'Макс. T°C',
      currentTemp: 'Пот. T°C',
      avgTemperature: 'Сер. T°C',
      maxAccessTemp: 'Макс. допуст. T°C',
      minAccessTemp: 'Мін. допуст. T°C',
      criticalCount: 'Критичні ситуації',
      lastTimeExcess: 'Час перевищення T°C (год)',
      trackerSetupDate: 'Дата встановлення',
    },
  },
};
