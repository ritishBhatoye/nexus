import { TopEventsFilterData, matchLiveDummyData } from "@/constants/home";
import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import EventFilterItem from "./EventItem";
import Switch from "@/src/components/atoms/Switch";
import MatchLiveCard from "@/src/components/elements/Cards/MatchLiveCard";
import { useLiveMatchesForApp, SportType } from "@/utils/api";

const TopEvents = () => {
  const [isEventActive, setIsEventActive] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const [currentSport, setCurrentSport] = useState<SportType>("football");

  // Get live matches from API
  const {
    data: liveMatches,
    loading,
    error,
    refetch,
  } = useLiveMatchesForApp(currentSport);

  const handleEventItemPress = (event: EventItemType) => {
    setSelectedEventId(event.id);
    // Update sport based on selected event
    const sportMapping: Record<string, SportType> = {
      Football: "football",
      Cricket: "cricket",
      Basketball: "basketball",
      Tennis: "tennis",
      Hockey: "hockey",
      Baseball: "baseball",
      Volleyball: "volleyball",
      Rugby: "rugby",
      MMA: "mma",
      Boxing: "boxing",
    };

    const newSport = sportMapping[event.name] || "football";
    if (newSport !== currentSport) {
      setCurrentSport(newSport);
    }
  };

  // Find selected event name for filtering
  const selectedEvent = TopEventsFilterData.find(
    (e) => e.id === selectedEventId
  );
  const selectedEventName = selectedEvent ? selectedEvent.name : null;

  // Use API data if available, otherwise fallback to dummy data
  const matchesData = liveMatches || matchLiveDummyData;

  // Filter matches by event and live status
  const filteredMatches = matchesData.filter((match) => {
    const eventMatch = selectedEventName
      ? match.sport === selectedEventName.toLowerCase()
      : true;
    const liveMatch = isEventActive
      ? match.isLive && match.matchStatus === "live"
      : true;
    return eventMatch && liveMatch;
  });

  // Auto-refresh live data every 30 seconds when live toggle is active
  useEffect(() => {
    if (isEventActive) {
      const interval = setInterval(() => {
        refetch();
      }, 30000); // 30 seconds

      return () => clearInterval(interval);
    }
  }, [isEventActive, refetch]);

  return (
    <View className="flex flex-col gap-5">
      <View className="flex-row justify-between items-center px-5">
        <Text className="text-gray-500 font-avalar text-2xl">Top Events</Text>
        <View className="flex-row gap-1.5 items-center">
          <Text className="text-red-500 font-montserrat-bold text-lg">
            LIVE
          </Text>
          <Switch
            size="small"
            value={isEventActive}
            onValueChange={setIsEventActive}
          />
        </View>
      </View>

      <FlatList
        data={TopEventsFilterData}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
        renderItem={({ item }) => (
          <EventFilterItem
            key={item.id}
            event={item}
            isActive={selectedEventId === item.id}
            onPress={handleEventItemPress}
          />
        )}
      />

      {loading && (
        <View className="flex-row justify-center items-center py-8">
          <ActivityIndicator size="large" color="#3b82f6" />
          <Text className="ml-2 text-gray-600 font-montserrat">
            Loading live matches...
          </Text>
        </View>
      )}

      {error && !loading && (
        <View className="flex-row justify-center items-center py-8">
          <Text className="text-red-500 font-montserrat text-center">
            Failed to load live matches. Using cached data.
          </Text>
        </View>
      )}

      <ScrollView
        style={{ flexGrow: 0 }}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}
      >
        {filteredMatches.length > 0 ? (
          filteredMatches.map((match) => (
            <MatchLiveCard key={match.id} liveItem={match} />
          ))
        ) : (
          <Text className="text-center text-gray-400 mt-8 font-montserrat">
            {loading
              ? "Loading matches..."
              : "No matches found for this event."}
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default TopEvents;
