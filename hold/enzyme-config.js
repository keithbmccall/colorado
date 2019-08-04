import Enzyme from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";

global.fetch = require("jest-fetch-mock/types");
Enzyme.configure({ adapter: new Adapter() });