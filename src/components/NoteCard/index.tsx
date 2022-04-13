import { Card, CardContent, Typography } from "@mui/material";

interface NoteCardProps {
  title: string;
  text?: string;
}

const NoteCard = ({title, text}:NoteCardProps) => {
  return (
    <Card >
      <CardContent>
        <Typography variant="h5">
          {title}
        </Typography>
        <Typography>
          {text ?? ''}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;