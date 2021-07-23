import React from 'react';
import { StyleSheet, View,Modal } from 'react-native';
import { AppText } from '../components/AppText';

import colors from '../config/colors';

export function UploadScreen({progress=0,visible=false}) {
 return (
     <Modal visible={visible}>
      <View style={styles.container}></View>
        <Progress.Bar progress={progress} color={colors.primary} width={200} />
      </Modal>
    )
}

const styles = StyleSheet.create({
  container:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    }
})