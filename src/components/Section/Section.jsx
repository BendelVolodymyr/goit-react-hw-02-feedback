const Section = ({ title, children }) => {
  return (
    <section className="section__box">
      {title !== undefined && <h2>{title}</h2>}
      {children !== undefined && children}
    </section>
  );
};

export default Section;
