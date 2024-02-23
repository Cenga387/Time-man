import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import Svg, {Path} from 'react-native-svg';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    
  }

  handleLogin = () => {
    // Implement your login logic here, e.g., call an authentication API
    const { email, password } = this.state;

    // Example: Check if the email and password are valid
    if (email && password) {
      // Successfully logged in, navigate to the next screen
      this.props.navigation.navigate('MainStackNavigator', {screen: 'HomeScreen'});
    } else {
      // Handle login failure, show an error message
      alert('Invalid email or password. Please try again.');
    }
  }

  render() {
    return (
      <View style={styles.container} >
        <Svg style={styles.logo} width="155" height="65" viewBox="0 0 155 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d="M11.04 29H6.85059V12.1982H0.537109V7.99414H17.3389V12.1982H11.04V29ZM31.2842 20.6064V16.4023C31.2842 15.8262 31.1719 15.2842 30.9473 14.7764C30.7324 14.2588 30.4346 13.8096 30.0537 13.4287C29.6729 13.0479 29.2236 12.75 28.7061 12.5352C28.1982 12.3105 27.6562 12.1982 27.0801 12.1982C26.5039 12.1982 25.957 12.3105 25.4395 12.5352C24.9316 12.75 24.4873 13.0479 24.1064 13.4287C23.7256 13.8096 23.4229 14.2588 23.1982 14.7764C22.9834 15.2842 22.876 15.8262 22.876 16.4023V20.6064H31.2842ZM35.4883 29H31.2842V24.7959H22.876V29H18.6865V16.4023C18.6865 15.2402 18.9062 14.1514 19.3457 13.1357C19.7852 12.1104 20.3809 11.2168 21.1328 10.4551C21.8945 9.69336 22.7832 9.09277 23.7988 8.65332C24.8242 8.21387 25.918 7.99414 27.0801 7.99414C28.2422 7.99414 29.3311 8.21387 30.3467 8.65332C31.3721 9.09277 32.2656 9.69336 33.0273 10.4551C33.7891 11.2168 34.3896 12.1104 34.8291 13.1357C35.2686 14.1514 35.4883 15.2402 35.4883 16.4023V29ZM37.9053 14.293C37.9053 13.4238 38.0713 12.6084 38.4033 11.8467C38.7354 11.085 39.1846 10.4209 39.751 9.85449C40.3271 9.27832 40.9961 8.82422 41.7578 8.49219C42.5195 8.16016 43.335 7.99414 44.2041 7.99414H53.8428V12.1982H44.2041C43.9111 12.1982 43.6377 12.252 43.3838 12.3594C43.1299 12.4668 42.9053 12.6182 42.71 12.8135C42.5244 12.999 42.3779 13.2188 42.2705 13.4727C42.1631 13.7266 42.1094 14 42.1094 14.293C42.1094 14.5859 42.1631 14.8643 42.2705 15.1279C42.3779 15.3818 42.5244 15.6064 42.71 15.8018C42.9053 15.9873 43.1299 16.1338 43.3838 16.2412C43.6377 16.3486 43.9111 16.4023 44.2041 16.4023H48.4082C49.2773 16.4023 50.0928 16.5684 50.8545 16.9004C51.626 17.2227 52.2949 17.6719 52.8613 18.248C53.4375 18.8145 53.8867 19.4834 54.209 20.2549C54.541 21.0166 54.707 21.832 54.707 22.7012C54.707 23.5703 54.541 24.3857 54.209 25.1475C53.8867 25.9092 53.4375 26.5781 52.8613 27.1543C52.2949 27.7207 51.626 28.1699 50.8545 28.502C50.0928 28.834 49.2773 29 48.4082 29H39.0771V24.7959H48.4082C48.7012 24.7959 48.9746 24.7422 49.2285 24.6348C49.4824 24.5273 49.7021 24.3809 49.8877 24.1953C50.083 24 50.2344 23.7754 50.3418 23.5215C50.4492 23.2676 50.5029 22.9941 50.5029 22.7012C50.5029 22.4082 50.4492 22.1348 50.3418 21.8809C50.2344 21.627 50.083 21.4072 49.8877 21.2217C49.7021 21.0264 49.4824 20.875 49.2285 20.7676C48.9746 20.6602 48.7012 20.6064 48.4082 20.6064H44.2041C43.335 20.6064 42.5195 20.4404 41.7578 20.1084C40.9961 19.7764 40.3271 19.3271 39.751 18.7607C39.1846 18.1846 38.7354 17.5156 38.4033 16.7539C38.0713 15.9824 37.9053 15.1621 37.9053 14.293ZM61.6797 29H57.4756V7.99414H61.6797V18.4971L69.502 7.99414H74.2773L67.6416 16.8564L74.2773 29H69.502L64.8877 20.5039L61.6797 24.7959V29ZM87.3877 16.4023V20.3867H75.083V16.4023H87.3877ZM111.982 29H107.793V14C107.793 13.707 107.734 13.4336 107.617 13.1797C107.51 12.9258 107.358 12.7061 107.163 12.5205C106.978 12.3252 106.758 12.1738 106.504 12.0664C106.25 11.959 105.977 11.9053 105.684 11.9053C105.391 11.9053 105.117 11.959 104.863 12.0664C104.609 12.1738 104.385 12.3252 104.189 12.5205C104.004 12.7061 103.857 12.9258 103.75 13.1797C103.643 13.4336 103.589 13.707 103.589 14V29H99.3848V14C99.3848 13.707 99.3311 13.4336 99.2236 13.1797C99.1162 12.9258 98.9648 12.7061 98.7695 12.5205C98.584 12.3252 98.3643 12.1738 98.1104 12.0664C97.8564 11.959 97.583 11.9053 97.29 11.9053C96.9971 11.9053 96.7236 11.959 96.4697 12.0664C96.2158 12.1738 95.9912 12.3252 95.7959 12.5205C95.6104 12.7061 95.4639 12.9258 95.3564 13.1797C95.249 13.4336 95.1953 13.707 95.1953 14V29H90.9912V14C90.9912 13.1309 91.1523 12.3154 91.4746 11.5537C91.8066 10.7822 92.2559 10.1133 92.8223 9.54688C93.3984 8.9707 94.0674 8.52148 94.8291 8.19922C95.6006 7.86719 96.4209 7.70117 97.29 7.70117C98.0713 7.70117 98.8232 7.84277 99.5459 8.12598C100.269 8.39941 100.918 8.7998 101.494 9.32715C102.07 8.7998 102.715 8.39941 103.428 8.12598C104.15 7.84277 104.902 7.70117 105.684 7.70117C106.553 7.70117 107.368 7.86719 108.13 8.19922C108.901 8.52148 109.57 8.9707 110.137 9.54688C110.713 10.1133 111.162 10.7822 111.484 11.5537C111.816 12.3154 111.982 13.1309 111.982 14V29ZM128.11 20.6064V16.4023C128.11 15.8262 127.998 15.2842 127.773 14.7764C127.559 14.2588 127.261 13.8096 126.88 13.4287C126.499 13.0479 126.05 12.75 125.532 12.5352C125.024 12.3105 124.482 12.1982 123.906 12.1982C123.33 12.1982 122.783 12.3105 122.266 12.5352C121.758 12.75 121.313 13.0479 120.933 13.4287C120.552 13.8096 120.249 14.2588 120.024 14.7764C119.81 15.2842 119.702 15.8262 119.702 16.4023V20.6064H128.11ZM132.314 29H128.11V24.7959H119.702V29H115.513V16.4023C115.513 15.2402 115.732 14.1514 116.172 13.1357C116.611 12.1104 117.207 11.2168 117.959 10.4551C118.721 9.69336 119.609 9.09277 120.625 8.65332C121.65 8.21387 122.744 7.99414 123.906 7.99414C125.068 7.99414 126.157 8.21387 127.173 8.65332C128.198 9.09277 129.092 9.69336 129.854 10.4551C130.615 11.2168 131.216 12.1104 131.655 13.1357C132.095 14.1514 132.314 15.2402 132.314 16.4023V29ZM152.764 29H148.267L140.166 15.1719V29H135.962V7.99414H140.459L148.56 21.8369V7.99414H152.764V29Z" fill="#006EE9"/>
          <Path d="M3.24688 60H5.07088V52.384L8.47888 60H9.74288L13.1349 52.384V60H14.9589V48.88H13.0069L9.11888 57.6L5.21488 48.88H3.24688V60ZM16.7483 55.552C16.7483 58.272 18.5883 60.144 20.8763 60.144C22.3483 60.144 23.4043 59.44 23.9643 58.688V60H25.8043V51.184H23.9643V52.464C23.4203 51.744 22.3963 51.04 20.9083 51.04C18.5883 51.04 16.7483 52.832 16.7483 55.552ZM23.9643 55.584C23.9643 57.488 22.6683 58.56 21.2923 58.56C19.9323 58.56 18.6203 57.456 18.6203 55.552C18.6203 53.648 19.9323 52.624 21.2923 52.624C22.6683 52.624 23.9643 53.696 23.9643 55.584ZM34.456 60H36.264V54.8C36.264 52.336 34.712 51.04 32.648 51.04C31.592 51.04 30.616 51.472 30.024 52.192V51.184H28.2V60H30.024V55.072C30.024 53.456 30.904 52.624 32.248 52.624C33.576 52.624 34.456 53.456 34.456 55.072V60ZM37.9826 55.552C37.9826 58.272 39.8226 60.144 42.1106 60.144C43.5826 60.144 44.6386 59.44 45.1986 58.688V60H47.0386V51.184H45.1986V52.464C44.6546 51.744 43.6306 51.04 42.1426 51.04C39.8226 51.04 37.9826 52.832 37.9826 55.552ZM45.1986 55.584C45.1986 57.488 43.9026 58.56 42.5266 58.56C41.1666 58.56 39.8546 57.456 39.8546 55.552C39.8546 53.648 41.1666 52.624 42.5266 52.624C43.9026 52.624 45.1986 53.696 45.1986 55.584ZM48.8264 55.552C48.8264 58.272 50.6664 60.144 52.9864 60.144C54.4264 60.144 55.4824 59.424 56.0424 58.672V60.144C56.0424 61.904 54.9864 62.768 53.5784 62.768C52.3144 62.768 51.3384 62.144 51.0664 61.232H49.2584C49.4824 63.184 51.2264 64.352 53.5784 64.352C56.3304 64.352 57.8824 62.544 57.8824 60.144V51.184H56.0424V52.464C55.4984 51.712 54.4264 51.04 52.9864 51.04C50.6664 51.04 48.8264 52.832 48.8264 55.552ZM56.0424 55.584C56.0424 57.488 54.7464 58.56 53.3704 58.56C52.0104 58.56 50.6984 57.456 50.6984 55.552C50.6984 53.648 52.0104 52.624 53.3704 52.624C54.7464 52.624 56.0424 53.696 56.0424 55.584ZM63.9901 52.576C65.3501 52.576 66.4221 53.44 66.4541 54.8H61.5741C61.7661 53.408 62.7581 52.576 63.9901 52.576ZM68.1181 57.376H66.1501C65.8141 58.064 65.1901 58.608 64.0701 58.608C62.7261 58.608 61.6861 57.728 61.5581 56.272H68.2941C68.3421 55.968 68.3581 55.68 68.3581 55.376C68.3581 52.784 66.5821 51.04 64.0701 51.04C61.4621 51.04 59.6701 52.816 59.6701 55.584C59.6701 58.352 61.5421 60.144 64.0701 60.144C66.2301 60.144 67.6221 58.912 68.1181 57.376ZM82.6491 60H84.4571V54.8C84.4571 52.336 82.8891 51.04 80.8251 51.04C79.5451 51.04 78.2971 51.712 77.7531 52.784C77.1451 51.632 75.9771 51.04 74.5851 51.04C73.5291 51.04 72.5691 51.472 71.9771 52.192V51.184H70.1531V60H71.9771V55.072C71.9771 53.456 72.8571 52.624 74.2011 52.624C75.5291 52.624 76.4091 53.456 76.4091 55.072V60H78.2171V55.072C78.2171 53.456 79.0971 52.624 80.4411 52.624C81.7691 52.624 82.6491 53.456 82.6491 55.072V60ZM90.4901 52.576C91.8501 52.576 92.9221 53.44 92.9541 54.8H88.0741C88.2661 53.408 89.2581 52.576 90.4901 52.576ZM94.6181 57.376H92.6501C92.3141 58.064 91.6901 58.608 90.5701 58.608C89.2261 58.608 88.1861 57.728 88.0581 56.272H94.7941C94.8421 55.968 94.8581 55.68 94.8581 55.376C94.8581 52.784 93.0821 51.04 90.5701 51.04C87.9621 51.04 86.1701 52.816 86.1701 55.584C86.1701 58.352 88.0421 60.144 90.5701 60.144C92.7301 60.144 94.1221 58.912 94.6181 57.376ZM102.909 60H104.717V54.8C104.717 52.336 103.165 51.04 101.101 51.04C100.045 51.04 99.0691 51.472 98.4771 52.192V51.184H96.6531V60H98.4771V55.072C98.4771 53.456 99.3571 52.624 100.701 52.624C102.029 52.624 102.909 53.456 102.909 55.072V60ZM107.332 57.552C107.332 59.344 108.308 60 109.876 60H111.316V58.48H110.196C109.428 58.48 109.172 58.208 109.172 57.552V52.672H111.316V51.184H109.172V48.992H107.332V51.184H106.292V52.672H107.332V57.552ZM128.813 60H130.733L126.749 48.864H124.637L120.653 60H122.557L123.357 57.728H128.013L128.813 60ZM127.501 56.24H123.869L125.693 51.072L127.501 56.24ZM134.29 52.48V51.184H132.466V64.192H134.29V58.72C134.866 59.408 135.906 60.144 137.362 60.144C139.682 60.144 141.506 58.272 141.506 55.552C141.506 52.832 139.682 51.04 137.362 51.04C135.922 51.04 134.85 51.744 134.29 52.48ZM139.65 55.552C139.65 57.456 138.338 58.56 136.962 58.56C135.602 58.56 134.29 57.488 134.29 55.584C134.29 53.696 135.602 52.624 136.962 52.624C138.338 52.624 139.65 53.648 139.65 55.552ZM145.133 52.48V51.184H143.309V64.192H145.133V58.72C145.709 59.408 146.749 60.144 148.205 60.144C150.525 60.144 152.349 58.272 152.349 55.552C152.349 52.832 150.525 51.04 148.205 51.04C146.765 51.04 145.693 51.744 145.133 52.48ZM150.493 55.552C150.493 57.456 149.181 58.56 147.805 58.56C146.445 58.56 145.133 57.488 145.133 55.584C145.133 53.696 146.445 52.624 147.805 52.624C149.181 52.624 150.493 53.648 150.493 55.552Z" fill="#9A9A9A"/>
        </Svg>

        <Text style={styles.title1}>Login to your account</Text>
        
        <View style={styles.emailContainer}>
        <Icon style={styles.iconEmail} name="envelope" size={20} color={'white'}/>

        <TextInput
          
          style={styles.input}
          placeholder="Email"
          onChangeText={(email) => this.setState({ email })}
        />
        </View>
        <View style={styles.emailContainer}>
        <Icon style={styles.iconPass} name='lock' size={20} color={'white'}/>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(password) => this.setState({ password })}
        />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={styles.buttonText1}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signUp}>
        <Text style={styles.title2}>Don't have an account? </Text>
        <TouchableOpacity style={styles.signUpBbutton} onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text style={styles.buttonText2}>Sign up</Text>
        </TouchableOpacity>
      
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   
    alignItems: 'center',
  },
  emailContainer:{
    flexDirection: 'row',
    marginTop: 20,
    alignItems:'center',
    verticalAlign:'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
  },
  logo:{
    marginBottom: 60,
    height:100,
    width:100,
  },
  iconEmail: {
    width: 40,
    height: 50,
    padding:10,
    paddingTop:12.5,
    borderRadius: 10,
    backgroundColor: '#006EE9',
    
  },
  iconPass: {
    width: 40,
    height: 50,
    paddingLeft:13,
    paddingTop:12.5,
    borderRadius: 10,
    
    backgroundColor: '#006EE9',
    
  },
  title1: {
    fontSize: 24,
    marginBottom: 20,
  },
  title2:{
    fontSize:18,    
  },
  input: {
    width: 315,
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
  },
  button: {
    width: 355,
    height: 50,
    justifyContent: 'center',
    marginTop: 39,
    backgroundColor: '#006EE9',
    padding: 10,
    borderRadius: 10,
  },
  buttonText1: {
    color: 'white',
    textAlign: 'center',
  },
  buttonText2: {
    color: '#3C78DA',
    textAlign: 'center',
    verticalAlign:'bottom',
    fontSize:15,
  },
  signUp:{
    flexDirection:'row',
    marginTop: 40,
    alignItems:'center',
    verticalAlign:'center',
    justifyContent: 'center',  
  },
  signUpBbutton:{    
    padding:10,
    textAlign:'center',
  },
});

export default LoginScreen;
