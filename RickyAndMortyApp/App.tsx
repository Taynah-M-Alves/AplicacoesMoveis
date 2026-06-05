import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [loading, setLoading] = useState(true);

  interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

const [characters, setCharacters] = useState<Character[]>([]);


  const fetchCharacters = async () => {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character"
      );

      const data = await response.json();

      setCharacters(data.results);
    } catch (error) {
      console.error("Erro:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const renderItem = ({ item }: {item: Character}) => {
  const statusColor =
    item.status === "Alive"
      ? "#4ADE80"
      : item.status === "Dead"
      ? "#EF4444"
      : "#9CA3AF";

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image }}
        style={styles.avatar}
      />

      <View style={styles.info}>
        <Text style={styles.characterName}>
          {item.name}
        </Text>

        <View
          style={[
            styles.statusBadge,
            { backgroundColor: statusColor },
          ]}
        >
          <Text style={styles.statusText}>
            {item.status}
          </Text>
        </View>

        <Text style={styles.species}>
          {item.species}
        </Text>
      </View>
    </View>
  );
};

  return (
  <LinearGradient
    colors={["#0f172a", "#1e293b", "#334155"]}
    style={{ flex: 1 }}
  >
    <View style={styles.container}>
      <Text style={styles.title}>
        Rick & Morty
      </Text>

      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  </LinearGradient>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 25,
    textAlign: "center",
    letterSpacing: 1,
  },

  card: {
  flexDirection: "row",

  backgroundColor: "#1E293B",

  padding: 15,
  borderRadius: 24,
  marginBottom: 15,

  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.25,
  shadowRadius: 8,

  elevation: 8,

  borderWidth: 1,
  borderColor: "#334155",
},

  avatar: {
    width: 85,
    height: 85,
    borderRadius: 50,
  },

  info: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },

  center: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
},


  characterName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 8,
  },

  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 8,
  },

  statusText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
  },

  species: {
    color: "#CBD5E1",
    fontSize: 14,
  },
});