import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';

const Icon = name => ({ tintColor }) => (
  <FontAwesome
    style={{ backgroundColor: 'transparent' }}
    name={name}
    color={tintColor}
    size={24}
  />
);

export default Icon;
