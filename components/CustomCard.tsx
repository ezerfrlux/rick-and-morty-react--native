import { Result } from "@/interfaces/Characters";
import { Image, Pressable, Text, View } from "react-native";

interface CustomCardProps{
  character: Result
}

export default function CustomCard({character}:CustomCardProps) {

  const {image,name,origin} = character

  return (
    <Pressable className="m-4 overflow-hidden shadow-md rounded-xl bg-portalDarkGreen">
      <Image
        source={ {uri: image} }
        className="w-full h-[300]"
      />
      <View className="p-4">
        <Text className="text-lg font-bold text-rickGreen">
          {name}
        </Text>
        <Text className="mt-1 mb-3 text-textLight">
          Origin: {origin.name}
        </Text>
        <Pressable className="px-4 py-2 mt-4 rounded-md bg-mortyYellow">
          <Text className="font-semibold text-center text-portalDarkGreen">
            More Details
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
}
