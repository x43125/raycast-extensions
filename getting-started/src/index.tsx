import { Form } from "@raycast/api";
import { useState } from "react";

export default function Command() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleInputChange = (value: string) => {
    setInputText(value);
    // 删除空格和回车
    const processedText = value.replace(/[\s\n]/g, "");
    setOutputText(processedText);
  };

  const handleOutputChange = (value: string) => {

  }

  return (
    <Form>
      <Form.TextArea
        id="input"
        title="input"
        placeholder="Enter something"
        onChange={handleInputChange}
        value={inputText} />
      <Form.TextArea
        id="output"
        title="output"
        placeholder="Processed text"
        onChange={handleOutputChange}
        value={outputText}
      />
    </Form>
  );
}