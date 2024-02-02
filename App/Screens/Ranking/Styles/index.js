// Style libraries
import { StyleSheet, Dimensions } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flex: 1,
 backgroundColor: '#F4F2F2' ,
  },
  viewBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: heightPercentageToDP("2%"),
    marginHorizontal: widthPercentageToDP("2%"),
  },
  btnjion: {
    width: "45%",
    borderColor: "#000041",
    borderWidth: 1.5,
    borderRadius: 6,
    backgroundColor: "#000041",

  },
  btnInput:{
    borderColor: "#000041",
    borderWidth: 1.5,
    borderRadius: 6,
    backgroundColor: "#000041",
  },
  btncreate: {
    width: "45%",
    backgroundColor: "white",
    borderColor: "#000041",
    borderWidth: 1.5,
    borderRadius: 6,
  },
  title: {
    marginHorizontal: heightPercentageToDP("2%"),
    marginTop: heightPercentageToDP("3%"),
    fontSize: 16,
    fontWeight: "400",
    color: "#000041",
  },
  subDescription: {
    flexDirection: "row",
    marginTop: heightPercentageToDP("2%"),
    marginHorizontal: heightPercentageToDP("2%"),
    alignItems: "center",
  },
  leagueTitle: {
    fontSize: 20,
    marginHorizontal: heightPercentageToDP("1%"),
    fontWeight: "400",
  },
  leagueTitleTop: {
    fontSize: 20,
    marginHorizontal: heightPercentageToDP("2%"),
    marginVertical: heightPercentageToDP("1%"),
    fontWeight: "500",
  },
  item: {
    backgroundColor: "white",
    // selectedTeam?.id === item?.id ? "#BEBED1" : "#2B234F",
    paddingVertical: widthPercentageToDP("2%"),
    marginHorizontal: heightPercentageToDP("1%"),
    borderColor: "#000041",
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: widthPercentageToDP("6%"),
    marginVertical: widthPercentageToDP("2%"),
  },
  leagueDesc: {
    paddingVertical: widthPercentageToDP("6%"),
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: widthPercentageToDP("3%"),
    marginVertical: widthPercentageToDP("3%"),
    backgroundColor:"#1704290A",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor:"#000041",
    borderRadius: 6,
    height:heightPercentageToDP("8%"),
  },
  inputField: {
   // flex: 1,
    backgroundColor:"#1704290A",
    borderWidth: 1.5,
    borderColor: "#000041",
    borderRadius: 10,
    // Styles du champ de saisie
  },
  inputcode:{
    backgroundColor:"#1704290A",
    borderWidth: 1.5,
    borderColor: "#000041",
    borderRadius: 10,
    marginTop:heightPercentageToDP("1%")
  },
  joinButtonInput: {
    marginLeft: 10, // Marge à gauche du bouton "Join" dans le champ de saisie
    backgroundColor:"#000041",
  },
  inputStyle:{
   // flexDirection: 'row',
     alignItems: 'center',
    marginHorizontal: widthPercentageToDP("5%"),
    marginVertical: widthPercentageToDP("3%"),
  }
});