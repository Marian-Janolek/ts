import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Note } from '../models/note.model';

interface SingleNote {
  note: Note;
  handleDelete: (id: string) => void;
}

const Notes: React.FC<SingleNote> = ({ note, handleDelete }) => {
  return (
    <div className="mb-3">
      <div>
        <Card style={{ backgroundColor: note.color }}>
          <Card.Body>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>{note.text}</Card.Text>
            <Card.Subtitle className="text-muted">{note.date}</Card.Subtitle>
            <Button
              className="mt-3"
              variant="danger"
              onClick={() => handleDelete(note.id)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Notes;
