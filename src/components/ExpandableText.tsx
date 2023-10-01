import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string,
  maxChars?: number
}

const ExpandableText = ({ children, maxChars = 200 }: Props) => {

  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  if (children.length <= maxChars) {
    return <Text>{children}</Text>;
  }

  const summary = (expanded) ? children : children.substring(0, maxChars) + "...";

  return (
    <Text marginY={2}>
      {summary}
      <Button size="xs" fontWeight="bold" colorScheme="yellow" marginLeft={2} onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show less" : "Show more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;