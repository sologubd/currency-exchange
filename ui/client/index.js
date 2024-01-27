// Babel has deprecated @babel/polyfill,
// and the following two imports are used for polyfills instead.
import "core-js/stable";
import "regenerator-runtime/runtime";
import m from "mithril";

const MainView = {
  view: () => <h3>UAH exchange rates</h3>,
};

m.mount(document.body, MainView);
