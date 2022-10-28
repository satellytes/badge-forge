/* 
/ adapted code from https://github.com/satellytes/satellytes.com/blob/cee9f09aceacf05809c546fefacf9dbb98af37ce/src/components/ui/accordion/accordion-animated-panel.tsx
*/

import { animated, config, useSpring } from "react-spring";
import * as ReachAccordion from "@reach/accordion";
import styled from "styled-components";
import { useAccordionItemContext } from "@reach/accordion";
import React, { ReactNode, useEffect, useState } from "react";

interface AccordionAnimatedPanelProps {
  children?: ReactNode;
  // any props that come into the component
}

const AnimatedAccordionPanel = animated(ReachAccordion.AccordionPanel);
const AnimatedPanelContainer = styled.div`
  padding-bottom: 16px;
  padding-left: 24px;
  padding-right: 24px;
`;

/**
 * Animated version of the AccordionPanel.
 * Uses a custom hook `useDivHeight` to measure the height and then
 * animated the height with `useSpring`.
 *
 * Based on forwardRef to forward the `ref` from the inner component `AnimatedAccordionPanel`
 * to hide this animation layer implementation.
 *
 * Read this if forwardRef is unclear:
 * https://reactjs.org/docs/forwarding-refs.html
 *
 * Based on:
 * https://github.com/raunofreiberg/reach-ui/blob/6742f0cdcef05ba23077f63c21e3ede3bbfcae52/packages/accordion/examples/animated.example.js#L74-L89
 * 1. We removed the forwardRef as we don't benefit from forwarding the ref as of now)
 * 2. Added the aria-hidden flag based on this feedback: https://github.com/reach/reach-ui/pull/500#discussion_r403603183
 */
export const AccordionAnimatedPanel = ({
  children,
}: AccordionAnimatedPanelProps) => {
  const { isExpanded } = useAccordionItemContext();

  const divRef = React.useRef(null);
  const { height } = useDivHeight(divRef);

  /**
   * Check the basics of useSpring
   * https://react-spring.io/basics
   */
  const props = useSpring({
    height: isExpanded ? height : 0,
    overflow: "hidden",
    config: {
      ...config.default,
    },
  });

  return (
    <AnimatedAccordionPanel
      style={props}
      hidden={false}
      aria-hidden={!isExpanded}
    >
      <AnimatedPanelContainer ref={divRef}>{children}</AnimatedPanelContainer>
    </AnimatedAccordionPanel>
  );
};

/**
 * Lovely height measurement, from here:
 * https://github.com/raunofreiberg/reach-ui/blob/6742f0cdcef05ba23077f63c21e3ede3bbfcae52/packages/accordion/examples/animated.example.js#L19-L39
 */
export function useDivHeight(ref: React.MutableRefObject<null>) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(([entry]) => {
      requestAnimationFrame(() => {
        if (!entry) {
          return;
        }
        setHeight(entry.target.getBoundingClientRect().height);
      });
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref]);

  return { ref, height };
}
