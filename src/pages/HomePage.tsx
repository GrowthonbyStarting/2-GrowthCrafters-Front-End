import Banner from '../components/home/Banner';
import ExpertInfo from '../components/home/ExpertInfo';
import Intro from '../components/home/Intro';
import Thumbnail from '../components/home/Thumbnail';

export default function HomePage() {
  return (
    <section>
      <Thumbnail />
      <Banner />
      <Intro />
      <ExpertInfo />
    </section>
  );
}
