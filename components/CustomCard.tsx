import { Image, Pressable, Text, View } from "react-native";

export default function CustomCard() {
  return (
    <Pressable className="m-4 overflow-hidden shadow-md rounded-xl bg-portalDarkGreen">
      <Image
        source={{ uri: "https://placekitten.com/400/200" }}
        className="w-full h-40"
      />
      <View className="p-4">
        <Text className="text-lg font-bold text-rickGreen">
          Título de la Card
        </Text>
        <Text className="mt-1 text-textLight">
          Esta es una descripción de ejemplo para la card. Puedes personalizarla como quieras.
        </Text>
        <Pressable className="px-4 py-2 mt-4 rounded-md bg-mortyYellow">
          <Text className="font-semibold text-center text-portalDarkGreen">
            Acción
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
}
