import Banner from '../components/home/Banner';
import Intro from '../components/home/Intro';
import Thumbnail from '../components/home/Thumbnail';

export default function HomePage() {
  return (
    <section>
      <Thumbnail />
      <Banner />
      <Intro />
    </section>
  );
}
