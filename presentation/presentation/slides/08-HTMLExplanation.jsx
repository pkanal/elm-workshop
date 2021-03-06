import React from "react";
import { Slide, CodePane, Heading, Text } from "spectacle";
import reactSnippet from "../../assets/codeSnippets/08-react-snippet.example";
import elmSnippet from "../../assets/codeSnippets/08-elm-snippet.example";
const HTMLDemo = [
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> React </Heading>
    <CodePane margin={10} textSize={28} lang="jsx" source={reactSnippet} />
  </Slide>,
  <Slide>
    <Heading size={6}> Elm </Heading>
    <CodePane margin={10} textSize={28} lang="jsx" source={elmSnippet} />
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      HTML Rendering example
    </Heading>
    <Text> elm-reactor! </Text>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Exercise 2 - Render some things!
    </Heading>
  </Slide>
];

export default HTMLDemo;
