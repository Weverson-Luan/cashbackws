import * as React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import { HomeStack } from '@screens/home-stack';
import { RegisterExpenses } from '@screens/register-expenses';
import { Resume } from '@screens/resume';

//assets and commons
import { Menu } from 'src/commons/menu';
import { Cash } from 'src/commons/cash';
import { Resume as ResumeSvg } from 'src/commons/resume';

const Tab = createBottomTabNavigator();

const BottomTabsAuth = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    flexDirection: 'row',
                    height: 60,
                    backgroundColor: '#fff',
                    borderTopColor: '#fff',
                },
                tabBarIconStyle: {
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                },

                tabBarLabelPosition: 'beside-icon',
            }}>
            <Tab.Screen
                name="HomeBottomTabs"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Listagem',
                    tabBarLabelStyle: { fontWeight: '500' },
                    tabBarIcon: ({ color, size }) => (
                        <View style={{ marginLeft: -8 }}>
                            <Menu width="32" height="32" color={color} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="RegisterExpenses"
                component={RegisterExpenses}
                options={{
                    tabBarLabel: 'Cadastre',
                    tabBarLabelStyle: { fontWeight: '500' },
                    tabBarIcon: ({ color, size }) => (
                        <View style={{ marginLeft: -8 }}>
                            <Cash width="32" height="32" color={color} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Resume"
                component={Resume}
                options={{
                    tabBarLabel: 'Resumo',
                    tabBarLabelStyle: { fontWeight: '500' },
                    tabBarIcon: ({ color, size }) => (
                        <View style={{ marginLeft: -8 }}>
                            <ResumeSvg width="30" height="30" color={color} />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export { BottomTabsAuth };
