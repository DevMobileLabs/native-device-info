import NativeDeviceInfo from './NativeNativeDeviceInfo';

export async function getDeviceName(): Promise<string> {
  return await NativeDeviceInfo.getDeviceName();
}

export async function getSystemName(): Promise<string> {
  return await NativeDeviceInfo.getSystemName();
}

export async function getSystemVersion(): Promise<string> {
  return await NativeDeviceInfo.getSystemVersion();
}

export async function getBrand(): Promise<string> {
  return await NativeDeviceInfo.getBrand();
}

export async function getModel(): Promise<string> {
  return await NativeDeviceInfo.getModel();
}

export async function getUniqueId(): Promise<string> {
  return await NativeDeviceInfo.getUniqueId();
}

export async function getDeviceLocale(): Promise<string> {
  return await NativeDeviceInfo.getDeviceLocale();
}

export async function getDeviceCountry(): Promise<string> {
  return await NativeDeviceInfo.getDeviceCountry();
}

export async function getBundleId(): Promise<string> {
  return await NativeDeviceInfo.getBundleId();
}

export async function getBuildNumber(): Promise<string> {
  return await NativeDeviceInfo.getBuildNumber();
}

export async function getReadableVersion(): Promise<string> {
  return await NativeDeviceInfo.getReadableVersion();
}

export async function getTimezone(): Promise<string> {
  return await NativeDeviceInfo.getTimezone();
}

export async function getAllDeviceInfo(): Promise<{
  deviceName: string;
  systemName: string;
  systemVersion: string;
  brand: string;
  model: string;
  uniqueId: string;
  deviceLocale: string;
  deviceCountry: string;
  bundleId: string;
  buildNumber: string;
  readableVersion: string;
  timezone: string;
}> {
  return await NativeDeviceInfo.getAllDeviceInfo();
}
