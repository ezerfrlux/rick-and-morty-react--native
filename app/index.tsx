import CustomCard from "@/components/CustomCard";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
      className="bg-backgroundDark"
    >
      <SafeAreaView className="flex-1">
        <Text className="text-3xl font-bold text-textLight">
          Rick and Morty App.
        </Text>
        <CustomCard />
      </SafeAreaView>
    </View>
  );
}
