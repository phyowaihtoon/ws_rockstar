function Element(props) {
  return /*#__PURE__*/React.createElement("p", null, props.content);
}
ReactDOM.render(/*#__PURE__*/React.createElement(Element, {
  content: "A React Component"
}), document.getElementById("app"));