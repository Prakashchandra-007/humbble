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

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async () => {
    setLoading(true);
    try {
      await appwrite?.account?.create(
        'unique()',
        email,
        password,
        name
      );
      Alert.alert('Success', 'Account created! Please sign in.');
      setEmail('');
      setPassword('');
      setName('');
      router.replace('/auth/signin');
    } catch (error: any) {
      Alert.alert('Signup Error', error.message || 'Unknown error');
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
        
        <ImageBackground
          source={require('../../assets/images/sign-up.jpg')} 
          style={styles.backgroundImage}
          imageStyle={styles.backgroundImageStyle}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {/* Header Section */}
            <View style={styles.headerSection}>
              <Text style={styles.welcomeText}>Join Us Today</Text>
              <Text style={styles.subtitle}>Create your account and start exploring</Text>
            </View>

            {/* Form Section */}
            <View style={styles.formContainer}>
              <Text style={styles.formTitle}>SIGN UP</Text>
              
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  placeholderTextColor="#999"
                  value={name}
                  onChangeText={setName}
                  autoCapitalize="words"
                />
              </View>

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

              <TouchableOpacity 
                style={[styles.signupButton, loading && styles.signupButtonDisabled]} 
                onPress={handleSignup}
                disabled={loading}
              >
                <View style={styles.signupButtonSolid}>
                  <Text style={styles.signupButtonTextSolid}>
                    {loading ? 'Creating Account...' : 'Sign Up'}
                  </Text>
                </View>
              </TouchableOpacity>

              <View style={styles.dividerContainer}>
                <View style={styles.divider} />
                <Text style={styles.dividerText}>Or sign up with</Text>
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
                onPress={() => router.replace('/auth/signin')} 
                style={styles.linkContainer}
              >
                <Text style={styles.linkText}>
                  Already have an account? <Text style={styles.linkHighlight}>Sign In</Text>
                </Text>
              </TouchableOpacity>

              <View style={styles.termsContainer}>
                <Text style={styles.termsText}>
                  By signing up, you agree to our{' '}
                  <Text style={styles.termsLink}>Terms of Service</Text>
                  {' '}and{' '}
                  <Text style={styles.termsLink}>Privacy Policy</Text>
                </Text>
              </View>
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
    minHeight: height * 0.65,
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
  signupButton: {
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20,
  },
  signupButtonDisabled: {
    elevation: 0,
    shadowOpacity: 0,
  },
  signupButtonSolid: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD600',
    borderRadius: 12,
  },
  signupButtonTextSolid: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
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
    marginBottom: 20,
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
    marginBottom: 20,
  },
  linkText: {
    color: '#6c757d', 
    fontSize: 16,
  },
  linkHighlight: {
    color: '#FFD600',
    fontWeight: '700',
    textDecorationLine: 'underline',
    
  },
  termsContainer: {
    paddingHorizontal: 10,
  },
  termsText: {
    fontSize: 12,
    color: '#6c757d', 
    textAlign: 'center',
    lineHeight: 18,
  },
  termsLink: {
    color: '#FFD600', 
    fontWeight: '500',  
  },
});

export default SignupScreen;