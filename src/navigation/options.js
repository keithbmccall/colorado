const rootInitialRouteName = "modal";
const tabInitialRouteName = "studio";

const tabOptions = {
  tabInitialRouteName,
  tabBarOptions: {
    style: {
      display: "none"
    }
  }
};

const rootOptions = {
  rootInitialRouteName,
  rootMode: "card",
  screenOptions: {
    headerShown: false
  },
  headerMode: "none"
};

export const navigatorOptions = {
  ...tabOptions,
  ...rootOptions
};
