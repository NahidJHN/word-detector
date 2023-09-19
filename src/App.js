import { useState } from "react";
import "./App.css";
import { Alert, Button, Container, Form } from "react-bootstrap";

function App() {
  const [clientWords, setClentWords] = useState([]);
  const matchedWords = ["bangladesh", "area", "beautiful"];
  const [matchCount, setMatchCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const paragraph = e.target.paragraph.value;

    // Use a regular expression to split the paragraph into words, considering only alphabetic characters and numbers
    if (!paragraph.length) return alert("Please enter a paragraph");
    const words = paragraph.split(/\s+|[^a-zA-Z0-9]+/);

    if (words.length > 0) {
      const matched = words.map((word, i) => {
        if (matchedWords.includes(word.toLowerCase())) {
          setMatchCount((prev) => prev + 1);
          return (
            <mark className="bg-warning" key={i}>
              {" "}
              {word}{" "}
            </mark>
          );
        }
        return word + " ";
      });
      setClentWords(matched);
    }
  };
  console.log(clientWords);
  return (
    <Container>
      <div
        style={{ minHeight: "90vh" }}
        className="d-flex justify-content-center align-item-center flex-column"
      >
        <h2>Word Scanner</h2>
        <div className="mt-2">
          <Form className="w-100 h-100" onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                name="paragraph"
                as="textarea"
                rows={3}
                placeholder="Enter paragraph"
              />
            </Form.Group>
            <Button type="submit">Scan words</Button>
          </Form>
        </div>
        <div className="mt-5">
          {clientWords.length > 0 && (
            <div class="alert alert-success" role="alert">
              <h4 class="alert-heading"> {matchCount} words matched</h4>
              <p>{clientWords}</p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default App;
