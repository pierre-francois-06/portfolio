export const DocumentsSection = ({ data }) => {
  let link;
  if (Object.hasOwn(data, "isWebsite")) {
    link = (
      <>
        <button
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
          onClick={() => window.open(data.link)}
        >{`📩 ${data.title}`}</button>
      </>
    );
  }

  return (
    <section
      className={`documents-${data.title.toLowerCase()}-section`}
      id={`documents-${data.title.toLowerCase()}-section`}
    >
      <h3>{data.title}</h3>
      <div id={`${data.title.toLowerCase()}-section-content`}>
        {data.description}
      </div>
      <>{link}</>
    </section>
  );
};
