import React from "react";
import PropTypes from "prop-types";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Haze: {iconName: "weather-hail", gradient: ["#4DA0B0", "#D39D38"]},
    Thunderstorm: { iconName: "weather-lightning", gradient: ["#373B44", "#4286f4"]},
    Drizzle: { iconName: "weather-hail", gradient: ["#89F7FE", "#66A6FF"]},
    Rain: { iconName: "", gradient: []},
    Snow: {iconName: "", gradient: []},
    Atmosphere: {iconName: "", gradient: []},
    Clear: {iconName: "weather-sunny", gradient: ["#FF7300", "#FEF253"], title:"Sunny", subtitle: "Take your sunglasses"},
    Clouds: {iconName: "", gradient: []},
    Haze: {iconName: "", gradient: []},
    Mist: {iconName: "", gradient: []},
    Dust: {iconName: "", gradient: []}
  };

export default function Weather({temp, condition}){
    return(
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={100} name={weatherOptions[condition].iconName} color="white"/>
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atomsphere", "Clear", "Clouds", "Haze"]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 45,
        color: "white"
    },
    title: {
        fontSize: 45,
        color: "white",
        fontWeight: "300"
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 25
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start" //왼쪽정렬
    }
})