import { Ionicons } from "@expo/vector-icons";
import { Tabs , router} from "expo-router";
import { TouchableOpacity } from "react-native";

export default function HomeLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor:"#F72C5B"}} >
      <Tabs.Screen
        name="index"
        options={{
          headerRight : () => (
            <TouchableOpacity style={{marginRight:10}}
            onPress={()=>{ router.push("/add") }}>
              <Ionicons name="add" size={24}/>
            </TouchableOpacity>
          ),
          title: "Home",
          tabBarIcon: ({color}) => (
            <TouchableOpacity>
              <Ionicons name="home-outline" size={24} color={color}/>
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({color}) => (
            <TouchableOpacity>
              <Ionicons name="person-circle-outline" size={24} color={color} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({color}) => (
            <TouchableOpacity>
              <Ionicons name="search-outline" size={24} color={color} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({color}) => (
            <TouchableOpacity>
              <Ionicons name="settings-outline" size={24} color={color} />
            </TouchableOpacity>
          ),
        }}
      />
    </Tabs>
  );
}
