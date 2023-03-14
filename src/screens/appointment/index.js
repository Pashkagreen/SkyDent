import {useState} from 'react';

import AppointmentView from './appointment-view';

const AppointmentContainer = () => {
  const tabs = [
    {
      id: 0,
      step: 1,
      name: 'Service',
    },
    {
      id: 1,
      step: 2,
      name: 'Date & Time',
    },
    {
      id: 2,
      step: 3,
      name: 'Overview',
    },
  ];
  return <AppointmentView tabs={tabs} />;
};

export default AppointmentContainer;
