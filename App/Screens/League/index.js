import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ToastAndroid,
    Share,
} from "react-native";
import React, { useState } from "react";
import { Header } from "../../Components/Header";
import styles from "./Styles/index";
import Plus from "../../assets/Plus.svg";
import Star from "../../assets/StarBlue.svg";
import League from "../../assets/LeagueBlue.svg";
import Logo from "../../assets/Logo.svg";
/*  import League from "../../assets/League.svg";
 import Logo from "../../assets/logo.svg";
 import Star from "../../assets/star.svg";
  */
/*   import logoLeague from "../../assets/logoLeague.png"; */
import {
    heightPercentageToDP,
    widthPercentageToDP,
} from "react-native-responsive-screen";
import FastImage from "react-native-fast-image";
import { ScreenContainer } from "../../Components/ScreenContainer";
import { Button, Input } from "@ui-kitten/components";
import Clipboard from "@react-native-clipboard/clipboard";
export const LeagueScreen = () => {
    const [data, setData] = useState([
        {
            id: 1,
            name: "Fantazino",
            image: require("../../assets/medal1.png"),
            logo: require("../../assets/logoLeague.png"),
            points: "1,256 points",
        },
        {
            id: 2,
            name: "Fantazino",
            image: require("../../assets/medal2.png"),
            logo: require("../../assets/logoLeague.png"),
            points: "1,256 points",
        },
        {
            id: 3,
            name: "Fantazino",
            image: require("../../assets/medal3.png"),
            logo: require("../../assets/logoLeague.png"),
            points: "1,256 points",
        },
    ]);

    const [selectedTeam, setSelectedTeam] = useState(null);
    const [showInputField, setShowInputField] = useState(false);
    const [showCreatetField, setShowCreatetField] = useState(false);
    const [inputValue, setInputValue] = useState();
    const handleJoinLeague = () => {
        setShowInputField(true);
        setShowCreatetField(false);
    };
    const handleCreateLeague = () => {
        setShowCreatetField(true);
        setShowInputField(false);
    };
    const handleCopyCode = () => {
        Clipboard.setString(inputValue);
        ToastAndroid.show("Code copied to clipboard", ToastAndroid.SHORT);
    };
    const handleShareCode = async () => {
        try {
            const result = await Share.share({
                message: inputValue,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // Partage via une autre application
                    console.log("Shared via:", result.activityType);
                } else {
                    // Partage réussi
                    console.log("Shared");
                }
            } else if (result.action === Share.dismissedAction) {
                // Partage annulé
                console.log("Dismissed");
            }
        } catch (error) {
            console.error("Error sharing:", error.message);
        }
    };
    return (
        <View style={{ flex: 1, backgroundColor: '#F4F2F2' }}>
            <View style={{ flex: 1 }}>
                <View style={{
                    paddingVertical: 20,
                    borderBottomRightRadius: 25,
                    backgroundColor: '#000317',
                    borderBottomLeftRadius: 25
                }}>
                    <Text style={{
                        color: '#EBEBEF',
                        fontSize: 22,
                        fontWeight: '600',
                        fontFamily: 'Poppins-Regular',
                        marginHorizontal: widthPercentageToDP('10%'), paddingVertical: 8
                    }}>
                        League</Text>

                </View>
                <Text style={styles.title}>Don’t have a league yet?</Text>
                <View style={styles.viewBtn}>
                    <Button
                        appearance="ghost"
                        title="Press Me"
                        style={styles.btnjion}
                        onPress={handleJoinLeague}
                        status="primary"
                        size="small"
                    >
                        Join league
                    </Button>
                    <Button
                        onPress={handleCreateLeague}

                        accessoryLeft={() => (
                            <Plus style={{ marginHorizontal: widthPercentageToDP("1%") }} />
                        )}
                        title="Press Me"
                        style={styles.btncreate}
                        size="small"
                    >
                        Create league
                    </Button>

                </View>
                {showCreatetField && (
                    <View style={styles.inputStyle}>
                        <Input
                            size="small"
                            style={styles.inputField} // Style du champ de saisie (à adapter)
                            accessoryRight={() => (
                                <Button
                                    appearance="ghost"
                                    status="primary"
                                    size="small"
                                    style={styles.btnInput}
                                    onPress={() => {
                                        // Actions lors du clic sur 'Join'
                                        console.log("Join pressed from input accessory");
                                    }}
                                >
                                    Create
                                </Button>
                            )}
                        />
                        <Input
                            size="small"
                            style={styles.inputcode}
                            value={inputValue}
                            onChangeText={(text) => setInputValue(text)}
                            accessoryRight={() => (
                                <View style={{ flexDirection: 'row' }}>
                                    <Button
                                        appearance="ghost"
                                        status="primary"
                                        onPress={handleCopyCode}
                                        style={styles.btnInput}
                                    >
                                        Copy
                                    </Button>
                                    <Button
                                        appearance="ghost"
                                        status="primary"
                                        onPress={handleShareCode}
                                        style={styles.btnInput}
                                    >
                                        Share
                                    </Button>
                                </View>
                            )}
                        />
                    </View>
                )}
                   {showInputField && (
        <View style={styles.inputStyle}>
          <Input
            size="small"
            style={styles.inputField} // Style du champ de saisie (à adapter)
            accessoryRight={() => (
              <Button
              appearance="ghost"
                status="primary"
                size="small"
                style={styles.btnInput}
                onPress={() => {
                  // Actions lors du clic sur 'Join'
                  console.log("Join pressed from input accessory");
                }}
              >
                Join
              </Button>
            )}
          />
        </View>
      )}
        <View style={styles.subDescription}>
        <League />
        <Text style={styles.leagueTitle}>My Leagues</Text>
      </View>
      <TouchableOpacity onPress={() => onPress(item)}>
        <View style={styles.leagueDesc}>
          <Logo style={{ width: 60, height: 60, marginHorizontal: 12 }} />
          <View style={{ alignItems: "flex-start" }}>
            <Text
              adjustsFontSizeToFit
              category="h4"
              style={{ fontSize: 20, fontWeight: "500", color: " #000041" }}
            >
              Fantazino
            </Text>
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 2,
                alignItems: "center",
              }}
            >
              <Star />
              <Text
                style={{ fontSize: 16, fontWeight: "400", color: " #000041" }}
              >
                Top rated league
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <Text style={styles.leagueTitleTop}>Top Leagues</Text>
        <FlatList
            data={data}
            vertical
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
              console.log("items", item);
              return (
                <TouchableOpacity onPress={() => onPress(item)}>
                  <View style={styles.item}>
                    <FastImage
                      style={{ width: 40, height: 40 }}
                      source={item?.image}
                      resizeMode="contain"
                    />
                    <FastImage
                      style={{
                        width: 50,
                        height: 50,
                        marginHorizontal: widthPercentageToDP("2%"),
                      }}
                      source={item?.logo}
                      resizeMode="contain"
                    />
                    <View style={{ alignItems: "flex-start" }}>
                      <Text
                        adjustsFontSizeToFit
                        style={{
                          color: "#000041",
                          fontSize: 18,
                          fontWeight: "500",
                        }}
                        category="h4"
                      >
                        {item?.name}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          paddingVertical: 2,
                          alignItems: "center",
                        }}
                      >
                        <Star />
                        <Text
                          adjustsFontSizeToFit
                          style={{
                            color: "#000041",
                            fontSize: 16,
                            fontWeight: "400",
                          }}
                          category="h4"
                        >
                          {item?.points}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item?.id}
          />
            </View>
        </View>
    );
};
