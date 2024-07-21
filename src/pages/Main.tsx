import { Button, Form, Stack, Row, Col } from "react-bootstrap";
import { Note, Tag } from "../types";
import { Link } from "react-router-dom";
import Card from "../componants/Card";
import { useState } from "react";

import ReactSelect from "react-select";

interface Props {
  notes: Note[];
  availableTags: Tag[];
}




const Main = ({ notes, availableTags }: Props) => {
  const [title,setTitle]=useState<string>("");
  const [selectedTags,setSeletedTags]= useState<Tag[]>([]);



const filteredNotes = notes.filter((note)=> note.title.toLowerCase().includes(title.toLowerCase())

&& selectedTags.every((s_tag) => note.tags.some((noteTag) => noteTag.value === s_tag.value))
)
  return (
    <div className="container mx-auto py-5">
      <Stack direction="horizontal" className="justify-content-between mb-4">

  
        <h1 className="d-flex gap-3 align-items-center">
          
        <img width={45} src="note.png" alt="white note card in red background"/>
          
       <span>Notlar</span></h1>

        <Link to="/new">
          <Button>Oluştur</Button>
        </Link>
      </Stack>

      <Form>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Başlığa Göre Ara</Form.Label>
              <Form.Control onChange={(e)=> setTitle(e.target.value)} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Etikete Göre Ara</Form.Label>
              <ReactSelect
              onChange={(all_tags)=>setSeletedTags(all_tags as Tag [])}
              className="text-black" isMulti options={availableTags} />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Row className="g-3 mt-4">
        {filteredNotes.map((note)  => (
          <Col>
            <Card key={note.id} note={note} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Main;
