import React from "react";

const NewsItem = (props) => {
  let { title, description, urlToImage, url, author, date, source } = props;
  return (
    <div className="my-3 mx-3">
      <div className="card border border-dark" style={{ width: "20rem" }}>
        <img
          src={
            !urlToImage
              ? "https://c.ndtvimg.com/2023-12/2p168tb8_team-india-afp_625x300_27_December_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675"
              : urlToImage
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title === "[Removed]"
              ? "Fresh Bitcoin Hype Shows Crypto Just Can’t Help Itself"
              : title}
            ...
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                right: "0",
                position: "absolute",
                top: "0",
              }}
            >
              <span class="text-dark  badge rounded-pill bg-warning">
                {source === "[Removed]" ? "NDTV News" : source}
              </span>
            </div>
          </h5>

          <p className="card-text">
            {description === "[Removed]"
              ? "After crashes, scandals, and SBF’s guilty verdict, many hoped the crypto industry would grow up. Speculation around the arrival of a spot bitcoin ETF shows old hype dies hard."
              : description}
            ...
          </p>
          <p className="card-text">
            <small class="text-success">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={url}
            target="_blank"
            className="btn btn-dark btn-sm"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
