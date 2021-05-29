import React from 'react';
import { createIconSetFromIcoMoon }  from '@expo/vector-icons'; 
import { useFonts } from '@use-expo/font';

import icomoon from '../../assets/fonts/icomoon.ttf'
import selection from '../../assets/fonts/selection.json'

export default function Icon(props) {
  const [fontLoaded] = useFonts({ icomoon });
  const { name, size, color, style } = props;
  // カスタムアイコン読み込み
  const CustomIcon = createIconSetFromIcoMoon(selection);

  if (!fontLoaded) {
    return null;
  }
  return (
    <CustomIcon name={name} size={size} color={color} style={style}/>
  );
}
