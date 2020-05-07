import * as React from 'react';
import { Text, View, StatusBar } from 'react-native';

// Redux
import { connect } from 'react-redux';

// Components
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import LearnCenterScreen from '../screens/LearnCenterScreen';
import StudyCenterScreen from '../screens/StudyCenterScreen';
import ResearchCenterScreen from '../screens/ResearchCenterScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

const mapStateToProps = state => {
  return { 
    isAuthenticated: state.auth.isAuthenticated
  };
};

function App(props) {

  const renderLoggedRoutes = () => (
    <>
      <Tab.Screen name="Learn" component={LearnCenterScreen} />
      <Tab.Screen name="Study" component={StudyCenterScreen} />
      <Tab.Screen name="Research" component={ResearchCenterScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </>
  )

  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName = '';

            if (route.name === 'Learn') iconName = 'md-school';
            else if (route.name === 'Study') iconName = 'ios-cube';
            else if (route.name === 'Research') iconName = 'md-search';
            else if (route.name === 'Profile') iconName = 'md-person';
            else if (route.name === 'Login') iconName = 'md-person';

            return <Ionicons name={iconName} size={32} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#FF5C97',
          inactiveTintColor: '#E0E8F3',
          showLabel: false,
          style: { 
            height: 104,
            borderTopColor: '#E8F1FA',
            borderTopWidth: 2
          }
        }}
      >
        {props.isAuthenticated ? renderLoggedRoutes() : <Tab.Screen name="Login" component={LoginScreen} />}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default connect(mapStateToProps)(App);