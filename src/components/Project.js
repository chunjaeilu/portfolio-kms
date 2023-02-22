// Project.js

export default function Project({ item }) {
  return (
    <>
      <h3 className="project-title">{item.title}</h3>
      <p>{item.category}</p>
      <img src={item.img} alt="" />
    </>
  );
}
