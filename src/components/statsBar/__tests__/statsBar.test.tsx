import React from 'react';
import { render } from '@testing-library/react-native';
import {StatsProgressBar} from '../index';

describe('ProgresStatsBar',()=>{
  
  test('the component rendered', () => {
    render(<StatsProgressBar value={2}/>);

  })

})

