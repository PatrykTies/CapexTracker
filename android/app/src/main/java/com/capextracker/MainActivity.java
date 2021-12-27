package com.capextracker;

import com.facebook.react.ReactActivity;
import android.os.Bundle; // react-native-screens package

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "CapexTracker";
  }

   /**
   * https://reactnavigation.org/docs/getting-started/
   * react-native-screens package requires one additional configuration step to properly work on Android devices
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
}
