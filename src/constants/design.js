import {Dimensions} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const MAIN_COLOR = '#06294A';
export const SECONDARY_COLOR = '#055680';
export const ACTIVE_ICON = '#00E7CA';
export const INACTIVE_ICON = '#549EE4';
export const TITLES_COLOR = '#94A4B2';
export const SWITCH_ACTIVE = '#38EF7D';
export const SWITCH_INACTIVE = '#B5BBD2';
export const INACTIVE_CARD = '#0E4764';
export const ACTIVE_CARD = '#285094';
export const TEXT_COLOR = '#fff';
export const FAVOURITE_ICON = '#E44744';
export const RECORD_BG = '#68C2FE';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get(
  'screen',
);

export const ICON_SIZE_NORMAL = responsiveFontSize(3);
export const ICON_SIZE_MEDIUM = responsiveFontSize(2);
