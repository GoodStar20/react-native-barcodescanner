import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    if (Platform.OS === "android") {
      if (type === 32) {
        alert(`Barcode's type is EAN-13 and Barcode is ${data}!`);
      } else {
        alert(`This BarCode isn't EAN-13 code.`);
      }
    } else if (Platform.OS === "ios") {
      if (type === "org.gs1.EAN-13") {
        alert(`Barcode's type is EAN-13 and Barcode is ${data}!`);
      } else {
        alert(`This BarCode isn't EAN-13 code.`);
      }
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.background}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, styles.container]}
      >
        <View style={styles.layerTop} />
        <View style={styles.layerCenter}>
          <View style={styles.layerLeft} />
          <View style={styles.focused} />
          <View style={styles.layerRight} />
        </View>
        <View style={styles.layerBottom} />
      </BarCodeScanner>

      {scanned && (
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => setScanned(false)}
            style={styles.scanBtn}
          >
            <Text style={styles.scanBtnText}>Scan Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
const opacity = "rgba(0, 0, 0, .6)";
const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  scanBtn: {
    backgroundColor: "#1DD2C1",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    marginTop: 30,
    paddingHorizontal: 50,
  },
  scanBtnText: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase",
  },
  footer: {
    bottom: 30,
    left: 10,
    right: 10,
    alignItems: "center",
  },
  layerTop: {
    flex: 1,
    backgroundColor: opacity,
  },
  layerCenter: {
    flex: 1,
    flexDirection: "row",
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity,
  },
  focused: {
    flex: 10,
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity,
  },
  layerBottom: {
    flex: 1,
    backgroundColor: opacity,
  },
});
