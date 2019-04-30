module.exports = {
  device: {
    title: 'Крок 1. Створення нового пристрою',
    inputs: {
      name: {
        name: 'Назва',
        placeholder: 'Введіть назву пристрою',
        validation: 'Будь ласка, введіть назву пристрою!',
      },
      type: {
        name: 'Тип пристрою',
        placeholder: 'Оберіть тип пристрою',
        validation: 'Будь ласка, оберіть тип пристрою!',
        fridgeType: 'холодильник',
        ovenType: 'піч',
      },
      model: {
        name: 'Модель',
        placeholder: 'Введіть модель пристрою',
        validation: 'Будь ласка, введіть модель пристрою!',
      },
      description: {
        name: 'Опис',
        placeholder: 'Введіть опис пристрою',
      },
      serviceInterval: {
        name: 'Інтервал ТО',
        validation: 'Введіть інтервал ТО!',
        hours: 'год',
      },
      notifyBeforeService: {
        name: 'Повідомити перед ТО',
        validation: 'Будь ласка, введіть сповіщення перед ТО!',
      },
      dateLastService: {
        name: 'Дата останнього ТО',
        placeholder: 'Виберіть дату',
        validation: 'Введіть дату останнього обслуговування!',
      },
    },
    btnSave: 'ЗБЕРЕГТИ',
  },
  sectors: {
    title: 'Крок 2: Створення секторів пристроїв',
    btnAddSector: 'ДОДАТИ СЕКТОР',
    btnSaveSector: 'ЗБЕРЕГТИ',
    tableColumns: {
      name: 'Назва сектора',
      number: 'Номер',
      location: 'Розташування',
      maxTemperature: 'Макс. T°C',
      minTemperature: 'Мін. T°C',
      trackerSetupDate: 'Дата встановлення датчика',
      maxTimeExcess: 'Час перевищення норми T°C (год)',
    },
  },
  sectorModal: {
    sectorTitle: 'Інформація про сектори',
    sensorTitle: 'Дані датчиків',
    sectorInputs: {
      name: {
        name: 'Назва',
        validation: 'Будь ласка, введіть назву сектора!',
      },
      number: {
        name: 'Номер',
        validation: 'Будь ласка, введіть номер сектора!',
      },
      location: {
        name: 'Розташування',
        validation: 'Будь ласка, вкажіть розташування сектору!',
      },
      maxTemperature: {
        name: 'Макс. T°C',
        validation: 'Будь ласка, введіть максимальну температуру датчика!',
      },
      minTemperature: {
        name: 'Мін. T°C',
        validation: 'Будь ласка, введіть мінімальну температуру датчика!',
      },
      setupDate: {
        name: 'Дата встановлення',
        placeholder: 'Виберіть дату',
        validation: 'Будь ласка, введіть дату встановлення датчика!',
      },
      timeNormAccess: {
        name: 'Час перевищення T°C',
        validation: 'Будь ласка, введіть час перевищення норм температур!',
        minutes: 'хв',
      },
    },
  },
};
