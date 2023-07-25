import React from "react";
import { useColorScheme } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import useCachedResources from "./src/hooks/useCachedResources";
import useCurrentLocale from "@/hooks/useCurrentLocale";
import { LocalesContextProvider } from "@/api/contexts/locales";
import Navigation from "@/navigation";

const queryClient = new QueryClient();

const TranslationWrapper = () => {
  const { selectedLocale, isLoading } = useCurrentLocale();
  const colorScheme = useColorScheme();

  if (isLoading) {
    return null;
  }
  return (
    <LocalesContextProvider
      defaultLocale={"en"}
      locale={selectedLocale as "en" | "de"}
    >
      <Navigation colorScheme={colorScheme} />
    </LocalesContextProvider>
  );
};

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <TranslationWrapper />
        </QueryClientProvider>
      </SafeAreaProvider>
    );
  }
}
