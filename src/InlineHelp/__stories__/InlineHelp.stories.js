import InlineHelp from '../InlineHelp';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|InlineHelp', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <InlineHelp text='default' />
    ))
    .add('disable styles', () => (
        <InlineHelp disableStyles text='default' />
    ));
