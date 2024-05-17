import axios from "axios";
import { UniversityCard, IUniversity } from "./card";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const PaginationPage = () => {
  const LIMIT_UNIVERSITIES = 20;
  const [universities, setUniversities] = useState<Array<IUniversity>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function fetchUniversities() {
    try {
      setLoading(true);
      const offset = (currentPage - 1) * LIMIT_UNIVERSITIES; // Укажите свой лимит в константах компонента
      const { data } = await axios.get(
        `http://universities.hipolabs.com/search?offset=${offset}&limit=${LIMIT_UNIVERSITIES}`
      );
      setUniversities((prev) => [...prev, ...data]);
    } catch (error) {
      console.log("Error fetching univer...", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUniversities();
  }, [currentPage]);

  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  useEffect(() => {
    if (inView) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [inView]);

  return (
    <section>
      <div className="container content">
        <h1 className="title">List Universities</h1>
        <div className="universities-list">
          {universities.map((university, index) => (
            <UniversityCard
              data={university}
              key={`university-${index}`}
            ></UniversityCard>
          ))}
          {loading && <div>Загрузка...</div>}
          <div
            style={{ height: "40px", backgroundColor: "black" }}
            className="observer-block"
            ref={ref}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default PaginationPage;
