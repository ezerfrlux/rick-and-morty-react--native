import { Characters } from '@/interfaces/Characters';
import { useQuery } from '@tanstack/react-query';
export function  useRickAndMortyCharacters () {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const {data, isPending, isLoading} = useQuery({
    queryKey: ['characters'],
    queryFn: () => 
      fetch(`${apiUrl}/character`).then((res) => res.json()) as Promise<Characters>
  })

  if (isPending){
    console.log("isPending")
  }
  return {data, isLoading}
}