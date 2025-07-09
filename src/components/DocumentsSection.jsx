export const DocumentsSection = ({ data }) => {
  let link;
  if (Object.hasOwn(data, "isWebsite")) {
    link = (
      <>
        <button
          className="document-link"
          onClick={() =>
            window.open(data.link, "_blank", "noopener,noreferrer")
          }
        >
          {`📩 ${data.title}`}
        </button>
      </>
    );
  } else {
    link = (
      <>
        <button
          className="document-link"
          onClick={() =>
            window.open(`${import.meta.env.BASE_URL}${data.link}`, "_blank")
          }
        >{`📩 ${data.title}`}</button>
      </>
    );
  }

  return (
    <section
      className={`documents-section-element`}
      id={`documents-${data.title.toLowerCase()}-section`}
    >
      <h3>{data.title}</h3>
      <div className="p" id={`${data.title.toLowerCase()}-section-content`}>
        {data.description}
      </div>
      <div>{link}</div>
    </section>
  );
};
