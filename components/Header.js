import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import ConfirmModal from "./ConfirmModal";
import IconBtn from "./IconBtn";
import ThemeSwitcher from "./ThemeSwitcher";

function Header(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const onModalConfirm = () => {
    setModalVisible(false);
    props.clearAll();
  };
  return (
    <View>
      {modalVisible && (
        <ConfirmModal
          visible={modalVisible}
          modalText="Are you sure you want to delete all items?"
          onCancel={() => {
            setModalVisible(false);
          }}
          onConfirm={onModalConfirm}
        />
      )}
      <View style={styles.header}>
        <View style={styles.content}>
          <Svg
            width="55"
            height="50"
            viewBox="0 0 557 502"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Circle cx="306" cy="251" r="251" fill="#FF577F" />
            <Path
              d="M240.87 212H369.07C400.301 212 422.637 212.024 439.098 214.374C455.352 216.694 463.686 221.01 468.86 227.835C469.32 228.441 469.762 229.06 470.186 229.692C474.963 236.8 476.34 246.085 473.26 262.212C470.141 278.544 462.915 299.679 452.78 329.22C447.284 345.24 443.411 356.484 439.431 364.932C435.555 373.16 431.975 377.83 427.553 381.114C427.154 381.409 426.751 381.698 426.342 381.979C421.801 385.096 416.221 386.967 407.181 387.963C397.899 388.986 386.006 389 369.07 389H240.87C224.266 389 212.611 388.986 203.502 387.995C194.631 387.031 189.135 385.217 184.64 382.195C184.235 381.923 183.835 381.643 183.44 381.356C179.058 378.171 175.469 373.632 171.518 365.631C167.46 357.416 163.447 346.474 157.747 330.878C146.826 300.995 139.033 279.601 135.536 263.047C132.079 246.689 133.327 237.265 138.08 230.033C138.502 229.39 138.942 228.76 139.401 228.143C144.562 221.197 152.985 216.79 169.536 214.422C186.284 212.024 209.054 212 240.87 212Z"
              stroke="white"
              strokeWidth="20"
            />
            <Path
              d="M439 207C439 141.83 379.454 89 306 89C232.546 89 179.145 137.793 173 207"
              stroke="white"
              strokeWidth="20"
            />
          </Svg>
          <Text style={styles.contentText}>Shopping List</Text>
          <ThemeSwitcher />
        </View>
        {props.itemsLength != 0 && (
          <IconBtn
            header
            btnAction={() => setModalVisible(true)}
            iconName="delete"
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 36,
    paddingLeft: 10,
    backgroundColor: "#ff577f",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 5,
    elevation: 2,
  },
  content: {
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  contentText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Header;
