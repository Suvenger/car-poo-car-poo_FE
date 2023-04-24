import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  bgColor: "#6E7E9C",
  color: {
    main: "rgba(0,0,0,1)",
    sub: "rgba(0,0,0,0.7)",
    p: "rgba(0,0,0,0.5)",
  },
  pointColor: { blue: "#234CA6", red: "#FC5665" },
  padding: "0 100px",
};

export interface mainstyleInterface {
  bgColor: string;
  color: {
    main: string;
    sub: string;
    p: string;
  };
  pointColor: { blue: string; red: string };
  padding: string;
}

export const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    background-color:${mainStyle.bgColor};
    color:${mainStyle.color.main};
    letter-spacing: -1px;
    word-break: keep-all;
    font-family: 'Noto Sans KR', sans-serif;
}
a{
    text-decoration: none;
    color: ${mainStyle.color.main};
}
li{
  text-decoration: none;
}
`;
