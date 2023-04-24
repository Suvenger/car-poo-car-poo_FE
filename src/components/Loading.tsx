import { SpinnerRoundFilled } from "spinners-react";
import styled from "styled-components";

const Wrap = styled.div`
  height: 100%;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Wrap>
      <SpinnerRoundFilled size={100} color={`rgba(3,39,95,1)`} />
    </Wrap>
  );
};
