import { COLORS } from "@/constants/colors_temp";
import { ActivityIndicator, View } from "react-native";

const PageLoader = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
};

export default PageLoader;
