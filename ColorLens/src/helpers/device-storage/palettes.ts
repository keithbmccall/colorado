import { AsyncStorage } from "react-native";

const palette = "palette";
export const deletePalette = name => {
  AsyncStorage.removeItem(name).then(res =>
    this.setState({ palettesLoaded: false }, () => {
      this.getPalettes();
      this.toggleLibraryModal();
    })
  );
};
export const getPalettes = () => {
  AsyncStorage.getAllKeys().then(res => {
    console.log(res);
    AsyncStorage.multiGet(res).then(response => {
      const data = response.reduce((arr, index) => {
        arr.push({ name: index[0], swatches: JSON.parse(index[1]) });
        console.log("arr", arr);
        return arr;
      }, []);
      this.setState({
        palettes: data,
        palettesLoaded: true
      });
    });
  });
};
export const savePalette = data => {
  console.log(data);
  let name = data.paletteName;
  AsyncStorage.getAllKeys().then(response => {
    while (response.includes(name)) {
      name = `${name} (1)`;
      console.log(name);
    }
    console.log("wtf", name);
    AsyncStorage.setItem(
      name,
      JSON.stringify([
        this.state.color1.color,
        this.state.color2.color,
        this.state.color3.color,
        this.state.color4.color,
        this.state.color5.color,
        this.state.color6.color
      ])
    ).then(res => this.setState({ palettesLoaded: false }, this.getPalettes()));
  });
};
