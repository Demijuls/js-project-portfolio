import styled from "styled-components";

//Headings
export const H1 = styled.h1`
  font-family: Poppins;
  font-weight: 700;
  font-size: ${(props) => props.size || "100px"};
  color: ${(props) => props.color || "#000"};
  text-align: ${(props) => props.align || "left"};
  line-height: 90%;
  padding: ${(props) => props.padding || "0"};
`;

export const H2 = styled.h2`
  font-family: Poppins;
  font-weight: ${(props) => props.weight || 700};
  font-size: ${(props) => props.size || "80px"};
  color: ${(props) => props.color || "#000"};
  text-align: ${(props) => props.align || "left"};
  line-height: normal;
  padding: ${(props) => props.padding || "0"};
`;

export const H3 = styled.h3`
  font-family: Poppins;
  font-weight: 500;
  font-size: ${(props) => props.size || "30px"};
  text-align: ${(props) => props.align || "left"};
  line-height: normal;
  padding: ${(props) => props.padding || "0"};
`;

//Body text
export const BodyText = styled.p`
  font-family: Poppins;
  font-weight: ${(props) => props.weight || 400};
  font-size: ${(props) => props.size || "18px"};
  color: ${(props) => props.color || "#000"};
  text-align: ${(props) => props.align || "left"};
  line-height: 1.4;
  padding: ${(props) => props.padding || "0"};
`;
