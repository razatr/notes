import AddButton from "../AddButton";
import NoteList from '../NoteList';
import Header from '../Header';

export interface HomepageProps {
  hello ?: string
}

const Homepage = () => {
  return (
    <div>
      <Header />
      <NoteList />
      <AddButton />
    </div>
  );
}

export default Homepage