import Card from "./Card"

const Cards = () => {
  const data = [
      {
        "lang": "Python",
        "url": "https://cdn.svgporn.com/logos/python.svg",
        "fcolor": "#00c3ff",
        "scolor": "#ffff1c"
      },
      {
        "lang": "Java",
        "url": "https://cdn.svgporn.com/logos/java.svg",
        "fcolor": "#D31027",
        "scolor": "#EA384D"
      },
      {
        "lang": "React",
        "url": "https://cdn.svgporn.com/logos/react.svg",
        "fcolor": "#000428",
        "scolor": "#004e92"
      },
      {
        "lang": "Perl",
        "url": "https://cdn.svgporn.com/logos/perl.svg",
        "fcolor": "#cc2b5e",
        "scolor": "#753a88"
      }
    ]

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <h2 style={{width:"100%"}}>Tarjetas de lenguajes de programacion</h2>
      {data.map(({ lang, url, fcolor, scolor }, index) => {
        return <Card key={index} lang={lang} img={url} fcolor={fcolor} scolor={scolor} />;
      })}
    </div>
  );
}

export default Cards