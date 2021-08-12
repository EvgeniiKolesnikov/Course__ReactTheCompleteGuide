import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { DB_LINK } from '../secure/keys';

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    console.log(`${DB_LINK}`);
    fetch(`${DB_LINK}/meetups.json`, {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
