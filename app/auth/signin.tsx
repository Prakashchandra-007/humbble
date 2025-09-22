import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  Alert, 
  TouchableOpacity, 
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import appwrite from '../../constants/appwrite';

const { width, height } = Dimensions.get('window');

const SigninScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignin = async () => {
    setLoading(true);
    try {
      await appwrite?.account?.createEmailSession(email, password);
      Alert.alert('Success', 'Signed in successfully!');
      setEmail('');
      setPassword('');
      // You can navigate to the main app screen here
      // router.replace('/');
    } catch (error: any) {
      Alert.alert('Sign In Error', error.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <LinearGradient
        colors={['#FFD600', '#FFD600', '#1a1a1a']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* You can replace this with your placeholder image */}
        <ImageBackground
          source={require('../../assets/images/sign-in.jpg')}
          style={styles.backgroundImage}
          imageStyle={styles.backgroundImageStyle}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {/* Header Section */}
            <View style={styles.headerSection}>
              <Text style={styles.welcomeText}>Welcome Back</Text>
              <Text style={styles.subtitle}>Sign in to continue your journey</Text>
            </View>

            {/* Form Section */}
            <View style={styles.formContainer}>
              <Text style={styles.formTitle}>LOGIN</Text>
              
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#999"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#999"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
              </View>

              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.loginButton, loading && styles.loginButtonDisabled]} 
                onPress={handleSignin}
                disabled={loading}
              >
                <View style={styles.loginButtonSolid}>
                  <Text style={styles.loginButtonTextSolid}>
                    {loading ? 'Signing In...' : 'Login'}
                  </Text>
                </View>
              </TouchableOpacity>

              <View style={styles.dividerContainer}>
                <View style={styles.divider} />
                <Text style={styles.dividerText}>Or sign in with</Text>
                <View style={styles.divider} />
              </View>

              <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialButton}>
                  <Text style={styles.socialButtonText}>G</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Text style={styles.socialButtonText}>f</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity 
                onPress={() => router.replace('/auth/signup')} 
                style={styles.linkContainer}
              >
                <Text style={styles.linkText}>
                  Don't have an account? <Text style={styles.linkHighlight}>Sign Up</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  backgroundImageStyle: {
    opacity: 0.3,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    minHeight: height,
  },
  headerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  formContainer: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    paddingBottom: 50,
    minHeight: height * 0.6,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#333',
    letterSpacing: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: 'black',
    textDecorationLine: 'underline',
    opacity: 0.5,
    fontSize: 14,
    fontWeight: '500',
  },
  loginButton: {
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  loginButtonDisabled: {
    elevation: 0,
    shadowOpacity: 0,
  },
  loginButtonSolid: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD600',
    borderRadius: 12,
  },
  loginButtonTextSolid: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#e9ecef',
  },
  dividerText: {
    marginHorizontal: 16,
    color: '#6c757d',
    fontSize: 14,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 30,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFD600',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1a1a1a',
  },
  socialButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  linkContainer: {
    alignItems: 'center',
  },
  linkText: {
    color: '#6c757d',
    fontSize: 16,
  },
  linkHighlight: {
    color: '#FFD600',
    fontWeight: '600',
  },
});

export default SigninScreen;