import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';
 
import Cities from './src/Cities/Cities';
import City from './src/Cities/City';
import AddCity from './src/AddCity/AddCity';
import AddCountry from './src/components/AddCountry';
import Countries from './src/components/Countries';
import { colors } from './src/theme';   

 
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
 
 
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
 
function CitiesStackScreen({ navigation, route, cities, addCity, addLocation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name="Cities">
        {(props) => (
          <Cities {...props} cities={cities} addCity={addCity} addLocation={addLocation} />
        )}
      </Stack.Screen>
      <Stack.Screen name="City">
        {(props) => (
          <City {...props} cities={cities} addCity={addCity} addLocation={addLocation} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
 
export default class App extends Component {
  state = {
    cities: [],
    countries: [], // ✅ Added countries state here
  };
 
  addCity = (city) => {
    this.setState((prevState) => ({
      cities: [...prevState.cities, { ...city, locations: [] }],
    }));
  };
 
  addLocation = (location, city) => {
    const index = this.state.cities.findIndex((item) => item.id === city.id);
    const updatedCity = {
      ...this.state.cities[index],
      locations: [...this.state.cities[index].locations, location],
    };
 
    const cities = [
      ...this.state.cities.slice(0, index),
      updatedCity,
      ...this.state.cities.slice(index + 1),
    ];
 
    this.setState({ cities });
  };
 
  addCountry = (country) => {
    this.setState((prevState) => ({
      countries: [...prevState.countries, country],
    }));
  };
 
  render() {
    const { cities } = this.state;
    return (
      <NavigationContainer>
        <Tab.Navigator>
         <Tab.Screen name="CitiesNav" options={{ title: 'Cities' }}>
            {(props) => (
              <CitiesStackScreen
                {...props}
                cities={cities}
                addCity={this.addCity}
                addLocation={this.addLocation}
              />
            )}
          </Tab.Screen>
         <Tab.Screen name="AddCity" options={{ title: 'Add City' }}>
            {(props) => (
              <AddCity
                {...props}
                cities={cities}
                addCity={this.addCity}
                addLocation={this.addLocation}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name="AddCountry" options={{ title: 'Add Country' }}>
            {(props) => (
              <AddCountry {...props} addCountry={this.addCountry} />
            )}

          </Tab.Screen>
          {/* <Tab.Screen
            name="AddCountry"
            children={(props) => (
              <AddCountry {...props} addCountry={this.addCountry} />
            )}
          /> */}
          <Tab.Screen name="Countries" options={{ title: 'Countries' }}>
            {(props) => (
              <Countries {...props} countries={this.state.countries} />
            )}

          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}