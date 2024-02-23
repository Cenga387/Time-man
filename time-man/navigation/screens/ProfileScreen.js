import * as React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
// import { BlurView } from "@react-native-community/blur"

function ProfileScreen() {
  const navigation = useNavigation();
  const handleLogout = ({navigation}) => {
    // Perform logout actions here
    // For now, just close the modal
    setModalVisible(false);
    // Navigate to the login screen
    
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.pageTitle}>Profile</Text>
      </View>
      <View style={styles.profileContainer} elevation={5}>
        <View style={styles.pictureContainer}></View>
        <Text style={styles.userName}>-Users Name-</Text>
        <Text style={styles.userProfession}>-Profession-</Text>
        <View style={styles.locationTasksContainer}>
          <View style={styles.locationContainer}>
            <Icon name="map-marker" size={30} color={"#006EE9"} />
            <Text>-Users Location</Text>
          </View>
          <View style={styles.tasksContainer}>
            <Icon name="check-circle" size={30} color={"#006EE9"} />
            <Text>-Tasks Completed-</Text>
          </View>
        </View>
      </View>

      <View style={styles.tabBar}>
        <Icon name="account" size={40} color={"#006EE9"} />
        <Text style={styles.tabText}>My Profile</Text>
      </View>
      <View style={styles.tabBar}>
        <Icon name="poll" size={40} color={"#006EE9"} />
        <Text style={styles.tabText}>Statistic</Text>
      </View>
      <View style={styles.tabBar}>
        <Icon name="map-marker" size={40} color={"#006EE9"} />
        <Text style={styles.tabText}>Location</Text>
      </View>
      <View style={styles.tabBar}>
        <Icon name="cog" size={40} color={"#006EE9"} />
        <Text style={styles.tabText}>Settings</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.tabBar}
          onPress={() => setModalVisible(true)}
        >
          <Icon name="logout" size={40} color={"#006EE9"} />
          <Text style={styles.tabText}>Log out</Text>
        </TouchableOpacity>
        
      <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to log out?
            </Text>
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.modalButtonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
          </View>
        </Modal>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topContainer: {
    backgroundColor: "#006EE9",
    height: 100,
    justifyContent: "center",
  },
  profileContainer: {
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#006EE9",
    shadowOpacity: 0.9,
    shadowRadius: 15,
    shadowOffset: {
      height: 0,
      width: 3,
    },
    height: 300,
  },
  pictureContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "grey",
  },
  locationTasksContainer: {
    marginTop: 50,
    flexDirection: "row",
  },
  locationContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  tasksContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  tabBar: {
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "700",
    color: "#006EE9",
  },
  tabText: {
    fontSize: 20,
    marginLeft: 20,
  },
  userProfession: {
    fontSize: 16,
  },
  pageTitle: {
    marginLeft: 15,
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'rgba(0, 0, 0, 0.7)'
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center"
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    borderRadius: 8,
    padding: 10,
    margin: 10,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#006EE9",
    height: 40,
  },
  modalButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
export default ProfileScreen;
