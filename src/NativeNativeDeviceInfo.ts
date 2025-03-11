import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface DeviceInfo {
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
}

export interface Spec extends TurboModule {
  getDeviceName(): Promise<string>;
  getSystemName(): Promise<string>;
  getSystemVersion(): Promise<string>;
  getBrand(): Promise<string>;
  getModel(): Promise<string>;
  getUniqueId(): Promise<string>;
  getDeviceLocale(): Promise<string>;
  getDeviceCountry(): Promise<string>;
  getBundleId(): Promise<string>;
  getBuildNumber(): Promise<string>;
  getReadableVersion(): Promise<string>;
  getTimezone(): Promise<string>;
  getAllDeviceInfo(): Promise<DeviceInfo>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeDeviceInfo');
