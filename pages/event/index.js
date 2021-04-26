import EventItem from "../../components/EventItem";
import Layout from "../../components/Layout";
import { API_URL } from "../../config/index";

const Events = ({ events }) => {
  return (
    <Layout>
      <div>
        <h1>Upcoming events</h1>
        <h2> {events.length === 0 && <h3>No Events</h3>} </h2>

        {events.map((evt) => (
          <EventItem key={evt.id} evt={evt} />
        ))}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}

export default Events;
