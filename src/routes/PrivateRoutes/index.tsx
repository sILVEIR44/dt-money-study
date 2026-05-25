import { Home } from "@/screens/Home";
import { createStackNavigator } from "@react-navigation/stack";

export type PrivateStackParamsList = {
  Home: undefined;
};

const PrivateStack = createStackNavigator<PrivateStackParamsList>();

export const PrivateRoutes = () => {
  return (
    <PrivateStack.Navigator>
      <PrivateStack.Screen name="Home" component={Home} />
    </PrivateStack.Navigator>
  );
};
