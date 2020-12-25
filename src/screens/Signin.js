import React from 'react';
import { 
    View, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import {Text, Button, Item, Input, Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/Feather';


import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import authAction from '../redux/actions/auth'


const SignInScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const {isError} = useSelector((state) => state.auth);

    const schema = Yup.object().shape({
        email: Yup.string()
          .email('Please enter correct email')
          .required('Email field is required'),
        password: Yup.string()
          .min(6, 'Password required at least 6 characters')
          .max(20, 'Password required max 20 characters')
          .required('Password field is required'),
      });

      function doLogin(data) {
        dispatch(authAction.login(data));
      }
    
      React.useEffect(() => {
        if (isError) {
          Alert.alert('Login failed!', 'Email or password is wrong.');
          dispatch(authAction.reset());
        }
      });
    
    // const [data, setData] = React.useState({
    //     username: '',
    //     password: '',
    //     check_textInputChange: false,
    //     secureTextEntry: true,
    //     isValidUser: true,
    //     isValidPassword: true,
    // });



    // const textInputChange = (val) => {
    //     if( val.trim().length >= 4 ) {
    //         setData({
    //             ...data,
    //             username: val,
    //             check_textInputChange: true,
    //             isValidUser: true
    //         });
    //     } else {
    //         setData({
    //             ...data,
    //             username: val,
    //             check_textInputChange: false,
    //             isValidUser: false
    //         });
    //     }
    // }

    // const handlePasswordChange = (val) => {
    //     if( val.trim().length >= 8 ) {
    //         setData({
    //             ...data,
    //             password: val,
    //             isValidPassword: true
    //         });
    //     } else {
    //         setData({
    //             ...data,
    //             password: val,
    //             isValidPassword: false
    //         });
    //     }
    // }

    // const updateSecureTextEntry = () => {
    //     setData({
    //         ...data,
    //         secureTextEntry: !data.secureTextEntry
    //     });
    // }

    // const handleValidUser = (val) => {
    //     if( val.trim().length >= 4 ) {
    //         setData({
    //             ...data,
    //             isValidUser: true
    //         });
    //     } else {
    //         setData({
    //             ...data,
    //             isValidUser: false
    //         });
    //     }
    // }

    // const loginHandle = (userName, password) => {

    //     const foundUser = Users.filter( item => {
    //         return userName == item.username && password == item.password;
    //     } );

    //     if ( data.username.length == 0 || data.password.length == 0 ) {
    //         Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
    //             {text: 'Okay'}
    //         ]);
    //         return;
    //     }

    //     if ( foundUser.length == 0 ) {
    //         Alert.alert('Invalid User!', 'Username or password is incorrect.', [
    //             {text: 'Okay'}
    //         ]);
    //         return;
    //     }
    // }

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#1c4585' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome to NewsPortal</Text>
        </View>
        {/* <View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: .background
            }]}
        >
            <Text style={[styles.text_footer, {
                color: .text
            }]}>Username</Text>
            <View style={styles.icon}>
                <FontAwesome 
                    style={{marginTop:12}}
                    name="user-o"
                    color={.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Your Username"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: .text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
                {data.check_textInputChange ? 
                <View
                    animation="bounceIn"
                >
                    <Icon 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </View>
                : null}
            </View>
            { data.isValidUser ? null : 
            <View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>not listed.</Text>
            </View>
            }
            

            <Text style={[styles.text_footer, {
                color: .text,
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.icon}>
                <Icon 
                style={{marginTop:12}}
                    name="lock"
                    color={.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={[styles.textInput, {
                        color: .text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Icon 
                    style={{marginTop:12}}
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Icon 
                    style={{marginTop:12}}
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { data.isValidPassword ? null : 
            <View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>wrong password.</Text>
            </View>
            }
            

            
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => navigation.navigate('Main') }
                >
                <LinearGradient
                    ={['#08d4c4', '#1c4585']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Sign In</Text>
                </LinearGradient>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={{color: '#1c4585',marginTop:20,marginBottom:10}}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.signUp}>
                <Text>if you don't have an account, please  </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={{color:'#1c4585'}} >Register</Text>
                </TouchableOpacity>    
            </View>
            
        </View> */}
        <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={(values) => doLogin(values)}>
      {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
        <View style={styles.padding}>
          <Text style={[styles.center, styles.bold, styles.marginBottom]}>
            Login
          </Text>
          <Text
            style={[styles.center, styles.fontSize_14, styles.marginBottom]}>
            Login to your existing account to access all the features in
            Balbalan.
          </Text>
          <View style={styles.marginBottom}>
            <Item>
              <Icon type="MaterialIcons" name="email" style={styles.blue} />
              <Input
                placeholder="Email"
                style={styles.fontSize_14}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </Item>
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
          </View>
          <View style={styles.marginBottom}>
            <Item>
              <Icon type="MaterialIcons" name="lock" style={styles.blue} />
              <Input
                placeholder="Password"
                secureTextEntry
                style={styles.fontSize_14}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </Item>
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
          </View>
          <TouchableOpacity
            style={styles.marginBottom}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={[styles.fontSize_14, styles.textRight]}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <Button rounded block style={styles.btn} onPress={handleSubmit}>
            <Text style={styles.white}>{'  Login  '}</Text>
          </Button>
        </View>
      )}
    </Formik>
      </View>
    );
};

