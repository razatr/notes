import { Stack, Paper, Box } from "@mui/material";
import { unit } from "../../common/metriсs";
import NoteCard from "../NoteCard";

const NoteList = () => {
  return (
    <Box sx={{margin: unit(5)}}>
      <Stack spacing={2} >
        <NoteCard title="Exaple" text="text"/>
        <NoteCard title="Exaple" text="text"/>
        <NoteCard title="Exaple" text="text"/>
        <NoteCard title="Exaple" text="text"/>
        <NoteCard title="Exaple" text="text"/>
        <NoteCard title="Exaple" text="text"/>
        <NoteCard title="Exaple" text="text"/>
      </Stack>
    </Box>
  );
};

export default NoteList;