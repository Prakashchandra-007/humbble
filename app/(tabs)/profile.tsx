import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Header from "@/components/Header";
import { AntDesign, Ionicons, Octicons } from "@expo/vector-icons";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

const PLANS = [
  { plan: "Get exclusive photo insights", p1: true, p2: true },
  { plan: "Fast track your likes", p1: true, p2: true },
  { plan: "Standout every day", p1: true, p2: true },
  { plan: "Unlimited likes", p1: true, p2: false },
  { plan: "See who liked you", p1: true, p2: false },
  { plan: "Advanced filters", p1: true, p2: false },
  { plan: "Incognito mode", p1: true, p2: false },
  { plan: "Two compliments a weeks", p1: true, p2: true },
];

const profile = () => {
  const headerbutton = () => (
    <AntDesign name="setting" size={24} color="black" />
  );
  const router = useRouter();
  return (
    <ScrollView style={{ paddingHorizontal: 8 }}>
      <View style={{ gap: 10 }}>
        <Header headerTitle={"Profile"} button={headerbutton} />
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Avatar
            size={80}
            image="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <View>
            <Text style={{ fontSize: 22, fontWeight: "600" }}>Prakash, 27</Text>
            <Button
              style={{ backgroundColor: "#ebebeb" }}
              textStyle={{ color: "#1c1c1c" }}
              onPress={() => router.replace("/auth/signin")}
            >
              Complete profile
            </Button>
          </View>
        </View>
        <View
          style={{ flexDirection: "row", gap: 10, justifyContent: "center" }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              flex: 1,
              borderWidth: 1,
              paddingHorizontal: 3,
              paddingVertical: 10,
              borderRadius: 12,
              borderColor: "#f0eded",
            }}
          >
            <View style={styles.circle}>
              <AntDesign name="star" size={24} color="black" />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontWeight: "800", color: "white" }}>Spotlight</Text>
              <Text>Stand out</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              flex: 1,
              borderWidth: 1,
              paddingHorizontal: 3,
              paddingVertical: 10,
              borderRadius: 12,
              borderColor: "#f0eded",
            }}
          >
            <View style={styles.circle}>
              <AntDesign name="star" size={24} color="black" />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontWeight: "800", color: "white" }}>Spotlight</Text>
              <Text>Stand out</Text>
            </View>
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: "#ffa600",
              height: 160,
              width: 300,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 20,
              gap: 10,
              marginRight: 5,
            }}
          >
            <Text style={{ fontWeight: "bold", textAlign: "center" }}>
              Premium+
            </Text>
            <Text style={{ fontWeight: "300", textAlign: "center" }}>
              Get the VIP teatment, and enjoy better ways to connect with
              incredible people
            </Text>
            <Button
              style={{ backgroundColor: "#1c1c1c" }}
              textStyle={{ color: "#ebebeb" }}
              onPress={() => router.replace("/auth/signin")}

            >
              Complete profile
            </Button>
          </View>
          <View
            style={{
              backgroundColor: "#ffa600",
              height: 160,
              width: 300,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 20,
              gap: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", textAlign: "center" }}>
              Premium+
            </Text>
            <Text style={{ fontWeight: "300", textAlign: "center" }}>
              Get the VIP teatment, and enjoy better ways to connect with
              incredible people
            </Text>
            <Button
              style={{ backgroundColor: "#1c1c1c" }}
              textStyle={{ color: "#ebebeb" }}
              onPress={() => router.replace("/auth/signin")}
            >
              Complete profile
            </Button>
          </View>
        </ScrollView>
        <View style={styles.table}>
          <View style={styles.tableItem}>
            <Text style={[styles.row1, { fontWeight: "bold" }]}>
              What you get:
            </Text>
            <Text style={[styles.row2, { fontWeight: "bold" }]}>Premium+</Text>
            <Text style={[styles.row3, { fontWeight: "bold" }]}>Premium</Text>
          </View>
          {PLANS.map((planitem) => {
            return (
              <View style={styles.tableItem} key={planitem.plan}>
                <Text style={[styles.row1, { fontWeight: "300", color:"white" }]}>
                  {planitem.plan}
                </Text>
                <Ionicons
                  style={styles.row2}
                  name="checkmark-outline"
                  size={24}
                  color={planitem.p1 ? "black" : "#bdb9b9"}
                />
                <Ionicons
                  style={styles.row3}
                  name="checkmark-outline"
                  size={24}
                  color={planitem.p2 ? "black" : "#bdb9b9"}
                />
              </View>
            );
          })}
          <View style={styles.tableItem}>
            <Text style={[styles.row1, { fontWeight: "400" }]}>
              What you get:
            </Text>
            <Ionicons
              style={styles.row2}
              name="checkmark-outline"
              size={24}
              color="black"
            />
            <Ionicons
              style={styles.row3}
              name="checkmark-outline"
              size={24}
              color="black"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default profile;

const styles = StyleSheet.create({
  tableItem: {
    flexDirection: "row",
    paddingHorizontal: 5,
    borderBottomWidth: 2,
    paddingVertical: 5,
    borderStyle: "solid",
    borderRadius: 1,
    borderColor: "#f0eded",
  },
  row1: { width: "40%" },
  row2: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  row3: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  table: {
    width: "100%",
    gap: 4,
  },
  circle: {
    borderRadius: 40,
    height: 40,
    width: 40,
    backgroundColor: "#ffa600",
    justifyContent: "center",
    alignItems: "center",
  },
});
