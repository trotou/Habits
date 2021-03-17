export const neutralColor = "#CCCCCC";

if (!localStorage.getItem("@habitos/colorSchemes")) {
  localStorage.setItem(
    "@habitos/colorSchemes",
    JSON.stringify({
      currentColor1: "#0F0F0F",
      currentColor2: "#282C34",
      currentColor3: "#7A1FA5",
    })
  );
}

const colorSchemes = JSON.parse(localStorage.getItem("@habitos/colorSchemes"));

export let currentColor1 = colorSchemes.currentColor1;
export let currentColor2 = colorSchemes.currentColor2;
export let currentColor3 = colorSchemes.currentColor3;

export const changeScheme = () => {
  const changeToLight = () => {
    localStorage.setItem(
      "@habitos/colorSchemes",
      JSON.stringify({
        currentColor1: "#7A9E9F",
        currentColor2: "#EEF5DB",
        currentColor3: "#4F6367",
      })
    );
  };

  const changeToDark = () => {
    console.log("entroooou");
    localStorage.setItem(
      "@habitos/colorSchemes",
      JSON.stringify({
        currentColor1: "#0F0F0F",
        currentColor2: "#282C34",
        currentColor3: "#7A1FA5",
      })
    );
  };
  colorSchemes.currentColor1 === "#0F0F0F" ? changeToLight() : changeToDark();
};

if (!currentColor1) {
  changeScheme();
}

export const animationWrapperStyle = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: currentColor2,
};
