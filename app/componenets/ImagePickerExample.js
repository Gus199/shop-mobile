import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import ImageInput from './ImageInput';

export default function ImagePickerExample() {
  const [imageUri, setImageUri] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button title='Pick an image from camera roll' onPress={pickImage} />
      {imageUri && (
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      )} */}
      <ImageInput imageUri={imageUri} onChangeImage={uri =>setImageUri(uri)} />
    </View>
  );
}
