import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';

import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../utils/Colors';

const ImageComponent = ({imageUri,setImageUri}) => {
//   const [imageUri, setImageUri] = useState(null);
  const [modalVisibility, setModalVisibility] = useState(false);

  const handleModal = () => {
    setModalVisibility(true);
  };

  const closeModal = () => {
    setModalVisibility(false);
  };

  const openCamera = async () => {
    try {
      const image = await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      });
      console.log('Captured Image:', image.path);
      setImageUri(image.path);
    } catch (error) {
      console.log('Camera Error:', error);
    }
    closeModal();
  };

  const openGallery = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      console.log('Selected Image:', image.path);
      setImageUri(image.path);
    } catch (error) {
      console.log('Gallery Error:', error);
    }
    closeModal();
  };

  return (
    <View style={styles.container}>
      {/* Profile Image or Icon */}
      <TouchableOpacity style={styles.imgContainer} onPress={handleModal}>
        {imageUri ? (
          <Image source={{uri: imageUri}} style={styles.image} />
        ) : (
          <Feather name="user" size={58} color={Colors.black} />
        )}
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        visible={modalVisibility}
        transparent
        animationType="slide"
        onRequestClose={closeModal}>
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={closeModal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.title}>Select an Option</Text>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={closeModal}>
                <Entypo name="cross" size={18} color={Colors.white} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.optionButton} onPress={openCamera}>
              <Text style={styles.optionText}>Camera</Text>
            </TouchableOpacity>

            <View style={styles.horizontalLine} />

            <TouchableOpacity style={styles.optionButton} onPress={openGallery}>
              <Text style={styles.optionText}>Gallery</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    backgroundColor: 'lightgrey',
    marginTop: '15%',
    borderRadius: 60,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    elevation:8,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '5%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  cancelButton: {
    padding: 5,
    backgroundColor: Colors.background,
    borderRadius: 60,
    alignItems: 'center',
  },
  optionButton: {
    // width: '100%',
  },
  optionText: {
    color: Colors.textGrey,
    fontSize: 18,
    fontWeight: '600',
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.textGrey,
    marginVertical: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});
