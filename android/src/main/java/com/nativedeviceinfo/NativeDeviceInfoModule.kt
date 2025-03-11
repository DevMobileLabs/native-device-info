package com.nativedeviceinfo

import android.annotation.SuppressLint
import android.os.Build
import android.provider.Settings
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import java.util.Locale
import java.util.TimeZone

@ReactModule(name = NativeDeviceInfoModule.NAME)
class NativeDeviceInfoModule(reactContext: ReactApplicationContext) :
  NativeNativeDeviceInfoSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  override fun getDeviceName(promise: Promise?) {
    try {
        val deviceName = "${Build.MANUFACTURER} ${Build.MODEL}"
      promise?.resolve(deviceName)
    } catch (e: Exception) {
      promise?.reject("error", e)
    }
  }

  override fun getSystemName(promise: Promise?) {
    promise?.resolve("Android")
  }

  override fun getSystemVersion(promise: Promise?) {
    promise?.resolve(Build.VERSION.RELEASE)
  }

  override fun getBrand(promise: Promise?) {
    promise?.resolve(Build.BRAND)
  }

  override fun getModel(promise: Promise?) {
    promise?.resolve(Build.MODEL)
  }

  @SuppressLint("HardwareIds")
  override fun getUniqueId(promise: Promise?) {
    try {
      val uniqueId = Settings.Secure.getString(
        reactApplicationContext.contentResolver,
        Settings.Secure.ANDROID_ID
      )
      promise?.resolve(uniqueId)
    } catch (e: Exception) {
      promise?.reject("error", e)
    }
  }

  override fun getDeviceLocale(promise: Promise?) {
    promise?.resolve(Locale.getDefault().toString())
  }

  override fun getDeviceCountry(promise: Promise?) {
    promise?.resolve(Locale.getDefault().country)
  }

  override fun getBundleId(promise: Promise?) {
    promise?.resolve(reactApplicationContext.packageName)
  }

  override fun getBuildNumber(promise: Promise?) {
    try {
      val packageInfo = reactApplicationContext
        .packageManager
        .getPackageInfo(reactApplicationContext.packageName,0)

      promise?.resolve(packageInfo)
    } catch (e: Exception) {
      promise?.reject("error",e)
    }
  }

  override fun getReadableVersion(promise: Promise?) {
    try {
      val packageInfo = reactApplicationContext
        .packageManager
        .getPackageInfo(
        reactApplicationContext.packageName,
        0
      )
      promise?.resolve(packageInfo.versionName)
    } catch (e: Exception) {
      promise?.reject("error", e)
    }
  }

  override fun getTimezone(promise: Promise?) {
    promise?.resolve(TimeZone.getDefault().id)
  }


  @SuppressLint("HardwareIds")
  override fun getAllDeviceInfo(promise: Promise?) {
    try {
      val deviceName = "${Build.MANUFACTURER} ${Build.MODEL}"
      val systemName = "Android"
      val systemVersion = Build.VERSION.RELEASE
      val brand = Build.BRAND
      val model = Build.MODEL
      val uniqueId = Settings.Secure.getString(
        reactApplicationContext.contentResolver,
        Settings.Secure.ANDROID_ID
      )
      val deviceLocale = Locale.getDefault().toString()
      val deviceCountry = Locale.getDefault().country
      val bundleId = reactApplicationContext.packageName

      val packageInfo = reactApplicationContext.packageManager.getPackageInfo(
        reactApplicationContext.packageName,
        0
      )
      val buildNumber = packageInfo.versionCode.toString()
      val readableVersion = packageInfo.versionName
      val timezone = TimeZone.getDefault().id

      val allInfo = hashMapOf(
        "deviceName" to deviceName,
        "systemName" to systemName,
        "systemVersion" to systemVersion,
        "brand" to brand,
        "model" to model,
        "uniqueId" to uniqueId,
        "deviceLocale" to deviceLocale,
        "deviceCountry" to deviceCountry,
        "bundleId" to bundleId,
        "buildNumber" to buildNumber,
        "readableVersion" to readableVersion,
        "timezone" to timezone
      )
      promise?.resolve(allInfo)
    } catch (e: Exception) {
      promise?.reject("error", e)
    }
  }

  companion object {
    const val NAME = "NativeDeviceInfo"
  }
}
