const quoteData = {
  date_of_birth: moment().subtract(28, 'years').format('YYYY-MM-DD'),
  axcess_amount: 1000000,
  devices: [
    {
      brand: 'Samsung',
      worldwide_cover: true,
      device_usage: 'personal',
      model: 'Samsung Gear 2',
      value_amount: 309968
    },
    {
      brand: 'Meizu',
      worldwide_cover: false,
      province: 'free_state',
      device_usage: 'work',
      model: 'Meizu 20 Infinity 5G Premium Edition',
      value_amount: 2244007
    },
    {
      brand: 'Other',
      brand_other: 'Lenovo',
      worldwide_cover: true,
      device_usage: 'work',
      model: 'Other',
      model_other: 'Lenovo Yoga Book 9i 13IRU8',
      value_amount: 4797199
    }
  ]
};

const applicationData = {
  sales_channel: 'mobile_app',
  effective_start_date: moment().add(7, 'days').format('YYYY-MM-DD')
};
