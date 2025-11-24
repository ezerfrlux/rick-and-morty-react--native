import { Result } from '@/interfaces/Characters';
import { useQuery } from '@tanstack/react-query';

export function  useRickAndMortyCharacter (id:string[] | string) {

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const {data, isPending, isLoading} = useQuery({
    queryKey: ['character', 'id'],
    queryFn: () => 
      fetch(`${apiUrl}/character/${id}`).then((res) => res.json()) as Promise<Result>
  })

  if (isPending){
    console.log("Loading character")
  }
  return {data, isLoading}
}