// src/components/MovieSection.js
import React from "react";
import MovieCard from "./MovieCard";
import Tippy from "@tippyjs/react";
import Tabs from "./Tab";
import FilterDropdown from "./FilterDropdown";

const MovieSection = ({
  title,
  movies,
  step,
  setStep,
  isHighlight,
  showFilter,
}) => {
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleFilterChange = (option) => {
    console.log("Selected option:", option);
  };

  const tabs = [
    { id: "tab3", label: "All Modes", content: "Content for Tab 1" },
    { id: "tab1", label: "Mega", content: "Content for Tab 2" },
    { id: "tab2", label: "H2H", content: "Content for Tab 3" },
    { id: "tab4", label: "Trivia", content: "Content for Tab 4" },
  ];
  return (
    <>
      <div className="filter-container">
        {showFilter ? (
          <>
            <div className="tabs-wrap">
              <Tabs tabs={tabs} />
            </div>
            <div className="filter-wrap">
              <FilterDropdown
                options={options}
                onFilterChange={handleFilterChange}
              />
            </div>
          </>
        ) : null}
      </div>
      <section className="movie-section">
        <div className="section-header">
          <h3>{title}</h3>
          <span className="view-all">View All</span>
        </div>
        <div className="movie-grid">
          {movies.map((movie, index) => {
            let isHighlighted = index === 1 && step === 3; // Check if this movie should be highlighted

            return (
              <Tippy
                key={movie.id} // Unique id for Tippy
                theme="custom"
                animation="fade"
                visible={true}
                content={
                  isHighlighted
                    ? "Pick your quiz, bestie! We all know Pushpa’s the GOAT ;)"
                    : ""
                }
                disabled={!isHighlighted} // Disable tooltip when not highlighted
              >
                <div>
                  <MovieCard
                    title={movie.title}
                    time={movie.time}
                    imageUrl={movie.imageUrl}
                    id={movie.id}
                    coverImg={movie.coverImg}
                    isHighlighted={isHighlighted}
                    type={movie.type}
                  />
                </div>
              </Tippy>
            );
          })}
          {isHighlight ? <div className="movie-overlay" /> : null}
        </div>
      </section>
    </>
  );
};

export default MovieSection;
