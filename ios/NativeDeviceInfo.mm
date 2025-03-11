#import "NativeDeviceInfo.h"
#import <React/RCTLog.h>

@implementation NativeDeviceInfo
RCT_EXPORT_MODULE()

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeNativeDeviceInfoSpecJSI>(params);
}

- (void)getAllDeviceInfo:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
  @try {
    UIDevice *device = [UIDevice currentDevice];
    NSString *deviceName = device.name ?: @"";
    NSString *systemName = device.systemName ?: @"";
    NSString *systemVersion = device.systemVersion ?: @"";
    NSString *model = device.model ?: @"";
    NSString *uniqueId = [[[UIDevice currentDevice] identifierForVendor] UUIDString] ?: @"";
    NSString *bundleId = [[NSBundle mainBundle] bundleIdentifier] ?: @"";
    NSString *buildNumber = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleVersion"] ?: @"";
    NSString *readableVersion = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleShortVersionString"] ?: @"";
    NSString *timezone = [[NSTimeZone localTimeZone] name] ?: @"";
    NSString *deviceLocale = [[NSLocale currentLocale] localeIdentifier] ?: @"";
    NSString *deviceCountry = [[NSLocale currentLocale] objectForKey:NSLocaleCountryCode] ?: @"";

    NSDictionary *allInfo = @{
      @"deviceName": deviceName,
      @"systemName": systemName,
      @"systemVersion": systemVersion,
      @"model": model,
      @"uniqueId": uniqueId,
      @"bundleId": bundleId,
      @"buildNumber": buildNumber,
      @"readableVersion": readableVersion,
      @"timezone": timezone,
      @"deviceLocale": deviceLocale,
      @"deviceCountry": deviceCountry,
      @"brand": @"Apple"
    };

    resolve(allInfo);
  }
  @catch (NSException *exception) {
    reject(@"error", exception.reason, nil);
  }
}


- (void)getBrand:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
  resolve(@"Apple");
}

- (void)getBuildNumber:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
  NSString *buildNumber = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleVersion"];
  
  if (buildNumber) {
    resolve(buildNumber);
  } else {
    reject(@"no_build_number", @"Could not get build number", nil);
  }
}

- (void)getBundleId:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject { 
  NSString *bundleId = [[NSBundle mainBundle] bundleIdentifier];
  if (bundleId) {
    resolve(bundleId);
  } else {
    reject(@"no_bundle_id", @"Could not get bundle id", nil);
  }
}

- (void)getDeviceCountry:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject { 
  NSString *deviceCountry = [[NSLocale currentLocale] objectForKey:NSLocaleCountryCode];
  if (deviceCountry) {
    resolve(deviceCountry);
  } else {
    reject(@"no_device_country", @"Could not get device country", nil);
  }
}

- (void)getDeviceLocale:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject { 
  NSString *deviceLocale = [[NSLocale currentLocale] localeIdentifier];
  
  if (deviceLocale) {
    resolve(deviceLocale);
  } else {
    reject(@"no_device_locale", @"Could not get device locale", nil);
  }
}

- (void)getDeviceName:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
  NSString *deviceName = [[UIDevice currentDevice] name];
  if (deviceName) {
    resolve(deviceName);
  } else {
    reject(@"no_device_name", @"Could not get device name", nil);
  }
}

- (void)getModel:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
  NSString *model = [[UIDevice currentDevice] model];
  if (model) {
    resolve(model);
  } else {
    reject(@"no_model", @"Could not get model", nil);
  }
}

- (void)getReadableVersion:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
  NSString *readableVersion = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleShortVersionString"];
  if (readableVersion) {
    resolve(readableVersion);
  } else {
    reject(@"no_readable_version", @"Could not get readable version", nil);
  }
}

- (void)getSystemName:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
  NSString *systemName = [[UIDevice currentDevice] systemName];
  if (systemName) {
    resolve(systemName);
  } else {
    reject(@"no_system_name", @"Could not get system name", nil);
  }
}

- (void)getSystemVersion:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
  NSString *systemVersion = [[UIDevice currentDevice] systemVersion];
  if (systemVersion) {
    resolve(systemVersion);
  } else {
    reject(@"no_system_version", @"Could not get system version", nil);
  }
}

- (void)getTimezone:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
  NSString *timezone = [[NSTimeZone localTimeZone] name];
  if (timezone) {
    resolve(timezone);
  } else {
    reject(@"no_timezone", @"Could not get timezone", nil);
  }
}

- (void)getUniqueId:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
  NSString *uniqueId = [[[UIDevice currentDevice] identifierForVendor] UUIDString];
  if (uniqueId) {
    resolve(uniqueId);
  } else {
    reject(@"no_unique_id", @"Could not get unique id", nil);
  }
}

@end
