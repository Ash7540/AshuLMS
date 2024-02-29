'use client'
import  React, {FC , useState}  from 'react';
import Heading from './utils/Heading';
import Header from './components/Header'
import Hero from './components/Route/Hero'



interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login")

  return (
    <div>
      <Heading
        title="VinciExam Pro"
        description="Elevate your exam performance with VinciExam Pro, the ultimate exam preparation app by VinciTech"
        keywords='Programming, Technology, Education, Software, Data Science, Development'
      />
      <Header open={open} setOpen={setOpen} activeItem={activeItem} setRoute={setRoute} route={route} />
      <Hero />
    </div>
  );
};

export default Page;