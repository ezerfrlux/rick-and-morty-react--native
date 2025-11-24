import { useRickAndMortyCharacter } from "@/hooks/useRickAndMortyCharacter";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const CharactersDetails = () => {
  const { id } = useLocalSearchParams();

  const { data, isLoading } = useRickAndMortyCharacter(id);
  if (isLoading) {
    return (
      <View className="items-center justify-center flex-1 bg-backgroundDark">
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View className="items-center justify-center flex-1 w-full bg-backgroundDark">
      <SafeAreaView className="items-center flex-1 w-full">
        <Pressable
          className="absolute p-3 rounded-full top-12 left-4 bg-portalDarkGreen"
          onPress={() => router.back()}
        >
          <Text className="text-xl text-white">←</Text>
        </Pressable>
        <Text className="mt-5 text-3xl font-bold text-textLight">{data?.name}</Text>
        <Image
          source={{ uri: data?.image || "" }}
          className="w-full h-[300] m-4 rounded-xl"
        />

        <Pressable className="m-4 overflow-hidden shadow-md rounded-xl bg-portalDarkGreen">
          <View className="p-4">
            <Text className="text-lg font-bold text-rickGreen">
              Location:{" "}
              <Text className="text-textLight">{data?.location.name}</Text>
            </Text>
            <Text className="text-lg font-bold text-rickGreen">
              Origin:{" "}
              <Text className="text-textLight">{data?.origin.name}</Text>
            </Text>
            <Text className="text-lg font-bold text-rickGreen">
              Origin: <Text className="text-textLight">{data?.species}</Text>
            </Text>
            <Text className="text-lg font-bold text-rickGreen">
              Gender: <Text className="text-textLight">{data?.gender}</Text>
            </Text>
          </View>
        </Pressable>
      </SafeAreaView>
    </View>
  );
};

export default CharactersDetails;
