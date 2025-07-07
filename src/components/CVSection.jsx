export const CVSection = ({ data }) => {
  let content;

  if (Object.hasOwn(data, "itemsArray")) {
    content = (
      <>
        <h3>{data.title}</h3>
        <div id={`${data.title}-container`}>
          {data.itemsArray.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </>
    );
  } else if (Object.hasOwn(data, "itemsObject")) {
    content = (
      <>
        <h3>{data.title}</h3>
        <div id={`${data.title}-container`}>
          {Object.entries(data.itemsObject).map(([key, item]) => (
            <p key={key}>
              <strong>{key}:</strong> {item}
            </p>
          ))}
        </div>
      </>
    );
  } else if (Object.hasOwn(data, "content")) {
    content = (
      <>
        <h3>{data.title}</h3>
        <p>{data.content}</p>
      </>
    );
  } else if (Object.hasOwn(data, "itemsObjectArray")) {
    content = (
      <>
        <h3>{data.title}</h3>
        <div id={`${data.title}-container`}>
          {data.itemsObjectArray.map((item, index) => (
            <p key={index}>{`${item.language}-${item.level}`}</p>
          ))}
        </div>
      </>
    );
  }

  return (
    <section
      className="cv-section"
      id={`cv-${data.title.toLowerCase()}-section`}
    >
      <div id={`${data.title.toLowerCase()}-section-content`}>{content}</div>
    </section>
  );
};
