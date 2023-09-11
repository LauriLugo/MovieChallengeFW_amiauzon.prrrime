function ProfileCard({ title, date, image, description, genre }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="pda logo" />
        </figure>
      </div>

      <div className="card-content">
        <p className="tittle is-4">{title}</p>
        <p className="subtitle is-6">{date}</p>
        <p className="content">{description}</p>
        <p className="subtitle is-7">{genre}</p>
      </div>
    </div>
  );
}


export default ProfileCard;