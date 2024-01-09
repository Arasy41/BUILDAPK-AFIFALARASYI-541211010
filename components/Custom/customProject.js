import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";

const CustomProject = ({ imageSource, title, description, githubURL }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.projectImage} source={imageSource} />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL(githubURL)}
        >
          <Image
            style={styles.buttonImage}
            source={require("../../assets/next.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
  },
  imageContainer: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  projectImage: {
    objectFit: "fill",
    width: 350,
    height: 230,
    borderRadius: 10,
  },
  textContainer: {
    flexDirection: "row",
    paddingLeft: 35,
    width: 230,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    paddingTop: 10,
  },
  description: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    opacity: 0.5,
  },
  button: {
    marginTop: 10,
    marginLeft: 110,
    backgroundColor: "#3498db",
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 1,
  },
  buttonImage: {
    width: 45,
    height: 45,
    tintColor: "white",
  },
});

export default CustomProject;
