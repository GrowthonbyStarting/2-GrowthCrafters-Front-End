import Thumbnail from '../components/home/Thumbnail';
import Banner from '../components/home/Banner';
import Intro from '../components/home/Intro';
import ExpertInfo from '../components/home/ExpertInfo';

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
