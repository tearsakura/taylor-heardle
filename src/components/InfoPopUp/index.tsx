import React from "react";
import { IoMusicalNoteOutline, IoHelpCircleOutline } from "react-icons/io5";
import { Button } from "..";

import * as Styled from "./index.styled";

interface Props {
  onClose: () => void;
}

export function InfoPopUp({ onClose }: Props) {
  return (
    <Styled.Container>
      <Styled.PopUp>
        <h1>HOW TO PLAY</h1>
        <Styled.Spacer />
        <Styled.Section>
          <Styled.IconSection>
            <IoMusicalNoteOutline size={50} />
            <p>
              Listen to the intro, then find the correct Joywave song in the list.
            </p>
          </Styled.IconSection>
        </Styled.Section>
        <Styled.Section style={{flexDirection: "row", display: "flex", justifyContent: "flex-start", gap: "10px", marginLeft: "0px", paddingLeft: "0px"}}>
          <Styled.IconSection>
            <IoHelpCircleOutline size={50} /> 
            <p>Skipped or incorrect attempts unlock more of the intro</p>
          </Styled.IconSection>
        </Styled.Section>
        <Styled.Section>
          <p>Answer in as few tries as possible and share your score!</p>
        </Styled.Section>
        <Button variant="green" style={{ marginTop: 20 }} onClick={onClose}>
          Play
        </Button>
      </Styled.PopUp>
    </Styled.Container>
  );
}
