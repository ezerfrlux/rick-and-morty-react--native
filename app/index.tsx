import CustomCard from "@/components/CustomCard";
import { ContextAPI } from "@/contexts/ContextAPI";
import { Result } from "@/interfaces/Characters";
import { useContext } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { characters, isLoading } = useContext(ContextAPI);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        className="bg-backgroundDark"
      >
        <Text className="text-3xl font-bold text-textLight">Loading</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
      className="bg-backgroundDark"
    >
      <SafeAreaView className="flex-1">
        <ScrollView
          contentContainerStyle={{
            alignContent: "center",
            justifyContent: "center",
            paddingVertical: 20,
          }}
        >
          <Text
            className="text-3xl font-bold text-textLight"
            style={{ textAlign: "center" }}
          >
            Rick and Morty App
          </Text>
          <View style={{
            justifyContent:"center",
            alignContent:"center"
          }}>
            {characters.map((character: Result) => (
              <CustomCard key={character.id} character={character} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
