import { View, StyleSheet, Button, Alert, ScrollView } from 'react-native';

import {
  getDeviceName,
  getSystemName,
  getSystemVersion,
  getBrand,
  getModel,
  getUniqueId,
  getDeviceLocale,
  getDeviceCountry,
  getBundleId,
  getBuildNumber,
  getReadableVersion,
  getTimezone,
  getAllDeviceInfo,
} from 'native-device-info';

export default function App() {
  const handleGetDeviceName = async () => {
    try {
      const name = await getDeviceName();
      Alert.alert('Device Name', name);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  const handleGetSystemName = async () => {
    try {
      const sysName = await getSystemName();
      Alert.alert('System Name', sysName);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  const handleGetSystemVersion = async () => {
    try {
      const version = await getSystemVersion();
      Alert.alert('System Version', version);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  const handleGetBrand = async () => {
    try {
      const brand = await getBrand();
      Alert.alert('Brand', brand);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  const handleGetModel = async () => {
    try {
      const model = await getModel();
      Alert.alert('Model', model);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  const handleGetUniqueId = async () => {
    try {
      const uniqueId = await getUniqueId();
      Alert.alert('Unique ID', uniqueId);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  const handleGetDeviceLocale = async () => {
    try {
      const locale = await getDeviceLocale();
      Alert.alert('Device Locale', locale);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  const handleGetDeviceCountry = async () => {
    try {
      const country = await getDeviceCountry();
      Alert.alert('Device Country', country);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  const handleGetBundleId = async () => {
    try {
      const bundleId = await getBundleId();
      Alert.alert('Bundle ID', bundleId);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  const handleGetBuildNumber = async () => {
    try {
      const buildNumber = await getBuildNumber();
      Alert.alert('Build Number', buildNumber);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  const handleGetReadableVersion = async () => {
    try {
      const version = await getReadableVersion();
      Alert.alert('Readable Version', version);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  const handleGetTimezone = async () => {
    try {
      const tz = await getTimezone();
      Alert.alert('Timezone', tz);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  const handleGetAllDeviceInfo = async () => {
    try {
      const info = await getAllDeviceInfo();
      Alert.alert('All Device Info', JSON.stringify(info, null, 2));
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button title="Get Device Name" onPress={handleGetDeviceName} />
      <Button title="Get System Name" onPress={handleGetSystemName} />
      <Button title="Get System Version" onPress={handleGetSystemVersion} />
      <Button title="Get Brand" onPress={handleGetBrand} />
      <Button title="Get Model" onPress={handleGetModel} />
      <Button title="Get Unique ID" onPress={handleGetUniqueId} />
      <Button title="Get Device Locale" onPress={handleGetDeviceLocale} />
      <Button title="Get Device Country" onPress={handleGetDeviceCountry} />
      <Button title="Get Bundle ID" onPress={handleGetBundleId} />
      <Button title="Get Build Number" onPress={handleGetBuildNumber} />
      <Button title="Get Readable Version" onPress={handleGetReadableVersion} />
      <Button title="Get Timezone" onPress={handleGetTimezone} />

      <View style={{ marginTop: 20 }}>
        <Button title="Get All Device Info" onPress={handleGetAllDeviceInfo} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
});
