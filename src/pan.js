/*

UNSAFE_componentWillMount() {
  this.panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (e, gestureState) => true,
    onPanResponderMove: (e, gestureState) => {
      console.log("touch", e.nativeEvent.locationX, e.nativeEvent.locationY);
    },
    onPanResponderRelease: (e, gestureState) => {
      this.props.findColor(e, this.state.currentImage);
    }
  });
}

 */
