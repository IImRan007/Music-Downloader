const Card = ({ value }) => {
  return (
    <div className="card grid-rows-2 w-96 shadow-xl mt-6 m-2 bg-[#5f545347]">
      <figure>
        <img src={value.IMG} alt="poster" />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{value.NAME}</h2>
        <p>{value.ARTIST}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <a href={value.LINK}>Download</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
