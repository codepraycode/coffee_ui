
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';

import CofeeFeed from '../components/CofeeFeed';
import { COLORS } from '../constants';

const Tab = createBottomTabNavigator();




const HomeScreen = () => {
    const tabIcon = ({ name, type }) => {
        return {
            tabBarIcon: ({ focused, color, size }) => {
                return <Icon
                    name={name}
                    type={type}
                    iconStyle={{
                        color: focused ? COLORS.primary : COLORS.gray,
                        fontSize: size,

                    }}
                />
            },
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.gray,
            tabBarStyle:{
                height:65,
                paddingBottom:10,
            }
        }
    }
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen 
                name="Home" component={CofeeFeed}
                options={tabIcon({ name: 'home', type:'material'})}
            />

            <Tab.Screen name="Cart" component={CofeeFeed} 
                options={tabIcon({ name: 'shopping-bag', type: 'font-awesome' })}
            />

            <Tab.Screen name="Favourite" component={CofeeFeed} 
                options={tabIcon({ name: 'heart-o', type: 'font-awesome' })}
            />

            <Tab.Screen name="Profile" component={CofeeFeed} 
                options={tabIcon({ name: 'user', type: 'font-awesome' })}
            />
        </Tab.Navigator>
        
    )
}

export default HomeScreen;
