export const DocumentsSection = ({}) => {
  return (
    <section
      className={`documents-${data.title.toLowerCase()}-section`}
      id={`documents-${data.title.toLowerCase()}-section`}
    >
      <div id={`${data.title.toLowerCase()}-section-content`}>{content}</div>
    </section>
  );
};
