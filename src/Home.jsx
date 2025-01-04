import Banner from "./Banner";




const Home = () => (
  <>
<section  id='banner'>
  <Banner></Banner>
</section>
<section id="about" className="h-screen bg-green-100 flex items-center justify-center">
  <h1 className="text-4xl">About Section</h1>
</section>
<section id="contact" className="h-screen bg-yellow-100 flex items-center justify-center">
  <h1 className="text-4xl">Contact Section</h1>
</section>

  </>
);

export default Home;
