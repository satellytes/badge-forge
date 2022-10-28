import React from "react";
import * as ReachAccordion from "@reach/accordion";
import "@reach/accordion/styles.css";
import styled from "styled-components";
import { AccordionAnimatedPanel } from "../lib/accordion/accordion-animated-panel";
import { AccordionHeader } from "../lib/accordion/accordion-header";
import { H2Wrapper } from "./Containers";

export interface AccordionProps {
  /**
   * `AccordionSection` components are the only valid type for children
   */
  children: React.ReactNode;
  /**
   * Specify the panel's index or indices to open once the component is initially rendered.
   * **Later updates will be ignored.**
   */
  defaultIndex?: number | number[];
}

export interface AccordionSectionProps {
  /**
   * Typically a text string that serves as a label for the accordion section.
   */
  title: string;
  /**
   * Inner collapsible content for the accordion item..
   */
  children: React.ReactNode;
  /**
   * (Optional) Pass in a valid illustration keyword to show the according illustration.
   */
}

const AccordionItem = styled(ReachAccordion.AccordionItem)`
  padding: 20px 0;
  border-top: 1px solid #eeeeee;

  &:last-of-type {
    border-bottom: 1px solid #eeeeee;
  }
`;

export const AccordionSection = (props: AccordionSectionProps) => {
  return (
    <AccordionItem>
      <AccordionHeader>{props.title}</AccordionHeader>
      <AccordionAnimatedPanel>
        <div>{props.children}</div>
      </AccordionAnimatedPanel>
    </AccordionItem>
  );
};

export const Accordion = (props: AccordionProps) => {
  return (
    <ReachAccordion.Accordion
      collapsible
      multiple
      defaultIndex={props.defaultIndex}
    >
      {props.children}
    </ReachAccordion.Accordion>
  );
};

const AccordionWrapper = styled.div`
  grid-area: faq;
`;

const AccordionText = styled.p`
  margin-top: 12px;
  margin-bottom: -3px;
`;

export const FAQTitleWrapper = styled(H2Wrapper)`
  grid-area: faq-subheader;
`;

export const FAQ = () => {
  return (
    <>
      <AccordionWrapper>
        <Accordion defaultIndex={0}>
          <AccordionSection title="What can I do with this tool?">
            <AccordionText>
              BadgeForge allows you to quickly enhance your social media profile
              pictures with custom text frames for use on platforms like
              LinkedIn, Facebook, Twitter and Instagram.
            </AccordionText>
          </AccordionSection>

          <AccordionSection title="How do I get started?">
            <AccordionText>
              Begin by uploading an image file. Either drag and drop your file
              onto the preview area or select it using "browse" below. We
              recommend using square PNG or JPEG files.
              <br />
              <br />
              Continue by typing in your desired text or choose from one of the
              presets from the dropdown menu. Note that there is a limit of 15
              characters for custom text.
              <br />
              <br />
              Next, pick the text and frame color and the width of your frame.
              You may also select custom colors from a color picker by clicking
              one of the rainbow buttons. To make the border disappear, drag the
              width slider all the way to the left.
              <br />
              <br />
              Once you're happy with the previewed result, finish by clicking
              "Save image" to download a higher resolution image of your new
              profile picture.
            </AccordionText>
          </AccordionSection>

          <AccordionSection title="What kind of file do I get?">
            <AccordionText>
              When you click on "Save image", a PNG image file (800x800, alpha
              channel) will be downloaded to your device. This file can easily
              be uploaded to most popular social media platforms such as
              LinkedIn, Facebook, Twitter and Instagram.
            </AccordionText>
          </AccordionSection>

          <AccordionSection title="What happens to the images I upload?">
            <AccordionText>
              Since this tool runs entirely on your local machine with no user
              image data being sent to a server, neither the uploaded file nor
              the final image is being stored or processed remotely.
            </AccordionText>
          </AccordionSection>
        </Accordion>
      </AccordionWrapper>
    </>
  );
};
