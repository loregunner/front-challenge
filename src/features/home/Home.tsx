/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import importImages from "./Home.utils";
import data from "../../assets/data.json";
import { Header } from "../../components/header/Header";
import Search from "../search/Search";
import ListGame from "../../components/listGame/ListGame";
import Footer from "../../components/footer/Footer";

interface ImagesType {
  [key: string]: {
    default: string;
  };
}

const Home = () => {
  const [images, setImages] = useState<ImagesType>({});

  useEffect(() => {
    const loadImages = async () => {
      try {
        const loadedImages = await importImages(data.images);
        setImages(loadedImages);
      } catch (error) {}
    };

    loadImages();
  }, []);

  return (
    <section className="container_challenge">
      <Header />
      <Search />
      <ListGame images={images}/>
      <Footer />
    </section>
  );
};

export default Home;