export default SignInScreen;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1, 
//       backgroundColor: '#1c4585'
//     },
//     header: {
//         flex: 1,
//         justifyContent: 'center',
//         paddingHorizontal: 10,
//     },
//     footer: {
//         flex: 1.5,
//         backgroundColor: '#fff',
//         borderTopLeftRadius: 30,
//         borderTopRightRadius: 30,
//         paddingHorizontal: 20,
//         paddingVertical: 40
//     },
//     text_header: {
//         color: '#fff',
//         fontWeight: 'bold',
//         fontSize: 30
//     },
//     text_footer: {
//         color: '#1c4585',
//         fontSize: 18
//     },
//     icon: {
//         flexDirection: 'row',
//         marginTop: 10,
//         borderBottomColor: '#1c4585',
//     },
//     actionError: {
//         flexDirection: 'row',
//         marginTop: 5,
//         borderBottomWidth: 1,
//         borderBottomColor: '#1c4585',
//         paddingBottom: 5,
        
//     },
//     textInput: {
//         flex: 1,
//         marginBottom:10,
//         paddingLeft: 10,
//         color: '#05375a',
//         borderBottomColor:'#05375a',
//         borderBottomWidth: 0.5,
//     },
//     errorMsg: {
//         color: '#FF0000',
//         fontSize: 12,
//     },
//     button: {
//         alignItems: 'center',
//         marginTop: 10
//     },
//     signIn: {
//         width: '100%',
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10
//     },
//     signUp:{
//         flexDirection:'row',
//         marginTop:20,
//         width: '100%',
//         justifyContent:'center',
//         alignItems:'center'
// },
//     textSign: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color:'#fff'
//     }
//   });
const styles = StyleSheet.create({
  padding: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  fontSize_14: {
    fontSize: 14,
  },
  white: {
    color: 'white',
  },
  btn: {
    backgroundColor: '#2395FF',
    marginTop: 32,
  },
  marginBottom: {
    marginBottom: 16,
  },
  blue: {
    color: '#2395FF',
  },
  center: {
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  textRight: {
    textAlign: 'right',
  },
  error: {
    fontSize: 12,
    color: 'red',
  },
  container: {
          flex: 1, 
          backgroundColor: '#1c4585'
        },
        header: {
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 10,
        },
        footer: {
            flex: 1.5,
            backgroundColor: '#fff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 20,
            paddingVertical: 40
        },
        text_header: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 30
        },
});
