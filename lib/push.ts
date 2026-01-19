import { PushNotifications } from '@capacitor/push-notifications';
import { Capacitor } from '@capacitor/core';
import { supabase } from './supabase';

export async function registerPushNotifications(userId: string) {
  if (!Capacitor.isNativePlatform()) {
    console.log('📢 Push Notifications: Web platform detected (skipping native registration)');
    return;
  }

  try {
    // 1. Check Permissions
    let permStatus = await PushNotifications.checkPermissions();

    if (permStatus.receive === 'prompt') {
      permStatus = await PushNotifications.requestPermissions();
    }

    if (permStatus.receive !== 'granted') {
      console.warn('🚫 Push Notifications: Permission denied');
      return;
    }

    // 2. Register
    await PushNotifications.register();

    // 3. Add Listeners
    PushNotifications.addListener('registration', async (token) => {
      console.log('✅ Push Registration success:', token.value);
      
      // Save to Supabase
      const { error } = await supabase.from('user_push_tokens').upsert({
        user_id: userId,
        token: token.value,
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id' });

      if (error) console.error('❌ Failed to save push token:', error);
    });

    PushNotifications.addListener('registrationError', (error) => {
      console.error('❌ Push Registration failed:', error);
    });

    PushNotifications.addListener('pushNotificationReceived', (notification) => {
      console.log('🔔 Push Received:', notification);
    });

    PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
      console.log('👉 Push Action:', notification);
      // Here you could handle deep linking
    });

  } catch (e) {
    console.error('💥 Push setup error:', e);
  }
}
