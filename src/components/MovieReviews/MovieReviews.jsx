import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { reviewsRequest } from "../../requests";
import ReviewCard from "../ReviewCard/ReviewCard";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorObj, setErrorObj] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function castRequest() {
      try {
        setIsLoading(true);
        setErrorObj(null);
        const response = await reviewsRequest(movieId);

        if (response.length === 0) {
          throw new Error("No reviews left.");
        }
        setReviews(response);
      } catch (error) {
        setErrorObj(error);
      } finally {
        setIsLoading(false);
      }
    }

    castRequest();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {errorObj && <ErrorMessage error={errorObj} />}
      {!isLoading && (
        <ul className={css.list}>
          {reviews.map((review, i, reviewArray) => {
            return (
              <li key={review.id}>
                <ReviewCard
                  review={review}
                  totalReviews={reviewArray.length}
                  number={i + 1}
                />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}