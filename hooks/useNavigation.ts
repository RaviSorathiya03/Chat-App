import { useRouter } from "expo-router";

export function useNavigation() {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return { navigateTo };
}

