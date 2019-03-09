import React, { Component } from "react";
import PropTypes from "prop-types";
import SlidingUpPanel from "rn-sliding-up-panel";
import { Text, View, Dimensions, Image, Animated } from "react-native";
const { height } = Dimensions.get("window");
const styles = {
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center"
  },
  panel: {
    width: "100%",
    height,
    backgroundColor: "white",
    position: "relative"
  },
  panelHeader: {
    height: 30,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
};

export default class SliderView extends Component {
  static defaultProps = {
    draggableRange: {
      top: height + 200,
      bottom: height
    }
  };

  render() {
    return (
      //   <View style={{ height: "50%", width: "100%" }}>
      //     <View
      //       style={{
      //         width: "100%",
      //         height: 30,
      //         backgroundColor: "#f00",
      //         justifyContent: "center",
      //         alignItems: "center"
      //       }}
      //     >
      // <View style={{ width: 30, height: "100%", backgroundColor: "#000" }} />
      //     </View>
      //     {this.props.children}
      //   </View>
      <SlidingUpPanel
        showBackdrop={false}
        ref={c => (this._panel = c)}
        draggableRange={this.props.draggableRange}
        animatedValue={this._draggedValue}
      >
        <View style={styles.panel}>
          {this.props.contentTop()}
          <View style={styles.panelHeader}>
            <View style={{ width: 30, height: "100%", backgroundColor: "#000" }} />
          </View>
          {this.props.contentBottom()}
        </View>
      </SlidingUpPanel>
    );
  }
}

// SliderView.propTypes = {
//   children: PropTypes.node.isRequired
// };
