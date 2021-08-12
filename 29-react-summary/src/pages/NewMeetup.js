import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage(meetupData) {
  function addMeetupHandler() {

  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;