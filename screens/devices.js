import { useState } from 'react';
import { View, Text, StatusBar, Switch, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/styles.js";

export default function DevicesScreen() {
  const [isEnabledOne, setIsEnabledOne] = useState(true);
  const [isEnabledTwo, setIsEnabledTwo] = useState(false);
  const toggleSwitchOne = () => setIsEnabledOne(previousState => !previousState);
  const toggleSwitchTwo = () => setIsEnabledTwo(previousState => !previousState);

  return (
    <SafeAreaView style={styles.safeArea}>    

      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />
      
      <ScrollView
        contentContainerStyle={styles.screenContainer}
      >

        <Text style={styles.screenTitle}>
          My Devices
        </Text>

        {/* LIGHT */}
        <View style={styles.listCard}>

          <Ionicons
            name="bulb"
            size={40}
            color="#2196F3"
          />

          <View style={styles.deviceInfo}>

            <Text style={styles.listDeviceName}>
              Living Room Light
            </Text>

            <Text style={styles.listDeviceStatus}>
              Turned {isEnabledOne ? 'ON' : 'OFF'}
            </Text>

          </View>

          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabledOne ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            value={isEnabledOne}
            onValueChange={toggleSwitchOne} 
          />

        </View>


        {/* AIR CONDITIONER */}
        <View style={styles.listCard}>

          <Ionicons
            name="snow"
            size={40}
            color="#5DA5D5"
          />

          <View style={styles.deviceInfo}>

            <Text style={styles.listDeviceName}>
              Air Conditioner
            </Text>

            <Text style={styles.listDeviceStatus}>
              Turned {isEnabledTwo ? 'ON' : 'OFF'}{isEnabledTwo ? ': 24°C' : ''}
            </Text>

          </View>

          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabledTwo ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            value={isEnabledTwo}
            onValueChange={toggleSwitchTwo} 
          />

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}