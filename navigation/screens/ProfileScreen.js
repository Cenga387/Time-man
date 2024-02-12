import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


function ProfileScreen() {
    return(
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
                        <Icon name="map-marker" size={30} color={'#006EE9'}/>
                        <Text>-Users Location</Text>
                    </View>
                    <View style={styles.tasksContainer}>
                        <Icon name="check-circle" size={30} color={'#006EE9'}/>
                        <Text>-Tasks Completed-</Text>
                    </View>
                </View>
            </View>

            <View style={styles.tabBar}>
                <Icon name="account" size={40} color={'#006EE9'}/>
                <Text style={styles.tabText}>My Profile</Text>
            </View>
            <View style={styles.tabBar}>
                <Icon name="poll" size={40} color={'#006EE9'}/>
                <Text style={styles.tabText}>Statistic</Text>
            </View>
            <View style={styles.tabBar}>
                <Icon name="map-marker" size={40} color={'#006EE9'}/>
                <Text style={styles.tabText}>Location</Text>
            </View>
            <View style={styles.tabBar}>
                <Icon name="cog" size={40} color={'#006EE9'}/>
                <Text style={styles.tabText}>Settings</Text>
            </View>
            <View style={styles.tabBar}>
                <Icon name="logout" size={40} color={'#006EE9'}/>
                <Text style={styles.tabText}>Log out</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  topContainer:{
    backgroundColor: '#006EE9',
    height: 100,
    justifyContent: 'center'
  },
  profileContainer:{
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    padding:20,
    backgroundColor:'white',
    borderRadius: 20,
    shadowColor: "#006EE9",
    shadowOpacity: 0.9,
    shadowRadius: 15,
    shadowOffset: {
      height: 0,
      width: 3
    },
    height: 300,
  },
  pictureContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'grey'
  },
  locationTasksContainer:{
    marginTop: 50,
    flexDirection: 'row'
  },
  locationContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20
  },
  tasksContainer:{
    flexDirection:'row',
    alignItems: 'center',
    marginHorizontal: 20
  },
  tabBar: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',

  },
  userName: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: '700',
    color: '#006EE9'
  },
  tabText:{
    fontSize: 20,
    marginLeft: 20,
  },
  userProfession:{
    fontSize: 16,
  },
  pageTitle:{
    marginLeft: 15,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  }
  
});
export default ProfileScreen