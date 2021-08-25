import React from 'react';

import { ReusableButton } from './ReusableButton';

export default {
  title: 'Components/ReusableButton',
  component: ReusableButton,
}

export const Default = () => <ReusableButton text={'Default button'}/>
export const Outlined = () => <ReusableButton text={'Outlined button'} fill={'outline'}/>
export const SmallRed = () => <ReusableButton text={'Red small button'} color={'red'} size={'small'}/>
export const SmallRedOutlined = () => <ReusableButton text={'Outlined red small button'} fill={'outline'} color={'red'} size={'small'} />
export const LargeGray = () => <ReusableButton text={'Gray large button'} color={'gray'} size={'large'} />
export const LargeGrayOutlined = () => <ReusableButton text={'Outlined gray large button'} fill={'outline'} color={'gray'} size={'large'} /> 
export const ToggleGray = () => <ReusableButton color={'gray'} variant={'toggle'} />
export const ToggleSmallBlue = () => <ReusableButton size={'small'} color={'blue'} variant={'toggle'} />
