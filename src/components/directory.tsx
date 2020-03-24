import React from "react";
import { useParams } from "react-router-dom";
import { Heading, Box, Select, Stack, Text, RangeSelector } from "grommet";

const Directory = () => {
  const { category } = useParams();
  const [size, setSize] = React.useState("");
  const [season, setSeason] = React.useState("");
  const [values, setPrice] = React.useState([30, 900]);

  return (
    <Box fill align="center" background="dark-3">
      <Heading style={{ gridArea: "directory" }}>{category}</Heading>
      <Select
        options={["small", "medium", "large", "x-large"]}
        value={size}
        placeholder="Size"
        onChange={({ option }) => setSize(option)}
      />
      <Select
        options={["spring", "summer", "autumn", "vinter"]}
        value={season}
        placeholder="Season"
        onChange={({ option }) => setSeason(option)}
      />
      <Stack>
        <Box direction="row" justify="between">
          {[0, 200, 400, 600, 800, 1000].map(value => (
            <Box key={value} pad="small" border={false}>
              <Text style={{ fontFamily: "monospace" }}>{value}</Text>
            </Box>
          ))}
        </Box>
        <RangeSelector
          direction="horizontal"
          invert={false}
          min={0}
          max={1000}
          size="medium"
          round="small"
          values={values}
          onChange={(values: any) => setPrice(values)}
        />
      </Stack>
      <Text>{values[0]}</Text>
      <Text>{values[1]}</Text>
    </Box>
  );
};

export default Directory;
